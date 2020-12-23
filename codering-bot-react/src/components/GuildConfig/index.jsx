import React from 'react';
import {
  Flex,
  Box,
  Heading,
  useToast,
} from '@chakra-ui/core';
import './index.css';
import { LoggingCategoryForm, BaseForm, PrefixForm } from './Forms';
import { postGuildPrefix, postGuildLogging } from "../../utils/api";

export const GuildConfigComponent = ({
  roles,
  channels,
  guildId,
  guildConfig,
}) => {

  const { prefix, defaultRole } = guildConfig;
  const toast = useToast();
  
  const updateGuildLogging = ( value ) => {
    
    const arrayEntries = Array.from( Object.values( value ) );
    if ( arrayEntries.some( ( entry ) => entry.length !== 0 ) ) {
      postGuildLogging(guildId, value)
        .then(({ data }) =>
          toast({
            title: "Success!",
            status: "success",
            duration: 9000,
            isClosable: true,
          })
        )
        .catch((err) =>
          toast({
            title: "An error occured...",
            description: "Something went wrong with updating.",
            status: "error",
            duration: 9000,
            isClosable: true,
          })
        );
    } else {
      toast({
        title: "Error.",
        description: "Please select at least one thing to update.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  }
  
  return (
    <Flex className="guild-config-wrapper">
      <Flex className="flex-container">
        <Box className="card">
          <Box className="header">
            <Heading className="header-title">Update Prefix</Heading>
          </Box>
          <PrefixForm guildId={guildId} prefix={prefix} />
        </Box>
      </Flex>
      <Flex className="flex-container">
        <Box className="card">
          <Box className="header">
            <Heading className="header-title">Logging</Heading>
          </Box>
          <Box className="select-dropdown">
            <LoggingCategoryForm
              channels={channels}
              updateGuildLogging={updateGuildLogging}
            />
          </Box>
        </Box>
      </Flex>
      <Flex className="flex-container">
        <Box className="card">
          <Box className="header">
            <Heading className="header-title">Auto Role</Heading>
          </Box>
          <Box className="select-dropdown">
            <BaseForm
              guildId={guildId}
              type="roleChange"
              title="Auto Role"
              description="Select a Role"
              rolesOrChannel={roles}
              selected={defaultRole}
            />
          </Box>
        </Box>
        <Box className="card">
          <Box className="header">
            <Heading className="header-title">Announcements</Heading>
          </Box>
          <Box className="select-dropdown">
            <BaseForm
              title="Announcements"
              description="Select a Channel"
              rolesOrChannel={channels}
            />
          </Box>
        </Box>
        <Box className="card">
          <Box className="header">
            <Heading className="header-title">Muted Role</Heading>
          </Box>
          <Box className="select-dropdown">
            <BaseForm
              title="Muted Role"
              description="Select a Role"
              rolesOrChannel={roles}
            />
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
}