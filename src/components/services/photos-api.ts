import axios from "axios";

export interface Photo {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
}

interface FetchPhotosResponse {
  results: Photo[];
  total_pages: number;
}

export const fetchPhotosApi = async (
  searchValue: string,
  pageNumber = 1
): Promise<FetchPhotosResponse> => {
  const params = {
    query: searchValue,
    page: pageNumber,
    orientation: "landscape",
    per_page: 20,
  };

  const { data } = await axios.get<FetchPhotosResponse>(
    "https://api.unsplash.com/search/photos?client_id=A7YRUc57iXs06cE1X3dTKf3BBSG-taztQvX54TDLNgI",
    {
      params,
      headers: {
        "Accept-Version": "v1",
      },
    }
  );
  return data;
};

