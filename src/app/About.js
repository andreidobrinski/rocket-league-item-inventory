import React, { useState } from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import { learnMoreEvent, portfolioEvent, repoEvent } from '../analytics';

const About = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(true);
    learnMoreEvent();
  };

  return (
    <Wrap>
      <ToggleButton onClick={handleClick}>... Rocket League Item Inventory?</ToggleButton>
      <Fade bottom when={show}>
        <>
          <p>Glad you asked.</p>
          <p>
            This is an app to help you keep track of the items you want to trade in Rocket League.
            It&apos;s built entirely by{' '}
            <a href="https://andreidobrinski.github.io/" onClick={portfolioEvent}>
              Andrei Dobrinski
            </a>{' '}
            and is{' '}
            <a
              href="https://github.com/andreidobrinski/rocket-league-item-inventory"
              onClick={repoEvent}
            >
              open source.
            </a>
          </p>
          <h3>Ok, but why?</h3>
          <p>
            Because item inventories grow and become hard to keep track of. When I look at my
            inventory in Rocket League, I need to mentally filter out:
          </p>
          <ul>
            <li>Items that I don&apos;t want to trade</li>
            <li>Items that aren&apos;t tradeable</li>
            <li>Items that wouldn&apos;t be worth much on their own</li>
          </ul>
          <p>
            I&apos;d rather look at a curated list my items when I&apos;m checking out potential
            trades on the Rocket League forum.
          </p>
          <h3>Can I use it?</h3>
          <p>Of course! Right now you can login, save items, and delete items.</p>
          <p>
            For the images, I&apos;m just using the ones from the{' '}
            <a href="https://rocket-league.com/items">Rocket League Database</a>. Once you find the
            image for your item, right click, Inspect Element, find the img tag, right click the src
            and Copy Link Address. It&apos;s not the easiest experience, but it&apos;s what
            we&apos;ve got!
          </p>
          <p>
            I plan on adding a master list of items (with images) to select from at some point. If
            that&apos;s something you&apos;d want to help out with, let me know!
          </p>
        </>
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
  color: ${props => props.theme.colours.secondary};
`;

export default About;
