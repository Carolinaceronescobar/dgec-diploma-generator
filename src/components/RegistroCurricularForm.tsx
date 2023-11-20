import React from 'react';
import {
  Container,
  Typography,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';
import Box from '@mui/system/Box';

const FormularioRegistroCurricular: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" align="center" mt={4} mb={5}>
        Información relevante para Registro Curricular
      </Typography>

      <Box>
        <Typography variant="h5">Programa</Typography>
        <hr />

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <FormControl component="fieldset">
            <InputLabel htmlFor="regcur_nivel">Nivel del Programa Académico *</InputLabel>
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
            <InputLabel htmlFor="regcur_tipoprog">Tipo de Programa Académico *</InputLabel>
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
              <InputLabel htmlFor="regcur_depprog">Departamento o Unidad *</InputLabel>
              <Select id="regcur_depprog" label="Departamento o Unidad">
                <MenuItem value="Departamento de Electrónica">Departamento de Electrónica</MenuItem>
                <MenuItem value="Departamento de Construcción y Prevención de Riesgos">
                  Departamento de Construcción y Prevención de Riesgos
                </MenuItem>
                <MenuItem value="3">3</MenuItem>
                <MenuItem value="4">4</MenuItem>
                <MenuItem value="5">5</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel htmlFor="regcur_sedeprog">Emplazamiento *</InputLabel>
              <Select id="regcur_sedeprog" label="Emplazamiento">
                <MenuItem value="Campus Casa Central Valparaíso">Campus Casa Central Valparaíso</MenuItem>
                <MenuItem value="Campus San Joaquín">Campus San Joaquín</MenuItem>
                <MenuItem value="Campus Vitacura">Campus Vitacura</MenuItem>
                <MenuItem value="Sede Viña del Mar">Sede Viña del Mar</MenuItem>
                <MenuItem value="Sede Concepción">Sede Concepción</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <FormControl component="fieldset">
              <InputLabel>Jornada *</InputLabel>
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
              <InputLabel>Modalidad *</InputLabel>
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

      <Box>
        <Typography variant="h5">Uso interno Dirección Estudios</Typography>
        <hr />

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <TextField fullWidth id="regcur_codprog" label="INTERNO - Código del Programa (SIGA)" variant="outlined" />
          <TextField fullWidth id="regcur_coddgec" label="INTERNO - Código DGATCAP" variant="outlined" />
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <FormControl fullWidth>
            <InputLabel htmlFor="regcur_perprog">INTERNO - Periodo académico en que se impartirá</InputLabel>
            <Select id="regcur_perprog" label="Periodo académico en que se impartirá">
              <MenuItem value="2024-1">2024-1</MenuItem>
              <MenuItem value="2023-2">2023-2</MenuItem>
              <MenuItem value="2023-1">2023-1</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
        <Button variant="outlined" color="secondary" className="float-left">
          Guardar sin enviar
        </Button>
        <Button variant="contained" color="primary" className="float-right">
          Siguiente
        </Button>
      </Box>
    </Container>
  );
};

export default FormularioRegistroCurricular;
