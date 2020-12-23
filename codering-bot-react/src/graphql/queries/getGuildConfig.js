import { gql } from '@apollo/client';

export const getGuildConfigQuery = gql `
  query User($guildId: String!) {
    getMutualGuilds {
      name
      id
    }
    getUserDetails {
      username
      discordId
      discriminator
      avatar
    }
    getRoles(guildId: $guildId) {
      name
      id
    }
    getGuildConfig(guildId: $guildId) {
      prefix
      guildId
      defaultRole
    }
    getChannels(guildId: $guildId) {
      name
      id
    }
  }
`;

export const getUserDetails = gql`
  query getUserDetails {
    username
    discordId
    discriminator
    avatar
    roles
  }
`;