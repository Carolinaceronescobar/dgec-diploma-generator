import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Checkbox,
  FormControl,
  Select,
  MenuItem,
  FormControlLabel,
  Button,
  Box,
} from '@mui/material';
import UsoInternoFinanzas from './UsoInterno/UsointernoFinanzasForm';

// Definir un tipo para las claves posibles en fin_valordescprog
type ValordescprogKey =
  | 'fin_valordescprog_asd'
  | 'fin_valordescprog_2'
  | 'fin_valordescprog_3'
  | 'fin_valordescprog_4'
  | 'fin_valordescprog_5'
  | 'fin_valordescprog_6';

// Definir un tipo para fin_valordescprog
type FinValordescprog = {
  [K in ValordescprogKey]: { checked: boolean; porcentaje: number };
};

// Definición del componente principal FinanzasForm
const FinanzasForm: React.FC = () => {
  // Estado para controlar si el formulario principal está completo
  const [formularioPrincipalCompleto, setFormularioPrincipalCompleto] = useState<boolean>(false);

  // Estado para almacenar los datos del formulario
const [formData, setFormData] = useState({
  // Utilizar el tipo definido para fin_valordescprog
  fin_valordescprog: {
    fin_valordescprog_asd: { checked: false, porcentaje: 0 },
    fin_valordescprog_2: { checked: false, porcentaje: 0 },
    fin_valordescprog_3: { checked: false, porcentaje: 0 },
    fin_valordescprog_4: { checked: false, porcentaje: 0 },
    fin_valordescprog_5: { checked: false, porcentaje: 0 },
    fin_valordescprog_6: { checked: false, porcentaje: 0 },
  } as FinValordescprog,
  fin_valordescprog_otro: '', // Campo para descuentos "Otro"
  fin_modpagoprog: '', // Modalidad de Pago del programa
  fin_modpagocuotas: '', // Cuotas de pago
  fin_modpagootros: '', // Otros detalles de la modalidad de pago
  fin_modpagomedios: [] as string[], // Medios de pago seleccionados
  // Campos adicionales para descuentos específicos
  exAlumnosUSM: false,
  exAlumnosUSMText: '',
  mujeres: false,
  funcionariosUSM: false,
  funcionariosServiciosPublicos: false,
  matriculaAnticipada: false,
  otros: false,
  otrosText: '',
});
  // Manejador para cambios en los campos de entrada
const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = event.target;
  setFormData((prevFormData) => ({
    ...prevFormData,
    [name]: value,
  }));
};

  // Funciones para guardar y enviar datos
  const handleGuardarFinanzas = (): void => {
    // Implementa la lógica para guardar los datos
    console.log('Guardar datos:', formData);
  };

  const handleEnviarFinanzas = (): void => {
    // Implementa la lógica para enviar los datos al servidor
    console.log('Enviar datos:', formData);
  };

  // Manejador para cambios en checkboxes
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    // Actualiza el estado formData con el nuevo valor del checkbox
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: checked,
    }));
  };

  // Manejador para cambios en porcentaje
  const handlePorcentajeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    // Asegúrate de que name sea una de las claves válidas de fin_valordescprog
    if (!(name in formData.fin_valordescprog)) {
      console.error(`Clave no válida en fin_valordescprog: ${name}`);
      return;
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Manejador para cambios en checkboxes de medios de pago
  const handleCheckboxMediosChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    // Actualiza el estado formData con los nuevos medios de pago seleccionados
    setFormData((prevFormData) => ({
      ...prevFormData,
      fin_modpagomedios: checked
        ? [...prevFormData.fin_modpagomedios, name]
        : prevFormData.fin_modpagomedios.filter((medio) => medio !== name),
    }));
  };

  // Manejador para enviar el formulario
  const handleSubmit = async () => {
    try {
      // Muestra los datos a enviar en la consola
      console.log('Datos a enviar:', formData);
      // Agrega aquí cualquier lógica adicional para enviar la información al servidor
    } catch (error: any) {
      // Maneja errores si hay algún problema al enviar el formulario
      console.error('Error al enviar el formulario:', error.message || error);
    }
  };

  // Renderizado del componente
  return (
    <Container>
      <Typography variant="h4" className="display-4 text-center mt-4 mb-5">
        Información relevante para Finanzas
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
        <TextField
          fullWidth
          id="regcur_durprog"
          label="Valor de Arancel del programa *"
          variant="outlined"
          sx={{ mr: 2 }}
        />
        <TextField fullWidth id="regcur_verprog" label="Valor de Matrícula del programa *" variant="outlined" />
      </Box>
     
{/* Otro bloque de campos */}
<div className="form-check">
          <FormControl fullWidth>
            <Typography variant="subtitle1">Modalidad de Pago</Typography>
            <Select id="regcur_sedeprog" label="Modalidad de Pago">
              {/* Opciones de modalidad de pago */}
              <MenuItem value="Pago 1">Tarjeta de Débito</MenuItem>
              <MenuItem value="Pago 2">Tarjeta de Crédito</MenuItem>
              <MenuItem value="Pago 3">Transferencia</MenuItem>
            </Select>
          </FormControl>

          {/* Campo de otros para la modalidad de pago */}
          <div className="form-check">
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.fin_modpagootros !== ''}
                  onChange={handleCheckboxChange}
                  name="fin_modpagootros"
                />
              }
              label="Otros"
            />
            {formData.fin_modpagootros !== '' && (
              <TextField
                type="text"
                className="form-control"
                name="fin_modpagootros"
                id="fin_modpagootros"
                onChange={handleChange}
              />
            )}
          </div>
        </div>
      

      {/* Check  */}

      <div className="form-row">

        {/* Nuevo bloque de campos */}
        <div className="form-group col-md-6">
          <p><label htmlFor="fin_valordescprog" className="form-label">
            Descuentos que ofrece el programa (tipo y porcentaje asociado)
          </label></p>
          <div className="form-row">
             {/* Nuevo bloque de campos para checkboxes adicionales */}
    <div className="form-row">
      <div className="form-group col-md-6">

        <div className="form-row">
          {/* Checkbox y campo de texto para Ex alumnos USM */}
          <div className="form-check">
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.exAlumnosUSM}
                  onChange={handleCheckboxChange}
                  name="exAlumnosUSM"
                />
              }
              label="Ex alumnos USM"
            />

          </div>

          {/* Checkbox y campo de texto para Mujeres */}
          <div className="form-check">
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.mujeres}
                  onChange={handleCheckboxChange}
                  name="mujeres"
                />
              }
              label="Mujeres"
            />
          </div>

          {/* Checkbox y campo de texto para Funcionarios USM */}
          <div className="form-check">
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.funcionariosUSM}
                  onChange={handleCheckboxChange}
                  name="funcionariosUSM"
                />
              }
              label="Funcionarios USM"
            />
           </div>

          {/* Checkbox y campo de texto para Funcionarios de servicios públicos */}
         <div className="form-check">
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.funcionariosServiciosPublicos}
                  onChange={handleCheckboxChange}
                  name="funcionariosServiciosPublicos"
                />
              }
              label="Funcionarios Servicios Publicos"
            />
            
          </div>
          
          {/* Checkbox y campo de texto para Matrícula anticipada */}
         <div className="form-check">
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.matriculaAnticipada}
                  onChange={handleCheckboxChange}
                  name="MatriculaAnticipada"
                />
              }
              label="Matricula anticipada"
            />
            </div>
          
          {/* Checkbox y campo de texto para Otro */}
          <div className="form-check">
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.otros}
                  onChange={handleCheckboxChange}
                  name="otros"
                />
              }
              label="Otro"
            />
            {formData.otros && (
              <TextField
                type="text"
                className="form-control"
                name="otrosText"
                id="otrosText"
                onChange={handleChange}
              />
            )}
          </div>
        </div>
      </div>
    </div>

          </div>
        </div>

        

      {/* Botón para guardar sin enviar */}
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
      </div>
      </div>
      {/* Campos adicionales fuera del bloque anterior */}
      

      {/* Uso interno Finanzas */}
      <Typography variant="h4" align="center" mt={4} mb={5}>
        Uso Interno Finanzas
      </Typography>
      <UsoInternoFinanzas
        campos={formData}
        setCampos={setFormData}
        readOnly={!formularioPrincipalCompleto}
        onGuardar={handleGuardarFinanzas}
        onEnviar={handleEnviarFinanzas}
      />

      {/* Botón adicional para guardar sin enviar */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
        <Button variant="outlined" color="secondary" className="float-left">
          Guardar sin enviar
        </Button>
      </Box>
    </Container>
  );
};

export default FinanzasForm;
