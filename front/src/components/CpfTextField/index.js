import CancelIcon from "@mui/icons-material/Cancel";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { cpf } from "cpf-cnpj-validator";
import React, { useState } from "react";
import InputMask from "react-input-mask";

function CPFTextField({ value, ...props }) {
  const [cpfValue, setCPFValue] = useState(value);
  const [isValid, setIsValid] = useState(!value || cpf.isValid(value));
  const { helperText, onChange, ...rest } = props;

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setCPFValue(inputValue);
    setIsValid(!inputValue || cpf.isValid(inputValue));
    if (onChange) {
      onChange(e, inputValue);
    }
  };

  return (
    <InputMask
      mask="999.999.999-99"
      maskChar=" "
      value={cpfValue}
      onChange={handleChange}
    >
      {() => (
        <TextField
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {!isValid && (
                  <IconButton>
                    <CancelIcon style={{ color: "red" }} />
                  </IconButton>
                )}
              </InputAdornment>
            ),
          }}
          error={!isValid}
          helperText={!isValid ? props.helperText : ""}
          {...rest}
        />
      )}
    </InputMask>
  );
}

export default CPFTextField;
