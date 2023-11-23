// UsoInternoDGEC.tsx

import React from 'react';
import { Typography, TextField, FormControl, Select, MenuItem, Button, Box } from '@mui/material';

interface UsoInternoDGECProps {
  campos: { campo1: string; campo2: string }; // Ajusta según sea necesario
  setCampos: React.Dispatch<React.SetStateAction<{ campo1: string; campo2: string }>>;
  departamento: string;
  setDepartamento: React.Dispatch<React.SetStateAction<string>>;
  readOnly: boolean;
  onGuardar: () => void;
  onEnviar: () => void;
}

const UsoInternoDGEC: React.FC<UsoInternoDGECProps> = ({
  campos,
  setCampos,
  departamento,
  setDepartamento,
  readOnly,
  onGuardar,
  onEnviar,
}) => {
  return (
    <Box>
      <Typography variant="h5">Uso interno DGEC</Typography>
      <hr />

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
        <TextField
          fullWidth
          label="INTERNO - Código interno DGEC"
          value={campos.campo1}
          onChange={(e) => setCampos((prevCampos) => ({ ...prevCampos, campo1: e.target.value }))}
          variant="outlined"
          InputProps={{ readOnly: readOnly }}
          sx={{ mr: 2 }}
        />
        
      </Box>


      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
        <Button variant="outlined" onClick={onGuardar} disabled={readOnly}>
          Guardar
        </Button>
        <Button variant="outlined" onClick={onEnviar} disabled={readOnly}>
          Enviar
        </Button>
      </Box>
    </Box>
  );
};

export default UsoInternoDGEC;
