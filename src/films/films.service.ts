import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class FilmsService {
  private baseUrl = 'https://swapi.dev/api/';
  private filmsPath = 'films/';
  private url = this.baseUrl + this.filmsPath;

  async getFilms() {
    console.log('url', this.url);
    const response = await axios.get(this.url);
    return response.data.results;
  }

  async getFilm(id: string) {
    console.log('url', this.url + id);
    const response = await axios.get(this.url + id);
    return response.data;
  }
}
