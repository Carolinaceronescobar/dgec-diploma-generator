import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
// import SolicitudesTabla from "@/components/dashboard/SolicitudesForm"; 
import SolicitudesTabla from '../dashboard/SolicitudesForm';

 
type SolicitudesTablaProps = {
    solicitudes: any[];
    datos?: any[]; // Hacer 'datos' opcional agregando '?'
  }; 
  

  export default function Chart() {
    const theme = useTheme();
    return null ;
//   return (
//     <React.Fragment>
//       <Typography variant="h6">Tabla de Solicitudes</Typography>
//       <SolicitudesTabla
//         solicitudes={[
//           // Aquí puedes pasar las solicitudes como propiedades
//           // Por ejemplo:
//           {
//             id: 1,
//             fecha: '2023-01-01',
//             programa: 'Programa 1',
//             departamento: 'Departamento 1',
//             campus: 'Campus 1',
//             estado: 'Pendiente',
//             revisionDGEC: false,
//             revisionDIREST: false,
//             revisionFINANZAS: false,
//           },
//           // Agrega más datos según sea necesario
//         ]}
//       />
//     </React.Fragment>
//   );
}

