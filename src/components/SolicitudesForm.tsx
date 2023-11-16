import React, { useState, useRef } from 'react';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const DGECForm: React.FC = () => {
  const [data, setData] = useState({
    name: '',
    age: '',
    hasExperience: false,
    autoFillData: '',
    file: null as File | null,
  });

  const nameRef = useRef<HTMLInputElement | null>(null);
  const ageRef = useRef<HTMLInputElement | null>(null);
  const autoFillDataRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.checked,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setData({
      ...data,
      file,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica para enviar los datos a la base de datos
    console.log('Datos enviados:', data);
    // Enfocar el siguiente campo
    if (nameRef.current) nameRef.current.focus();
    else if (ageRef.current) ageRef.current.focus();
    else if (autoFillDataRef.current) autoFillDataRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
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
      <TextField
        label="Datos de autollenado"
        name="autoFillData"
        value={data.autoFillData}
        onChange={handleChange}
        fullWidth
        margin="normal"
        inputRef={autoFillDataRef}
      />
      <input
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={handleFileChange}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Enviar
      </Button>
    </form>
  );
};

export default DGECForm;

