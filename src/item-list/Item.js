import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Item = ({ item }) => (
  <Wrap>
    <img src={item.imageLink} alt={item.name} />
    <p>{item.name}</p>
    <p>{item.rarity}</p>
    {item.certification && <p>{item.certification}</p>}
  </Wrap>
);

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

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
    line-height: 2;
  }
`;

export default Item;
