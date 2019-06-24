import React, { useState } from 'react';
import styled from 'styled-components';

import { AppWrap } from './app/styled';
import AddItem from './add-item/AddItem';
import ItemList from './item-list/ItemList';
import SignOutButton from './auth/SignOutButton';

const Main = () => {
  const [isAddingItem, setAddingItem] = useState(false);

  return (
    <AppWrap>
      <Top>
        <AddItem isAddingItem={isAddingItem} setAddingItem={setAddingItem} />
        {!isAddingItem && <SignOutButton />}
      </Top>
      <ItemList />
    </AppWrap>
  );
};

const Top = styled.div`
  display: flex;
  margin: 8px;
`;

export default Main;
