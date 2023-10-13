import { Module } from '@nestjs/common';
import { FilmsService } from './films.service';
import { FilmsController } from './films.controller';
import { RolesGuard } from 'src/guards/roles.guard';

@Module({
  controllers: [FilmsController],
  providers: [FilmsService, RolesGuard],
})
export class FilmsModule {}
