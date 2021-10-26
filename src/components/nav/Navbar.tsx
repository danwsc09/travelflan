import { useContext } from "react";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";

import AuthContext from "context/authContext";
import { logout } from "utils/authenticate";

const ButtonStyled = styled(Button)({ color: "#efefef" });

const Navbar: React.FC = () => {
  const { authenticated, setAuthenticated } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
    setAuthenticated(false);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "3rem",
        bgcolor: "#333",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          margin: "0 auto",
          width: "90%",
          height: "3rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link to="/">
          <ButtonStyled variant="text" sx={{ color: "#efefef" }}>
            Home
          </ButtonStyled>
        </Link>
        {authenticated ? (
          <ButtonStyled variant="text" onClick={handleLogout}>
            Log out
          </ButtonStyled>
        ) : (
          <Link to="/login">
            <ButtonStyled variant="text">Log in</ButtonStyled>
          </Link>
        )}
      </Box>
    </Box>
  );
};

export default Navbar;
