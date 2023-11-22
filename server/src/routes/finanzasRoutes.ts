import express from 'express';

const router = express.Router();

// Definir rutas para finanzas
router.post('/', (req, res) => {
  // Lógica para manejar la solicitud de finanzas
  res.json({ message: 'Ruta de finanzas' });
});

export default router;
