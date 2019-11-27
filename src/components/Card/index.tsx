import React from 'react';

import { Container, Header, Content } from './styles';

type Props = {
  title: string;
  subtitle?: string;
  textContent?: string;
  imageSrc?: string;
};

export default function Card({ title, subtitle, textContent }: Props) {
  return (
    <Container>
      <Header>
        <h1>{title}</h1>
        {!!subtitle && <p>{subtitle}</p>}
      </Header>
      <Content>{textContent}</Content>
    </Container>
  );
}
