import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  align-items: center;
  border: 0;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    max-width: 121.2rem;
    padding: 2.4rem;
    margin: auto;

    color: ${({ theme }) => theme.COLORS.WHITE};

    > p {
      font-size: 1.4rem;
      text-align: right;
    }

    @media (max-width: 768px) {
      gap: 2.4rem;
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;

  color: ${({ theme }) => theme.COLORS.WHITE};
  gap: 1rem;
`;
