import React, {useState, useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { obtenerInformacionUsuario } from '../utils/api'; //importa la función desde api.tsx
import Routes from '../Routes';

const TopBar: React.FC = () => {
  //Estado para gestionar el menú desplegable
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  //Estado para almacenar la información del usuario
  const [usuario, setUsuario] = useState<any>(null);

 // Función para obtener el nombre de usuario después de iniciar sesión 
  const obtenerUserNameDeAlgunaManera = () => {
    
    //Suponiendo que el nombre de usuario esta almacenado en el local "storage" después de inicio de sesión
    const token= localStorage.getItem('token');
    const usuario= token ? JSON.parse(atob(token.split('.')[1])) : null;

    return usuario ? usuario.userName : null;
  };

    // Efecto para obtener información del usuario después de montar el componente
  useEffect(() => {
    //suponemos tener el userName después de iniciar sesión
    const userName = obtenerUserNameDeAlgunaManera ();
    //Llama a la función para obtener información del usuario si hay un nombre de usuario
  
    if (userName) {
    obtenerInformacionUsuario(userName)
  .then((data) => {
    setUsuario(data);
  })
  .catch((error) => {
    // Maneja el error si es necesario
    console.error('Error al obtener información del usuario', error);
  });
}
}, []); // La dependencia está vacía porque solo queremos que se ejecute una vez al montar el componente

 // Función para manejar el cierre del menú desplegable
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Función para manejar la apertura del menú desplegable
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

    // Función para manejar el cierre de sesión
    const handleLogout = () => {
      // Implementar la lógica para cerrar sesión
      console.log('Cerrando sesión...');
    };

return (
  <AppBar position="static" style={{ backgroundColor: '#004B85' }}>
    <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
      
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {/*Logotipo de la Universidad */}
      <Avatar
  alt="logo"
  src='./src/assets/version horizontal.png'
  sx={{
    width: 350,
    height: 150,
    marginRight: 50,
  }} />


      {/*Mostrar información del usuario si esta disponible */}
      {usuario && (
        <div style={{ marginLeft: 20, color: 'white'}}>
           {/* Botón para mostrar el nombre de usuario */}
           <Button color="inherit" onClick={handleClick} style={{ fontFamily: 'Roboto Condensed' }}>
          {usuario.nombre}
          </Button>
          {/*Se puede añadir otras propiedades al usuario*/}
      {/* Menú desplegable */}
      <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      <MenuItem onClick={handleClose}>Perfil</MenuItem>
      <MenuItem onClick={handleLogout}>Cerrar Sesión</MenuItem>
    </Menu>
  </div>
)}
</div>     
      {/* Mostrar opciones según el perfil de usuario */}
      {usuario && usuario.perfil === 'usuario1' && (
          <Button color="inherit" href="./main.tsx" style={{ fontFamily: 'Roboto Condensed', color: 'white' }}>
            Formulario Usuario 1
          </Button>
        )}
        {usuario && usuario.perfil === 'usuario2' && (
          <Button color="inherit" href="./src/components/Form/UsoInterno/UsointernoDGEC.tsx" style={{ fontFamily: 'Roboto Condensed', color: 'white' }}>
            Uso Interno DGEC
          </Button>
        )}
        {usuario && usuario.perfil === 'usuario3' && (
          <Button color="inherit" href="./src/components/Form/UsoInterno/UsointernoFinanzasForm.tsx" style={{ fontFamily: 'Roboto Condensed', color: 'white' }}>
            Uso Interno Finanzas
          </Button>
        )}
        {usuario && usuario.perfil === 'usuario4' && (
          <Button color="inherit" href="./src/components/Form/UsoInterno/UsointernoDireccionEstudios.tsx" style={{ fontFamily: 'Roboto Condensed', color: 'white' }}>
            Uso Interno Dirección de Estudios
          </Button>
        )}

      </Toolbar>
    </AppBar>
  );
};

export default TopBar;