import React, { useState, useRef } from 'react';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

// Definición del componente funcional DGECForm
const DGECForm: React.FC = () => {
  // Estado del formulario, se utiliza para almacenar los datos del formulario
  const [data, setData] = useState({
    name: '',                // Nombre
    age: '',                 // Edad
    hasExperience: false,    // Experiencia
    autoFillData: '',        // Datos de autollenado
    file: null as File | null, // Archivo seleccionado
  });

  // Refs para acceder directamente a los elementos de entrada
  const nameRef = useRef<HTMLInputElement | null>(null);
  const ageRef = useRef<HTMLInputElement | null>(null);
  const autoFillDataRef = useRef<HTMLInputElement | null>(null);

  // Función para manejar cambios en los campos de texto
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  // Función para manejar cambios en el checkbox
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.checked,
    });
  };

  // Función para manejar cambios en la selección de archivos
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setData({
      ...data,
      file,
    });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica para enviar los datos a la base de datos
    console.log('Datos enviados:', data);
    // Enfocar el siguiente campo
    if (nameRef.current) nameRef.current.focus();
    else if (ageRef.current) ageRef.current.focus();
    else if (autoFillDataRef.current) autoFillDataRef.current.focus();
  };

  // Renderizado del componente
  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          {/* Campo de texto para el nombre */}
          <TextField
            label="Nombre"
            name="name"
            value={data.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
            inputRef={nameRef}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          {/* Campo de texto para la edad */}
          <TextField
            label="Edad"
            name="age"
            value={data.age}
            onChange={handleChange}
            fullWidth
            margin="normal"
            inputRef={ageRef}
          />
        </Grid>
      </Grid>
      {/* Checkbox para la experiencia */}
      <FormControlLabel
        control={
          <Checkbox
            checked={data.hasExperience}
            onChange={handleCheckboxChange}
            name="hasExperience"
          />
        }
        label="¿Tiene experiencia?"
      />
      {/* Campo de texto para los datos de autollenado */}
      <TextField
        label="Datos de autollenado"
        name="autoFillData"
        value={data.autoFillData}
        onChange={handleChange}
        fullWidth
        margin="normal"
        inputRef={autoFillDataRef}
      />
      {/* Selector de archivos para subir documentos PDF o Word */}
      <input
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={handleFileChange}
      />
      {/* Botón para enviar el formulario */}
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Enviar
      </Button>
    </form>
  );
};

// Exportar el componente DGECForm
export default DGECForm;
