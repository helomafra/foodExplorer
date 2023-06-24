import { useState, useEffect, useRef } from 'react';
import { useAuth } from '../../context/auth';

import { Container, Logo, Form } from './styles';
import { Link } from 'react-router-dom';

import AppLogo from '../../assets/logo.svg';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function SignIn() {
  const [email, setEmail] = useState(' ');
  const [password, setPassword] = useState(' ');

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
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
        <h2>Faça login</h2>

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
          title="Entrar"
          type="button"
          variant="red"
          onClick={handleSignIn}
        />

        <Link to="/register">Criar uma conta</Link>
      </Form>
    </Container>
  );
}
