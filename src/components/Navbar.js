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
  useDisclosure,DrawerCloseButton
} from '@chakra-ui/core';

import { Link, useLocation } from 'react-router-dom';
import { AiFillLinkedin, AiFillHome } from 'react-icons/ai';
import { FaHorseHead } from 'react-icons/fa';

import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdCube, IoMdMoon, IoMdSunny } from 'react-icons/io';

import RoundButton from '../components/RoundButton';

const Navbar = () => {
  const { toggleColorMode } = useColorMode();
  const location = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex w="full" height="70px" align="center" justify="center">
      <Flex w={['90%', '90%', '80%', '70%']} align="center" justify="space-between">
        <Box>
          <RoundButton icoDay={IoMdMoon} icoNigth={IoMdSunny} fcn={toggleColorMode}></RoundButton>

          {location.pathname === '/' && (
            <Link to="/">
              <RoundButton icoDay={AiFillHome}></RoundButton>
            </Link>
          )}
        </Box>
        <Flex>
          <a
            href="https://drive.google.com/drive/folders/1VaFuZywXqVQq79KOynCyCZJpJyncO4SZ?usp=sharing"
            target="blank"
          >
            <RoundButton icoDay={FaHorseHead}></RoundButton>
          </a>
          <a href="https://github.com/Jossdz/WDFTMAR2020">
            <RoundButton icoDay={IoMdCube}></RoundButton>
          </a>
          <a href="https://www.linkedin.com/in/adrio1992/" target="blank">
            <RoundButton icoDay={AiFillLinkedin}></RoundButton>
          </a>
          <RoundButton fcn={onOpen} icoDay={GiHamburgerMenu}></RoundButton>

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
      </Flex>
    </Flex>
  );
};

export default Navbar;
