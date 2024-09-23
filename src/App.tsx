import { useEffect, useState } from "react";
import { fetchPhotosApi, Photo } from "./components/services/photos-api";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

const App: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchValue, setSearchValue] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [onPhoto, setOnPhoto] = useState<{ url: string; alt: string }>({
    url: "",
    alt: "",
  });

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
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotosBySearchValue();
  }, [searchValue, pageNumber]);

  const handleSearch = (newSearchValue: string) => {
    if (newSearchValue === searchValue) {
      return;
    }

    setSearchValue(newSearchValue);
    setPageNumber(1);
    setPhotos([]);
  };

  const onLoadMore = () => {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage errorMessage={error} />}
      {photos.length > 0 && (
        <ImageGallery photos={photos} openModal={openModal} setOnPhoto={setOnPhoto} />
      )}
      {loading && <Loader />}
      {photos.length > 0 && !loading && pageNumber < totalPage && (
        <LoadMoreBtn onLoadMore={onLoadMore} />
      )}
      <ImageModal isOpenModal={isOpenModal} closeModal={closeModal} onPhoto={onPhoto} />
    </div>
  );
};

export default App;
