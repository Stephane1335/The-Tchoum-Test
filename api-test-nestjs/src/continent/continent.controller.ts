import { Controller, Get, Req } from '@nestjs/common';
import { ContinentService } from './continent.service';
import { Request } from 'express';

@Controller('continent')
export class ContinentController {
  constructor(private readonly continentService: ContinentService) {}

  @Get('voir')
  async getAllContinent() {
    return this.continentService.getContinent({});
  }

  @Get('search')
  async getSearchContinent(@Req() req: Request) {
    let options = {};
    if (req.query.s) {
      options = {
        $or: [
          { Code: new RegExp(req.query.s.toString(), 'i') },
          { Name: new RegExp(req.query.s.toString(), 'i') },
        ],
      };
    }
    const query = this.continentService.getContinent(options);
    return query;
  }

  @Get('index')
  async getSe(@Req() rq: Request) {
    return this.continentService.getSearchedContinent(rq.query.s);
  }
}
