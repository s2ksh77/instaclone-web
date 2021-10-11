import styled from "styled-components";
import { darkModeVar, isLoggedInVar } from "../apollo";

const Title = styled.h1`
  color: ${(props) => props.theme.fontColor};
`;
const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;

const Login = () => {
  return (
    <Container>
      <Title>Login</Title>
    </Container>
  );
};

export default Login;
