import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Box from "@mui/material/Box";

const CreateButton = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "right", marginTop: "10px" }}>
      <Link to="/create">
        <Fab aria-label="add" size="small" color="primary">
          <AddIcon />
        </Fab>
      </Link>
    </Box>
  );
};

export default CreateButton;
