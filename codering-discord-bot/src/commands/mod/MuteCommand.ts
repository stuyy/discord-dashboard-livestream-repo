import { Message } from 'discord.js';
import BaseCommand from '../../utils/structures/BaseCommand';
import DiscordClient from '../../client/client';

export default class MuteCommand extends BaseCommand {
  constructor() {
    super('mute', 'mod', []);
  }

  async run(client: DiscordClient, message: Message, args: Array<string>) {
    message.channel.send('Mute command works');
  }
}