// LoginForm.tsx
import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import { login } from '../utils/api';

type LoginFormProps = {
  onLogin: (username: string, password: string) => void;
};

const LoginForm: React.FC = () => {
    const [username, setUsername] = useState('Usuario ');
    const [password, setPassword] = useState('');
    const { setToken } = useAuth();

  const history = useNavigate();
  
  const handleLogin = async () => {
    try {
      const response = await login(username, password);
      setToken(response.token);
    } catch (error) {
      console.error('Login failed', error);
    }
  };


  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Iniciar Sesión
      </Typography>
      <TextField
        label="Usuario"
        variant="outlined"
        fullWidth
        margin="normal"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Contraseña"
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleLogin}>
        Iniciar Sesión
      </Button>
      <Typography variant="body2" style={{ marginTop: '1rem' }}>
        ¿No tienes una cuenta? <Link to="/registro">Regístrate</Link>
      </Typography>
    </div>
  );
};

export default LoginForm;
