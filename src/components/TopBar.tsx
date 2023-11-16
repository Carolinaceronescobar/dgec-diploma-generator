import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';


const TopBar: React.FC = () => {
  const handleLogout = () => {
    // Implementar la lógica para cerrar sesión
    console.log('Cerrando sesión...');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Logotipo de la universidad */}
        <Avatar alt="Logo" src="../src/assets/version horizontal.png" 
        sx={{ width:250, height:150, marginRight: 24 }} />
        {/* cerrar sesión en la esquina derecha */}
        <Button color="inherit" onClick={handleLogout} sx={{ marginLeft: 'auto' }}>
          Cerrar Sesión
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
