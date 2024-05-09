// Login.js
import React, { useState } from 'react';
import {
    Container,
    TextField,
    Button,
    Typography,
    Box
} from '@mui/material';
import axios from 'axios';

export const Login = ({ onLoginSuccess }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/login', { username, password });
            if (response.data.success) {
                onLoginSuccess();
            } else {
                alert('Login failed');
            }
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    return (
        <Container maxWidth="xs">
            <Typography variant="h4" align="center" gutterBottom>
                Login
            </Typography>
            <Box
                component="form"
                onSubmit={handleLogin}
                noValidate
                sx={{ mt: 3 }}
            >
                <TextField
                    name="username"
                    label="Username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    fullWidth
                    required
                />
                <TextField
                    name="password"
                    label="Password"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    fullWidth
                    required
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
            </Box>
        </Container>
    );
};

