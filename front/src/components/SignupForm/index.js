import { Box, Typography } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { insertUser } from "../../services";
import Container from "../Container";
import { regions } from "./regions";
import CPFTextField from "../CpfTextField";
import { cpf } from "cpf-cnpj-validator";
import EmailTextField from "../EmailTextField";
import PasswordTextField from "../PasswordTextField";
import { validatePassword, validateEmail } from "../../utils/validators";

const SignupForm = () => {
  const [user, setUser] = useState({});

  const submitForm = () => {
    insertUser(
      { user: { ...user, repeatPassword: undefined } },
      () => {
        toast.success("Usuário cadastrado");
        setUser({});
      },
      (err) => toast.error(err.response?.data || "Erro na operação")
    );
  };

  return (
    <Container>
      <Typography>Faça seu cadastro</Typography>
      <TextField
        id="name"
        label="Qual o nome?"
        sx={{ width: 300, display: "flex" }}
        variant="standard"
        onChange={(e) => {
          setUser({
            ...user,
            name: e.target.value,
          });
        }}
        value={user.name}
      />
      <Autocomplete
        id="region-select"
        sx={{ width: 300 }}
        options={regions}
        getOptionLabel={(option) => option?.label || ""}
        onChange={(_, newValue) => {
          setUser({
            ...user,
            region: newValue.code,
          });
        }}
        value={user.region}
        renderOption={(props, option) => {
          const flagImage = require(`../../assets/flags/${option.code}.png`);
          return (
            <Box
              component="li"
              sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
              {...props}
            >
              <img
                loading="lazy"
                width="20"
                src={flagImage}
                alt={option.label}
              />
              {option.label} ({option.code})
            </Box>
          );
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Qual o estado?"
            inputProps={{
              ...params.inputProps,
              autoComplete: "new-password",
            }}
            variant="standard"
          />
        )}
      />
      <TextField
        id="dateOfBirth"
        label="Qual a data de nascimento?"
        sx={{ width: 300, display: "flex" }}
        variant="standard"
        type="date"
        InputLabelProps={{ shrink: true }}
        onChange={(e) => {
          setUser({
            ...user,
            dateOfBirth: e.target.value || new Date(),
          });
        }}
        value={user.dateOfBirth}
      />
      <CPFTextField
        id="CPF"
        label="Qual o CPF?"
        helperText={"CPF inválido"}
        sx={{ width: 300, display: "flex" }}
        variant="standard"
        InputLabelProps={{ shrink: true }}
        onChange={(e) => {
          setUser({
            ...user,
            CPF: e.target.value,
          });
        }}
        value={user.CPF}
      />
      <EmailTextField
        id="email"
        label="Qual o Email?"
        helperText={"Email inválido"}
        sx={{ width: 300, display: "flex" }}
        variant="standard"
        InputLabelProps={{ shrink: true }}
        onChange={(e) => {
          setUser({
            ...user,
            email: e.target.value,
          });
        }}
        value={user.email}
        validateEmail={validateEmail}
      />
      <PasswordTextField
        id="password"
        passwordLabel="Qual a senha?"
        repeatLabel="Repita a senha"
        passwordHelperText="Sua senha deve ter no mínimo 8 caracteres, incluindo letras maiúsculas, minúsculas, números e um caractere especial"
        repeatHelperText="Senhas não coincidem"
        variant="standard"
        InputLabelProps={{ shrink: true }}
        sx={{ width: 300, display: "flex" }}
        onChange={(e, password) => {
          setUser({
            ...user,
            password: password,
          });
        }}
        onRepeatChange={(e, repeatValue) => {
          setUser({
            ...user,
            repeatPassword: repeatValue,
          });
        }}
        value={user.password}
        repeatValue={user.repeatPassword}
        validatePassword={validatePassword}
        repeatPassword={true}
      />
      <Button
        variant="contained"
        type="submit"
        onClick={submitForm}
        disabled={
          !(
            user.name &&
            user.region &&
            user.dateOfBirth &&
            user.CPF &&
            user.email &&
            user.password &&
            user.password === user.repeatPassword &&
            validateEmail(user.email) &&
            validatePassword(user.password) &&
            cpf.isValid(user.CPF)
          )
        }
      >
        Cadastrar
      </Button>
      <Typography as="a" href="/entrar">
        Já tem uma conta? Clique aqui
      </Typography>
    </Container>
  );
};

export default SignupForm;
