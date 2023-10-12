import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class FilmsService {
  async getFilms() {
    const response = await axios.get('https://swapi.dev/api/films/');
    return response.data.results;
  }
}
