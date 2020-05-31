import React from 'react';

import { Flex, Text, Box } from '@chakra-ui/core';
import { Image } from '@chakra-ui/core';
const MyName = () => {
  return (
    <Flex
      className="holi"
      w={['90%', '90%', '80%', '950px']}
      h={['450px', '450px', '300px']}
      align="center"
      direction={['column', 'column', 'row']}
      justify="center"
      my={['30px', '10px', '30px']}
    >
      <Image
        rounded="full"
        src="/images/MeDay.jpg"
        alt="A. del Río"
        w={['200px', '200px', '250px', '300px']}
        mb={['20px', '20px', '0']}
        boxShadow="xl"
      />
      <Box
        textAlign={['center', 'center', 'left']}
        pl={['0', '0', '30px', '40px']}
        fontSize={['30px', '30px', '35px', '40px']}
      >
        <Text fontFamily="Source Sans Pro">Hello, I am</Text>
        <Text fontFamily="Source Sans Pro" fontWeight={900}>
          Armando del Río
        </Text>
        <Text fontFamily="Source Sans Pro">
          <i>Engineer & Software Developer</i>
        </Text>
      </Box>
    </Flex>
  );
};

export default MyName;
