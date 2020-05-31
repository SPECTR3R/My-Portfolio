import React from 'react';

import Figurine from './Figurine';
import { Flex, Text, Box } from '@chakra-ui/core';
import { Image } from '@chakra-ui/core';
const MyLinks = () => {
  return (
    <Flex>
      <Figurine legend={'My Blog'} iconSVG="Turtle" />
      <Figurine legend={'My Story'} iconSVG="Diver" />
      <Figurine legend={'My Resumé'} iconSVG="Chess" />
      <Figurine legend={'My Code'} iconSVG="Cube" />
    </Flex>
  );
};

export default MyLinks;
