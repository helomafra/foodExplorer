import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  border-radius: 0.8rem;
  padding: 2.4rem;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  min-width: 28rem;
  max-width: 30rem;

  .container {
    width: 100%;
    gap: 1.6rem;
    display: flex;
    flex-direction: column;

    text-align: center;
    align-items: center;
    align-self: center;

    > img {
      width: 17.6rem;
      height: 17.6rem;
      border-radius: 50%;
      object-fit: cover;

      padding-bottom: 1.6rem;
    }
  }

  .product-title {
    font-weight: 700;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.WHITE};

    white-space: nowrap;
  }

  .description {
    font-family: 'Roboto', sans-serif;
    font-size: 1.4rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .price {
    font-family: 'Roboto', sans-serif;
    font-size: 3.2rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.BLUE_100};
  }
`;
