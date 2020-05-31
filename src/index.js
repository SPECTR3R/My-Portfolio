import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider, ColorModeProvider } from '@chakra-ui/core';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <ColorModeProvider>
        <App />
      </ColorModeProvider>
    </ThemeProvider>
  </React.StrictMode>,

  document.getElementById('root')
);

serviceWorker.unregister();
