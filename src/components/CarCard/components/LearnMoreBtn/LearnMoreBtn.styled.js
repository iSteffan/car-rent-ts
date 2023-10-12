import styled from 'styled-components';

export const Btn = styled.button`
  padding: 12px 0px;
  margin-top: 28px;

  width: 100%;
  border: 0;
  border-radius: 12px;
  color: #fff;
  background: #3470ff;
  cursor: pointer;

  transition: background 250ms linear;

  &:hover,
  &:focus {
    background: #0b44cd;
  }
`;
