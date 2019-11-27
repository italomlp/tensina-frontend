import React from 'react';
import { Card } from '../../components';

import { Container } from './styles';

export default function Home() {
  return (
    <Container>
      <Card
        title="Curso 1"
        subtitle="Criado em 20/10/2048"
        textContent="Descrição do curso"
      />
    </Container>
  );
}
