import { Document } from 'mongoose';
import { FilmRepository } from 'src/app.repository';
import { GetFilmDTO, GetFilmsDTO, PostFilmDTO } from 'src/films/dto/films.dto';
import { Film } from './models/film';

export class FilmsMongoDbRepository implements FilmRepository {
  private getFilmMapper(): (Film) => GetFilmDTO {
    return (root) => {
      return <GetFilmDTO>{
        id: root._id.toString(),
        description: root.description,
        director: root.director,
        rating: root.rating,
        tags: root.tags,
        image: root.image,
        cover: root.cover,
        title: root.title,
        about: root.about,
        schedule: root.schedule,
      };
    };
  }

  private getDtoMapper(
    includeId: boolean = true,
  ): (GetFilmDTO, Document) => Document {
    return (dto, doc) => {
      doc.description = dto.description;
      doc.director = dto.director;
      doc.rating = dto.rating;
      doc.tags = dto.tags;
      doc.image = dto.image;
      doc.cover = dto.cover;
      doc.title = dto.title;
      doc.about = dto.about;
      doc.schedule = dto.schedule;

      if (includeId) {
        doc.id = dto.id;
      }
      return doc;
    };
  }

  async findAll(): Promise<GetFilmsDTO> {
    const items = await Film.find({});
    const total = await Film.countDocuments({});
    return {
      page: 0,
      size: 50,
      total,
      items: items.map(this.getFilmMapper()),
    };
  }

  async findById(id: string): Promise<GetFilmDTO> {
    const film = await Film.findById(id);
    return film ? this.getFilmMapper()(film) : null;
  }

  async save(film: PostFilmDTO): Promise<string> {
    if (film.id) {
      const oldFilm = await Film.findOne({ _id: film.id });
      const updateFilm = this.getDtoMapper(false)(film, oldFilm);
      await updateFilm.save();
      return film.id;
    } else {
      throw new Error('Ошибка передачи данных');
    }
  }
}
