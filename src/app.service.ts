import { Injectable } from '@nestjs/common';

import { Hears, Help, On, Start } from 'nestjs-telegraf';
import { Context, Telegraf } from 'telegraf';


@Injectable()
export class AppService {
  
  @Start()
  async startCommand(ctx: Context) {
    await ctx.reply('welcome')
  }
  @Help()
  async helpCommand(ctx: Context) {
    await ctx.reply('Send me a sticker')
  }

  @On('sticker')
  async onSticker(ctx: Context) {
    await ctx.reply('cool')
  }

  @Hears('hi')
  async hearsHi(ctx: Context) {
    await ctx.reply('Hey there');
  }


  
  
  
  
}
