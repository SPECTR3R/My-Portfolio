import React from 'react';
import Cube from '../components/Cube';
import Diver from '../components/Diver';
import Chess from '../components/Chess';
import Turtle from '../components/Turtle';
import { Text, Flex, PseudoBox, useColorMode } from '@chakra-ui/core';

const Figurine = ({ iconSVG, legend }) => {
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
      direction="column"
      boxShadow="sm"
      align="center"
      justify="center"
      size={['15rem', '15rem', '12rem']}
      borderRadius="full"
      bg={colorMode === 'light' ? 'white' : 'gray.800'}
      _hover={{ bg: `${colorMode === 'light' ? 'gray.200' : 'gray.700'}` }}
      p="1rem"
      mx={5}
      my={10}
    >
      <Figure color={colorMode === 'light' ? '#1a202c' : 'white'} />
      <Text fontSize="1.2rem" fontFamily="Source Sans Pro" fontWeight={700} textAlign="center">
        {legend}
      </Text>
    </PseudoBox>
  );
};

export default Figurine;
