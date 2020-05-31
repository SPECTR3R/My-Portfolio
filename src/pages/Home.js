import React from 'react';
import MyLinks from '../components/MyLinks';
import MyName from '../components/MyName';
import { Divider } from '@chakra-ui/core';

const Home = () => {
  return (
    <>
      <Divider orientation="horizontal" w={['90%', '90%', '80%', '992px']} />
      <MyName></MyName>
      <Divider orientation="horizontal" w={['90%', '90%', '80%', '992px']} />
      <MyLinks></MyLinks>
      <Divider orientation="horizontal" />
      <Divider orientation="horizontal" w={['90%', '90%', '80%', '992px']} />
    </>
  );
};

export default Home;
