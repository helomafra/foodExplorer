import styled, { css } from 'styled-components';

const RESOLVE_STYLE = {
  exclude: css`
    width: 100%;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    font-weight: 500;
    font-size: 1.4rem;
  `,
  backbutton: css`
    width: 100%;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 2.4rem;
  `
};

export const Container = styled.button`
  display: flex;
  align-items: center;
  text-align: end;

  font-family: 'Poppins', sans-serif;

  border: none;
  gap: 0.8rem;

  background: none;

  ${(props) => RESOLVE_STYLE[props.variant]}
`;
