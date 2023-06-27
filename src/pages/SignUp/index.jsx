import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../../services/api';

import AppLogo from '../../assets/logo.svg';
import { Container, Logo, Form } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export function SignUp() {
  const [name, setName] = useState(' ');
  const [email, setEmail] = useState(' ');
  const [password, setPassword] = useState(' ');

  const navigate = useNavigate();

  async function handleSignUp() {
    try {
      if (!name || !email || !password) {
        toast.error('Preencha todos os campos!');
      }

      await api.post('/users', { name, email, password });
      navigate('/');
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Não foi possível cadastrar usuário.');
      }
    }
  }

  return (
    <Container>
      <Logo>
        <div className="logo">
          <img src={AppLogo} />

          <h1>food explorer</h1>
        </div>
      </Logo>

      <Form>
        <h2>Crie sua conta</h2>

        <div className="inputs">
          <p>Seu nome</p>
          <Input
            placeholder="Exemplo: Maria da Silva"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="inputs">
          <p>Email</p>
          <Input
            placeholder="Exemplo: exemplo@exemplo.com.br"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="inputs">
          <p>Senha</p>
          <Input
            placeholder="No mínimo 6 caracteres"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Button
          className="inputs"
          color="red"
          title="Criar uma conta"
          type="button"
          variant="red"
          onClick={handleSignUp}
        />

        <Link to="/">Já tenho uma conta</Link>
      </Form>

      <ToastContainer autoClose={2000} position="top-right" />
    </Container>
  );
}
