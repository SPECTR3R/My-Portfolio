import React from 'react';
import Navbar from '../components/Navbar';
import MyPhoto from '../components/MyPhoto';
import Diver from '../components/Diver';
import Horse from '../components/Horse';
import Turtle from '../components/Turtle';

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <MyPhoto></MyPhoto>
      <Diver></Diver>
      <Horse></Horse>
      <Turtle size={'20rem'} ></Turtle>
    </>
  );
};

export default Home;
