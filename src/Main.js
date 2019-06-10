import React, { useContext } from 'react';
import styled from 'styled-components';

import { FirebaseContext } from './auth/FirebaseContext';
import { UserContext } from './auth/UserContext';
import AddItem from './add-item/AddItem';
import ItemList from './item-list/ItemList';

const Main = () => {
  const { firebase } = useContext(FirebaseContext);
  const { checkLoggedIn } = useContext(UserContext);

  return (
    <Wrap>
      <Top>
        <AddItem />
        <SignOutButton
          onClick={() => {
            firebase.auth().signOut();
            checkLoggedIn();
          }}
        >
          sign out
        </SignOutButton>
      </Top>
      <ItemList />
    </Wrap>
  );
};

const Wrap = styled.div`
  min-height: 100vh;
  height: 100%;
  position: relative;
  background: rgba(255,255,255, 0.5);
  background-clip: padding-box;
  border: solid 8px transparent;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -8px;
    background: linear-gradient(to right, #BF4098, #406DBF);
  }
`;

const Top = styled.div`
  display: flex;
  margin: 8px;
`;

const SignOutButton = styled.button.attrs(() => ({ type: 'button' }))`
  margin-left: auto;

  background: linear-gradient(to bottom right, #BF4098, #406DBF);
  color: white;
  font-weight: bold;
  border: none;
`;

export default Main;
