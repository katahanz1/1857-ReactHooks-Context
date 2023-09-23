import {React, useState} from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarEmail, validarPassword } from "./validaciones";

const DatosUsuario = () => {
  const [email, setEmail] = useState({value: "", valid: null});
  const [password, setPassword] = useState({value: "", valid: null});
  
    return (
      <Box
        component="form"
        autocomplete="off"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
        onSubmit={ (e) => {
          e.preventDefault();
          if( email.valid && password.valid ){
            console.log("siguente formulario")
          }else{
            console.log("No se puede continuar")
          }
          console.log(email, password);
        }}
      >
        <TextField
          label="Correo electrónico"
          variant="outlined"
          fullWidth
          margin="dense"
          type="email"
          error={email.valid === false}
          helperText={email.valid === false && "Ingresa un correo electrónico válido"}
          value={email.value}
          onChange={(input) => {
              const email = input.target.value
              const valido = validarEmail(email)
              setEmail({value: email, valid: valido })
            }
          }
        />
        <TextField
          label="Contraseña"
          variant="outlined"
          fullWidth
          margin="dense"
          type="password"
          Error={password.valid === false}
          helperText = {password.valid === false && "Ingresa una contraseña valida, alemnos 8 caracteres y máximo 20"}
          value={password.value}
          onChange={(input) => {
            const password = input.target.value;
            const valido = validarPassword(password)
            setPassword({value: password, valid: valido })
          }
          }
        />
        <Button variant="contained" type="submit">
          Siguiente
        </Button>
      </Box>
    );
  
}

export default DatosUsuario;
