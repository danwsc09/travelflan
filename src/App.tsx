import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";

import "./index.css";
import albumContext from "./context/albumContext";
import { Album } from "./types/album.type";
import { ALBUM_URL } from "./utils/constants";
import Navbar from "./components/nav/Navbar";
import Main from "./components/main/Main";
import { randomImageUrl } from "./utils/randomColor";

const App: React.FC = () => {
  const [albums, setAlbums] = useState<Album[]>([]);

  useEffect(() => {
    const fetchAlbumData = async () => {
      const response = await axios.get(ALBUM_URL);
      const data = response.data as Album[];

      // assign and set color
      setAlbums(data.map((d) => ({ ...d, image: randomImageUrl(150) })));
    };

    fetchAlbumData();
  }, []);

  return (
    <Router>
      <albumContext.Provider value={{ data: albums, setAlbums }}>
        <Navbar />
        <Main />
      </albumContext.Provider>
    </Router>
  );
};

export default App;
