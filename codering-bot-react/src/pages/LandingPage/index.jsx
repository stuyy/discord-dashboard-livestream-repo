import React from 'react';
import './index.css';
import { Box, Heading, Text, Button } from '@chakra-ui/core';

export function LandingPage(props) {
  console.log(props);
  return (
    <div className="landing-root">
      <Box className="main-box">
        <Heading className="main-title">Code Ring</Heading>
        <Text className="main-description">
          Fully Functional Discord Bot. Includes Moderation, Reaction
          Roles, Music Features, and more. 100% customizable and secure.
        </Text>
        <Button onClick={() => window.location.href = 'http://localhost:3001/api/auth/discord' } className="main-btn">Get Started</Button>
      </Box>
    </div>
  );
}