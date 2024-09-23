import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

interface Photo {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
}

interface ImageGalleryProps {
  photos: Photo[];
  openModal: () => void;
  setOnPhoto: (photo: { url: string; alt: string }) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ photos, openModal, setOnPhoto }) => {
  return (
    <ul className={css.photosList}>
      {photos.map((photo) => (
        <li key={photo.id}>
          <ImageCard
            url={photo.urls}
            alt={photo.alt_description}
            openModal={openModal}
            setOnPhoto={setOnPhoto}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
