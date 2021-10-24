import React, { useContext, useState } from "react";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";

import { albumContext } from "../../context/albumContext";
import { ROWS_PER_PAGE } from "../../utils/constants";

const AlbumTable = () => {
  const { data } = useContext(albumContext);
  const [page, setPage] = useState(1);

  const handleChangePage = (
    e: React.ChangeEvent<unknown>,
    pageNumber: number
  ) => {
    setPage(pageNumber);
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
            </TableRow>
          </TableHead>
          <TableBody>
            {displayData.map((d) => (
              <TableRow key={d.id}>
                <TableCell>{d.id}</TableCell>
                <TableCell>{d.title}</TableCell>
                <TableCell>{d.userId}</TableCell>
                <TableCell>
                  <img src={d.image} />
                </TableCell>
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
