import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TelegrafModule } from 'nestjs-telegraf';

@Module({
  imports: [TelegrafModule.forRoot({
    token: process.env.BOT_TOKEN
  })]
  ,
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
