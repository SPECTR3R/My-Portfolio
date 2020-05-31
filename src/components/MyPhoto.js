import React from 'react';

import Figurine from '../components/Figurine';
import { Flex } from '@chakra-ui/core';

const MyPhoto = () => {
  return (
    <>
      <Flex>
        <Figurine legend={'holi'} iconSVG="Turtle" iconSize="10rem" iconColor="blue" />
      </Flex>
    </>
  );
};

export default MyPhoto;
