import styled, { css } from 'styled-components';

const RESOLVE_STYLE = {
  red: css`
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  `,

  new: css`
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    min-width: 20rem;
  `,

  card: css`
    width: 100%;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  `,

  exclude: css`
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    opacity: 0.5;
  `
};

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: fit-content;
  height: 4.8rem;
  padding: 1.2rem 3.3rem;
  gap: 0.8rem;
  border: 0;
  border-radius: 0.5rem;

  font-weight: 500;
  font-size: 1.4rem;

  ${(props) => RESOLVE_STYLE[props.variant]}
`;
