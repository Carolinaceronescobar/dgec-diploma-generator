import React from 'react';
import { Box, Typography, TextField } from '@mui/material';

const UsoInternoDireccionEstudios: React.FC = () => {
  return (
    <Box>
      <Typography variant="h5">Uso interno Dirección Estudios</Typography>
      <hr />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
        <TextField fullWidth id="regcur_codprog" label="Código del Programa (SIGA)" variant="outlined" />
        <TextField fullWidth id="regcur_perprog" label="Número de versión del programa" variant="outlined" />
      </Box>
    </Box>
  );
};

export default UsoInternoDireccionEstudios;
