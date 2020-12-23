import React from 'react';
import {
  Flex,
  IconButton,
  Image,
} from "@chakra-ui/core";
import { FiMenu } from 'react-icons/fi';
import './index.css';
import logo from '../../assets/1.png';

export const NavigationBar = ({
  onOpen
}) => {
  return (
    <Flex
      className="nav-flex-bar">
      <Image
        visibility="hidden"
        size="40px"
        src={logo} />
      <IconButton
        className="menu-btn"
        onClick={onOpen}
        icon={FiMenu} />
    </Flex>
  );
}