import React, { useContext } from 'react';

import { UserContext } from './UserContext';
import LoginForm from '../LoginForm';
import Main from '../Main';

const Login = () => {
  const { loggedIn, isLoading } = useContext(UserContext);

  if (isLoading) return <p>loading...</p>;

  if (loggedIn) return <Main />;

  return <LoginForm />;
};

export default Login;
