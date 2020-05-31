import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CSSReset, Flex } from '@chakra-ui/core';

import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <Flex direction="column" align="center" justify="center">
      <CSSReset />
      <Router>
        <Navbar></Navbar>

        <Switch>
          <Route exact component={Home} path="/" />
        </Switch>
      </Router>
    </Flex>
  );
}

export default App;
