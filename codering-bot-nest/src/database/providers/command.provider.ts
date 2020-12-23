import { Connection } from 'mongoose';
import { CommandSchema } from '../schemas/bot/Command';

export const CommandProvider = [
  {
    provide: 'COMMAND_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Command', CommandSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
