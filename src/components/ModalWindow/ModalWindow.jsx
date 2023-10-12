import { createPortal } from 'react-dom';
import {
  Backdrop,
  ModalContainer,
  CloseButton,
  CloseIcon,
  Img,
} from './ModalWindow.styled';
import { CarDataModal } from './components/CarDataModal/CarDataModal';

export const ModalWindow = ({ data, handlerCloseModal }) => {
  const modalRoot = document.querySelector('#modal-root');

  const handleBackdropClick = event => {
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
