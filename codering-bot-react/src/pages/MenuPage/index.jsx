import React from 'react';
import { Flex } from '@chakra-ui/core';
import { GuildMenuContainer, SpinnerComponent } from '../../components';
import { getUserDetails } from '../../utils/api';
import './menu-page.css';

export function MenuPage({
  history,
}) {
  const [guilds, setGuilds] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  
  React.useEffect(() => {
    getUserDetails()
      .then(({ data }) => {
        console.log(data);
        setGuilds(data.guilds);
        setTimeout(() => {
          setLoading(false);
        }, 800)
        console.log(guilds);
      }).catch((err) => {
        setTimeout(() => {
          setLoading(false);
          history.push('/');
        }, 800)
      });
  }, []);
  
  return (
    <Flex className="menu-page-root">
      {(!loading && <GuildMenuContainer history={history} guilds={guilds} />) || <SpinnerComponent />}  
    </Flex>
  );
}