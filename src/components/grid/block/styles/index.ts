import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 0;
    font-size: 20px;
    font-weight: bold;
    height: auto;
    background-color: ${theme.colors.white};
    border: solid 1px ${theme.colors.black};
    cursor: pointer;
    transition: ${theme.transition};
    user-select: none;
    &::before {
      content: '';
      padding-top: 100%;
      float: left;
    }
    &:hover {
      background-color: ${theme.colors.lightBlue};
    }
  `}
`;
