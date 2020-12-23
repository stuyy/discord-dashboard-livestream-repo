import { gql } from "@apollo/client";

export const updatePrefixMutation = gql`
  mutation UpdatePrefix($guildId: String!, $prefix: String!) {
    updatePrefixById(guildId: $guildId, prefix: $prefix) {
      prefix
      guildId
    }
  }
`;

export const updateDefaultRole = gql`
  mutation UpdateRole($guildId: String!, $roleId: String!) {
    updateDefaultRole(guildId: $guildId, roleId: $roleId) {
      defaultRole
      guildId
    }
  }
`;

export const createCommandMutation = gql`
  mutation createCommand(
    $name: String!,
    $description: String!,
    $type: String!,
    $enabled: Boolean!,
  ) {
    createCommand(name: $name, description: $description, type: $type, enabled: $enabled) {
      name
      description
      type
      enabled
    }
  }
`;