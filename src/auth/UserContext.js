import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import store from 'store';

import { FirebaseContext } from './FirebaseContext';

export const UserContext = createContext({});

export const UserContextProvider = props => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState();
  const { firebase, fbLoading } = useContext(FirebaseContext);

  const checkLoggedIn = useCallback(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setCurrentUser(user);
        setLoggedIn(true);
        setLoading(false);
      } else {
        setLoggedIn(false);
        setLoading(false);
      }
    });
  }, [firebase]);

  useEffect(() => {
    if (!fbLoading) {
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
            window.location.assign('https://rl-inventory.web.app');
          })
          .catch(() => checkLoggedIn());
      }
      checkLoggedIn();
    }
  }, [fbLoading, checkLoggedIn]);

  const value = useMemo(() => {
    return { checkLoggedIn, loggedIn, isLoading, currentUser };
  }, [loggedIn, isLoading, currentUser, checkLoggedIn]);

  return <UserContext.Provider value={value} {...props} />;
};
