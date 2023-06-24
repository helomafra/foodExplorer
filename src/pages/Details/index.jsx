import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import { Container, Content, Ingredient, PurchaseCard } from './styles.js';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Ingredients } from '../../components/Ingredients';
import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button';

import { api } from '../../services/api';
import { useCart } from '../../context/cart';

import { ArrowLeft } from '@phosphor-icons/react';

export function Details() {
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  const [data, setData] = useState(null);
  const params = useParams();

  const imageURL = data && `${api.defaults.baseURL}/files/${data.image}`;

  const { handleAddDishToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    async function fetchPlateDetail() {
      const response = await api.get(`/plates/${params.id}`);
      setData(response.data);
    }

    fetchPlateDetail();
  }, []);

  return (
    <Container>
      <Header />

      {data && (
        <Content>
          <Link>
            <ButtonText
              title="voltar"
              icon={ArrowLeft}
              onClick={handleBack}
              variant="backbutton"
            />
          </Link>

          <div className="content">
            <div className="dish">
              <img src={imageURL} alt="Logo" />
              <div className="description">
                <h1>{data.title}</h1>

                <h3>{data.description}</h3>

                <Ingredient>
                  {data.ingredients.map((ingredient) => (
                    <Ingredients
                      key={String(ingredient.id)}
                      ingredient={ingredient.name}
                    />
                  ))}
                </Ingredient>

                <div className="footer">
                  <h4>R$ {data.price}</h4>

                  <Button
                    title="Incluir no carrinho"
                    onClick={() =>
                      handleAddDishToCart(data, quantity, imageURL)
                    }
                    variant="red"
                  />
                </div>
              </div>
            </div>
          </div>
        </Content>
      )}

      <Footer />
    </Container>
  );
}
