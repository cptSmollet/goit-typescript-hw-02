import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ photos, openModal, setOnPhoto }) => {
  return (
    <ul className={css.photosList}>
      {photos.map((photo) => {
        return (
          <li key={photo.id}>
            <ImageCard
              url={photo.urls}
              alt={photo.alt_description}
              openModal={openModal}
              setOnPhoto={setOnPhoto}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;