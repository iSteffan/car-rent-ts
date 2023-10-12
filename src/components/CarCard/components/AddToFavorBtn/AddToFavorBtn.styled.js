import styled from 'styled-components';
import { ReactComponent as FavoriteIcon } from '../../../../img/heart.svg';
import { ReactComponent as IconActive } from '../../../../img/heart-active.svg';

export const Icon = styled(FavoriteIcon)`
  width: 18px;
  height: 18px;
  fill: none;
`;

export const ActiveIcon = styled(IconActive)`
  width: 18px;
  height: 18px;
`;

export const Btn = styled.button`
  padding: 0;
  position: absolute;
  top: 14px;
  right: 14px;

  width: 18px;
  height: 18px;
  border: 0;
  background-color: transparent;
  cursor: pointer;
`;
