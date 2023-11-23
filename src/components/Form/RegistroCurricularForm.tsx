import React, { useState } from 'react';
import {
  Container,
  Typography,
  Button,
  TextField,
  FormControl,
  Select,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';
import Box from '@mui/system/Box';
import UsoInternoDGEC from './UsoInterno/UsointernoDGEC';
import UsoInternoDireccionEstudios from './UsoInterno/UsointernoDireccionEstudios';

const RegistroCurricularForm: React.FC = () => {
  const [formularioPrincipalCompleto, setFormularioPrincipalCompleto] = useState<boolean>(false);
  const [usoInternoDGEC, setUsoInternoDGEC] = React.useState({
    campo1: '',
    campo2: '',
    // ... otros campos según sea necesario
  });

  const handleGuardarClick = () => {
    // Lógica para guardar el formulario
    console.log('Formulario guardado');
    // Actualizar el estado para indicar que el formulario principal está completo
    setFormularioPrincipalCompleto(true);
  };

  const [usoInternoDireccionEstudios, setUsoInternoDireccionEstudios] = React.useState({
    campo1: '',
    campo2: '',
    // ... otros campos según sea necesario
  });

  const [departamentoDGEC, setDepartamentoDGEC] = React.useState('');
  const [departamentoDireccionEstudios, setDepartamentoDireccionEstudios] = React.useState('');

  const handleGuardarDGEC = async () => {
    try {
      // Aquí llamas a tu ruta de backend para guardar la información en DGEC
      await fetch('/api/guardarDGEC', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ usoInternoDGEC }),
      });

      console.log('Guardado en DGEC:', usoInternoDGEC);
    } catch (error) {
      console.error('Error al guardar en DGEC:', error);
    }
  };

  const handleEnviarDGEC = async () => {
    try {
      // Aquí llamas a tu ruta de backend para enviar la información a DGEC
      await fetch('/api/enviarDGEC', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ usoInternoDGEC }),
      });

      console.log('Enviado a DGEC:', usoInternoDGEC);
    } catch (error) {
      console.error('Error al enviar a DGEC:', error);
    }
  };

  const handleGuardarDireccionEstudios = async () => {
    try {
      // Aquí llamas a tu ruta de backend para guardar la información en Dirección de Estudios
      await fetch('/api/guardarDireccionEstudios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ usoInternoDireccionEstudios }),
      });

      console.log('Guardado en Dirección de Estudios:', usoInternoDireccionEstudios);
    } catch (error) {
      console.error('Error al guardar en Dirección de Estudios:', error);
    }
  };

  const handleEnviarDireccionEstudios = async () => {
    try {
      // Aquí llamas a tu ruta de backend para enviar la información a Dirección de Estudios
      await fetch('/api/enviarDireccionEstudios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ usoInternoDireccionEstudios }),
      });

      console.log('Enviado a Dirección de Estudios:', usoInternoDireccionEstudios);
    } catch (error) {
      console.error('Error al enviar a Dirección de Estudios:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" align="center" mt={4} mb={5}>
        Información relevante para Registro Curricular
      </Typography>

      <Box>
        <Typography variant="h5">Programa</Typography>
        <hr />
        {/* sx={{ position: focused || selectedValue ? 'relative' : 'absolute', top: -2 }} */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <FormControl component="fieldset">
          <Typography variant="subtitle1">Nivel de programa académico</Typography>
            <RadioGroup row id="regcur_nivel">
              <FormControlLabel
                value="Curso"
                control={<Radio />}
                label="Curso"
                sx={{ '&:hover': { backgroundColor: 'transparent' } }}
              />
              <FormControlLabel
                value="Diploma"
                control={<Radio />}
                label="Diploma"
                sx={{ '&:hover': { backgroundColor: 'transparent' } }}
              />
            </RadioGroup>
          </FormControl>

          <FormControl component="fieldset">
          <Typography variant="subtitle1">Tipo de programa académico</Typography>
            <RadioGroup row id="regcur_tipoprog">
              <FormControlLabel
                value="Cerrado (Corporativo)"
                control={<Radio />}
                label="Cerrado (Corporativo)"
                sx={{ '&:hover': { backgroundColor: 'transparent' } }}
              />
              <FormControlLabel
                value="Programa Abierto"
                control={<Radio />}
                label="Programa Abierto"
                sx={{ '&:hover': { backgroundColor: 'transparent' } }}
              />
            </RadioGroup>
          </FormControl>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <TextField
            fullWidth
            id="regcur_nomprog"
            label="Nombre del Programa *"
            variant="outlined"
            sx={{ mr: 2 }}
          />
          <TextField fullWidth id="regcur_dirprog" label="Director del Programa *" variant="outlined" />
        </Box>

        <Box>
          <Typography variant="h5">Donde se imparte el Programa</Typography>
          <hr />

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <FormControl fullWidth>
            <Typography variant="subtitle1">Departamento o Unidad</Typography>
              <Select id="regcur_depprog" label="Departamento o Unidad">
                <MenuItem value="Dpto 1">Departamento de Electrónica</MenuItem>
                <MenuItem value="Dpto 2">
                  Departamento de Construcción y Prevención de Riesgos
                </MenuItem>
                <MenuItem value="Dpto 3">Departamento de Ingeniería</MenuItem>
                <MenuItem value="Unidad 4">Unidad 4</MenuItem>
                <MenuItem value="Unidad 5">Unidad 5</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth>
            <Typography variant="subtitle1">Emplazamiento</Typography>
              <Select id="regcur_sedeprog" label="Emplazamiento">
                <MenuItem value="Campus 1">Campus Casa Central Valparaíso</MenuItem>
                <MenuItem value="Campus 2">Campus San Joaquín</MenuItem>
                <MenuItem value="Campus 3">Campus Vitacura</MenuItem>
                <MenuItem value="Sede 1">Sede Viña del Mar</MenuItem>
                <MenuItem value="Sede 2">Sede Concepción</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <FormControl component="fieldset">
            <Typography variant="subtitle1">Jornada</Typography>
              <RadioGroup row id="regcur_jorprog">
                <FormControlLabel
                  value="Diurna"
                  control={<Radio />}
                  label="Diurna"
                  sx={{ '&:hover': { backgroundColor: 'transparent' } }}
                />
                <FormControlLabel
                  value="Vespertina"
                  control={<Radio />}
                  label="Vespertina"
                  sx={{ '&:hover': { backgroundColor: 'transparent' } }}
                />
                <FormControlLabel
                  value="A Distancia"
                  control={<Radio />}
                  label="A Distancia"
                  sx={{ '&:hover': { backgroundColor: 'transparent' } }}
                />
                <FormControlLabel
                  value="Otra"
                  control={<Radio />}
                  label="Otra"
                  sx={{ '&:hover': { backgroundColor: 'transparent' } }}
                />
              </RadioGroup>
            </FormControl>

            <FormControl component="fieldset">
            <Typography variant="subtitle1">Modalidad</Typography>
              <RadioGroup row id="regcur_modprog">
                <FormControlLabel
                  value="Presencial"
                  control={<Radio />}
                  label="Presencial"
                  sx={{ '&:hover': { backgroundColor: 'transparent' } }}
                />
                <FormControlLabel
                  value="Online"
                  control={<Radio />}
                  label="Online"
                  sx={{ '&:hover': { backgroundColor: 'transparent' } }}
                />
                <FormControlLabel
                  value="Híbrida"
                  control={<Radio />}
                  label="Híbrida"
                  sx={{ '&:hover': { backgroundColor: 'transparent' } }}
                />
              </RadioGroup>
            </FormControl>
          </Box>
        </Box>
      </Box>

      <Box>
        <Typography variant="h5">Duración</Typography>
        <hr />

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <TextField
            fullWidth
            id="regcur_finiprog"
            label="Fecha de inicio del programa *"
            variant="outlined"
            sx={{ mr: 2 }}
          />
          <TextField
            fullWidth
            id="regcur_fterprog"
            label="Fecha de término del programa *"
            variant="outlined"
          />
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <TextField
            fullWidth
            id="regcur_durprog"
            label="Duración del programa (horas) *"
            variant="outlined"
            sx={{ mr: 2 }}
          />
          <TextField fullWidth id="regcur_verprog" label="Número de versión del programa *" variant="outlined" />
        </Box>
      </Box>

      <Typography variant="h4" align="center" mt={4} mb={5}>
        Uso Interno Dptos
      </Typography>

      {/* Componente para Uso interno DGEC */}
      <UsoInternoDGEC
        campos={usoInternoDGEC}
        setCampos={setUsoInternoDGEC}
        departamento={departamentoDGEC}
        setDepartamento={setDepartamentoDGEC}
        readOnly={!formularioPrincipalCompleto || !!departamentoDGEC}
        onGuardar={handleGuardarDGEC}
        onEnviar={handleEnviarDGEC}
      />

      {/* Componente para Uso interno Dirección de Estudios */}
      <UsoInternoDireccionEstudios
        campos={usoInternoDireccionEstudios}
        setCampos={setUsoInternoDireccionEstudios}
        departamento={departamentoDireccionEstudios}
        setDepartamento={setDepartamentoDireccionEstudios}
        readOnly={!formularioPrincipalCompleto || !!departamentoDireccionEstudios}
        onGuardar={handleGuardarDireccionEstudios}
        onEnviar={handleEnviarDireccionEstudios}
      />

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
        <Button variant="outlined" color="secondary" className="float-left">
          Guardar sin enviar
        </Button>
      </Box>


    </Container>
  );
};

export default RegistroCurricularForm;
