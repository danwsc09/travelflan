import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Box width="100%" margin="0 auto">
      <Typography variant="h3">Login page</Typography>
      <TextField
        value={email}
        id="email"
        label="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        value={password}
        id="password"
        label="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
    </Box>
  );
};

export default LoginPage;
