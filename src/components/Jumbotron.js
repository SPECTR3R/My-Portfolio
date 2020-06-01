import React from 'react';
import { Text, Box, PseudoBox, Flex, useColorMode } from '@chakra-ui/core';

import Card from '../components/Card';

const Jumbotron = () => {
  return (
    <Box
      w={['90%', '90%', '80%', '950px']}
      align="center"
      direction={['column', 'column', 'row']}
      justify="center"
      my={['10px', '10px', '30px']}
      style={{ margin: 0 }}
      fontFamily="Source Sans Pro"
      textAlign="center"
      borderColor="gray.200"
    >
      <Text as="i" fontSize="3xl" fontWeight="700">
        What I do
      </Text>
      <Flex wrap="wrap" aling="space-around" justify="space-around">
        <Card
          cardSrc="/images/mathMode.png"
          cardTitle="Full-Stack web development"
          cardButton="View live example"
          cardText={`I make beautiful, modern, and responsive web applications.
           For my frontend, I use ES6+ Javascript, CSS, SCSS, Chakra UI, Bulma UI, Bootstrap, Styled Components, Ant Design, React js, Hooks, and Context. For my backend, I use Node js, Handlebars, Express, Session, Passport, social authentication, Mongo DB, Mongoose, NoSQL, Axios, CORS, Postman, and Async functions.`}
        ></Card>

        <Card
          cardSrc="/images/IOT.jpeg"
          cardButton="Explore my projects"
          cardTitle="Electronic desing and IOT"
          cardText="I connect the world to the internet using microchips (FPGA, ESP8266) and microcontrollers (Texas Instruments, PIC, Arduino). I'm capable of designing printed circuit boards (PCB) and electronic devices, programming microcontrollers in various assembly languages, and connecting custom made electronic devices to an application running on an android or windows device. "
        ></Card>
        <Card cardTitle="Scientific research " cardText=""></Card>
        <Card cardTitle=" Teaching" cardText=""></Card>
      </Flex>
    </Box>
  );
};

export default Jumbotron;
