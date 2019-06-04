import React, { useState, useEffect } from 'react';
import firebase from 'firebase';

import LoginForm from './LoginForm';
import firebaseConfig from './firebaseConfig';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setLoading] = useState(true);

  const checkLoggedIn = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setLoggedIn(true);
        setLoading(false);
      } else {
        setLoggedIn(false);
        setLoading(false);
      }
    });
  };

  useEffect(() => {
    firebase.initializeApp(firebaseConfig);
    checkLoggedIn();
  }, []);

  if (isLoading) return <p>loading...</p>;

  return (
    <div>
      {loggedIn ? (
        <>
          <p>you're logged in</p>
          <button
            onClick={() => {
              firebase.auth().signOut();
              checkLoggedIn();
            }}
            type="button"
          >
            sign out
          </button>
        </>
      ) : (
        <LoginForm onSubmit={checkLoggedIn} />
      )}
    </div>
  );
}

export default App;
