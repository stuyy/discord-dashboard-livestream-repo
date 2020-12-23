import * as mongoose from 'mongoose';

/**
 * BASIC - All users can use this, no permissions
 * MODERATION - Only Moderation Roles can use these commands
 * ADMIN - Only Admin Roles can use these commands
 * OWNER - Only the owner can use these commands
 */
export const CommandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  enabled: {
    type: Boolean,
    default: true,
  },
  type: {
    type: String,
    required: true,
    default: 'BASIC',
  },
  roles: {
    type: Array,
    required: false,
    default: [],
  },
});