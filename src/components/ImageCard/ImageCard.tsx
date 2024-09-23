import css from "./ImageCard.module.css";

interface ImageCardProps {
  url: {
    regular: string;
    small: string;
  };
  alt: string;
  openModal: () => void;
  setOnPhoto: (photo: { url: string; alt: string }) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ url, alt, openModal, setOnPhoto }) => {
  const handleClick = () => {
    setOnPhoto({ url: url.regular, alt });
    openModal();
  };

  return (
    <div className={css.wrapper}>
      <img
        className={css.picture}
        src={url.small}
        alt={alt}
        width={320}
        height={220}
        onClick={handleClick}
      />
    </div>
  );
};

export default ImageCard;
