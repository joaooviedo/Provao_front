import styled, { css } from "styled-components";

export const UserItemListHeader = styled.div`
  ${() => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
  `}
`;

export const UserItemListHeaderTitle = styled.h1`
  ${() => css`
    margin: 0;
  `}
`;

export const UserItemList = styled.div`
  ${() => css`
    justify-content: center;
    margin-top: 20px;
    display: flex;
    gap: 75px 20px;
    flex-wrap: wrap;
  `}
`;