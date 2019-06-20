/* eslint-disable jsx-a11y/label-has-for */
import React, { useContext, useState } from 'react';
import styled from 'styled-components';

import { FirebaseContext } from '../auth/FirebaseContext';
import { UserContext } from '../auth/UserContext';
import {
  typeOptions,
  rarityOptions,
  colourOptions,
  certificationOptions,
} from './options';
import { Button, MutedButton } from '../app/styled';

const AddItem = () => {
  const { firebase } = useContext(FirebaseContext);
  const {
    currentUser: { uid },
  } = useContext(UserContext);
  const [isAdding, setAdding] = useState(false);

  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [rarity, setRarity] = useState('');
  const [imageLink, setImageLink] = useState('');
  const [price, setPrice] = useState(0);
  const [colour, setColour] = useState('');
  const [certification, setCertification] = useState('');
  // TODO add crate

  if (!isAdding)
    return <Button onClick={() => setAdding(true)}>Add Item</Button>;

  return (
    <Wrap>
      <h2>Add New Item</h2>
      <form>
        <label htmlFor="name">
          Name
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            type="text"
            id="name"
          />
        </label>
        <label htmlFor="type">
          Type
          <select
            value={type}
            onChange={e => setType(e.target.value)}
            id="type"
          >
            {typeOptions.map(option => (
              <option value={option.value} key={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="rarity">
          Rarity
          <select
            value={rarity}
            onChange={e => setRarity(e.target.value)}
            id="rarity"
          >
            {rarityOptions.map(option => (
              <option value={option.value} key={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="imageLink">
          Image Link
          <input
            value={imageLink}
            onChange={e => setImageLink(e.target.value)}
            type="text"
            id="imageLink"
          />
        </label>
        <label htmlFor="price">
          Price
          <input
            value={price}
            onChange={e => setPrice(e.target.value)}
            type="number"
            id="price"
          />
        </label>
        <label htmlFor="colour">
          Colour
          <select
            value={colour}
            onChange={e => setColour(e.target.value)}
            id="colour"
          >
            {colourOptions.map(option => (
              <option value={option.value} key={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="certification">
          Certification
          <select
            value={certification}
            onChange={e => setCertification(e.target.value)}
            id="certification"
          >
            {certificationOptions.map(option => (
              <option value={option.value} key={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <Button
          onClick={e => {
            e.preventDefault();
            const db = firebase.firestore();
            db.collection('users')
              .doc(uid)
              .collection('items')
              .add({
                name,
                type,
                rarity,
                imageLink,
                price,
              })
              .then(() => setAdding(false));
          }}
          type="submit"
          style={{ marginTop: '32px' }}
        >
          Add Item
        </Button>
        <MutedButton onClick={() => setAdding(false)} style={{ marginTop: '8px' }}>
          Cancel
        </MutedButton>
      </form>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    margin-bottom: 0;
    font-family: ${props => props.theme.fonts.main};
    font-size: ${props => props.theme.ratio.two}rem;
  }
  form,
  label {
    display: flex;
    flex-direction: column;
    font-size: ${props => props.theme.ratio.one}rem;
  }
  label {
    margin-bottom: 4px;
  }
  input {
    border: none;
    border-radius: 4px;
    padding: 6px;
    font-family: ${props => props.theme.fonts.main};
    font-size: ${props => props.theme.ratio.one}rem;
  }
  select {
    padding: 6px;
    font-family: ${props => props.theme.fonts.main};
    font-size: ${props => props.theme.ratio.one}rem;
  }
`;

export default AddItem;
