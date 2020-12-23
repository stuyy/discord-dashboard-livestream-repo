import BaseEvent from '../../utils/structures/BaseEvent';
import { Message } from 'discord.js';
import DiscordClient from '../../client/client';
import GuildConfig from '../../database/schema/GuildConfig';
import Command from '../../database/schema/Command';

export default class MessageEvent extends BaseEvent {
  constructor() {
    super('message');
  }
  async run(client: DiscordClient, message: Message) {

    if (message.author.bot) return;
    console.time('Fetching Prefix');
    const guildConfig = await GuildConfig.findOne({ guildId: message.guild.id });
    if (!guildConfig) {
      console.log('No guild config was found for this server...');
      return;
    }
    const prefix = guildConfig.get('prefix');
    if (message.content.startsWith(prefix)) {
      const [cmdName, ...cmdArgs] = message.content
        .slice(prefix.length)
        .trim()
        .split(/\s+/);
      const commandDB = await Command.findOne({ name: cmdName });
      const command = client.commands.get(cmdName);
      if (commandDB && command) {
        const enabled = commandDB.get('enabled');
        console.log('Command is in the database');
        if (enabled) {
          command.run(client, message, cmdArgs);
        } else {
          message.channel.send('Command is not enabled');
        }
      } else {
        console.log('Command is either not in DB, or does not exist');
      }
    }
  }
}