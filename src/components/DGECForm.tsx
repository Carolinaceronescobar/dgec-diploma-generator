import React, { useState, useRef } from 'react';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import AttachmentTwoToneIcon from '@mui/icons-material/AttachmentTwoTone';
import Typography from '@mui/material/Typography';

import style from './DGECForm.module.css'

const DGECForm: React.FC = () => {
  const [data, setData] = useState({
    hasPreviousPeriods: 'no',
    courses: [] as string[],
    newCourse: {
      name: '',
      professor: '',
      modules: '',
    },
    authorizationMemo: '',
    attachedFile: null as File | null,
  });

  const coursesList = ['Curso A', 'Curso B', 'Curso C']; // Ejemplo de lista de cursos desde la base de datos

  const newCourseRef = useRef<HTMLInputElement | null>(null);
  const authorizationMemoRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleNewCourseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      newCourse: {
        ...data.newCourse,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleAttachedFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const attachedFile = e.target.files?.[0] || null;
    setData({
      ...data,
      attachedFile,
    });
  };

  const handleSave = () => {
    // Lógica para guardar datos sin enviar
    console.log('Datos guardados:', data);
  };

  const handleNext = () => {
    // Lógica para enviar datos
    console.log('Datos enviados:', data);
  };

  return (
    <form>
      
      <p className={style.commentForm}>
        <b>Nota:</b>  Comentario de prueba.
      </p>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <RadioGroup
            aria-label="¿Se ha dictado este programa académico en periodos anteriores?"
            name="hasPreviousPeriods"
            value={data.hasPreviousPeriods}
            onChange={handleChange}
          >
            <FormControlLabel value="si" control={<Radio />} label="Sí" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </Grid>
        {data.hasPreviousPeriods === 'si' ? (
          <Grid item xs={12}>
            {/* Listado de cursos desde la base de datos */}
            <TextField
              label="Seleccione el curso"
              name="courses"
              select
              fullWidth
              value={data.courses}
              onChange={handleChange}
              SelectProps={{
                multiple: true,
                renderValue: (selected) => (selected as string[]).join(', '),
              }}
            >
              {coursesList.map((course) => (
                <option key={course} value={course}>
                  {course}
                </option>
              ))}
            </TextField>
          </Grid>
        ) : (
          <>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Nombre del curso"
                name="name"
                value={data.newCourse.name}
                onChange={handleNewCourseChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Nombre del profesor"
                name="professor"
                value={data.newCourse.professor}
                onChange={handleNewCourseChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Nombre de los módulos a dictar en el curso"
                name="modules"
                value={data.newCourse.modules}
                onChange={handleNewCourseChange}
                fullWidth
              />
            </Grid>
          </>
        )}
        <Grid item xs={12}>
          <TextField
            label="Adjuntar el memo de autorización de la DGEC para impartir el programa"
            name="authorizationMemo"
            value={data.authorizationMemo}
            onChange={handleChange}
            fullWidth
            margin="normal"
            inputRef={authorizationMemoRef}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <label htmlFor="attachment-input">
                    <AttachmentTwoToneIcon color="primary" />
                  </label>
                  <input
                    id="attachment-input"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    style={{ display: 'none' }}
                    onChange={handleAttachedFileChange}
                  />
                </InputAdornment>
              ),
            }}
          />
          <Typography variant="body2" color="textSecondary">
            Adjunta el memo de autorización en formato PDF o Word.
          </Typography>
        </Grid>
        <Grid item xs={6}>
        <Button variant="contained" color="primary" fullWidth onClick={handleSave}>
            Guardar sin enviar
        </Button>

        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" color="primary" fullWidth onClick={handleNext}>
            Siguiente
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default DGECForm;
