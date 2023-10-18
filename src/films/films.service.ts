import {
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import axios from 'axios';
import { PrismaService } from '../prisma/prisma.service';
import { Film } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { CreateFilmDto, UpdateFilmDto } from './dto';

@Injectable()
export class FilmsService {
  constructor(private readonly prismaService: PrismaService) {}
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

  async createFilm(filmData: CreateFilmDto): Promise<Film> {
    try {
      console.log('FILM', filmData);
      const film = await this.prismaService.film.create({
        data: {
          title: filmData.title,
          episode_id: filmData.episode_id,
          opening_crawl: filmData.opening_crawl,
          director: filmData.director,
          producer: filmData.producer,
          release_date: filmData.release_date,
          characters: filmData.characters,
          planets: filmData.planets,
          starships: filmData.starships,
          vehicles: filmData.vehicles,
          species: filmData.species,
          url: filmData.url,
          created: new Date(),
          edited: new Date(),
        },
      });
      console.log('FILM2');

      console.log('Film created successfully: ', film);
      return film;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Film already exists');
        }
        console.log(error);
        throw error;
      } else {
        console.log(error);
        throw error;
      }
    }
  }

  async deleteFilm(id: number) {
    try {
      console.log('Deleting film with id: ', id);
      const deleteFilm = await this.prismaService.film.delete({
        where: {
          id: id,
        },
      });
      console.log('Film with id: ' + id + ' deleted successfully');
      return deleteFilm;
    } catch (error) {
      console.log(error);
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          // Prisma error code for "No record found for deletion"
          throw new NotFoundException('Film with id: ' + id + ' not found');
        }
        console.log(error);
        throw error;
      } else {
        console.log(error);
        throw error;
      }
    }
  }

  async updateFilm(id: string, updateFilmDto: UpdateFilmDto) {
    const filmId = Number(id);
    const updateFilm = await this.prismaService.film.update({
      where: {
        id: filmId,
      },
      data: updateFilmDto,
    });
    return updateFilm;
  }
}
