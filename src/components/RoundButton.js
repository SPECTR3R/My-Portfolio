import React from 'react';
import { useColorMode, IconButton, } from '@chakra-ui/core';

const RoundButton = ({ icoDay, icoNigth = icoDay, fcn }) => {
  const { colorMode } = useColorMode();

  return (
    <IconButton
      rounded="full"
      onClick={fcn}
      as={colorMode === 'light' ? icoDay : icoNigth}
      bg={colorMode === 'light' ? 'white' : 'gray.800'}
      _hover={{ bg: `${colorMode === 'light' ? 'gray.200' : 'gray.700'}` }}
      w={45}
      h={45}
      p={2}
      m={'2px'}
    />
  );
};

export default RoundButton;
