import { Controller, Get, UseGuards, Param } from '@nestjs/common';
import { FilmsService } from './films.service';
import { Role } from 'src/enum/role.enum';
import { RoleAccess } from 'src/decorators/role.access.decorator';
import { RolesGuard } from 'src/guards/roles.guard';
@Controller('/films')
export class FilmsController {
  constructor(private readonly filmsService: FilmsService) {}

  @Get('')
  async getFilms() {
    return this.filmsService.getFilms();
  }

  @Get('/:id')
  @UseGuards(RolesGuard)
  @RoleAccess(Role.User)
  async getFilm(@Param('id') id: string) {
    return this.filmsService.getFilm(id);
  }
}
