import { Inject, Injectable } from '@nestjs/common';
import mongoose, { Mongoose } from 'mongoose';
import { AppConfig } from 'src/app.config.provider';
import { AppRepository, FilmRepository } from 'src/app.repository';
import { FilmsMongoDbRepository } from './films.mongodb.repository';

@Injectable()
export class MongoDbRepository implements AppRepository {
  private connection: Mongoose;

  films: FilmRepository;

  constructor(@Inject('CONFIG') config: AppConfig) {
    (async () => {
      try {
        this.connection = await mongoose.connect(config.database.url);
        this.films = new FilmsMongoDbRepository();
      } catch (err) {
        console.error(`Ошибка подключения к MongoDB: ${err}`);
      }
    })();
  }
}
