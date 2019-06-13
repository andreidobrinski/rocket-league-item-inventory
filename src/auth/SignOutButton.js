import React, { useContext } from 'react';

import { Button } from '../app/styled';
import { FirebaseContext } from './FirebaseContext';
import { UserContext } from './UserContext';

const SignOutButton = () => {
  const { firebase } = useContext(FirebaseContext);
  const { checkLoggedIn } = useContext(UserContext);

  return (
    <Button
      onClick={() => {
        firebase.auth().signOut();
        checkLoggedIn();
      }}
      style={{ marginLeft: 'auto' }}
    >
      Sign Out
    </Button>
  );
};

export default SignOutButton;
