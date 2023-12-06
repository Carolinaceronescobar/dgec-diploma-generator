// RegistroPage.tsx
import React from 'react';
import { Container, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


const RegistroPage: React.FC = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h3" gutterBottom>
          Regístrate
        </Typography>
        {/* Aquí puedes agregar el formulario de registro si es necesario */}
        <Typography variant="body2" style={{ marginTop: '1rem' }}>
          ¿Ya tienes una cuenta? <Link to="/inicio-sesion">Inicia Sesión</Link>
        </Typography>
      </Paper>
    </Container>
  );
};

export default RegistroPage;
