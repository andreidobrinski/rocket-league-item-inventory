import React, { useState } from 'react';
import firebase from 'firebase';
import PropTypes from 'prop-types';

const LoginForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
            .then(() => onSubmit())
            .catch(() => {
              firebase.auth().createUserWithEmailAndPassword(email, password)
              .then(() => onSubmit())
              .catch(() => onSubmit());
            });
        }}
        type="submit"
      >
        login
      </button>
    </form>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
