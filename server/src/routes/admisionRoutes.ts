import express from 'express';

const router = express.Router();

// Definir rutas para admisiones
router.get('/', (req, res) => {
  // Lógica para manejar la solicitud de admisiones
  res.json({ message: 'Datos de admisión obtenidos correctamente' });
});

export default router;
