// UsoInternoDireccionEstudios.tsx

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

const UsointernoDireccionEstudios: React.FC<UsoInternoDGECProps> = ({
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
      <Typography variant="h5" sx={{ marginTop: 2, marginBottom: 2, fontWeight: 'bold' }}> Uso interno Dirección de Estudios</Typography>
      <hr />

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
        <TextField
          fullWidth
          label="INTERNO - Código del Programa (SIGA)"
          value={campos.campo1}
          onChange={(e) => setCampos((prevCampos) => ({ ...prevCampos, campo1: e.target.value }))}
          variant="outlined"
          InputProps={{ readOnly: readOnly }}
          sx={{ mr: 2 }}
        />
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
        <FormControl fullWidth>
          <Select
            label="INTERNO - Periodo académico en que se impartirá (SIGA)"
            value={departamento}
            onChange={(e) => setDepartamento(e.target.value as string)}
            disabled={readOnly}
          >
            <MenuItem value="Tiempo1">2024- 1</MenuItem>
            <MenuItem value="Tiempo2">2023- 2</MenuItem>
            <MenuItem value="Tiempo3">2023- 1</MenuItem>
          </Select>
        </FormControl>
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

export default UsointernoDireccionEstudios;
