import React from 'react';

import {
  Flex,
  useColorMode,
  Box,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  DrawerCloseButton,
} from '@chakra-ui/core';

import { Link, useLocation } from 'react-router-dom';
import { AiFillLinkedin, AiFillHome } from 'react-icons/ai';
import { FaHorseHead, FaGithub } from 'react-icons/fa';

import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdMoon, IoMdSunny } from 'react-icons/io';

import RoundButton from '../components/RoundButton';

const Navbar = () => {
  const { toggleColorMode } = useColorMode();
  const location = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      w={['90%', '90%', '80%', '992px']}
      height="70px"
      align="center"
      justify="space-between"
    >
      <Box>
        <RoundButton icoDay={IoMdMoon} icoNigth={IoMdSunny} fcn={toggleColorMode}></RoundButton>
        {location.pathname !== '/' && (
          <Link to="/">
            <RoundButton as={Link} to="/" icoDay={AiFillHome}></RoundButton>
          </Link>
        )}
      </Box>
      <Flex>
        <a
          href="https://drive.google.com/file/d/12quXyxOlnTeopBgwaETs3ky05_IzyvL_/view?usp=sharing"
          target="blank"
        >
          <RoundButton icoDay={FaHorseHead}></RoundButton>
        </a>
        <a href="https://github.com/SPECTR3R">
          <RoundButton icoDay={FaGithub}></RoundButton>
        </a>
        <a href="https://www.linkedin.com/in/adrio1992/" target="blank">
          <RoundButton icoDay={AiFillLinkedin}></RoundButton>
        </a>
        <RoundButton fcn={onOpen} icoDay={GiHamburgerMenu}></RoundButton>
      </Flex>
      <Drawer onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Navbar;
