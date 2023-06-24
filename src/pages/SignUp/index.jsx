import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../../services/api';

import AppLogo from '../../assets/logo.svg';
import { Container, Logo, Form } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function SignUp() {
  const [name, setName] = useState(' ');
  const [email, setEmail] = useState(' ');
  const [password, setPassword] = useState(' ');

  const navigate = useNavigate();

  async function handleSignUp() {
    if (!name || !email || !password) {
      return alert('Preencha todos os campos!');
    }

    try {
      await api.post('/users', { name, email, password });
      alert('Usuário cadastrado com sucesso!');
      navigate('/');
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert('Não foi possível cadastrar usuário.');
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
    </Container>
  );
}
