import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TelegrafModule } from 'nestjs-telegraf';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [TelegrafModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: (configService: ConfigService) => ({
      token: configService.get<string>('BOT_TOKEN'),
    
    }),
    inject: [ConfigService],
  });]
  ,
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
