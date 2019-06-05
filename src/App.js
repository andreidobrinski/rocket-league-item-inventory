import React from 'react';

import { FirebaseContextProvider } from './auth/FirebaseContext';
import { LoggedInContextProvider } from './auth/LoggedInContext';
import Login from './auth/Login';

const App = () => (
  <FirebaseContextProvider>
    <LoggedInContextProvider>
      <Login />
    </LoggedInContextProvider>
  </FirebaseContextProvider>
);

export default App;
