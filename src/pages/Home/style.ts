import styled, { css } from "styled-components";

export const Home = styled.section`
  ${() => css`
    background-color: black
    min-width: 100vw;
    min-height: 100vh;
    color: black
    display: flex;
    justify-content: space-between;
  `}
`;

export const HomeContent = styled.main`
  ${() => css`
  background-color: goldenrod;
    padding: 20px;
    overflow: auto;
    height: 100vh;
    box-sizing: border-box;
  `}
`;
export const HomeHeaderDetails = styled.div`
  ${() => css`
    display: flex;
    justify-content: space-between;
  `}
`;

export const HomeHeaderDetailsLogo = styled.h1`
  ${() => css`
    text-transform: uppercase;
    margin: 0;
  `}
`;

export const HomeUserTitle = styled.h2`
  ${() => css`
    margin: 0;
    border-bottom: 1px solid
    color: black
    padding-bottom: 10px;
    b {
      position: relative;
      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -13px;
        width: 100%;
        height: 4px;
        background-color: greenyellow;
        border-radius: 5rem;
      }
    }
  `}
`;

export const HomeUserList = styled.div`
  ${() => css`
    margin-top: 25px;
    padding-bottom: 25px;
  `}
`;

export const HomeUserListGap = styled.div`
  ${() => css`
    width: 200px;
  `}
`;

export const ItemLogout = styled.button`
  ${() => css`
    height: 3%;
    width: 10%;
    border-radius: 8px;
    padding: 16px;
    border: none;
    cursor: pointer;
    z-index: 1;
    background-color: greenyellow;
  `}
`;