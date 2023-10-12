import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

// This module is global because we want to use the PrismaService in other modules.
@Global()
@Module({
  exports: [PrismaService],
  providers: [PrismaService],
})
export class PrismaModule {}
