import { useState, useEffect } from "react";
import axios from "axios";

import { albumContext } from "./context/albumContext";

import { Album } from "./types/album.type";
import { ALBUM_URL } from "./utils/constants";
import AlbumTable from "./components/AlbumTable";

const App: React.FC = () => {
  const [albums, setAlbums] = useState<Album[]>([]);

  useEffect(() => {
    const fetchAlbumData = async () => {
      const response = await axios.get(ALBUM_URL);
      setAlbums(response.data as Album[]);
      return response.data;
    };

    fetchAlbumData();
  }, []);

  return (
    <albumContext.Provider value={{ data: albums, setAlbums }}>
      <AlbumTable />
    </albumContext.Provider>
  );
};

export default App;
