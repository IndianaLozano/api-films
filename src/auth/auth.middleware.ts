import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { JwtService } from '@nestjs/jwt';
import { HttpStatusCode } from 'axios';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private jwtService: JwtService) {}

  use(req: Request, res: Response, next: NextFunction) {
    // GET access_token
    const token = req.headers.authorization?.split('Bearer ')[1];
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
      // Verify and decode token
      const decodedToken = this.jwtService.decode(token) as {
        sub: string;
        username: string;
        role: string;
      };

      if (!decodedToken) {
        res.status(HttpStatusCode.Unauthorized).json({
          message: 'Invalid token',
          error: 'Unauthorized',
          statusCode: HttpStatusCode.Unauthorized,
        });
        return res.end();
      }

      // Verify if token contains role information
      if (!decodedToken.role) {
        return res.status(401).json({ message: 'Token does not contain role information' });
      }

      // Asign decoded user to request object
      req.user = { ...decodedToken };

      next();
    } catch (error) {
      console.error(error);
      return res
        .status(401)
        .json({ message: 'Invalid token', error: 'Unauthorized', statusCode: 401 });
    }
  }
}
