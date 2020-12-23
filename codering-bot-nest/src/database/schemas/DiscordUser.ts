import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  discriminator: {
    type: String,
    required: true,
  },
  discordId: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  guilds: {
    type: Array,
    required: true,
  },
  roles: {
    type: Array,
    required: true,
  }
});
