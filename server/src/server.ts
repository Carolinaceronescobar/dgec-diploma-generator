import express from 'express';
import cors from 'cors';
import admisionRoutes from './routes/admisionRoutes.ts'
import registroCurricularRoutes from './routes/registroCurricularRoutes.ts'
import finanzasRoutes from './routes/finanzasRoutes.ts';


const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/admision', admisionRoutes);
app.use('/api/registroCurricular', registroCurricularRoutes);
app.use('/api/finanzas', finanzasRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
