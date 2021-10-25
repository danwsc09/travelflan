import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";

import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Pagination from "@mui/material/Pagination";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import albumContext from "../../context/albumContext";
import { ROWS_PER_PAGE } from "../../utils/constants";
import AuthContext from "../../context/authContext";

const AlbumTable = () => {
  const { data, isLoading, setAlbums } = useContext(albumContext);
  const { authenticated } = useContext(AuthContext);
  const [page, setPage] = useState(1);

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" marginTop="30px">
        <CircularProgress />;
      </Box>
    );
  }

  const handleChangePage = (
    e: React.ChangeEvent<unknown>,
    pageNumber: number
  ) => {
    setPage(pageNumber);
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this album?")) {
      setAlbums(data.filter((album) => album.id !== id));
    }
  };

  const totalPages = Math.ceil(data.length / ROWS_PER_PAGE);
  const displayData = data.slice(
    ROWS_PER_PAGE * (page - 1),
    Math.min(data.length, ROWS_PER_PAGE * page)
  );

  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>title</TableCell>
              <TableCell>user id</TableCell>
              <TableCell>preview</TableCell>
              {authenticated ? <TableCell>Action</TableCell> : ""}
            </TableRow>
          </TableHead>
          <TableBody>
            {displayData.map((album) => (
              <TableRow key={album.id}>
                <TableCell>{album.id}</TableCell>
                <TableCell>{album.title}</TableCell>
                <TableCell>{album.userId}</TableCell>
                <TableCell>
                  <img src={album.image} />
                </TableCell>
                {authenticated ? (
                  <TableCell>
                    <Redirect to={`/edit/${album.id}`}>
                      <IconButton color="primary">
                        <EditIcon />
                      </IconButton>
                    </Redirect>
                    <IconButton
                      color="error"
                      onClick={() => handleDelete(album.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                ) : (
                  ""
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        sx={{
          justifyContent: "center",
          display: "flex",
          margin: "40px 0 60px",
        }}
      >
        <Pagination
          count={totalPages}
          siblingCount={2}
          page={page}
          onChange={handleChangePage}
          color="primary"
        />
      </Box>
    </>
  );
};

export default AlbumTable;
