import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';
import React from 'react';

import { Button } from '../app/styled';

const AddItemButton = ({ isAddingItem, setAddingItem }) => (
  <Fade right when={!isAddingItem}>
    <Button onClick={() => setAddingItem(true)}>Add Item</Button>
  </Fade>
);

AddItemButton.propTypes = {
  isAddingItem: PropTypes.bool.isRequired,
  setAddingItem: PropTypes.func.isRequired,
};

export default AddItemButton;
