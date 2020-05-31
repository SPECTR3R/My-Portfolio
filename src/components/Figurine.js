import React from 'react';
import Cube from '../components/Cube';
import Diver from '../components/Diver';
import Chess from '../components/Chess';
import Turtle from '../components/Turtle';
import { Flex, PseudoBox, useColorMode } from '@chakra-ui/core';

const Figurine = ({ iconSVG, iconColor }) => {
  const { colorMode } = useColorMode();

  const Figure =
    iconSVG === 'Turtle'
      ? Turtle
      : iconSVG === 'Diver'
      ? Diver
      : iconSVG === 'Chess'
      ? Chess
      : Cube;
  return (
    <PseudoBox
      as={Flex}
      aling="center"
      justyfy="center"
      size={'400px'}
      borderRadius="full"
      bg={colorMode === 'light' ? 'white' : 'gray.800'}
      _hover={{ bg: `${colorMode === 'light' ? 'gray.200' : 'gray.700'}` }}
      p={10}
    >
      <Figure color={colorMode === 'light' ? '#1a202c' : 'white'} />
    </PseudoBox>
  );
};

export default Figurine;
