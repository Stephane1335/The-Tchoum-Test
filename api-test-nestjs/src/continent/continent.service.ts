import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Continent, ContinentDocument } from './entities/continent.entity';
@Injectable()
export class ContinentService {
  constructor(
    @InjectModel(Continent.name)
    private readonly continentModel: Model<ContinentDocument>,
  ) {}

  async getSearchedContinent(word) {
    return this.continentModel
      .find(
        { $text: { $search: word, $language: 'english' } },
        { score: { $meta: 'textScore' } },
      )
      .sort({ score: { $meta: 'textScore' } });
  }
  async getContinent(options) {
    return this.continentModel.find(options).exec();
  }
  async createContinent(Continent): Promise<Continent> {
    const newContinent = new this.continentModel(Continent);
    return newContinent.save();
  }
}
