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
import idGenerator from "./utils/idGenerator";
import { isLoggedIn } from "./utils/authenticate";

const App: React.FC = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(isLoggedIn());

  useEffect(() => {
    const fetchAlbumData = async () => {
      // get data
      setIsLoading(true);
      const response = await axios.get(ALBUM_URL);
      const data = response.data as Album[];

      // set Id
      const maxId = Math.max(...data.map((album) => album.id));
      idGenerator.setId(maxId);

      // assign and set color
      setAlbums(data.map((d) => ({ ...d, image: randomImageUrl(150) })));
      setIsLoading(false);
    };

    fetchAlbumData();
  }, []);

  return (
    <Router>
      <AlbumContext.Provider value={{ data: albums, setAlbums, isLoading }}>
        <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
          <Navbar />
          <Main />
        </AuthContext.Provider>
      </AlbumContext.Provider>
    </Router>
  );
};

export default App;
