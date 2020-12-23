import { Document } from 'mongoose';

export default interface GuildConfig extends Document {
  prefix: string;
  guildId: string;
  _id: string;
  defaultRole?: string;
  memberLogChannel?: string;
  deletedLogChannel?: string;
  announcementsChannel?: string;
  modLogChannel?: string;
  mutedRole?: string;
}
