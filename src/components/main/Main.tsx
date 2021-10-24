import { Switch, Route, Redirect } from "react-router-dom";
import AlbumTable from "./AlbumTable";
import LoginPage from "./LoginPage";
import Box from "@mui/material/Box";
import { useContext } from "react";
import AuthContext from "../../context/authContext";

const Main: React.FC = () => {
  const { authenticated } = useContext(AuthContext);

  return (
    <Box
      sx={{
        width: "80%",
        margin: "0 auto",
      }}
    >
      <Switch>
        <Route path="/login">
          {authenticated ? <Redirect to="/" /> : <LoginPage />}
        </Route>
        <Route path="/">
          <AlbumTable />
        </Route>
      </Switch>
    </Box>
  );
};

export default Main;
