import { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Box from "@mui/material/Box";

import AlbumTable from "components/main/AlbumTable";
import LoginPage from "components/main/LoginPage";
import AuthContext from "context/authContext";
import UpdatePage from "components/main/UpdatePage";
import CreatePage from "components/main/CreatePage";

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
