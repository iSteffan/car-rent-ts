import styled from 'styled-components';

export const Btn = styled.button`
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  display: block;

  color: #3470ff;
  font-family: 'ManropeMedium';
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  text-decoration-line: underline;
  border: none;
  background-color: transparent;
  cursor: pointer;

  transition: color 250ms linear;

  &:hover,
  &:focus {
    color: #0b44cd;
  }
`;
