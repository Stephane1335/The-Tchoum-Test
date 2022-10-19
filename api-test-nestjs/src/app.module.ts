import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContinentModule } from './continent/continent.module';

@Module({
  imports: [
    ContinentModule,
    MongooseModule.forRoot(
      'mongodb+srv://Stephane1335:7NUPQtUQOahFX85S@cluster0.i83bahv.mongodb.net/continent?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
