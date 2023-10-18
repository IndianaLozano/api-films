import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateFilmDto {
  @IsOptional()
  @IsString()
  title: string;
  @IsOptional()
  @IsNumber()
  episode_id: number;
  @IsOptional()
  @IsString()
  opening_crawl: string;
  @IsOptional()
  @IsString()
  director: string;
  @IsOptional()
  @IsString()
  producer: string;
  @IsOptional()
  @IsString()
  release_date: string;
  @IsOptional()
  @IsArray()
  characters: string[];
  @IsOptional()
  @IsArray()
  planets: string[];
  @IsOptional()
  @IsArray()
  starships: string[];
  @IsOptional()
  @IsArray()
  vehicles: string[];
  @IsOptional()
  @IsArray()
  species: string[];
  @IsOptional()
  @IsString()
  url: string;
}
