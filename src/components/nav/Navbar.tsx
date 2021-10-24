import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Navbar: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "3rem",
        bgcolor: "#81d4fa",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          margin: "0 auto",
          width: "90%",
          height: "3rem",
          bgcolor: "#81d4fa",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link to="/">
          <Typography variant="subtitle1">Home</Typography>
        </Link>
        <Link to="/login">
          <Typography variant="subtitle1">Login</Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default Navbar;
