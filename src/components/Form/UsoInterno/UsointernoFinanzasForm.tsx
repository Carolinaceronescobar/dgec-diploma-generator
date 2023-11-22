import { Container, Typography, TextField, RadioGroup, Radio, FormControlLabel } from '@mui/material';

const UsoInternoFinanzas = () => {
  return (
    <Container>
      <Typography variant="h5">Uso interno Finanzas</Typography>
      <hr />

      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="fin_codorgprog" className="form-label">
            INTERNO - Código de la Organización (Banner)
          </label>
          <TextField type="text" className="form-control" name="fin_codorgprog" id="fin_codorgprog" />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="fin_coddetprog" className="form-label">
            INTERNO - Código de Detalle (Banner)
          </label>
          <TextField type="text" className="form-control" name="fin_coddetprog" id="fin_coddetprog" />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="fin_distpresprog" className="form-label">
            INTERNO - Distribución Presupuestaria del Código de Detalle
          </label>

          {/* Ejemplo de RadioGroup */}
          <RadioGroup name="fin_distpresprog">
            <FormControlLabel value="80/20" control={<Radio />} label="80/20" />
            <FormControlLabel value="100/0" control={<Radio />} label="100/0" />
          </RadioGroup>
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="fin_planpagoprog" className="form-label">
            INTERNO - Código del Plan de Pago (Banner)
          </label>
          <TextField type="text" className="form-control" name="fin_planpagoprog" id="fin_planpagoprog" />
        </div>
      </div>
    </Container>
  );
};

export default UsoInternoFinanzas;
