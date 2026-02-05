import { GetFilmsDTO, GetFilmDTO, PostFilmDTO } from './films/dto/films.dto';

export interface AppRepository {
  films: FilmRepository;
}

export interface FilmRepository {
  findAll(): Promise<GetFilmsDTO>;
  findById(id: string): Promise<GetFilmDTO>;
  save(film: PostFilmDTO): Promise<string>;
}
