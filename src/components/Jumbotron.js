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
          cardTitle="Full-Stack development"
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
          cardButton="Download my paper!"
          cardTitle="Scientific research"
          cardText="I'm a scientist and an active member of the Institute of Electrical and Electronics Engineers (IEEE). I have been studying respiratory sounds from patients with Diffuse Interstitial Pneumonia (DIP). I use python, machine learning, neural networks, and advanced digital signal processing algorithms to develop methodologies to automate the diagnosis of DIP through the analysis of the respiratory sounds."
        ></Card>
        <Card
          cardSrc="/images/teaching.jpeg"
          cardTitle=" Teaching"
          cardButton="Check my latest workshop"
          cardText="I'm a teacher by nature, I think it is the best way to learn any subject and improve your soft skills. I've taught programming, science, and mathematics courses in all levels of education (from elementary school to some college). Some of the courses I've taught are:  Digital signal processing, numeric methods, mathematics, diferential equations, calculus, science workshops and scratch programming for children."
        ></Card>
      </Flex>
    </Box>
  );
};

export default Jumbotron;
