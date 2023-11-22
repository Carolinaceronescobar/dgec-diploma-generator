import express from 'express';

const router = express.Router();

// Definir rutas para admisiones
router.post('/', (req, res) => {
  // Lógica para manejar la solicitud de admisiones
  res.json({ message: 'Ruta de admisiones' });
});

export default router;
