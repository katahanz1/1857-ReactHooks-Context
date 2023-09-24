import {React, useState} from "react";
import { Box, Typography } from "@mui/material";
import { LogoSpace, FormSpace, Img } from "./styles";
import DatosUsuario from "./DatosUsuario";
import DatosPersonales from "./DatosPersonales";
import DatosEntrega from "./DatosEntrega";
import Complete from "./Complete";
import Stepper from "../Stepper";
import Step from "./Step";

//validaciones 
import { validarEmail, validarPassword } from "./DatosUsuario/validaciones";

const Form = () => {

  const [step, setStep] = useState(0);

  const updateStep = (step) =>{
    console.log("actualizar paso", step)
    setStep(step)
  }


  const steps = {
   0 : <DatosUsuario updateStep={updateStep} />,
   1 : <DatosPersonales updateStep={updateStep} />, 
   2 : <DatosEntrega updateStep={updateStep} />, 
   3 : <Complete />
  }

  const onSubmit = () => {

  }

  const stepsFlow = {
    0: {
      inputs: [
        {
          label: "Correo electrónico",
          type: "email",
          value: "",
          valid: null,
          onChange: () => {},
          helperText: "Ingresar un correo valido",
          validator: validarEmail,
        },
        {
          label: "Contraseña",
          type: "password",
          value: "",
          valid: null,
          onChange: () => {},
          helperText: "Ingresar una contraseña valida, Al menos 8 cáracteres y máximo 20",
          validator: validarPassword
        }
      ],
      buttonText: "Siguiente",
      onSubmit
    }
  }
  return (
    <Box
      sx={{
        padding: "30px",
        display: "flexbox",
        flexDirection: "column",
      }}
    >
      <LogoSpace>
        <Img src={"/favicon.png"} />
        <Typography variant="h3">AluraFood</Typography>
      </LogoSpace>
      <FormSpace>
        {step < 3 && <Stepper step={step}/>}
        {/* {steps[step]} */}
        <Step data={stepsFlow[step]} step={step} />
      </FormSpace>
    </Box>
  );
};

export default Form;
