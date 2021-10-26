import { ChangeEvent, useContext, useState } from "react";
import { withRouter } from "react-router-dom";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import AlbumContext from "../../context/albumContext";
import idGen from "utils/idGenerator";
import { randomImageUrl } from "utils/randomColor";
import { Album } from "types/album.type";

interface Props {
  history: any;
}

const UpdatePage = (props: Props) => {
  const { data, setAlbums } = useContext(AlbumContext);

  const [title, setTitle] = useState("");
  console.log(idGen);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newAlbum: Album = {
      title,
      image: randomImageUrl(150),
      userId: 99,
      id: idGen.nextId(),
    };

    // add new album to top of the list
    setAlbums([newAlbum].concat(data));
    props.history.push("/");
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column" width="50%" margin="0 auto">
          <Typography variant="h4" textAlign="center" margin="30px 0 15px">
            Create a new album
          </Typography>
          <TextField
            value={title}
            onChange={handleTitleChange}
            margin="normal"
            label="Album Title"
          />
          <Button type="submit">Create</Button>
        </Box>
      </form>
    </Box>
  );
};

export default withRouter(UpdatePage);
