import React from 'react';
import MyLinks from '../components/MyLinks';
import MyName from '../components/MyName';
import Jumbotron from '../components/Jumbotron';
import Footer from '../components/Footer';

import { Divider } from '@chakra-ui/core';

const Home = () => {
  return (
    <>
      <Divider orientation="horizontal" w={['90%', '90%', '80%', '992px']} borderColor="gray.200" />
      <MyName/>
      <Divider orientation="horizontal" w={['90%', '90%', '80%', '992px']} borderColor="gray.200" />

      <Jumbotron/>
      <Divider orientation="horizontal" w={['90%', '90%', '80%', '992px']} borderColor="gray.200" />

      <MyLinks/>
      <Divider orientation="horizontal" w={['90%', '90%', '80%', '992px']} borderColor="gray.200" />
      <Footer />
    </>
  );
};

export default Home;
