import React from 'react';
import { Link } from 'react-router-dom';

import { Input, Button } from '../../components';

import { Container, BottomLine } from './styles';
import history from '../../services/history';
import { useGlobalState } from '../../store';

export default function SignIn() {
  const [auth, setAuth] = useGlobalState('auth');

  function login() {
    setAuth({ ...auth, signed: true });
    history.push('/home');
  }

  return (
    <Container>
      <p>Faça login para gerenciar seus games</p>

      <form>
        <Input placeholder="Email" name="email" type="email" />
        <Input placeholder="Senha" name="password" type="password" />
        <Button onClick={login}>Entrar</Button>
      </form>

      <BottomLine>
        <span>Educador, não é cadastrado ainda?</span>
        <Link to="/register">Inscreva-se</Link>
      </BottomLine>
    </Container>
  );
}
