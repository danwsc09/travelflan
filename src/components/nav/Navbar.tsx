import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useContext } from "react";
import AuthContext from "../../context/authContext";

const Navbar: React.FC = () => {
  const { authenticated, setAuthenticated } = useContext(AuthContext);
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
          <Button variant="text">Home</Button>
        </Link>
        {authenticated ? (
          <Button variant="text" onClick={() => setAuthenticated(false)}>
            Log out
          </Button>
        ) : (
          <Link to="/login">
            <Button variant="text">Log in</Button>
          </Link>
        )}
      </Box>
    </Box>
  );
};

export default Navbar;
