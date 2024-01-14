import axios from "axios";
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    const returnObject = await axios({
      method: "POST",
      url: "http://localhost:3000/auth",
      data: {
        email: "root@root.com",
        password: "abc",
      },
    })
      .then((result) => {
        alert(`${result.data.accessToken}`);
        return result;
      })
      .catch(() => {
        alert(`usuario ou senha invalida`);
      });
    console.log("returnObject", returnObject);
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
            onChange={handleEmail}
            value={email}
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
