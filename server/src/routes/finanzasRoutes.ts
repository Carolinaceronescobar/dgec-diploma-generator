import express from 'express';

const router = express.Router();

// Definir rutas para finanzas
router.get('/', (req, res) => {
  // Manejar la solicitud para obtener datos de admisión
  res.json({ message: 'Datos de admisión obtenidos correctamente' });
});

export default router;
