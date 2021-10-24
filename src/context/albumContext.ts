import React, { createContext } from "react";
import { Album } from "../types/album.type";

interface AlbumContext {
  data: Album[];
  setAlbums: React.Dispatch<React.SetStateAction<Album[]>>;
}

const albumContext = createContext<AlbumContext>({
  data: [],
  setAlbums: (albums) => {},
});

export default albumContext;
