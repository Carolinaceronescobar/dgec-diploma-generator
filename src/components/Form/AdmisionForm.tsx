import React, { useState } from 'react';
import {
  Container,
  Typography,
  Button,
  TextField,
  Checkbox,
  FormControl,
  FormGroup,
  FormControlLabel,
} from '@mui/material';
import Box from '@mui/system/Box';
import axios from 'axios';

const AdmisionForm: React.FC = () => {
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
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

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

  const handleSubmit = async () => {
    try {
      // Enviar datos al servidor Node.js
      const response = await axios.post('URL_DEL_SERVIDOR/api/admision', formData);
  
      // Lidiar con la respuesta del servidor (puedes mostrar un mensaje de éxito, por ejemplo)
      console.log('Respuesta del servidor:', response.data);
    } catch (error: any) {
      // Lidiar con errores (mostrar el mensaje de error si está definido)
      console.error('Error al enviar el formulario:', error.message || error);
    }
  };
;
  return (
    <Container>
      <Box>
        <Typography variant="h4" className="display-4 text-center mt-4 mb-5" sx={{ marginTop: 2, marginBottom: 2, fontWeight: 'bold' }}>
          Información relevante para Admisión
        </Typography>
      </Box>

      <Box>
        <div>
          <Typography variant="h5" sx={{ marginTop: 2, marginBottom: 2, fontWeight: 'bold' }}>Información</Typography>
          <hr />

          <div>
            <FormGroup>
              <TextField
                fullWidth
                label="Descripción del programa"
                name="descprog"
                id="adm_descprog"
                multiline
                rows={4}
                variant="outlined"
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup sx={{ marginTop: 2, marginBottom: 2, fontWeight: 'bold' }}>
              <label htmlFor="adm_reqprog" className="form-label" >
                Requisitos para el postulante o documentación solicitada
              </label>

              <FormControl>
                <FormGroup>
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
          </div>
        </div>

        <div>
          <Typography variant="h5" className="titulo" sx={{ marginTop: 2, marginBottom: 2, fontWeight: 'bold' }}>
            Cupos
          </Typography>
          <hr />

          <FormGroup>
            <TextField
              fullWidth
              label="Número de cupos máximo (vacantes)"
              name="vacprog"
              id="adm_vacprog"
              variant="outlined"
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <TextField
              fullWidth
              label="Número de estudiantes matriculados mínimos para impartir el programa"
              name="matrminprog"
              id="adm_matrminprog"
              variant="outlined"
              onChange={handleChange}
            />
          </FormGroup>
        </div>
      </Box>

      <Box>
        <div className="row">
          <div className="col-6">
            <Button variant="outlined" color="secondary" className="float-left" onClick={handleSubmit}>
              Guardar sin enviar
            </Button>
          </div>
        </div>
      </Box>
    </Container>
  );
};

export default AdmisionForm;