import css from "./ImageCard.module.css";

const ImageCard = ({ url, alt, openModal, setOnPhoto }) => {
  const handleClick = () => {
    setOnPhoto({ url: url.regular, alt: alt });
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