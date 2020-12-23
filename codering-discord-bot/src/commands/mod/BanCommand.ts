import { Message } from 'discord.js';
import BaseCommand from '../../utils/structures/BaseCommand';
import DiscordClient from '../../client/client';

export default class BanCommand extends BaseCommand {
  constructor() {
    super('ban', 'mod', []);
  }

  async run(client: DiscordClient, message: Message, args: Array<string>) {
    message.channel.send('Ban command works');
  }
}