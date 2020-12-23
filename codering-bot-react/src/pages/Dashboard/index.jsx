import React from 'react';
import { Flex, Text, Box } from '@chakra-ui/core';
import { FiSettings, FiInfo } from 'react-icons/fi';

import './dashboard.css';

export function DashboardPage({
  history,
  match,
}) {

  return (
    <div className="dashboard-root">
      <Flex className="dashboard-card-container">
        <Flex
          onClick={() => history.push(`/dashboard/${match.params.id}/guild`)}
          className="card-item">
          <Box
            as={FiSettings}
            fontSize="64px"
            color="white"
          />
          <Box>
            <Text className="card-main-text">GUILD</Text>
            <Text className="card-main-text">CONFIGURATION</Text>
          </Box>
        </Flex>
        <Flex
          onClick={() => history.push(`/dashboard/${match.params.id}/commands/moderation`)}
          className="card-item">
          <Box
            as={FiInfo}
            fontSize="64px"
            color="white"
          />
          <Box>
            <Text className="card-main-text">MODERATION</Text>
            <Text className="card-main-text">COMMANDS</Text>
          </Box>
        </Flex>
      </Flex>
    </div>
  )
}