import { ChangeEvent, useContext, useState } from "react";
import { useParams, Redirect, withRouter } from "react-router-dom";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import AlbumContext from "../../context/albumContext";
import { Typography } from "@mui/material";

interface UrlParams {
  id: string;
}

interface Props {
  // to support react-router-dom's withRouter()
  history: any;
}

const UpdatePage = (props: Props) => {
  // Retrieve item to edit
  let { id } = useParams<UrlParams>();
  const { data, setAlbums } = useContext(AlbumContext);
  const intId = parseInt(id);
  const editAlbum = data.find((d) => d.id === intId);
  if (editAlbum === undefined) {
    return <Redirect to="/" />;
  }

  const [title, setTitle] = useState(editAlbum.title);
  const [imageUrl, setImageUrl] = useState(editAlbum.image);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAlbums(
      data.map((album) => {
        if (album.id !== intId) return album;
        return { ...album, title, image: imageUrl };
      })
    );
    props.history.push("/");
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleImageUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
    setImageUrl(e.target.value);
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column" width="50%" margin="0 auto">
          <Typography variant="h4" textAlign="center" margin="30px 0 15px">
            Updating album
          </Typography>
          <TextField
            value={title}
            onChange={handleTitleChange}
            label="Title"
            margin="normal"
          />
          <TextField
            value={imageUrl}
            onChange={handleImageUrlChange}
            label="Image"
            margin="normal"
          />
          <Button type="submit">Submit</Button>
        </Box>
      </form>
    </Box>
  );
};

export default withRouter(UpdatePage);
