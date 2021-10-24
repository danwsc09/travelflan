import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";

import "./index.css";
import AlbumContext from "./context/albumContext";
import AuthContext from "./context/authContext";
import { Album } from "./types/album.type";
import { ALBUM_URL } from "./utils/constants";
import Navbar from "./components/nav/Navbar";
import Main from "./components/main/Main";
import { randomImageUrl } from "./utils/randomColor";

const App: React.FC = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [authenticated, setAuthenticated] = useState(true); // logged in by default

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
      <AlbumContext.Provider value={{ data: albums, setAlbums }}>
        <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
          <Navbar />
          <Main />
        </AuthContext.Provider>
      </AlbumContext.Provider>
    </Router>
  );
};

export default App;
