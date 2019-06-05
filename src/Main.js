import React, { useContext } from 'react';

import { FirebaseContext } from './auth/FirebaseContext';
import { LoggedInContext } from './auth/LoggedInContext';

// import AddItem from './add-item/AddItem';

const Main = () => {
  const { firebase } = useContext(FirebaseContext);
  const { checkLoggedIn } = useContext(LoggedInContext);

  return (
    <div>
      <p>you're logged in</p>
      {/* <AddItem /> */}
      <button
        onClick={() => {
          firebase.auth().signOut();
          checkLoggedIn();
        }}
        type="button"
      >
        sign out
      </button>
    </div>
  );
}

export default Main;
