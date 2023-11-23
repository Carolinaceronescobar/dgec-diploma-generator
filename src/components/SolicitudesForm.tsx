import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  Typography,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button,
} from '@mui/material';

type Solicitud = {
  id: number;
  nombre: string;
  departamento: string;
  completada: boolean;
};

const SolicitudesForm: React.FC = () => {
  const [solicitudes, setSolicitudes] = useState<Solicitud[]>([]);

  useEffect(() => {
    // Obtener las solicitudes desde el servidor al cargar el componente
    axios.get('/api/solicitudes')
      .then((response) => {
        setSolicitudes(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener solicitudes:', error);
      });
  }, []); // Solo cargar las solicitudes al montar el componente

  const handleChequearSolicitudes = () => {
    // Marcar todas las solicitudes como completadas y actualizar en el servidor
    const solicitudesCompletadas = solicitudes.map((solicitud) => ({
      ...solicitud,
      completada: true,
    }));

    axios.put('/api/chequear-solicitudes', solicitudesCompletadas)
      .then(() => {
        setSolicitudes(solicitudesCompletadas);
      })
      .catch((error) => {
        console.error('Error al chequear solicitudes:', error);
      });
  };

  return (
    <Container>
      <Typography variant="h4" align="center" mt={4} mb={5}>
        Tabla de Solicitudes
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Departamento</TableCell>
              <TableCell>Completada</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {solicitudes.map((solicitud) => (
              <TableRow key={solicitud.id}>
                <TableCell>{solicitud.id}</TableCell>
                <TableCell>{solicitud.nombre}</TableCell>
                <TableCell>{solicitud.departamento}</TableCell>
                <TableCell>{solicitud.completada ? 'Sí' : 'No'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div>
        <Typography variant="h6" mt={4}>
          Chequear todas las solicitudes:
        </Typography>
        <Button variant="contained" onClick={handleChequearSolicitudes}>
          Chequear Solicitudes
        </Button>
      </div>
    </Container>
  );
};

export default SolicitudesForm;
