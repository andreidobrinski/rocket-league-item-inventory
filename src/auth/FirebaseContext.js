import React, { createContext, useEffect, useMemo, useState } from 'react';
import fb from 'firebase';

import firebaseConfig from '../firebaseConfig';

export const FirebaseContext = createContext({});

export const FirebaseContextProvider = props => {
  const [firebase, setFirebase] = useState();
  const [fbLoading, setFbLoading] = useState(true);

  useEffect(() => {
    setFirebase(fb.initializeApp(firebaseConfig));
    setFbLoading(false);
  }, []);

  const value = useMemo(() => {
    return { firebase, setFirebase, fbLoading };
  }, [firebase, fbLoading]);

  return <FirebaseContext.Provider value={value} {...props} />
};
