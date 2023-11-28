// src/auth/Login.tsx
import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    // Lógica de inicio de sesión: envía credenciales al servidor o realiza la autenticación aquí
    console.log('Iniciar sesión con:', { username, password });
  };

  return (
    <div>
      <Typography variant="h5">Iniciar Sesión</Typography>
      <form>
        <TextField
          label="Nombre de Usuario"
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
      </form>
    </div>
  );
};

export default Login;
