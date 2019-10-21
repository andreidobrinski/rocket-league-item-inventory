/* eslint-disable jsx-a11y/label-has-for */
import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

import { Button, MutedButton, Form } from '../app/styled';
import { FirebaseContext } from '../auth/FirebaseContext';
import { UserContext } from '../auth/UserContext';
import {
  typeOptions,
  rarityOptions,
  certificationOptions,
  colourOptions,
  crateOptions,
} from './options';

const AddItem = ({ isAddingItem, setAddingItem }) => {
  const { firebase } = useContext(FirebaseContext);
  const {
    currentUser: { uid },
  } = useContext(UserContext);

  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [rarity, setRarity] = useState('');
  const [imageLink, setImageLink] = useState('');
  const [certification, setCertification] = useState('');
  const [colour, setColour] = useState('');
  const [crate, setCrate] = useState('');
  const [price, setPrice] = useState(0);

  return (
    <Wrap>
      <Fade left when={isAddingItem} mountOnEnter unmountOnExit>
        <h2>Add New Item</h2>
        <Form>
          <label htmlFor="name">
            Name
            <input value={name} onChange={e => setName(e.target.value)} type="text" id="name" />
          </label>
          <label htmlFor="type">
            Type
            <select value={type} onChange={e => setType(e.target.value)} id="type">
              {typeOptions.map(option => (
                <option value={option.value} key={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="rarity">
            Rarity
            <select value={rarity} onChange={e => setRarity(e.target.value)} id="rarity">
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
          <label htmlFor="colour">
            Colour
            <select value={colour} onChange={e => setColour(e.target.value)} id="colour">
              {colourOptions.map(option => (
                <option value={option.value} key={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="colour">
            Crate
            <select value={crate} onChange={e => setCrate(e.target.value)} id="crate">
              {crateOptions.map(option => (
                <option value={option.value} key={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
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
          <MutedButton onClick={() => setAddingItem(false)} style={{ marginTop: '8px' }}>
            Cancel
          </MutedButton>
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
                  certification,
                  colour,
                  crate,
                  price,
                })
                .then(() => setAddingItem(false));
            }}
            type="submit"
            style={{ marginTop: '32px', marginLeft: '16px' }}
          >
            Add Item
          </Button>
        </Form>
      </Fade>
    </Wrap>
  );
};

AddItem.propTypes = {
  isAddingItem: PropTypes.bool.isRequired,
  setAddingItem: PropTypes.func.isRequired,
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto 16px;
  max-width: 300px;
`;

export default AddItem;
