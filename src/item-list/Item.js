import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { humanize } from 'inflected';

import { DestructiveButton, MutedButton } from '../app/styled';
import { FirebaseContext } from '../auth/FirebaseContext';
import { UserContext } from '../auth/UserContext';

const Item = ({ item }) => {
  const { firebase } = useContext(FirebaseContext);
  const {
    currentUser: { uid },
  } = useContext(UserContext);
  const [deleting, setDeleting] = useState(false);

  if (deleting)
    return (
      <Wrap as="div">
        Delete this item?
        <DestructiveButton
          onClick={() => {
            firebase
              .firestore()
              .collection('users')
              .doc(uid)
              .collection('items')
              .doc(item.id)
              .delete();
          }}
          style={{ marginBottom: '8px' }}
        >
          Delete
        </DestructiveButton>
        <MutedButton onClick={() => setDeleting(false)}>Cancel</MutedButton>
      </Wrap>
    );

  return (
    <Wrap onClick={() => setDeleting(true)}>
      <img src={item.imageLink} alt={item.name} />
      <p style={{ fontWeight: 'bold' }}>{humanize(item.name)}</p>
      <p>{humanize(item.rarity)}</p>
      {item.certification && <p>{item.certification}</p>}
    </Wrap>
  );
};

Item.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    imageLink: PropTypes.string,
    rarity: PropTypes.string.isRequired,
    price: PropTypes.number,
    colour: PropTypes.string,
    certification: PropTypes.string,
  }).isRequired,
};

const Wrap = styled.button.attrs(() => ({ type: 'button' }))`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: none;
  max-width: 250px;
  background: black;
  padding: 16px;
  margin: 8px;
  border-radius: 6px;
  img {
    object-fit: contain;
    max-width: 220px;
    max-height: 220px;
    margin-bottom: 8px;
  }
  p {
    color: white;
    margin: 0;
    font-size: ${props => props.theme.ratio.one}rem;
    font-family: ${props => props.theme.fonts.main};
    line-height: ${props => props.theme.ratio.one};
  }
`;

export default Item;
