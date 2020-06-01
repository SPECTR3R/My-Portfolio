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
      style={{ margin: 0 }}
      fontFamily="Source Sans Pro"
      textAlign="center"
      borderColor="gray.200"
    >
      <Text as="i" fontSize="3xl" fontWeight="700">
        What I do
      </Text>
      <Flex wrap="wrap" aling="center" justify="space-around">
        <Card
          cardSrc="/images/mathMode.png"
          f
          cardTitle="Full-Stack web development"
          cardButton="View live example"
          cardText="I make beautiful, modern, and responsive web applications.
           For my frontend, I use ES6+ Javascript, CSS, SCSS, Chakra UI, Bulma UI, Bootstrap, Styled Components, Ant Design, React js, Hooks, and Context. For my backend, I use Node js, Handlebars, Express, Session, Passport, social authentication, Mongo DB, Mongoose, NoSQL, Axios, CORS, Postman, and Async functions."
        ></Card>

        <Card
          cardSrc="/images/IOT.jpeg"
          cardButton="Explore my projects"
          cardTitle="Electronic desing and IOT"
          cardText="I connect the world to the internet using electronic devices such as microchips (FPGA, ESP8266, Bluetooth ) and microcontrollers (Texas Instruments, PIC, Arduino). I'm capable of designing printed circuit boards, implementing electronic systems, programming microcontrollers in various languages (assembler, C, Basic), and, connecting custom made devices to applications running online."
        ></Card>
        <Card
          cardSrc="/images/research.png"
          cardButton="Check out my paper!"
          cardTitle="Scientific research"
          cardText="I'm a scientist and an active member of the Institute of Electrical and Electronics Engineers (IEEE). I have been studying respiratory sounds from patients with Diffuse Interstitial Pneumonia (DIP). I use python, machine learning, neural networks, and advanced digital signal processing algorithms to develop methodologies to automate the diagnosis of DIP through the analysis of the respiratory sounds."
        ></Card>
        <Card cardTitle=" Teaching" cardText=""></Card>
      </Flex>
    </Box>
  );
};

export default Jumbotron;
