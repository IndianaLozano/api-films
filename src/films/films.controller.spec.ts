import { Test, TestingModule } from '@nestjs/testing';
import { FilmsController } from './films.controller';
import { FilmsService } from './films.service';

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
  });
});
