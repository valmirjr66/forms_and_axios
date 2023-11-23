import React, { useState } from "react";
import { validatePassword, validateEmail } from "../../utils/validators";
import EmailTextField from "../EmailTextField";
import PasswordTextField from "../PasswordTextField";
import Container from "../Container";
import Button from "@mui/material/Button";
import { loginUser } from "../../services";
import toast from "react-hot-toast";
import { redirect } from "react-router-dom";

const LoginForm = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const loginForm = () => {
    loginUser(
      { user: user },
      () => {
        toast.success("Login bem sucedido");
        redirect("/");
      },
      (err) => {toast.error(err.response?.data || "Erro na operação"); console.log(err)}
    );
  };

  return (
    <Container>
      <EmailTextField
        id="email"
        label="Email"
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
        passwordLabel="Senha"
        variant="standard"
        InputLabelProps={{ shrink: true }}
        sx={{ width: 300, display: "flex" }}
        onChange={(e, password) => {
          setUser({
            ...user,
            password: password,
          });
        }}
        value={user.password}
        validatePassword={validatePassword}
      />
      <Button variant="contained" type="submit" onClick={loginForm}>
        Login
      </Button>
    </Container>
  );
};

export default LoginForm;
