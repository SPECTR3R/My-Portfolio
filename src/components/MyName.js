import React from 'react';

import { Flex, Text, Box, Image, useColorMode } from '@chakra-ui/core';
const MyName = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      className="holi"
      w={['90%', '90%', '80%', '950px']}
      h={['450px', '450px', '300px']}
      align="center"
      direction={['column', 'column', 'row']}
      justify="center"
      my={['10px', '10px', '30px']}
    >
      <Image
        rounded="full"
        src={colorMode === 'light' ? '/images/meDay.jpg' : '/images/meNight.png'}
        alt="A. del Río"
        w={['200px', '200px', '250px', '300px']}
        mb={['20px', '20px', '0']}
        boxShadow="xl"
      />
      <Box
        textAlign={['center', 'center', 'left']}
        fontFamily="Source Sans Pro"
        pl={['0', '0', '30px', '40px']}
        fontSize={['30px', '30px', '35px', '40px']}
      >
        <Text>Hello, I am</Text>
        <Text fontWeight={900}> Armando del Río</Text>
        <Text>
          <i>Engineer & Software Developer</i>
        </Text>
      </Box>
    </Flex>
  );
};

export default MyName;
