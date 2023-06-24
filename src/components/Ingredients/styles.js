import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  padding: 1rem;
  border-radius: 5px;

  p {
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 140%;
    text-align: center;
  }
`;
