import styled, { css } from "styled-components";

export const ManageUsers = styled.section`
  ${() => css`
    padding: 20px;
  `}
`;

export const ManageUsersTitle = styled.h1`
  ${() => css`
  font-family: Barlow
  font-size: 14px
  line-height: 140%
    font-size: 20px;
    margin: 0;
  `}
`;

export const ManageUsersSub = styled.h2`
  ${() => css`
  font-family: Barlow
  font-size: 14px
  line-height: 140%
    margin: 25px 0 0 0;
    border-bottom: 1px solid black;
    color: black;
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
        background-color: black;
        border-radius: 5rem;
      }
    }
  `}
`;

export const ManageUsersContent = styled.div`
  ${() => css`
    margin-top: 15px;
    justify-content: center;
    height: 400px;
    padding-bottom: 20px;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    overflow: auto;
  `}
`;
export const ManageUsersContentAdd = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    max-height: 320px;
    box-sizing: border-box;
    padding: 10px 0;
    color: black;
    font-family: Barlow
  font-size: 14px
  line-height: 140%
    font-weight: 500;
    border: 1px dashed black;
    border-radius: 8px;
    gap: 10px;
    cursor: pointer;
  `}
`;

export const ManageUsersActions = styled.div`
  ${() => css`
    margin-top: 20px;
    display: flex;
    gap: 10px;
  `}
`;

const buttonOutlineModifiers = {
  square: () => css`
    width: 48px;
  `,
};

export const ManageUsersActionsCancel = styled.button`
  ${() => css`
    width: 172px;
  `}
`;

export const ManageUsersActionsSave = styled.button`
  ${() => css`
    width: 172px;
  `}
`;

const EditFormMixins = {
  error: () => css`
    border: 2px solid red;
  `,
  success: () => css`
    border: 2px solid green;
  `,
};

export const EditForm = styled.input<{ error?: boolean; success?: boolean }>`
  ${() => css`
    height: 48px;
    border-radius: 8px;
    padding: 14px;
    background: violet;
    border: 1px solid violet;
    box-sizing: border-box;
    color: black;
  `}
`;
