import React, { useContext, useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

import { validateEmail } from "../../utils/validation";
import { INVALID_EMAIL_MESSAGE } from "../../utils/constants";
import { login } from "../../utils/authenticate";
import AuthContext from "../../context/authContext";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthenticated } = useContext(AuthContext);

  const onLogin = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (login(email, password)) {
      setAuthenticated(true);
    }
  };

  const isValidEmail = validateEmail(email);

  return (
    <Box width="100%" margin="0 auto" textAlign="center">
      <Typography variant="h4" marginTop="40px">
        Login
      </Typography>
      <form onSubmit={onLogin}>
        <Box display="flex" flexDirection="column" width="30%" margin="0 auto">
          <TextField
            value={email}
            id="email"
            label="Email"
            margin="normal"
            onChange={(e) => setEmail(e.target.value)}
            error={!isValidEmail}
            helperText={isValidEmail ? "" : INVALID_EMAIL_MESSAGE}
          />
          <TextField
            value={password}
            id="password"
            label="Password"
            type="password"
            margin="normal"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Log in</Button>
        </Box>
      </form>
    </Box>
  );
};

export default LoginPage;
