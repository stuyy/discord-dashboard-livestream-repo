import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/core";
import './index.css';
import { Link } from 'react-router-dom';
import {
  GUEST_ROUTES,
  AUTHORIZED_ROUTES,
  ADMINISTRATOR_ROUTES,
} from '../../config/routes';

export const SideDrawer = ({
  isOpen,
  onOpen,
  onClose,
  btnRef,
}) => {
  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={btnRef}>
    <DrawerOverlay />
    <DrawerContent>
      <DrawerHeader className="drawer-header">
        <span>Menu</span>
        <DrawerCloseButton className="drawer-close-btn" />
      </DrawerHeader>
      <DrawerBody className="drawer-body">
        <ul>
          {GUEST_ROUTES.map((route, index) => (
            <Link key={index} to={{
              pathname: route.path}}>{route.name}</Link>
          ))}
        </ul>
      </DrawerBody>
    </DrawerContent>
    </Drawer>
  );
}