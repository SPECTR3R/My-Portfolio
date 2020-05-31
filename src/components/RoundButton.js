import React from 'react';
import { Flex, useColorMode, IconButton, Button, Box } from '@chakra-ui/core';

const RoundButton = ({ icoDay, icoNigth = icoDay, fcn }) => {
  const { colorMode } = useColorMode();

  return (
    <IconButton
      rounded="full"
      onClick={fcn}
      as={colorMode === 'light' ? icoDay : icoNigth}
      bg={colorMode === 'light' ? 'white' : 'gray.800'}
      _hover={{ bg: 'gray.400' }}
      w={45}
      h={45}
      p={2}
    />
  );
};

export default RoundButton;
