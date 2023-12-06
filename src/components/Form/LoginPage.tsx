import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://educacioncontinua.usm.cl/">
        - DGEC Inicio Sesión - 
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function LoginPage() {
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email');
        const password = data.get('password');
        
      
      //  try { 
        //     const urllogin= '';
        //   const response = await fetch(urllogin , {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ email, password }),
        //   });
      
        //   if (response.ok) {
        //     const responseData = await response.json();
        //     console.log('Respuesta del backend:', responseData);
        //     // Aquí puedes manejar la respuesta del backend, como redirigir al usuario a otra página
        //   } else {
        //     console.error('Error al enviar el formulario al backend');
        //   }
        // } catch (error) {
        //   console.error('Error:', error);
       // }
      };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Inicia sesión al Formulario
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Correo"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Recordarme"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Inicia Sesión
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Olvido su contraseña
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"No tienes una cuenta? Registrate"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

// type LoginPageProps = {
//     // onLogin: (username: string, password: string) => void;
//     onLogin: () => void;

// };

// const LoginPage = () => {
        
// const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleUsernameChange = (event : any) => {
//     setUsername(event.target.value);
//   };

//   const handlePasswordChange = (event: any) => {
//     setPassword(event.target.value);
//   };

//   const handleSubmit = (event: any) => {
//     event.preventDefault();
    
//     console.log('Username:', username, 'Password:', password);
//   };
  
//     return (
        
//             <Container component="main" maxWidth="xs">
//               <Paper elevation={3} style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//                 <Typography variant="h3" gutterBottom>
//                   Mi Aplicación
//                 </Typography>
                
//               </Paper>
//               <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="username">Usuario:</label>
//         <input
//           type="text"
//           id="username"
//           value={username}
//           onChange={handleUsernameChange}
//         />
//       </div>
//       <div>
//         <label htmlFor="password">Contraseña:</label>
//         <input
//           type="password"
//           id="password"
//           value={password}
//           onChange={handlePasswordChange}
//         />
//       </div>
//       <button type="submit">Iniciar sesión</button>
//     </form>
//               <Typography variant="body2" style={{ marginTop: '1rem' }}>
//                 ¿Olvidaste tu contraseña? <Link to="/recuperar-contrasena">Recupérala aquí</Link>
//               </Typography>
//             </Container>
//           );
       
//   };

// const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
//   return (
//     <Container component="main" maxWidth="xs">
//       <Paper elevation={3} style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//         <Typography variant="h3" gutterBottom>
//           Mi Aplicación
//         </Typography>
//         <LoginForm onLogin={onLogin} />
//       </Paper>
//       <Typography variant="body2" style={{ marginTop: '1rem' }}>
//         ¿Olvidaste tu contraseña? <Link to="/recuperar-contrasena">Recupérala aquí</Link>
//       </Typography>
//     </Container>
//   );
// };

//export default LoginPage;

