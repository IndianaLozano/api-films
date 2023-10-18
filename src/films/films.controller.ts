import { Controller, Get, UseGuards, Param, Body, Post, Delete, Patch } from '@nestjs/common';
import { FilmsService } from './films.service';
import { Role } from 'src/enum/role.enum';
import { RoleAccess } from 'src/decorators/role.access.decorator';
import { RolesGuard } from 'src/guards/roles.guard';
import { CreateFilmDto } from './dto/create-film.dto';
import { UpdateFilmDto } from './dto';
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

  @Post('')
  @UseGuards(RolesGuard)
  @RoleAccess(Role.Admin)
  async createFilm(@Body() createFilmDto: CreateFilmDto) {
    return this.filmsService.createFilm(createFilmDto);
  }

  @Delete('/:id')
  @UseGuards(RolesGuard)
  @RoleAccess(Role.Admin)
  async deleteFilm(@Param('id') id: string) {
    const filmId = parseInt(id);
    return this.filmsService.deleteFilm(filmId);
  }

  @Patch('/:id')
  @UseGuards(RolesGuard)
  @RoleAccess(Role.Admin)
  update(@Param('id') id: string, @Body() updateFilmDto: UpdateFilmDto) {
    return this.filmsService.updateFilm(id, updateFilmDto);
  }
}
