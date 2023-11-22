import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  FormGroup,
  Grid,
} from '@mui/material';
import UsoInternoFinanzas from './UsoInterno/UsointernoFinanzasForm';

const FinanzasForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fin_valoraraprog: '',
    fin_valormatprog: '',
    fin_valordescprog: {
      fin_valordescprog_1: { checked: false, porcentaje: 0 },
      fin_valordescprog_2: { checked: false, porcentaje: 0 },
      fin_valordescprog_3: { checked: false, porcentaje: 0 },
      fin_valordescprog_4: { checked: false, porcentaje: 0 },
      fin_valordescprog_5: { checked: false, porcentaje: 0 },
      fin_valordescprog_6: { checked: false, porcentaje: 0 },
    },
    fin_modpagoprog: '',
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

    setFormData((prevFormData) => {
      const updatedValordescprog = {
        ...prevFormData.fin_valordescprog,
        [name]: { ...prevFormData.fin_valordescprog[name as keyof typeof prevFormData.fin_valordescprog], checked },
      };

      return {
        ...prevFormData,
        fin_valordescprog: updatedValordescprog,
      };
    });
  };

  const handlePorcentajeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      const updatedValordescprog = {
        ...prevFormData.fin_valordescprog,
        [name]: { ...prevFormData.fin_valordescprog[name as keyof typeof prevFormData.fin_valordescprog], porcentaje: +value },
      };

      return {
        ...prevFormData,
        fin_valordescprog: updatedValordescprog,
      };
    });
  };

  const handleSubmit = async () => {
    try {
      // Enviar datos al servidor Node.js
      // Se puede usar axios u otra librería para hacer la petición HTTP
      console.log('Datos a enviar:', formData);
      // Resto del código para enviar la información al servidor
    } catch (error: any) {
      console.error('Error al enviar el formulario:', error.message || error);
    }
  };

  return (
    <Container>
      <Typography variant="h5" className="display-4 text-center mt-4 mb-5">
        Información relevante para Finanzas
      </Typography>

      <div>
        <h6>Valorización</h6>
        <hr />

        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="fin_valoraraprog" className="form-label">
              Valor de Arancel del programa <span>*</span>
            </label>
            <TextField
              type="text"
              className="form-control"
              name="fin_valoraraprog"
              id="fin_valoraraprog"
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="fin_valormatprog" className="form-label">
              Valor de Matrícula del programa <span>*</span>
            </label>
            <TextField
              type="text"
              className="form-control"
              name="fin_valormatprog"
              id="fin_valormatprog"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="fin_valordescprog" className="form-label">
              Descuentos que ofrece el programa (tipo y porcentaje asociado)
            </label>

            <FormGroup>
              {/* Ejemplo de Checkbox con Slider */}
              <Grid container spacing={2}>
                {Object.entries(formData.fin_valordescprog).map(([key, value]) => (
                  <Grid item xs={6} key={key}>
                    <div className="form-check">
                      <div className="row">
                        <div className="col-7">
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={value.checked}
                                onChange={handleCheckboxChange}
                                name={key}
                              />
                            }
                            label={key.replace('fin_valordescprog_', '')}
                          />
                        </div>
                        <div className="col-5">
                          <input
                            type="number"
                            max="100"
                            min="0"
                            name={key}
                            value={value.porcentaje}
                            onChange={handlePorcentajeChange}
                          />
                        </div>
                      </div>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </FormGroup>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="fin_modpagoprog" className="form-label">
              Modalidad de pago (número de cuotas, medios de pago, otros)
            </label>
            <TextField
              type="text"
              className="form-control"
              name="fin_modpagoprog"
              id="fin_modpagoprog"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row mb-10">
          <div className="col-12">
            <Button
              variant="outlined"
              color="secondary"
              className="float-left"
              onClick={handleSubmit}
            >
              Guardar sin enviar
            </Button>
          </div>
      <UsoInternoFinanzas />
        </div>
      </div>
    </Container>
  );
};

export default FinanzasForm;
