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
    box-shadow: 2px 2px 5px 0px black;
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