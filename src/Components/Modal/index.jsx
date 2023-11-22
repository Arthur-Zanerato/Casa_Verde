import { Background, ModalStyle, Close } from "./styles";

const Modal = ({ isOpen, setModalOpen, children }) => {
  if (isOpen) {
    return (
      <Background>
        <ModalStyle>
            <Close onClick={setModalOpen}>X</Close>
          <div>{children}</div>
        </ModalStyle>
      </Background>
    );
  }

  return null;
};

export default Modal;
