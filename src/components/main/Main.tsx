import { Switch, Route, Redirect } from "react-router-dom";
import AlbumTable from "./AlbumTable";
import LoginPage from "./LoginPage";
import Box from "@mui/material/Box";
import { useContext } from "react";
import AuthContext from "../../context/authContext";
import UpdatePage from "./UpdatePage";
import CreatePage from "./CreatePage";

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
        <Route path="/edit/:id">
          {authenticated ? <UpdatePage /> : <Redirect to="/login" />}
        </Route>
        <Route path="/create">
          <CreatePage />
        </Route>
        <Route path="/">
          <AlbumTable />
        </Route>
      </Switch>
    </Box>
  );
};

export default Main;
