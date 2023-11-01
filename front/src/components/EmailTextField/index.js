import CancelIcon from "@mui/icons-material/Cancel";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";

function EmailTextField({ value, validateEmail, ...props }) {
  const { helperText, onChange, ...rest } = props;
  const [emailValue, setEmailValue] = useState(value);

  const [isValid, setIsValid] = useState(!value || validateEmail(value));

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setEmailValue(inputValue);
    setIsValid(!inputValue || validateEmail(inputValue));
    if (onChange) {
      onChange(e, inputValue);
    }
  };

  return (
    <TextField
      value={emailValue}
      onChange={handleChange}
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
      helperText={!isValid ? helperText : ""}
      {...rest}
    />
  );
}

export default EmailTextField;
