import styled from 'styled-components';
import { List } from '@phosphor-icons/react';
import { Pagination } from 'swiper';

export const Drawer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2rem;

  z-index: 999;

  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 20px;
  transform: ${({ isOpen }) =>
    isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.3s ease-in-out;

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    align-items: center;

    height: auto;
    transform: ${({ isOpen }) =>
      isOpen ? 'translateY(0)' : 'translateY(-100%)'};

    .head {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

export const DrawerButton = styled.button`
  display: flex;
  align-items: center;

  gap: 10px;

  background: none;
  border: none;
  color: ${({ theme }) => theme.COLORS.WHITE};
  cursor: pointer;
`;

export const InsideDrawerButton = styled.button`
  display: flex;
  align-items: flex-start;

  gap: 10px;
  width: 100%;
  background: none;
  border: none;
  color: ${({ theme }) => theme.COLORS.WHITE};
  cursor: pointer;
`;

export const DrawerMenu = styled(List)`
  width: 20px;
  height: 20px;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;

  position: sticky;
  top: 0;
  z-index: 998;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

  .content {
    display: flex;
    gap: 3.2rem;
    width: 100%;
    max-width: 121.2rem;
    margin: auto;
    padding: 2.4rem;
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding: 2.4rem;

    .new-plate {
      display: flex;
      align-items: center;
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  cursor: pointer;

  align-items: center;

  color: ${({ theme }) => theme.COLORS.WHITE};
  gap: 1rem;
`;

export const Logout = styled.div`
  display: flex;

  align-items: center;

  color: ${({ theme }) => theme.COLORS.WHITE};
  gap: 1rem;
  cursor: pointer;
`;

export const Search = styled.div`
  align-self: center;

  width: 100%;
  border-radius: 5px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  input {
    width: 100%;
    height: 4.8rem;

    padding: 1.6rem;
    border: 0;

    color: ${({ theme }) => theme.COLORS.GRAY_200};
    background: transparent;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }

  label {
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 1.6rem;
  }

  svg {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }
`;
