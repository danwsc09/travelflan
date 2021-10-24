interface BaseAlbum {
  userId: number;
  title: string;
}

interface Album extends BaseAlbum {
  id: number;
  image: string;
}

export { BaseAlbum, Album };
