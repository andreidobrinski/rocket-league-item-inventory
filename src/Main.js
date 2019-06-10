import React, { useContext } from 'react';

import { FirebaseContext } from './auth/FirebaseContext';
import { UserContext } from './auth/UserContext';
import AddItem from './add-item/AddItem';
import ItemList from './item-list/ItemList';

const Main = () => {
  const { firebase } = useContext(FirebaseContext);
  const { checkLoggedIn } = useContext(UserContext);

  return (
    <div>
      <p>you're logged in</p>
      <AddItem />
      <ItemList />
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
