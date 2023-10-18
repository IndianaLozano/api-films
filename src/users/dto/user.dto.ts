import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({ type: String, required: true, example: 'leomessi123' })
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({ type: String, required: true, example: 'leo123' })
  @IsString()
  @IsNotEmpty()
  password: string;
}
