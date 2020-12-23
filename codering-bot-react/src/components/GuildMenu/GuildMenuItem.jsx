import React from 'react';
import { Flex, Box, Text, Button, Image } from '@chakra-ui/core';
import './index.css';
import { getAvatarUrl } from '../../utils/api';

export const GuildMenuItem = ({
  guild,
  history,
}) => (
  <Flex className="guild-menu-item">
    <Flex className="guild-details-wrapper">
      <Text className="guild-text">{guild.name}</Text>
      <Flex className="btn-container">
        <Button
          children="Dashboard"
          className="base-btn dashboard-btn"
          backgroundColor="#FFB342"
          onClick={() => { history.push(`/dashboard/${guild.id}`) }}
        />
        <Button className="base-btn delete-btn">Delete</Button>
      </Flex>
    </Flex>
    <Box>
      <Image className="guild-icon" src={getAvatarUrl(guild.id, guild.icon)} />
    </Box>
  </Flex>
);