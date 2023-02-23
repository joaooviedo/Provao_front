import styled, { css } from "styled-components";

export const Login = styled.section`
  ${() => css`
    background-color: goldenrod;
    background-size: cover;
    background-position: center;
    width: 100vw;
    height: 100vh;
  `}
`;

export const LoginContent = styled.main`
  ${() => css`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center; ;
  `}
`;