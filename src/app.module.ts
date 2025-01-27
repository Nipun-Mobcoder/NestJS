import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppRepository } from './app.repositry';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, AppRepository],
})
export class AppModule {}
