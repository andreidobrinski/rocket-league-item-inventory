import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

import { AppWrap, Form, Button } from '../app/styled';
import { FirebaseContext } from './FirebaseContext';
import { UserContext } from './UserContext';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { firebase } = useContext(FirebaseContext);
  const { checkLoggedIn } = useContext(UserContext);

  const handleSubmit = e => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => checkLoggedIn())
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(() => checkLoggedIn())
          .catch(() => checkLoggedIn());
      });
  };

  return (
    <AppWrap>
      <Fade bottom>
        <h2 style={{ textAlign: 'center' }}>Rocket League Item Inventory</h2>
        <Wrap>
          <Form onSubmit={handleSubmit}>
            <label htmlFor="email">
              Email
              <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                type="text"
                id="email"
              />
            </label>
            <label htmlFor="password">
              Password
              <input
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password"
                id="password"
              />
            </label>
            <Button type="submit" style={{ marginTop: '16px' }}>
              Login
            </Button>
          </Form>
        </Wrap>
      </Fade>
    </AppWrap>
  );
};

const Wrap = styled.div`
  padding: 16px;
  max-width: 350px;
  margin: 0 auto;
`;

export default LoginForm;
