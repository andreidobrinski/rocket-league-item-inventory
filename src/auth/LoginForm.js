import React, { useContext, useState } from 'react';

import { FirebaseContext } from './FirebaseContext';
import { UserContext } from './UserContext';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { firebase } = useContext(FirebaseContext);
  const { checkLoggedIn } = useContext(UserContext);

  return (
    <form>
      <label htmlFor="email">
        Email:
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="text"
          id="email"
        />
      </label>
      <label htmlFor="password">
        Password:
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          id="password"
        />
      </label>
      <button
        onClick={(e) => {
          e.preventDefault();
          firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => checkLoggedIn())
            .catch(() => {
              firebase.auth().createUserWithEmailAndPassword(email, password)
              .then(() => checkLoggedIn())
              .catch(() => checkLoggedIn());
            });
        }}
        type="submit"
      >
        login
      </button>
    </form>
  );
};

export default LoginForm;
