import { Module } from '@nestjs/common';
import { ContinentService } from './continent.service';
import { ContinentController } from './continent.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Continent, ContinentSchema } from './entities/continent.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Continent.name, schema: ContinentSchema },
    ]),
  ],
  controllers: [ContinentController],
  providers: [ContinentService],
})
export class ContinentModule {}
