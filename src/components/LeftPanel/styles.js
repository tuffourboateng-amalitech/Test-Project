import React, { Fragment } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const INPUT = {
  default: '#D9DFEA',
  focused: '#35CAE2',
  error: '#FF647C'
};

/********** TEXT INPUT *************/

const input = ({ fullWidth, error, errorMessage, ...props }) => {
  return (
    <Fragment>
      <input {...props} />
      {error && <ErrorMessage>{errorMessage || 'This field can not be empty'}</ErrorMessage>}
    </Fragment>
  );
};

export const TextInput = styled(input)`
  outline: none;
  border-style: none;
  border-radius: 3px;
  border: ${props => {
    if (props.error) {
      return `1px solid ${INPUT.error}`;
    } else {
      return `1px solid ${INPUT.default}`;
    }
  }}
  background-color: #ffffff;
  width: ${props => {
    if (props.fullWidth) {
      return 'inherit';
    } else if (props.width) {
      return props.width;
    } else {
      return '166px';
    }
  }};
  height: 36px;
  font-size: 13px;
  color: #000000;
  line-height: 13px;
  padding-left: 16px;
  font-family: 'Sofia Pro';

  :focus {
    border: 1px solid ${INPUT.focused};
  }

  ::placeholder {
    color: ${INPUT.default};
  }

`;

export const TextInputLabel = styled.label`
  color: #6d7278;
  font-size: 13px;
  text-align: left;
`;

export const TextInputGroup = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: ${props => (props.horizontal ? 'row' : 'column')};
`;

export const TextArea = styled.textarea`
  resize: none;
  outline: none;
  border: 1px solid ${INPUT.default};
  border-radius: 3px;
  background-color: #ffffff;
  height: 102px;
  font-size: 13px;
  font-family: 'Sofia Pro';
  padding-left: 16px;
  padding-top: 13px;
  width: ${props => {
    if (props.fullWidth) {
      return 'inherit';
    } else if (props.width) {
      return props.width;
    } else {
      return '166px';
    }
  }};

  :focus {
    border: 1px solid ${INPUT.focused};
  }

  ::placeholder {
    color: ${INPUT.default};
  }
`;

const ErrorMessage = styled.span`
  color: ${INPUT.error}
  font-size: 13px;
`;

input.propTypes = {
  fullWidth: PropTypes.bool,
  error: PropTypes.bool,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  width: PropTypes.number || PropTypes.string
};

TextArea.propTypes = {
  fullWidth: PropTypes.bool,
  placeholder: PropTypes.string
};

/********** BUTTON *************/

const BUTTON = {
  default: '#FDC300',
  hovered: '#FDCF33',
  pressed: '#E6B201',
  disabled: 'rgba(0,0,0,0.1)'
};

const button = props => (
  <a {...props} aria-label={props.children}>
    {props.children}
  </a>
);

export const Button = styled(button)`
  padding: 12px 8px;
  font-size: 12px;
  border-radius: 2px;
  background-color: ${BUTTON.default};
  color: #fff;
  cursor: pointer;
  outline-color: ${BUTTON.hovered};

  :hover {
    background-color: ${BUTTON.hovered};
    border: 1px solid ${BUTTON.hovered};
  }

  &:active {
    background-color: ${BUTTON.pressed};
    border: 1px solid ${BUTTON.pressed};
  }

  ${props =>
    props.disabled &&
    css`
      background-color: ${BUTTON.disabled};
      border: none;
      pointer-events: none;
    `}
`;

button.propTypes = {
  disabled: PropTypes.bool,
  children: PropTypes.string.isRequired
};
