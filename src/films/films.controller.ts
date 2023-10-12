import { Controller, Get } from '@nestjs/common';
import { FilmsService } from './films.service';

@Controller('/films')
export class FilmsController {
  constructor(private readonly filmsService: FilmsService) {}

  @Get('')
  async getMovies() {
    return this.filmsService.getFilms();
  }
}
