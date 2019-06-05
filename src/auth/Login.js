import React, { useContext } from 'react';

import { LoggedInContext } from './LoggedInContext';
import LoginForm from '../LoginForm';
import Main from '../Main';

const Login = () => {
  const { loggedIn, isLoading } = useContext(LoggedInContext);

  if (isLoading) return <p>loading...</p>;

  if (loggedIn) return <Main />;

  return <LoginForm />;
};

export default Login;
