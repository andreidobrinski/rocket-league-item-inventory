import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react';

import { FirebaseContext } from './FirebaseContext';

export const LoggedInContext = createContext({});

export const LoggedInContextProvider = props => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const { firebase, fbLoading } = useContext(FirebaseContext);

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
    if (!fbLoading) {
      checkLoggedIn();
    }
  }, [fbLoading]);

  const value = useMemo(() => {
    return { checkLoggedIn, loggedIn, isLoading };
  }, [loggedIn, isLoading]);

  return <LoggedInContext.Provider value={value} {...props} />
};
