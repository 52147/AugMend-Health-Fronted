import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../firebase";

export const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      onLoginSuccess();
      console.log("User logged in:", userCredential.user);
    } catch (error) {
      console.error("Login error:", error.message);
      alert("Login failed: " + error.message);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const userCredential = await signInWithPopup(auth, provider);
      onLoginSuccess();
      console.log("User logged in with Google:", userCredential.user);
    } catch (error) {
      console.error("Google login error:", error.message);
      alert("Google login failed: " + error.message);
    }
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" align="center" gutterBottom>
        Login
      </Typography>
      <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 3 }}>
        <TextField
          name="email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          required
        />
        <TextField
          name="password"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          required
          style={{ marginTop: 10 }}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 3, mb: 2 }}
        >
          Login
        </Button>
        <Button
          onClick={handleGoogleLogin}
          fullWidth
          variant="contained"
          sx={{ mt: 1, mb: 2 }}
          style={{ backgroundColor: "#4285F4", color: "white" }}
        >
          Login with Google
        </Button>
      </Box>
    </Container>
  );
};
