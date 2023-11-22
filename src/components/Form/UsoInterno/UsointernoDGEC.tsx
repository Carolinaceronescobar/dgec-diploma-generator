import React from 'react';
import { Box, Typography, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const UsoInternoDGEC: React.FC = () => {
  return (
    <Box>
      <Typography variant="h5">Código interno DGEC</Typography>
      <hr />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
        <TextField fullWidth id="regcur_coddgec" label="Código DGATCAP" variant="outlined" />
        <FormControl fullWidth>
          <InputLabel htmlFor="regcur_perprog">Periodo académico en que se impartirá</InputLabel>
          <Select id="regcur_perprog" label="Periodo académico en que se impartirá">
            <MenuItem value="2024-1">2024-1</MenuItem>
            <MenuItem value="2023-2">2023-2</MenuItem>
            <MenuItem value="2023-1">2023-1</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default UsoInternoDGEC;
