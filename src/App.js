import React from 'react';

import { FirebaseContextProvider } from './auth/FirebaseContext';
import { UserContextProvider } from './auth/UserContext';
import Login from './auth/Login';

const App = () => (
  <FirebaseContextProvider>
    <UserContextProvider>
      <Login />
    </UserContextProvider>
  </FirebaseContextProvider>
);

export default App;
