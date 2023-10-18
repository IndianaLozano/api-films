import { Test, TestingModule } from '@nestjs/testing';
import { FilmsService } from './films.service';
import { PrismaService } from 'src/prisma/prisma.service';

describe('FilmsService', () => {
  let service: FilmsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FilmsService, PrismaService],
    }).compile();

    service = module.get<FilmsService>(FilmsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
