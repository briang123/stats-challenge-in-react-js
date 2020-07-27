import React from 'react';
import logo from './../../logo.svg';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const variants = {
  load: {
    scale: 1.2,
    transition: {
      type: 'spring',
    },
  },
  unload: {
    scale: 0.25,
  },
};

export const Header = ({ heading }) => {
  return (
    <StyledHeader data-testid="header">
      <Logo
        src={logo}
        alt="logo"
        variants={variants}
        initial="unload"
        animate="load"
        exit="unload"
      />
      <Heading>{heading}</Heading>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 20vh;
  font-size: calc(10px + 4vmin);
  background-color: var(--white);
  color: var(--graytext);
  margin-top: 25px;
  @media (min-width: 600px) {
    /* margin-top: 0px; */
    font-size: calc(10px + 2vmin);
  }
`;

const Logo = styled(motion.img)`
  height: 10vmin;
  pointer-events: none;
  @media (min-width: 600px) {
    height: 6vmin;
  }
`;

const Heading = styled.p``;
