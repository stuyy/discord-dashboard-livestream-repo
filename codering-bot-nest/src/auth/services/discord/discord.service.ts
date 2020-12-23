import { Injectable } from '@nestjs/common';
import { Endpoints } from '../../../utils/Constants';
import fetch from 'node-fetch';

const { AUTH_BOT_TOKEN: TOKEN } = process.env;

@Injectable()
export class DiscordService {

  async getDiscordGuilds () {
    const response = await fetch(Endpoints.GUILDS, {
      headers: { 'Authorization': `Bot ${TOKEN}` }
    });
    return response.json();
  }
}
