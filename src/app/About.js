import React, { useState } from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import ReactMarkdown from 'react-markdown';

const text = `
  Glad you asked.

  This is an app to help you keep track of the items you want to trade in Rocket League.
  It's built entirely by [Andrei Dobrinski](https://andreidobrinski.github.io/) and is [open source](https://github.com/andreidobrinski/rocket-league-item-inventory).

  ### Ok, but why?

  Because item inventories grow and become hard to keep track of.
  When I look at my inventory in Rocket League, I need to mentally filter out:
  - Items that I don't want to trade
  - Items that aren't tradeable
  - Items that wouldn't be worth much on their own


  I'd rather look at a curated list my items when I'm checking out potential trades on the Rocket League forum.

  ### Can I use it?

  Of course! Right now you can login, save items, and delete items.

  For the images, I'm just using the ones from the [Rocket League Database](https://rocket-league.com/items).
  Once you find the image for your item, right click, Inspect Element, find the img tag, right click the src and Copy Link Address.
  It's not the easiest experience, but it's what we've got!

  I plan on adding a master list of items (with images) to select from at some point. If that's something you'd want to help out with, let me know!
`;

const About = () => {
  const [show, setShow] = useState(false);
  return (
    <Wrap>
      <ToggleButton onClick={() => setShow(true)}>... Rocket League Item Inventory?</ToggleButton>
      <Fade bottom when={show}>
        <ReactMarkdown source={text} />
      </Fade>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 500px;
  margin: 64px auto 0;
  height: 100%;
  padding-bottom: 64px;
`;

const ToggleButton = styled.button.attrs(() => ({ type: 'button' }))`
  font-size: ${props => props.theme.ratio.two}rem;
  font-family: ${props => props.theme.fonts.main};
  background-color: transparent;
  border: none;
  text-decoration: underline;
  color: ${props => props.theme.colours.indigo};
`;

export default About;
