import { config } from 'dotenv';
config();
import { registerCommands, registerEvents } from './utils/registry';
import DiscordClient from './client/client';
import mongoose from 'mongoose';
import { Collection } from 'discord.js';

mongoose.connect('mongodb://localhost:27017/coderingbot', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const client = new DiscordClient({});

(async () => {
  client.prefix = process.env.DISCORD_BOT_PREFIX || client.prefix;
  await registerCommands(client, '../commands');
  await registerEvents(client, '../events');
  await client.login(process.env.AUTH_BOT_TOKEN);
})();