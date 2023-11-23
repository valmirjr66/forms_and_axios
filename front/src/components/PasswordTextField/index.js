import CancelIcon from "@mui/icons-material/Cancel";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";

function PasswordTextField({
  value,
  repeatValue,
  onChange,
  onRepeatChange,
  passwordLabel,
  repeatLabel,
  passwordHelperText,
  repeatHelperText,
  validatePassword,
  ...props
}) {
  const [passwordValue, setPasswordValue] = useState(value);
  const [isValid, setIsValid] = useState(!value || validatePassword(value));

  const [repeatPasswordValue, setRepeatPasswordValue] = useState(repeatValue);
  const [isRepeatValid, setIsRepeatValid] = useState(
    !repeatValue || repeatValue === passwordValue
  );

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setPasswordValue(inputValue);
    setIsValid(!inputValue || validatePassword(inputValue));

    if (onChange) {
      onChange(e, inputValue);
    }
  };

  const handleRepeatChange = (e) => {
    const inputValue = e.target.value;
    setRepeatPasswordValue(inputValue);
    setIsRepeatValid(!inputValue || inputValue === passwordValue);

    if (onRepeatChange) {
      onRepeatChange(e, inputValue);
    }
  };

  return (
    <div>
      <TextField
        label={passwordLabel || "Password"}
        type="password"
        value={passwordValue}
        onChange={handleChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {!isValid && passwordValue && (
                <IconButton>
                  <CancelIcon style={{ color: "red" }} />
                </IconButton>
              )}
            </InputAdornment>
          ),
        }}
        error={!isValid}
        helperText={passwordValue && (passwordHelperText || "")}
        {...props}
      />
      {repeatValue && (
        <TextField
          label={repeatLabel}
          type="password"
          value={repeatPasswordValue}
          onChange={handleRepeatChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {!isRepeatValid && repeatPasswordValue && (
                  <IconButton>
                    <CancelIcon style={{ color: "red" }} />
                  </IconButton>
                )}
              </InputAdornment>
            ),
          }}
          error={!isRepeatValid}
          helperText={
            !isRepeatValid && repeatPasswordValue && (repeatHelperText || "")
          }
          {...props}
        />
      )}
    </div>
  );
}

export default PasswordTextField;
