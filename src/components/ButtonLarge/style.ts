import styled, { css } from "styled-components";

export const ButtonLarge = styled.button`
  ${() => css`
    background: violet;
    border: none;
    border-radius: 8px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    width: 100%;
    cursor: pointer;
    font-weight: 600;
    &:disabled {
      color: black;
      background: grey;
      box-shadow: none;
      cursor: not-allowed;
    }
  `}
`;