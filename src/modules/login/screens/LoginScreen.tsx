import {
  BackgroundImage,
  ContainerLogin,
  ContainerLoginScreen,
  LimitedCotainer,
  LogoImage,
} from "../styles/loginScreen.styles";

const LoginScreen = () => {
  return (
    <ContainerLoginScreen>
      <ContainerLogin>
        <LimitedCotainer>
          <LogoImage src="./logo.png" />
        </LimitedCotainer>
      </ContainerLogin>
      <BackgroundImage src="./background.png" />
    </ContainerLoginScreen>
  );
};

export default LoginScreen;
