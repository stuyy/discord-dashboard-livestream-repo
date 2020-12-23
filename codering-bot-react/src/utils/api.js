import axios from 'axios';

export const getUserDetails = () => axios.get('http://localhost:3001/api/auth', { withCredentials: true });

export const getAvatarUrl = (guildId, hash) => `https://cdn.discordapp.com/icons/${guildId}/${hash}.png`

export const getGuildRoles = (guildId) => axios.get(
  `http://localhost:3001/api/discord/guilds/${guildId}/roles`, {
    withCredentials: true
  },
);

export const getGuildChannels = (guildId) => axios.get(
  `http://localhost:3001/api/discord/guilds/${guildId}/channels`, {
    withCredentials: true
  },
);

export const getGuildData = (guildId) => axios.get(
  `http://localhost:3001/api/discord/guilds/${guildId}`, {
    withCredentials: true
  }
);

export const postGuildPrefix = (guildId, prefix) => axios.post(
  `http://localhost:3001/api/discord/guilds/${guildId}/prefix`,
  { prefix },
  { withCredentials: true },
);

export const postGuildLogging = ( guildId, data ) => axios.patch(
  `http://localhost:3001/api/discord/guilds/${ guildId }/logging`,
  data,
  { withCredentials: true },
);
