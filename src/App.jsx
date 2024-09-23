import { useEffect, useState } from "react";
import { fetchPhotosApi } from "./components/services/photos-api";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [onPhoto, setOnPhoto] = useState({ url: "", alt: "" });

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  useEffect(() => {
    if (searchValue.trim() === "") return;
    const fetchPhotosBySearchValue = async () => {
      try {
        setLoading(true);

        const data = await fetchPhotosApi(searchValue, pageNumber);

        setPhotos((prev) => [...prev, ...data.results]);
        setTotalPage(data.total_pages);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPhotosBySearchValue();
  }, [searchValue, pageNumber]);

  const onSubmit = (searchTerm) => {
    setPhotos([]);
    setSearchValue(searchTerm);
    setPageNumber(1);
  };
  const onLoadMore = () => {
    setPageNumber((pageNumber) => pageNumber + 1);

    console.log(pageNumber);
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      <ImageModal
        isOpenModal={isOpenModal}
        closeModal={closeModal}
        onPhoto={onPhoto}
      />
      {loading && <Loader />}
      {error !== null && <ErrorMessage errorMessage={error} />}
      {photos.length > 0 && (
        <ImageGallery
          photos={photos}
          openModal={openModal}
          setOnPhoto={setOnPhoto}
        />
      )}
      {pageNumber < totalPage && <LoadMoreBtn onLoadMore={onLoadMore} />}
    </>
  );
}

export default App;