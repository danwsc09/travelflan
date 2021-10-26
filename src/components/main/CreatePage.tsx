import { ChangeEvent, useContext, useState } from "react";
import { withRouter } from "react-router-dom";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import AlbumContext from "../../context/albumContext";
import idGen from "utils/idGenerator";

interface Props {
  history: any;
}

const UpdatePage = (props: Props) => {
  const { data, setAlbums } = useContext(AlbumContext);

  const [title, setTitle] = useState("");
  console.log(idGen);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // setAlbums(
    //   data.map((album) => {
    //     if (album.id !== intId) return album;
    //     return { ...album, title, image: imageUrl };
    //   })
    // );
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
          />
          <Button type="submit">Submit</Button>
        </Box>
      </form>
    </Box>
  );
};

export default withRouter(UpdatePage);
