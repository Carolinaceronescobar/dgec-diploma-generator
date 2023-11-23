// Importa React y los componentes de Material-UI que necesitas para construir tu formulario.
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
  Divider,
  Input,
} from '@mui/material';

// Define un componente funcional llamado FormularioDGEC.
const FormularioDGEC: React.FC = () => {
  // Estados locales para manejar diferentes partes del formulario.
  const [haDictadoPrograma, setHaDictadoPrograma] = useState<string>('');
  const [programaSeleccionado, setProgramaSeleccionado] = useState<string>('');
  const [memoAdjunto, setMemoAdjunto] = useState<File | null>(null);

  // Maneja cambios en la opción "Sí" o "No" para la pregunta "¿Se ha dictado este programa académico en periodos anteriores?"
  const handleHaDictadoProgramaChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setHaDictadoPrograma(event.target.value);
  };

  // Maneja cambios en la selección del programa académico.
  const handleProgramaSeleccionadoChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setProgramaSeleccionado(event.target.value as string);
  };

  // Maneja cambios en la selección del archivo adjunto.
  const handleMemoAdjuntoChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    // Así se obtiene el archivo adjunto, pero este código puede necesitar ajustes según el componente de archivo que estés utilizando.
    const file = event.target.files && event.target.files[0];
    setMemoAdjunto(file);
  };

  // Maneja el clic en el botón "Guardar sin enviar".
  const handleGuardarClick = async () => {
    try {
      // Realiza una solicitud POST a un endpoint de tu servidor con los datos del formulario.
      const response = await fetch('/api/guardarFormulario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          haDictadoPrograma,
          programaSeleccionado,
          memoAdjunto,
        }),
      });

      // Verifica si la solicitud fue exitosa y muestra mensajes en la consola.
      if (response.ok) {
        console.log('Formulario guardado exitosamente');
      } else {
        console.error('Error al guardar el formulario');
      }
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
    }
  };

  // Renderiza el formulario con Material-UI.
  return (
    <Container>
      <Typography variant="h4">Información relevante para DGEC</Typography>

      {/* Sección "Programa" */}
      <Box mt={3}>
        <Typography variant="h6">Programa</Typography>
        {/*Pregunta adicional*/}
        <Typography variant="body1"> ¿Se ha dictado este programa académico en periodos anteriores? * </Typography>
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
      </Box>
      
      {/* Pregunta adicional si la respuesta es "Sí" */}
      {haDictadoPrograma === 'si' && (
        <Box mt={3}>
          <Typography variant="subtitle1">Seleccione el programa académico</Typography>
          <FormControl fullWidth>
            <Select
              labelId="programa-academico-label"
              id="programa-academico"
              value= {programaSeleccionado}
              onChange = {handleProgramaSeleccionadoChange}
            >
              <MenuItem value="programa1">Diploma de Ciberseguridad</MenuItem>
              <MenuItem value="programa2">Curso de Gestión de Activos</MenuItem>
              <MenuItem value="programa3">Curso Prueba 3</MenuItem>
            </Select>
          </FormControl>
        </Box>
      )}

 {/* Línea divisoria entre secciones */}
 <Divider variant="middle" />

      {/* Sección "Autorización" */}
      {/* Utiliza un componente Input y Button para crear un botón de carga de archivos personalizado */}
      <Box mt={2}>
      <Typography variant="h6">Autorización</Typography>
        <Typography variant="subtitle1">
          Adjunte el memo de autorización de la DGEC para impartir el programa
        </Typography>
        <Input
            type="file"
            id="memo-adjunto"
            onChange={handleMemoAdjuntoChange}
            style={{ display: 'none' }}
          />
          <label htmlFor="memo-adjunto">
            <Button variant="outlined" component="span">
              Adjuntar archivo
            </Button>
          </label>
        </Box>

      {/* Botón de "Guardar sin enviar" */}
      
      <Box mt={3}>
        <Button variant="contained" color="primary" onClick={handleGuardarClick}>
          Guardar sin enviar
        </Button>
      </Box>

      {/* Límite de archivo */}
      <Typography variant="body2" mt={2}>
        Límite de archivo: 5 MB
      </Typography>
    </Container>
  );
};

// Exporta el componente FormularioDGEC para que pueda ser utilizado en otras partes de la aplicación.
export default FormularioDGEC;
