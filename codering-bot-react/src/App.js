import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { LandingPage, DashboardPage, MenuPage, GuildConfigPage, AdminPage } from './pages';
import { useDisclosure } from '@chakra-ui/core';
import { SideDrawer } from './components/SideDrawer';
import { NavigationBar } from './components';
import './App.css';

function App() {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const props = { isOpen, onOpen, onClose, btnRef };

  return (
    <>
      <SideDrawer {...props} />
      <NavigationBar { ...props }/>
      <Switch>
        <Route
          component={LandingPage}
          exact={true}
          path="/"
        />
        <Route
          component={MenuPage}
          exact={true}
          path="/menu"
        />
        <Route
          component={DashboardPage}
          exact={true}
          path="/dashboard/:id"
        />
        <Route
          component={GuildConfigPage}
          exact={true}
          path="/dashboard/:id/guild"
        />
        <Route
          component={AdminPage}
          exact={true}
          path="/admin"
        />
      </Switch>
    </>
  );
}

export default App;
