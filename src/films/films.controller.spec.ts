import { Test, TestingModule } from '@nestjs/testing';
import { FilmsController } from './films.controller';
import { FilmsService } from './films.service';
import { HttpStatus } from '@nestjs/common';
import { HttpErrorByCode } from '@nestjs/common/utils/http-error-by-code.util';

describe('FilmsController', () => {
  let controller: FilmsController;
  let filmsService: Partial<FilmsService>; // Partial<FilmService> to mock methods

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FilmsController],
      providers: [
        {
          provide: FilmsService,
          useValue: {
            getFilms: jest.fn(),
            getFilm: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<FilmsController>(FilmsController);
    filmsService = module.get<FilmsService>(FilmsService);
  });

  describe('getFilms', () => {
    it('should return an array of films', async () => {
      const expectedResult = [
        {
          title: 'title',
          opening_crawl: 'crawl',
          episode_id: 0,
          director: 'director',
          producer: 'producer',
          release_date: '01/01/1900',
          species: ['', ''],
          starships: ['', ''],
          planets: ['', ''],
          vehicles: ['', ''],
          characters: ['', ''],
          url: 'url.com',
        },
        {
          title: 'title',
          opening_crawl: 'crawl',
          episode_id: 0,
          director: 'director',
          producer: 'producer',
          release_date: '01/01/1900',
          species: ['', ''],
          starships: ['', ''],
          planets: ['', ''],
          vehicles: ['', ''],
          characters: ['', ''],
          url: 'url.com',
        },
      ];

      (filmsService.getFilms as jest.Mock).mockResolvedValue(expectedResult);

      const result = await controller.getFilms();

      expect(result).toBe(expectedResult);
    });
  });

  describe('getFilm', () => {
    it('should return a film', async () => {
      const expectedResult = [
        {
          title: 'title',
          opening_crawl: 'crawl',
          episode_id: 0,
          director: 'director',
          producer: 'producer',
          release_date: '01/01/1900',
          species: ['', ''],
          starships: ['', ''],
          planets: ['', ''],
          vehicles: ['', ''],
          characters: ['', ''],
          url: 'url.com',
        },
      ];
      const id = '0';

      (filmsService.getFilm as jest.Mock).mockResolvedValue(expectedResult);

      const result = await controller.getFilm(id);

      expect(result).toBe(expectedResult);
    });

    it('should throw an error if the film is not found', async () => {
      const id = '0';

      (filmsService.getFilm as jest.Mock).mockResolvedValue(null);

      await expect(controller.getFilm(id)).rejects.toThrow(HttpErrorByCode[HttpStatus.NOT_FOUND]);
    });

    it('should throw an error if the film id is not a number', async () => {
      const id = 'not a number';

      await expect(controller.getFilm(id)).rejects.toThrow(HttpErrorByCode[HttpStatus.BAD_REQUEST]);
    });

    it('should throw an error if the role of the user is not Role.User', async () => {
      const id = '0';

      (filmsService.getFilm as jest.Mock).mockResolvedValue(null);

      await expect(controller.getFilm(id)).rejects.toThrow(HttpErrorByCode[HttpStatus.NOT_FOUND]);
    });
  });
});
