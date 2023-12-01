// my-form-app/server/src/routes/formularioRoutes.ts
import express, { Request, Response } from 'express';

const router = express.Router();

// Manejador de la ruta POST '/api/guardarFormulario'
router.post('/guardarFormulario', (req: Request, res: Response) => {
  // Aquí deberías procesar y almacenar los datos del formulario
  const formData = req.body;

  // Ejemplo: Imprimir los datos del formulario en la consola
  console.log('Datos del formulario recibidos:', formData);

  // Puedes responder con un mensaje indicando que el formulario se ha guardado correctamente
  res.json({ message: 'Formulario guardado con éxito' });
});

export default router;
