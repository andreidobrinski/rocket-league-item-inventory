/* eslint-disable jsx-a11y/label-has-for */
import React, { useContext, useState } from "react";

import { FirebaseContext } from "../auth/FirebaseContext";
import { UserContext } from '../auth/UserContext';
import {
  typeOptions,
  rarityOptions,
  colourOptions,
  certificationOptions
} from "./options";

const AddItem = () => {
  const { firebase } = useContext(FirebaseContext);
  const { currentUser: { uid } } = useContext(UserContext);
  const [isAdding, setAdding] = useState(false);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [rarity, setRarity] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [price, setPrice] = useState(0);
  const [colour, setColour] = useState("");
  const [certification, setCertification] = useState("");
  // TODO add crate

  if (!isAdding) return (
    <button
      onClick={() => setAdding(true)}
      type="button"
    >
      Add Item
    </button>
  );

  return (
    <form>
      <label htmlFor="name">
        Name:
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          type="text"
          id="name"
        />
      </label>
      <label htmlFor="type">
        Type:
        <select value={type} onChange={e => setType(e.target.value)} id="type">
          {typeOptions.map(option => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="rarity">
        Rarity:
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
        Image Link:
        <input
          value={imageLink}
          onChange={e => setImageLink(e.target.value)}
          type="text"
          id="imageLink"
        />
      </label>
      <label htmlFor="price">
        Price:
        <input
          value={price}
          onChange={e => setPrice(e.target.value)}
          type="number"
          id="price"
        />
      </label>
      <label htmlFor="colour">
        Colour:
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
        Certification:
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
      <button
        onClick={e => {
          e.preventDefault();
          const db = firebase.firestore();
          db.collection("users")
            .doc(uid)
            .collection("items")
            .add({
              name,
              type,
              rarity,
              imageLink,
              price
            })
            .then(() => setAdding(false));
        }}
        type="submit"
      >
        submit
      </button>
    </form>
  );
};

export default AddItem;
