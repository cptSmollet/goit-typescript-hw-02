import css from "./ImageModal.module.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

interface ImageModalProps {
  isOpenModal: boolean;
  closeModal: () => void;
  onPhoto: {
    url: string;
    alt: string;
  };
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpenModal, closeModal, onPhoto }) => {
  return (
    <Modal
      isOpen={isOpenModal}
      onRequestClose={closeModal}
      style={{
        overlay: {
          backgroundColor: "rgba(112, 211, 221, 0.3)",
        },
        content: {
          borderRadius: "8px",
          width: "50%",
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          background: "transparent",
          transform: "translate(-50%, -50%)",
        },
      }}
      closeTimeoutMS={200}
    >
      <img className={css.photo} src={onPhoto.url} alt={onPhoto.alt} />
    </Modal>
  );
};

export default ImageModal;
