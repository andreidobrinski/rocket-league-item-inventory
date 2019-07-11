import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import store from 'store';

import About from '../app/About';
import { AppWrap, Form, Button } from '../app/styled';
import { FirebaseContext } from './FirebaseContext';
import { UserContext } from './UserContext';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const { firebase } = useContext(FirebaseContext);
  const { checkLoggedIn } = useContext(UserContext);

  if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
    let authEmail = store.get('email');
    if (!authEmail) {
      authEmail = window.prompt(
        'Seems like you opened this on a different device. Please confirm your email.'
      );
    }
    firebase
      .auth()
      .signInWithEmailLink(authEmail, window.location.href)
      .then(() => {
        checkLoggedIn();
        store.remove('email');
      })
      .catch(() => checkLoggedIn());
  }

  const handleSubmit = e => {
    e.preventDefault();
    firebase
      .auth()
      .sendSignInLinkToEmail(email, {
        url: 'https://rl-inventory.web.app',
        handleCodeInApp: true,
      })
      .then(() => {
        store.set('email', email);
        setHasSubmitted(true);
      })
      .catch(err => setError(err));
  };

  return (
    <AppWrap>
      <Fade top when={hasSubmitted} mountOnEnter unmountOnExit opposite>
        <Wrap style={{ textAlign: 'center' }}>
          <h2>Email sent!</h2>
          <p>Check {email} for your sign-in link.</p>
        </Wrap>
      </Fade>
      <Fade bottom when={!hasSubmitted} collapse appear>
        <h2 style={{ textAlign: 'center' }}>Rocket League Item Inventory</h2>
        <Wrap>
          {error && <p>Error: {error.message}</p>}
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
            <Button type="submit" style={{ marginTop: '16px' }}>
              Login
            </Button>
          </Form>
        </Wrap>
        <Fade delay={1000}>
          <About />
        </Fade>
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
