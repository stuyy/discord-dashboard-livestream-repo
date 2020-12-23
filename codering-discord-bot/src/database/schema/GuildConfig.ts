import * as mongoose from 'mongoose';

const GuildConfigSchema = new mongoose.Schema({
  prefix: {
    type: String,
    required: true,
    default: '!',
  },
  guildId: {
    type: String,
    required: true,
  },
  defaultRole: {
    type: String,
  },
  memberLogChannel: {
    type: String,
  },
  deletedLogChannel: {
    type: String,
  },
  announcementsChannel: {
    type: String,
  },
  modLogChannel: {
    type: String,
  },
  mutedRole: {
    type: String,
  }
});

export default mongoose.model('GuildConfig', GuildConfigSchema);

