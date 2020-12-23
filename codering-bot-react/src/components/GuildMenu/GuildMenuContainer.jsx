import React from 'react';
import { Flex } from '@chakra-ui/core';
import { GuildMenuItem } from './GuildMenuItem';
import './index.css';

export const GuildMenuContainer = ({
  guilds,
  history,
}) => {
  return (
    <Flex className="guild-menu-container">
      {guilds.map((guild) => (
        <GuildMenuItem
          key={guild.id}
          history={history}
          guild={guild}
        />
      ))}
    </Flex>
  )
};
