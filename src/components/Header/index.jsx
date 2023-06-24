import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Logo,
  Logout,
  Drawer,
  DrawerButton,
  DrawerMenu,
  Search,
  InsideDrawerButton
} from './styles';
import { Button } from '../Button';
import { useAuth } from '../../context/auth';
import { useCart } from '../../context/cart';
import LogoType from '../../assets/logotype.svg';
import AdminLogo from '../../assets/adminLogo.svg';
import {
  MagnifyingGlass,
  Receipt,
  SignOut,
  Plus,
  X
} from '@phosphor-icons/react';

export function Header({ search }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  const navigate = useNavigate();

  const { signOut, user } = useAuth();

  function handleBackHome() {
    navigate('/');
  }

  function handleGoToCart() {
    navigate('/cart');
  }

  function handleNewPlate() {
    navigate('/new');
  }

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileOrTablet(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isMobileOrTablet) {
    return (
      <>
        <Container>
          <DrawerButton onClick={toggleDrawer}>
            <DrawerMenu />
          </DrawerButton>

          {user.isAdmin ? (
            <>
              <Logo>
                <img src={AdminLogo} alt="Logo" onClick={handleBackHome} />
              </Logo>

              <div className="new-plate">
                <Plus size={20} onClick={handleNewPlate} />
              </div>
            </>
          ) : (
            <>
              <Logo>
                <img src={LogoType} alt="Logo" onClick={handleBackHome} />
              </Logo>
              <DrawerButton onClick={handleGoToCart}>
                <Receipt size={20} />
              </DrawerButton>
            </>
          )}
        </Container>
        {isDrawerOpen && (
          <Drawer isOpen={isDrawerOpen}>
            <div className="head">
              Menu
              <X onClick={() => setIsDrawerOpen(false)} />
            </div>
            <InsideDrawerButton>
              <Search>
                <label>
                  <MagnifyingGlass size={24} />
                  <input
                    type="text"
                    placeholder="Buscar pratos"
                    onChange={(e) => {
                      search(e.target.value);
                    }}
                    onFocus={() => {
                      setIsDrawerOpen(true);
                    }}
                  />
                </label>
              </Search>
            </InsideDrawerButton>
            <InsideDrawerButton onClick={signOut}>
              <SignOut size={20} />
              Sair
            </InsideDrawerButton>
            <DrawerButton></DrawerButton>
          </Drawer>
        )}
      </>
    );
  }

  return (
    <Container>
      <div className="content">
        {user.isAdmin ? (
          <Logo>
            <img src={AdminLogo} alt="Logo" onClick={handleBackHome} />
          </Logo>
        ) : (
          <Logo>
            <img src={LogoType} alt="Logo" onClick={handleBackHome} />
          </Logo>
        )}

        <Search>
          <label>
            <MagnifyingGlass size={24} />
            <input
              type="text"
              placeholder="Busque pelas opções de pratos"
              onChange={(e) => {
                search(e.target.value);
              }}
            />
          </label>
        </Search>

        {user.isAdmin ? (
          <Button
            title="Novo prato"
            type="button"
            variant="new"
            onClick={handleNewPlate}
          />
        ) : (
          <Button
            title="Pedidos"
            type="button"
            variant="red"
            icon={Receipt}
            onClick={handleGoToCart}
          />
        )}

        <Logout>
          <SignOut size={32} onClick={signOut} />
        </Logout>
      </div>
    </Container>
  );
}
