import { Document } from 'mongoose';
import Guild from './Guild';

export default interface User extends Document {
  readonly username: string;
  readonly discriminator: string;
  readonly discordId: string;
  readonly avatar: string;
  readonly verified: boolean;
  readonly guilds: Array<Guild>;
}
