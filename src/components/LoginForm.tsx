// LoginForm.tsx
import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

type LoginFormProps = {
  onLogin: (username: string, password: string) => void;
};

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


   const history = useNavigate();
  const handleLogin = () => {
    // Aquí podrías realizar la lógica de autenticación y llamar a onLogin
    onLogin(username, password);
    history('/Formulario');
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
