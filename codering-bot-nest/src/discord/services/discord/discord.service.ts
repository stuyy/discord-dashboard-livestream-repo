/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Injectable, Inject } from '@nestjs/common';
import fetch from 'node-fetch';
import { Endpoints } from 'src/utils/Constants';
import { Model } from 'mongoose';
import GuildConfig from 'src/auth/interfaces/GuildConfig';
import Command from 'src/auth/interfaces/Command';

const { AUTH_BOT_TOKEN: TOKEN } = process.env;

@Injectable()
export class DiscordService {
  constructor(
    @Inject('GUILD_CONFIG_MODEL') private guildConfigModel: Model<GuildConfig>,
    @Inject('COMMAND_MODEL') private commandModel: Model<Command>,
  ) {}

  public async getGuildRoles(guildId: string) {
    const result = await fetch(`${Endpoints.BASE_GUILD}/${guildId}/roles`, {
      method: 'GET',
      headers: { Authorization: `Bot ${TOKEN}` },
    });
    return result.json();
  }

  public async getGuildChannels(guildId: string) {
    const result = await fetch(`${Endpoints.BASE_GUILD}/${guildId}/channels`, {
      method: 'GET',
      headers: { Authorization: `Bot ${TOKEN}` },
    });
    return result.json();
  }

  public getGuildConfig(guildId: string) {
    return this.guildConfigModel.findOne({ guildId });
  }

  public updateGuildPrefix(guildId: string, prefix: string) {
    return this.guildConfigModel.findOneAndUpdate(
      { guildId },
      { prefix },
      { new: true },
    );
  }

  public updateDefaultRole(guildId: string, defaultRole: string) {
    return this.guildConfigModel.findOneAndUpdate(
      { guildId },
      { defaultRole },
      { new: true },
    );
  }

  async getDiscordGuilds() {
    const response = await fetch(Endpoints.GUILDS, {
      headers: { Authorization: `Bot ${TOKEN}` },
    });
    return response.json();
  }

  async createCommand(
    name: string,
    description: string,
    type: string,
    enabled: boolean,
  ) {
    return this.commandModel.create({
      name,
      description,
      type,
      enabled,
    });
  }

  async updateCommand(name, update) {

    const valuesToUpdate = { };
    for (const [key, value] of Array.from(Object.entries(update))) {
      if (value || key === 'enabled') {
        valuesToUpdate[key] = value;
      }
    }
    console.log(valuesToUpdate);
    return this.commandModel.findOneAndUpdate({ name }, { ...valuesToUpdate }, { new: true });
  }
}
