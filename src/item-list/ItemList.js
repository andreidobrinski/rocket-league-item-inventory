import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

import { FirebaseContext } from '../auth/FirebaseContext';
import { UserContext } from '../auth/UserContext';
import Item from './Item';

const ItemList = () => {
  const { firebase } = useContext(FirebaseContext);
  const { currentUser: { uid } } = useContext(UserContext);
  const [items, setItems] = useState([]);

  useEffect(() => {
    firebase.firestore().collection("users").doc(uid).collection("items")
    .onSnapshot(({ docs }) => {
      const newItems = [];
      docs.forEach(doc => newItems.push({ id: doc.id, ...doc.data() }));
      setItems(newItems);
    });
  }, [firebase, uid]);

  return (
    <Wrap>
      {items.map(item => (
        <Item item={item} key={item.id} />
      ))}
    </Wrap>
  );
};

const Wrap = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px , 1fr));
  justify-items: center;
  grid-gap: 4px;
  margin: 0 4px;
`;

export default ItemList;
