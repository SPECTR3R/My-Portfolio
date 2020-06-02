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
  Tooltip,
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
    <Flex w={['90%', '90%', '80%', '992px']} height="70px" align="center" justify="space-between">
      <Box>
        <Tooltip label="Toggle color">
          <Box display="inline">
            <RoundButton icoDay={IoMdMoon} icoNigth={IoMdSunny} fcn={toggleColorMode} />
          </Box>
        </Tooltip>

        {location.pathname !== '/' && (
          <Tooltip label="Go to main page">
            <Link to="/">
              <RoundButton as={Link} to="/" icoDay={AiFillHome} />
            </Link>
          </Tooltip>
        )}
      </Box>
      <Flex>
        <Tooltip label="Download my Resumé!">
          <a
            href="https://drive.google.com/file/d/12quXyxOlnTeopBgwaETs3ky05_IzyvL_/view?usp=sharing"
            target="blank"
          >
            <RoundButton icoDay={FaHorseHead} />
          </a>
        </Tooltip>

        <a href="https://github.com/SPECTR3R" target="blank">
          <RoundButton icoDay={FaGithub} />
        </a>
        <a href="https://www.linkedin.com/in/adrio1992/" target="blank">
          <RoundButton icoDay={AiFillLinkedin} />
        </a>
        <RoundButton fcn={onOpen} icoDay={GiHamburgerMenu} />
      </Flex>
      <Drawer onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
          <DrawerBody>
            <p>To do...</p>
            <p>To do...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Navbar;
