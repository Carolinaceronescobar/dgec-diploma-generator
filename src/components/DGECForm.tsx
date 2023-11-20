import React, { useState } from 'react';
import {
  Container,
  Typography,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  MenuItem,
  Select,
  TextField,
  Button,
  Box,
  InputLabel,
} from '@mui/material';

const FormularioDGEC: React.FC = () => {
  const [haDictadoPrograma, setHaDictadoPrograma] = useState<string>('');

  const handleHaDictadoProgramaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHaDictadoPrograma(event.target.value);
  };

  const [programaSeleccionado, setProgramaSeleccionado] = useState<string>('');

  const handleProgramaSeleccionadoChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setProgramaSeleccionado(event.target.value as string);
  };

  const handleGuardarClick = () => {
    // Lógica para guardar el formulario
    console.log('Formulario guardado');
  };

  return (
    <Container>
      <Typography variant="h4">Información relevante para DGEC</Typography>

      {/* Programa */}
      <Typography variant="h6">Programa</Typography>
      <FormControl component="fieldset">
        <RadioGroup
          row
          aria-label="haDictadoPrograma"
          name="haDictadoPrograma"
          value={haDictadoPrograma}
          onChange={handleHaDictadoProgramaChange}
        >
          <FormControlLabel value="si" control={<Radio />} label="Sí" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>

      {/* Pregunta adicional si la respuesta es "Sí" */}
      {haDictadoPrograma === 'si' && (
        <div>
          <Typography variant="subtitle1">Seleccione el programa académico</Typography>
          <FormControl fullWidth>
            <InputLabel id="programa-academico-label">Programa académico</InputLabel>
            <Select
              labelId="programa-academico-label"
              id="programa-academico"
              value={programaSeleccionado}
              onChange={handleProgramaSeleccionadoChange}
            >
              {/* Opciones de programas académicos disponibles */}
              <MenuItem value="programa1">Programa 1</MenuItem>
              <MenuItem value="programa2">Programa 2</MenuItem>
            </Select>
          </FormControl>
        </div>
      )}

      {/* Autorización */}
      <Typography variant="h6">Autorización</Typography>
      <Typography variant="body1">
        Adjunte el memo de autorización de la DGEC para impartir el programa
      </Typography>
      <Box mt={2}>
        <TextField type="file" label="Adjuntar archivo" fullWidth />
      </Box>
      <Box mt={2}>
        <Button variant="contained" color="primary" onClick={handleGuardarClick}>
          Guardar sin enviar
        </Button>
      </Box>
      <Typography variant="body2">Límite de archivo: 5 MB</Typography>
    </Container>
  );
};

export default FormularioDGEC;
