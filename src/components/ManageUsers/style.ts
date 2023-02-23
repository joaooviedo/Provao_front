import styled, { css } from "styled-components";

export const ManageUsers = styled.section`
  ${() => css`
    background-color: goldenrod;
    background-size: cover;
    background-position: center;
    width: 100vw;
    height: 100vh;
  `}
`;

export const ManageUsersContent = styled.div`
${() => css`
  background: greenyellow;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 15px;
  align-items: center;
  max-width: 300px;
  width: 100%;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
`}
`;


export const UserItemName = styled.h3`
  ${() => css`
    font-family: Barlow;
    font-size: 14px;
    line-height: 140%;
    text-align: center;
    max-width: 90%;
    margin: 0;
  `}
`;

export const UserItemEmail = styled.strong`
  ${() => css`
    font-family: Barlow;
    font-size: 14px;
    line-height: 140%;
    text-align: center;
    max-width: 90%;
    margin: 0;
    color: goldenrod;
  `}
`;

export const UserItemPassword = styled.strong`
  ${() => css`
    font-family: Barlow;
    font-size: 14px;
    line-height: 140%;
    text-align: center;
    max-width: 90%;
    margin: 0;
    font-size: 12px;
  `}
`;

