import { createPortal } from 'react-dom';
import { MouseEvent } from 'react';
import { Backdrop, ModalContainer, CloseButton, CloseIcon, Img } from './ModalWindow.styled';
import { CarDataModal } from './components/CarDataModal/CarDataModal';
import { ResponseData } from '../../App.types';

type Props = { data: ResponseData; handlerCloseModal: () => void };

export const ModalWindow = ({ data, handlerCloseModal }: Props) => {
  const modalRoot = document.querySelector('#modal-root');

  if (!modalRoot) {
    return null;
  }

  const handleBackdropClick = (event: MouseEvent): void => {
    if (event.currentTarget === event.target) handlerCloseModal();
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <ModalContainer>
        <CloseButton onClick={handlerCloseModal}>
          <CloseIcon />
        </CloseButton>
        <Img src={data.img} alt={data.description} />
        <CarDataModal data={data} />
      </ModalContainer>
    </Backdrop>,
    modalRoot
  );
};
