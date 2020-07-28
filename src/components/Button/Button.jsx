import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

export const Button = ({
  testid,
  text,
  onClick,
  tabIndex = -1,
  btnType = 'default',
  disabled = false,
}) => {
  return (
    <StyledButton
      data-testid={testid}
      onClick={onClick}
      tabIndex={tabIndex}
      disabled={disabled}
      btnType={btnType}
    >
      {text}
    </StyledButton>
  );
};

const defaultButtonCss = css`
  border-radius: 44px;
  width: 375px;
  background-color: var(--defaultbtn);
`;

const submitButtonCss = css`
  width: 30%;
  border-radius: 0px 20px 20px 0px;
  background-color: var(--primarybtn);
  :disabled {
    background-color: var(--disabledbtn);
  }
`;

const StyledButton = styled.button`
  display: flex;
  flex-wrap: wrap;
  border: none;
  height: 4.87rem;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: var(--lightcolor);
  outline: none;
  ${(props) => (props.btnType === 'submit' ? submitButtonCss : defaultButtonCss)}
  :hover {
    cursor: pointer;
  }
`;
