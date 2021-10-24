import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Button } from "@mui/material";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Box width="100%" margin="0 auto" textAlign="center">
      <Typography variant="h4" marginTop="40px">
        Login
      </Typography>
      <Box display="flex" flexDirection="column" width="30%" margin="0 auto">
        <TextField
          value={email}
          id="email"
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          margin="normal"
        />
        <TextField
          value={password}
          id="password"
          label="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
        />
        <Button>Log in</Button>
      </Box>
    </Box>
  );
};

export default LoginPage;
