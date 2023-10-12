import styled from 'styled-components';
import { ReactComponent as Icon } from '../../img/x.svg';

export const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  padding: 40px;

  position: relative;
  width: 514px;
  height: 752px;
  background-color: #fff;
  border: none;
  border-radius: 24px;
`;

export const CloseButton = styled.button`
  padding: 0;
  position: absolute;
  width: 24px;
  height: 24px;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  cursor: pointer;
`;

export const CloseIcon = styled(Icon)`
  stroke: #121417;
  width: 24px;
  height: 24px;
  transition: stroke 250ms linear 0s;
  :hover {
    stroke: rgb(62, 133, 243);
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 248px;

  object-fit: cover;
  border-radius: 24px;
`;
