import { Link } from 'react-router-dom';

import { Container, Content, PaymentCard } from './styles.js';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { OrderCard } from '../../components/OrderCard';
import { ButtonText } from '../../components/ButtonText';

import { useAuth } from '../../context/auth';
import { useCart } from '../../context/cart';

import { ArrowLeft } from '@phosphor-icons/react';

export function Cart() {
  const { user } = useAuth();

  const { cart, total, handleResetCart } = useCart();

  function handleBack() {
    navigate(-1);
  }

  return (
    <Container>
      <Header />

      <Content>
        <div className="card-wrapper">
          <div className="order-wrapper">
            <h2>Meu pedido</h2>
            <div className="details">
              {cart &&
                cart.map((item) => (
                  <OrderCard key={String(item.id)} data={item} />
                ))}
            </div>

            <div className="total">
              <p>
                Total: R$<span>{total}</span>
              </p>
            </div>
          </div>
        </div>
      </Content>

      <Footer />
    </Container>
  );
}
