import React, { useState } from 'react';
import styled from 'styled-components';

import AddItem from './add-item/AddItem';
import ItemList from './item-list/ItemList';
import SignOutButton from './auth/SignOutButton';

const Main = () => {
  const [isAddingItem, setAddingItem] = useState(false);

  return (
    <Wrap>
      <Top>
        <AddItem isAddingItem={isAddingItem} setAddingItem={setAddingItem} />
        {!isAddingItem && <SignOutButton />}
      </Top>
      <ItemList />
    </Wrap>
  );
};

const Wrap = styled.div`
  min-height: 100vh;
  height: 100%;
  position: relative;
  background: rgba(255, 255, 255, 0.5);
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
    background: linear-gradient(
      to right,
      ${props => props.theme.colours.berry},
      ${props => props.theme.colours.indigo}
    );
  }
`;

const Top = styled.div`
  display: flex;
  margin: 8px;
`;

export default Main;
