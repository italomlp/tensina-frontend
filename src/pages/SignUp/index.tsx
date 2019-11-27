import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Input } from '../../components';
import history from '../../services/history';

import { Container, BottomLine } from './styles';

export default function SignUp() {
  function register() {
    history.push('/login');
  }

  return (
    <Container>
      <p>
        Cadastre-se no nosso sistema para poder começar disponibilizar conteúdo
        em games
      </p>

      <form>
        <Input placeholder="Nome" name="name" type="text" />
        <Input placeholder="Email" name="email" type="email" />
        <Input placeholder="Data de nascimento" name="birthDate" type="text" />
        <Input placeholder="Senha" name="password" type="password" />
        <Input
          placeholder="Confirmação de Senha"
          name="password"
          type="password"
        />
        <Button onClick={register}>Cadastrar</Button>
      </form>

      <BottomLine>
        <span>Já é cadastrado?</span>
        <Link to="/login">Faça login</Link>
      </BottomLine>
    </Container>
  );
}
