// SolicitudesForm.tsx

import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import DGECForm from './Form/DGECForm';
import RegistroCurricularForm from './Form/RegistroCurricularForm';
import AdmisionForm from './Form/AdmisionForm';
import FinanzasForm from './Form/FinanzasForm';


// Define el tipo de datos para las solicitudes
type Solicitud = {
  id: number;
  fecha: string;
  programa: string;
  departamento: string;
  campus: string;
  estado: string;
  revisionDGEC: boolean;
  revisionDIREST: boolean;
  revisionFINANZAS: boolean;
};

type SolicitudesTablaProps = {
  solicitudes: Solicitud[];
};

const SolicitudesTabla: React.FC<SolicitudesTablaProps> = ({ solicitudes }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Fecha</TableCell>
            <TableCell>Programa</TableCell>
            <TableCell>Departamento</TableCell>
            <TableCell>Campus</TableCell>
            <TableCell>Estado</TableCell>
            <TableCell>Revisión DGEC</TableCell>
            <TableCell>Revisión DIREST</TableCell>
            <TableCell>Revisión FINANZAS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {solicitudes.map((solicitud) => (
            <TableRow key={solicitud.id}>
              <TableCell>{solicitud.id}</TableCell>
              <TableCell>{solicitud.fecha}</TableCell>
              <TableCell>{solicitud.programa}</TableCell>
              <TableCell>{solicitud.departamento}</TableCell>
              <TableCell>{solicitud.campus}</TableCell>
              <TableCell>{solicitud.estado}</TableCell>
              <TableCell>{solicitud.revisionDGEC ? 'Sí' : 'No'}</TableCell>
              <TableCell>{solicitud.revisionDIREST ? 'Sí' : 'No'}</TableCell>
              <TableCell>{solicitud.revisionFINANZAS ? 'Sí' : 'No'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SolicitudesTabla;
