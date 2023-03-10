import styled, { css } from "styled-components";

export const Home = styled.section`
  ${() => css`
    background-color: goldenrod;
    background-size: cover;
    background-position: center;
    width: 100vw;
    height: 100vh;
  `}
`;

export const HomeContent = styled.main`
  ${() => css`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center; ;
  `}
`;