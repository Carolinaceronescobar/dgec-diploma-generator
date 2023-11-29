// Importa las dependencias necesarias de React y Material-UI
import React, { useState } from 'react';
import {
  Typography,
  Button,
  TextField,
  Checkbox,
  FormControl,
  FormGroup,
  FormControlLabel,
  Stack,
} from '@mui/material';
import Box from '@mui/system/Box';
import axios from 'axios';
import { Input, Container } from '@mui/material';

// Definición del componente funcional AdmisionForm
const AdmisionForm: React.FC = () => {
  // Estado local para almacenar el formulario y la foto adjunta
  const [formData, setFormData] = useState({
    descprog: '',
    reqprog: {
      cedula: true,
      licencia: false,
      curriculum: false,
      otro: false,
    },
    vacprog: '',
    matrminprog: '',
    linkedin: '',  // Agregamos la propiedad linkedin al estado
  });

  // Estado local para almacenar la foto adjunta
  const [FotoAdjunta, setFotoAdjunta] = useState<File | null>(null);

 // Función para manejar cambios en los campos de texto
 const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = event.target;
  setFormData({
    ...formData,
    [name]: value,
  });
};
// Función para manejar cambios en la selección de la foto adjunta
const handleFotoAdjuntaChange = (
  event: React.ChangeEvent<HTMLInputElement>
) => {
  const file = event.target.files && event.target.files[0];
  setFotoAdjunta(file);
};

// Función para manejar cambios en los campos de checkbox
const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const { name, checked } = event.target;
  setFormData({
    ...formData,
    reqprog: {
      ...formData.reqprog,
      [name]: checked,
    },
  });
};

// Función para manejar el envío del formulario
const handleSubmit = async () => {
  try {
    // Enviar datos al servidor Node.js mediante una solicitud POST
    const response = await axios.post('URL_DEL_SERVIDOR/api/admision', formData);

    // Lidiar con la respuesta del servidor (puedes mostrar un mensaje de éxito, por ejemplo)
    console.log('Respuesta del servidor:', response.data);
  } catch (error: any) {
    // Lidiar con errores (mostrar el mensaje de error si está definido)
    console.error('Error al enviar el formulario:', error.message || error);
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
        handleChange,
        handleFotoAdjuntaChange,
        handleCheckboxChange,
        handleGuardarClick
        ,
      }),
    });

  // Renderización del componente
  return (
    <div>
    <Container>
      <Box>
        {/* Sección: Información General del Programa */}
        <Typography variant="h5" align="center" mt={2} mb={1} sx={{ marginTop: 5, marginBottom: 2, fontWeight: 'bold' }}>
          Información General del Programa
        </Typography>
      </Box>


      <Box>
        {/* Sección: Descripción del Programa */}
        <div>
          <Typography variant="h6" sx={{ marginTop: 2, marginBottom: 2, fontWeight: 'bold' }}>Información</Typography>
        </div>
        <hr />

        <div>
          {/* Campo de texto para la descripción del programa */}
          <FormGroup>
            <TextField
              fullWidth
              label="Descripción del programa"
              name="descprog"
              id="adm_descprog"
              multiline
              rows={2}
              variant="outlined"
              onChange={handleChange} />
          </FormGroup>
        </div>
      </Box>

      {/* Sección: Objetivo del Programa */}
      <div>
        <Typography variant="h6" sx={{ marginTop: 2, marginBottom: 2, fontWeight: 'bold' }}>Objetivo del Programa</Typography>
        <hr />

        <div>
          {/* Campo de texto para Objetivo del programa */}
          <FormGroup>
            <TextField
              fullWidth
              label="Objetivo del programa"
              name="descprog"
              id="adm_descprog"
              multiline
              rows={2}
              variant="outlined"
              onChange={handleChange} />
          </FormGroup>
        </div>
      </div>


      {/* Sección: Reseña del Director */}
      <div>
        <Typography variant="h6" sx={{ marginTop: 2, marginBottom: 2, fontWeight: 'bold' }}>Reseña del Director</Typography>
        <hr />

        <div>
          {/* Campo de texto para la reseña del Director */}
          <FormGroup>
            <TextField
              fullWidth
              label="Reseña del Director"
              name="descprog"
              id="adm_descprog"
              multiline
              rows={2}
              variant="outlined"
              onChange={handleChange} />
          </FormGroup>
        </div>
      </div>
    
    
    <Box>
        <Stack direction="row" spacing={2}>

          {/*Sección: Adjuntar Foto*/}
          <Input
            type="file"
            id="FotoAdjunta"
            onChange={handleFotoAdjuntaChange}
            style={{ display: 'none' }} />
          <label htmlFor="FotoAdjunta">
            <Button variant="outlined" component="span" sx={{ marginTop: 2 }}>
              Adjuntar Foto
            </Button>
          </label>

          {/* Campo de entrada de texto para el enlace de LinkedIn */}
          <FormGroup sx={{ mt: 2, marginBottom: 2 }}>
            <TextField sx={{ marginTop:2, justifyContent: 'right'}}
              fullWidth
              label="Enlace de LinkedIn"
              name="linkedin"
              id="adm_linkedin"
              variant="outlined"
              onChange={handleChange} />
          </FormGroup>
        </Stack>
      </Box>


  {/* Sección: Requisitos para el postulante*/} 
        <FormGroup sx={{ marginTop: 2, marginBottom: 2, fontWeight: 'bold' }}>
          <label htmlFor="adm_reqprog" className="form-label">
            Requisitos para el postulante o documentación solicitada
          </label>

          <FormControl>
            <FormGroup>
              {/* Campos de checkbox para los requisitos */}
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.reqprog.cedula}
                    onChange={handleCheckboxChange}
                    name="cedula"
                  />
                }
                label="Cédula de Identidad (o DNI o Pasaporte)"
              />
             <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.reqprog.licencia}
                        onChange={handleCheckboxChange}
                        name="licencia"
                      />
                    }
                    label="Licencia de Educación Media"
                  />

                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.reqprog.curriculum}
                        onChange={handleCheckboxChange}
                        name="curriculum"
                      />
                    }
                    label="Curriculum Vitae (CV)"
                  />

                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.reqprog.otro}
                        onChange={handleCheckboxChange}
                        name="otro"
                      />
                    }
                    label="Otro"
                  />
             
            </FormGroup>
          </FormControl>
        </FormGroup>
     
      {/* Sección: Cupos */}
        <div>
          <Typography variant="h5" className="titulo" sx={{ marginTop: 2, marginBottom: 2, fontWeight: 'bold' }}>
            Cupos
          </Typography>
          <hr />

          <FormGroup>
            {/* Campos de texto para los cupos */}
            <TextField sx={{ marginTop: 2}}
              fullWidth
              label="Número de cupos máximo (vacantes)"
              name="vacprog"
              id="adm_vacprog"
              variant="outlined"
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <TextField sx={{ marginTop: 2}}
              fullWidth
              label="Número de estudiantes matriculados mínimos para impartir el programa"
              name="matrminprog"
              id="adm_matrminprog"
              variant="outlined"
              onChange={handleChange}
            />
          </FormGroup>
        </div>
      
{/* Sección: Módulos del Programa */}
<div>
        <Typography variant="h6" sx={{ marginTop: 2, marginBottom: 2, fontWeight: 'bold' }}> Liste Módulos del Programa</Typography>
        <hr />

        <div>
          {/* Campo de texto para Modulos del Programa */}
          <FormGroup>
            <TextField
              fullWidth
              label="Módulos del Programa"
              name="descprog"
              id="adm_descprog"
              multiline
              rows={2}
              variant="outlined"
              onChange={handleChange} />
          </FormGroup>
        </div>
      </div>

{/* Sección: Staff de Profesores */}
<div>
        <Typography variant="h6" sx={{ marginTop: 2, marginBottom: 2, fontWeight: 'bold' }}>Liste el Staff de Profesores</Typography>
        <hr />

        <div>
          {/* Campo de texto para Staff de Profesores */}
          <FormGroup>
            <TextField
              fullWidth
              label="Staff de Profesores"
              name="descprog"
              id="adm_descprog"
              multiline
              rows={2}
              variant="outlined"
              onChange={handleChange} />
          </FormGroup>
        </div>
      </div>

      {/* Sección: Botón de Guardar */}
      <Box>
      <div className="row">
        <div className="col-6">
          {/* Botón para guardar el formulario */}
          <Button variant="outlined" color="secondary" className="float-left" onClick={handleGuardarClick}> sx={{ marginTop: 2}}>
            Guardar sin enviar
          </Button>
        </div>
      </div>
    </Box>
</Container>
</div>
);
};

export default AdmisionForm;