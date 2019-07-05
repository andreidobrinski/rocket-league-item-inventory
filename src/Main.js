import React, { useState } from 'react';
import styled from 'styled-components';

import { AppWrap } from './app/styled';
import AddItem from './add-item/AddItem';
import AddItemButton from './add-item/AddItemButton';
import ItemList from './item-list/ItemList';
import SignOutButton from './auth/SignOutButton';

const Main = () => {
  const [isAddingItem, setAddingItem] = useState(false);

  return (
    <AppWrap>
      <Top>
        <AddItemButton isAddingItem={isAddingItem} setAddingItem={setAddingItem} />
        <SignOutButton />
      </Top>
      <AddItem isAddingItem={isAddingItem} setAddingItem={setAddingItem} />
      <ItemList />
    </AppWrap>
  );
};

const Top = styled.div`
  display: flex;
  margin: 8px;
`;

export default Main;
