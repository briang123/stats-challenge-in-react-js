import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const containerVariants = {
  open: {
    scale: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
      staggerDirection: -1,
    },
  },
  closed: {
    scale: 0.7,
  },
};

const statVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: { y: -20, opacity: 0 },
};

export const Tile = ({ value, title }) => {
  if (!title) {
    console.error('Title is required for dashboard tile');
    return null;
  }

  return (
    <StyledTile
      data-testid={`tile-container-${title}`}
      variants={containerVariants}
      initial="closed"
      animate="open"
      exit="closed"
    >
      <Title data-testid={`tile-title-${title}`}>{title}</Title>
      <Value
        data-testid={`tile-value-${title}`}
        key={value}
        variants={statVariants}
        initial="closed"
        animate="open"
        exit="closed"
      >
        {value}
      </Value>
    </StyledTile>
  );
};

Tile.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string.isRequired,
};

Tile.defaultProps = {
  value: '--',
};

export default Tile;

const StyledTile = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 200px;
  border-radius: 50%;
  border: 5px solid var(--tileborder);
  background-color: var(--tilebg);
  box-sizing: border-box;
  margin: 10px;
  & h4 {
    margin-top: -15px;
  }
  @media (min-width: 600px) {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    border: 10px solid var(--tileborder);
    height: 335px;
    width: 335px;
    margin: 0px;
  }
`;

const Title = styled.h4`
  margin: 5px 0px;
  color: var(--primarybg);
`;

const Value = styled(motion.h3)`
  margin: 0px;
`;
