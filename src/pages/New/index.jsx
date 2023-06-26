import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, Content, Form } from './styles.js';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { IngredientsTag } from '../../components/IngredientsTag';
import { TextArea } from '../../components/TextArea';

import { api } from '../../services/api';
import { useAuth } from '../../context/auth';
import { Link } from 'react-router-dom';

import { ArrowLeft, UploadSimple } from '@phosphor-icons/react';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export function New() {
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);

  const navigate = useNavigate();

  function handleAddIngredient() {
    if (newIngredient.length < 1) {
      return toast.error('Adicione um ingrediente válido!');
    } else {
      setIngredients((prevState) => [...prevState, newIngredient]);
      setNewIngredient('');
    }
  }

  function handleRemoveIngredient(deleted) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted)
    );
  }

  async function handleNewDish() {
    if (!image) {
      return toast.error('Carregue a nova imagem do prato!');
    }

    if (!title) {
      return toast.error('O nome do prato está vazio!');
    }

    if (ingredients.length < 1) {
      return toast.error('Adicione ao menos um ingrediente!');
    }

    if (newIngredient) {
      return toast.error(
        'Você deixou um ingrediente no campo para adicionar, mas não clicou em adicionar. Clique no sinal de + para adicionar!'
      );
    }

    if (!category) {
      return toast.error('Selecione a categoria do prato!');
    }

    if (!price) {
      return toast.error('Informe o preço do prato!');
    }

    if (!description) {
      return toast.error('Informe uma descrição para o prato!');
    }

    const formData = new FormData();
    formData.append('image', image);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('category', category);
    formData.append('price', price);

    ingredients.map((ingredient) => formData.append('ingredients', ingredient));

    await api
      .post('/plates', formData)
      .then(toast.success('Prato adicionado com sucesso!'), navigate('/'))
      .catch((error) => {
        if (error.response) {
          toast.error(error.response.data.message);
        } else {
          toast.error('Erro ao criar o prato!');
        }
      });
  }

  return (
    <Container>
      <Header />

      <Content>
        <Form>
          <header>
            <Link to="/">
              <ButtonText
                title="voltar"
                icon={ArrowLeft}
                variant="backbutton"
              />
            </Link>
            <h1>Novo prato</h1>
          </header>

          <div className="details">
            <div className="dishImage">
              <p>Imagem do Prato</p>
              <label htmlFor="image">
                <UploadSimple size={24} />
                Selecione imagem
              </label>
              <Input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>

            <div className="dish">
              <p>Nome do prato</p>
              <Input
                placeholder="Ex.: Salada Caesar"
                type="text"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </div>

          <div className="ingredientsTag">
            <div>
              <p>Ingredientes</p>
              <div className="ingredients">
                {ingredients.map((ingredient, index) => (
                  <IngredientsTag
                    key={String(index)}
                    value={ingredient}
                    onClick={() => handleRemoveIngredient(ingredient)}
                  />
                ))}

                <IngredientsTag
                  isNew
                  placeholder="Adicionar"
                  onChange={(e) => setNewIngredient(e.target.value)}
                  value={newIngredient}
                  onClick={handleAddIngredient}
                />
              </div>
            </div>

            <div className="price">
              <p>Preço</p>
              <Input
                placeholder="R$ 00,00"
                type="number"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div className="dishCategory">
              <p>Categoria</p>

              <select
                defaultValue={'default'}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="default" disabled>
                  Selecione a categoria
                </option>
                <option value="dishes">Pratos</option>
                <option value="drinks">Bebidas</option>
                <option value="dessert">Sobremesas</option>
              </select>
            </div>
          </div>

          <div className="textarea">
            <p>Descrição</p>
            <TextArea
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </Form>

        <div className="button">
          <Button
            title="Adicionar prato"
            onClick={handleNewDish}
            variant="red"
          />
        </div>
      </Content>

      <Footer />

      <ToastContainer autoClose={2000} position="top-right" />
    </Container>
  );
}
