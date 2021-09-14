import styled, { css } from 'styled-components';

export const Card = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex: 1;
    flex-direction: column;
    min-height: fit-content;
    padding: 15px;
    background-color: ${theme.colors.white};
    border-radius: 15px;
  `}
`;
