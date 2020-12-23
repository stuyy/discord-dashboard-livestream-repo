import { Connection } from 'mongoose';
import { GuildConfigSchema } from '../schemas/bot/GuildConfig';

export const guildConfigProvider = [
  {
    provide: 'GUILD_CONFIG_MODEL',
    useFactory: (connection: Connection) => connection.model('GuildConfig', GuildConfigSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
