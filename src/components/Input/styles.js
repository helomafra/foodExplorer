import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.COLORS.GRAY_200};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  width: 100%;
  border-radius: 5px;

  input {
    width: 100%;
    height: 4.8rem;

    padding: 1.6rem 1.4rem;

    border-radius: 0.5rem;

    border: 0;

    color: ${({ theme }) => theme.COLORS.GRAY_200};
    background: transparent;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }

  > svg {
    margin-left: 1.4rem;
  }
`;
