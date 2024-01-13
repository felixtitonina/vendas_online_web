import React, { useState } from "react";

import Button from "../../../shared/buttons/button/Button";
import Input from "../../../shared/inputs/input/Input";
import {
  BackgroundImage,
  ContainerLogin,
  ContainerLoginScreen,
  LimitedCotainer,
  LogoImage,
  TitleLogin,
} from "../styles/loginScreen.styles";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };
  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    alert(`${username} ${password}`);
  };
  return (
    <ContainerLoginScreen>
      <ContainerLogin>
        <LimitedCotainer>
          <LogoImage src="./logo.png" />
          <TitleLogin level={2} type="secondary">
            LOGIN
          </TitleLogin>
          <Input
            title="USUÁRIO"
            margin="32px 0px 0px"
            onChange={handleUsername}
            value={username}
          />
          <Input
            title="SENHA"
            margin="32px 0px 0px"
            onChange={handlePassword}
            value={password}
            type="password"
          />
          <Button
            type="primary"
            margin="64px 0px 16px 0px"
            onClick={handleLogin}
          >
            ENTRAR
          </Button>
        </LimitedCotainer>
      </ContainerLogin>
      <BackgroundImage src="./background.png" />
    </ContainerLoginScreen>
  );
};

export default LoginScreen;
