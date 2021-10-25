import React, { createContext } from "react";
import { Album } from "../types/album.type";

interface AlbumContext {
  data: Album[];
  isLoading: boolean;
  setAlbums: React.Dispatch<React.SetStateAction<Album[]>>;
}

const albumContext = createContext<AlbumContext>({
  data: [],
  isLoading: true,
  setAlbums: (albums) => {},
});

export default albumContext;
