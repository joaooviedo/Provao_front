import styled, { css } from "styled-components";

export const EditUser = styled.div`
  ${() => css`
    font-size: large;
    font-family: Barlow;
    line-height: 140%;
  `}
`;

export const EditUserAction = styled.div`
  ${() => css`
    font-size: large;
    font-family: Barlow;
    line-height: 140%;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 14px;
    box-sizing: border-box;
    color: black;
    background: violet;
    gap: 8px;
    border-radius: 8px 8px 8px 8px;
    cursor: pointer;
  `}
`;

export const Delete = styled.button`
  ${() => css`
    font-family: Barlow;
    font-size: large;
    line-height: 140%;
    height: 48px;
    background: red;
    border-radius: 8px;
    cursor: pointer;
    border: 1px solid;
    color: black;
  `}
`;

export const EditFormGroup = styled.div`
  ${() => css`
    font-family: Barlow;
    font-size: large;
    line-height: 140%;
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    align-items: center;
  `}
`;

export const EditForm = styled.input`
  ${() => css`
    font-family: Barlow;
    font-size: large;
    line-height: 140%;
    height: 48px;
    border-radius: 8px;
    padding: 14px;
    background: ;
    border: 1px solid;
    box-sizing: border-box;
    color: black;
    height: 40px;
  `}
`;

export const EditUserDetails = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    gap: 5px;
  `}
`;

export const EditUserDetailsTitle = styled.h3`
  ${() => css`
    font-family: Barlow;
    font-size: large;
    line-height: 140%;
    text-align: center;
    max-width: 90%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-height: 40px;
    font-weight: 700;
    margin: 0;
  `}
`;

export const EditUserDetailsText = styled.p`
  ${() => css`
    font-family: Barlow;
    font-size: large;
    line-height: 140%;
    text-align: center;
    max-width: 90%;
    font-weight: 500;
    margin: 0;
  `}
`;
