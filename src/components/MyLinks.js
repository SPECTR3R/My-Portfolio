import React from 'react';

import Figurine from './Figurine';
import { Flex } from '@chakra-ui/core';
const MyLinks = () => {
  return (
    <Flex
      w={['90%', '90%', '80%', '992px']}
      direction="row"
      wrap="wrap"
      justify="space-around"
      align="center"
    >
      <Figurine legend={'My Blog'} iconSVG="Turtle" />
      <Figurine legend={'My Story'} iconSVG="Diver" />
      <Figurine legend={'My Resumé'} iconSVG="Chess" />
      <Figurine legend={'My Code'} iconSVG="Cube" />
    </Flex>
  );
};

export default MyLinks;
