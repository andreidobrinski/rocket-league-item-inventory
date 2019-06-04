import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import firebaseConfig from './firebaseConfig';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
        <form>
          <label>
            Name:
            <input
              onChange={e => setEmail(e.target.value)}
              type="text"
              value={email}
            />
          </label>
          <label>
            Password:
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="text"
              value={password}
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
      )}
    </div>
  );
}

export default App;
