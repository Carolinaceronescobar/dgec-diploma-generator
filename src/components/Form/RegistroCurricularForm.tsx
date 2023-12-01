import React, { useState } from 'react';
import {
  Container,
  Typography,
  Button,
  TextField,
  FormControl,
  Select,
  MenuItem,
  Divider,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';
import Box from '@mui/system/Box';
import UsoInternoDGEC from './UsoInterno/UsointernoDGEC';
import UsoInternoDireccionEstudios from './UsoInterno/UsointernoDireccionEstudios';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';




// Componente principal
const RegistroCurricularForm: React.FC = () => {
  {
  // Estado para el formulario principal
  const [FormularioPrincipalCompleto, setFormularioPrincipalCompleto] = useState<boolean>(false);
  
  //Estado para mostrar Uso Interno DGEC y Dirección de Estudios
  const [mostrarUsoInternoDGEC, setMostrarUsoInternoDGEC] = useState<boolean>(false);
  const [mostrarUsoInternoDireccionEstudios, setMostrarUsoInternoDireccionEstudios] = useState<boolean>(false);

  //En el componente principal
  // En tu componente principal
  const handleMostrarUsoInternoDGEC = () => {
    setMostrarUsoInternoDGEC(!mostrarUsoInternoDGEC);
    };
  const handleMostrarUsoInternoDireccionEstudios = () => {
      setMostrarUsoInternoDireccionEstudios(!mostrarUsoInternoDireccionEstudios);
    };
  // Estado para campos de Uso Interno DGEC
  const [UsoInternoDGEC, setUsoInternoDGEC] = React.useState({
    campo1: any,
    campo2: any,
    // ... otros campos según sea necesario
  });
    // Actualizar el estado para indicar que el formulario principal está completo
    setFormularioPrincipalCompleto(true);
  };

  // Estado y manejadores para Uso Interno Dirección de Estudios
  const [UsoInternoDireccionEstudios, setUsoInternoDireccionEstudios] = React.useState({
    campo1: '',
    campo2: '',
    // ... otros campos según sea necesario
  });

  const [value, setValue] = useState<dayjs.Dayjs | null>(dayjs('2023-11-28'));


  // Estado para departamentos
  const [departamentoDGEC, setDepartamentoDGEC] = React.useState('');
  const [departamentoDireccionEstudios, setDepartamentoDireccionEstudios] = React.useState('');
  
//Estado para el formulario principal
  const [FormularioPrincipalCompleto, setFormularioPrincipalCompleto] = useState<boolean>(false);

  //Actualizar el EstadoFormulario principal para indicar que esta completo
  const handleFormularioCompleto = () => {
    // Puedes hacer aquí cualquier lógica necesaria antes de marcar el formulario como completo
    setFormularioPrincipalCompleto(true);
  };

  

  // Manejadores de clic para DGEC
  const handleGuardarDGEC = async () => {
    try {
      // Llamada a la ruta de backend para guardar en DGEC
      await fetch('/api/guardarDGEC', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ UsoInternoDGEC }),
      });

      console.log('Guardado en DGEC:', UsoInternoDGEC);
    } catch (error) {
      console.error('Error al guardar en DGEC:', error);
    }
  };

  const handleEnviarDGEC = async () => {
    try {
      // Llamada a la ruta de backend para enviar a DGEC
      await fetch('/api/enviarDGEC', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ UsoInternoDGEC }),
      });

      console.log('Enviado a DGEC:', UsoInternoDGEC);
    } catch (error) {
      console.error('Error al enviar a DGEC:', error);
    }
  };

  // Manejadores de clic para Dirección de Estudios
  const handleGuardarDireccionEstudios = async () => {
    try {
      // Llamada a la ruta de backend para guardar en Dirección de Estudios
      await fetch('/api/guardarDireccionEstudios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ UsoInternoDireccionEstudios }),
      });

      console.log('Guardado en Dirección de Estudios:', UsoInternoDireccionEstudios);
    } catch (error) {
      console.error('Error al guardar en Dirección de Estudios:', error);
    }
  };

  const handleEnviarDireccionEstudios = async () => {
    try {
      // Llamada a la ruta de backend para enviar a Dirección de Estudios
      await fetch('/api/enviarDireccionEstudios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ UsoInternoDireccionEstudios }),
      });

      console.log('Enviado a Dirección de Estudios:', UsoInternoDireccionEstudios);
    } catch (error) {
      console.error('Error al enviar a Dirección de Estudios:', error);
    }
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
          handleGuardarDGEC,
          handleEnviarDireccionEstudios,
          handleGuardarDireccionEstudios,
          handleEnviarDGEC,
          UsoInternoDGEC,
          UsoInternoDireccionEstudios,
        }),
      });
    // Lógica para guardar el formulario
        console.log('Formulario guardado', response);
    // Lógica para el error al guardar formulario
    } catch (error: any) {
      console.error('Error al guardar el formulario', error.message || error);
    }
  };

  return (
    <Container>
      {/* Sección: Información relevante para Registro Curricular */}
      <Typography variant="h5" align="center" mt={2} mb={1} sx={{ marginTop: 5, marginBottom: 5, fontWeight: 'bold'}}>
        Información relevante para Registro Curricular
      </Typography>

      {/* Sección: Programa */}
      <Box>
        <Typography variant="h6" sx={{ marginTop: 2, marginBottom: 2, fontWeight: 'bold'}}>Programa</Typography>
        <hr />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          {/* Nivel de programa académico */}
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

          {/* Tipo de programa académico */}
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

        {/* Nombre y director del programa */}
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

        {/* Sección: Donde se imparte el Programa */}
        <Box>
          <Typography variant="h6" sx={{ marginTop: 2, marginBottom: 2, fontWeight: 'bold'}}>Donde se imparte el Programa</Typography>
          <hr />

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            {/* Departamento o Unidad */}
            <FormControl fullWidth>
              <Typography variant="subtitle1">Departamento o Unidad</Typography>
              <Select id="regcur_depprog" label="Departamento o Unidad" variant="outlined" sx={{ mr: 2 }}>
                <MenuItem value="Dpto 1">Departamento de Electrónica</MenuItem>
                <MenuItem value="Dpto 2">Departamento de Construcción y Prevención de Riesgos</MenuItem>
                <MenuItem value="Dpto 3">Departamento de Ingeniería</MenuItem>
                <MenuItem value="Unidad 4">Unidad 4</MenuItem>
                <MenuItem value="Unidad 5">Unidad 5</MenuItem>
              </Select>
            </FormControl>

            {/* Emplazamiento */}
            <FormControl fullWidth>
              <Typography variant="subtitle1">Emplazamiento</Typography>
              <Select id="regcur_sedeprog" label="Emplazamiento" variant="outlined" sx={{ mr: 2 }}>
                <MenuItem value="Campus 1">Campus Casa Central Valparaíso</MenuItem>
                <MenuItem value="Campus 2">Campus San Joaquín</MenuItem>
                <MenuItem value="Campus 3">Campus Vitacura</MenuItem>
                <MenuItem value="Sede 1">Sede Viña del Mar</MenuItem>
                <MenuItem value="Sede 2">Sede Concepción</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* Jornada y Modalidad */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            {/* Jornada */}
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

            {/* Línea divisoria entre secciones */}
            <Divider component="div" variant="fullWidth" role="presentation" style={{ marginInline: '30px', border: '1px solid #808080' }} />

            {/* Modalidad */}
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

      {/* Sección: Duración */}
      <Box>
        <Typography variant="h6" sx={{ marginTop: 2, marginBottom: 2, fontWeight: 'bold' }}>Duración</Typography>
        <hr />

        {/* Fechas de inicio y término */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker', 'DatePicker']}>
        <DatePicker label="Fecha de Inicio" defaultValue={dayjs('2023-11-28')} />
        <DatePicker
          label="Fecha de Finalización"
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
      </DemoContainer>
    </LocalizationProvider>

        {/* Duración del programa y Número de versión */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <TextField
            fullWidth
            id="regcur_durprog"
            label="Duración del programa (horas) *"
            variant="outlined"
            type="number"  // Establece el tipo de entrada como número
            InputProps={{
              inputProps: {
                min: 1  // Establece un valor mínimo, si es necesario
              },
            }}
            sx={{ mr: 2 }}
          />
          <TextField fullWidth id="regcur_verprog" label="Número de versión del programa *" variant="outlined" />
        </Box>
      </Box>

       {/*Sección Fecha Convocatoria*/}
      <Box>
        <Typography variant="h6" sx={{ marginTop: 2, marginBottom: 2, fontWeight: 'bold' }}>Fecha Convocatoria</Typography>
        <hr />

        {/* Fechas de inicio y término */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
         <DemoContainer components={['DatePicker', 'DatePicker']}>
          <DatePicker label="Fecha de Inicio" defaultValue={dayjs('2023-11-28')} />
          <DatePicker
          label="Fecha de Finalización"
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
      </DemoContainer>
        </LocalizationProvider>
      </Box>


      {/* Sección: Uso Interno Departamentos */}
      <Typography variant="h6" align="center" mt={4} mb={5} sx={{ marginTop: 10, marginBottom: 2, fontWeight: 'bold' }}>
        USO INTERNO DEPARTAMENTOS
      </Typography>

      {/* Componente para Uso interno DGEC */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
      <Button variant="outlined" color="primary" className="float-left" onClick={handleMostrarUsoInternoDGEC}>
        Mostrar/Ocultar Uso Interno DGEC
      </Button>
        
          {/*Mostrar/Ocultar Uso Interno DGEC*/}
        
          <Button variant="outlined" color="primary" className="float-left" onClick={handleMostrarUsoInternoDireccionEstudios}>
        Mostrar/Ocultar Uso Interno Direccion Estudios
      </Button>
      
      {/*Mostrar/Ocultar Uso Interno Dirección de Estudios*/}
      </Box>

      {/* Secciones de Uso Interno */}
      {mostrarUsoInternoDGEC && (
        <UsoInternoDGEC
          campos={UsoInternoDGEC}
          setCampos={setUsoInternoDGEC}
          departamento={departamentoDGEC}
          setDepartamento={setDepartamentoDGEC}
          readOnly={!FormularioPrincipalCompleto || !!departamentoDGEC}
          onGuardar={handleGuardarDGEC}
          onEnviar={handleEnviarDGEC}
        />
      )}

      {mostrarUsoInternoDireccionEstudios && (
        <UsoInternoDireccionEstudios
          campos={UsoInternoDireccionEstudios}
          setCampos={setUsoInternoDireccionEstudios}
          departamento={departamentoDireccionEstudios}
          setDepartamento={setDepartamentoDireccionEstudios}
          readOnly={!FormularioPrincipalCompleto || !!departamentoDireccionEstudios}
          onGuardar={handleGuardarDireccionEstudios}
          onEnviar={handleEnviarDireccionEstudios}
          mostrar={mostrarUsoInternoDireccionEstudios}
          onMostrarToggle={handleMostrarUsoInternoDireccionEstudios}
        />
      )}
    {/* Botón para marcar el formulario como completo */}
<Button variant="outlined" color="primary" className="float-left" onClick={handleFormularioCompleto}>
        Marcar como completo
      </Button>

    {/* Botón para guardar sin enviar */}
    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
      <Button variant="outlined" color="primary" className="float-left" onClick={handleGuardarClick}>
        Guardar sin enviar
      </Button>
    </Box>
  </Container>
);
};

export default RegistroCurricularForm;
