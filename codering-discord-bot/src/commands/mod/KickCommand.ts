import { Message } from 'discord.js';
import BaseCommand from '../../utils/structures/BaseCommand';
import DiscordClient from '../../client/client';

export default class KickCommand extends BaseCommand {
  constructor() {
    super('kick', 'mod', []);
  }

  async run(client: DiscordClient, message: Message, args: Array<string>) {
    message.channel.send('Kick command works');
  }
}