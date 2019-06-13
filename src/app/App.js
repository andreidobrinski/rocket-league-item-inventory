import React from 'react';
import { ThemeProvider } from 'styled-components';

import { FirebaseContextProvider } from '../auth/FirebaseContext';
import { UserContextProvider } from '../auth/UserContext';
import Login from '../auth/Login';
import theme from './theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <FirebaseContextProvider>
      <UserContextProvider>
        <Login />
      </UserContextProvider>
    </FirebaseContextProvider>
  </ThemeProvider>
);

export default App;
