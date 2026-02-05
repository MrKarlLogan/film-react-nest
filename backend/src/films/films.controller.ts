import { Controller, Get, Param } from '@nestjs/common';

@Controller('films')
export class FilmsController {
  @Get()
  getFilms() {
    return 'Привет';
  }

  @Get(':id/schedule')
  getFilmById(@Param('id') id: string) {
    return id;
  }
}
