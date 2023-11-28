// server/src/server.ts
import express from 'express';
import cors from 'cors';
import path from 'path';
import admisionRoutes from './routes/admisionRoutes';
import registroCurricularRoutes from './routes/registroCurricularRoutes';
import finanzasRoutes from './routes/finanzasRoutes';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/admision', admisionRoutes);
app.use('/api/registroCurricular', registroCurricularRoutes);
app.use('/api/finanzas', finanzasRoutes);

// Ruta para servir la aplicación React
app.use(express.static(path.join(__dirname, '../my-form-app/build')));

// Ruta raíz para la aplicación React
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../my-form-app/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
