import styled, { css } from "styled-components";

export const BoxLogin = styled.section`
  ${() => css`
    background: greenyellow;
    width: 300px;
    height: 400px;
    padding: 20px 20px 35px 20px;
    margin: 20px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    box-shadow: 6px 6px 10px 0px black;
  `}
`;

export const BoxLoginTitle = styled.div`
  ${() => css`
  font-size: 35px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `}
`;

export const BoxLoginTitleText = styled.h1`
  ${() => css`
    text-transform: uppercase;
    margin: 20px 0;
    padding: 2.5px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-top: 1px solid;
    border-bottom: 1px solid;
    text-align: end;
    width: calc(50% - 10px);
  `}
`;

export const BoxLoginForm = styled.form`
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: 15px;
    input {
      height: 48px;
      border-radius: 8px;
      padding: 14px;
      background: white;
      border: 1px solid;
      box-sizing: border-box;
      color: greenyellow;
    }
  `}
`;

export const BoxLoginError = styled.span`
  ${() => css`
    color: red;
    text-align: center;
    display: inline-block;
    margin-top: 25px;
  `}
`;