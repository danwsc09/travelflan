import { Switch, Route } from "react-router-dom";
import AlbumTable from "./AlbumTable";
import LoginPage from "./LoginPage";
import Box from "@mui/material/Box";

const Main: React.FC = () => {
  return (
    <Box
      sx={{
        width: "80%",
        margin: "0 auto",
      }}
    >
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/">
          <AlbumTable />
        </Route>
      </Switch>
    </Box>
  );
};

export default Main;
