import React from 'react';
import { Header } from '../../../components';

// import { Container } from './styles';

type Props = {
  children: React.ReactChild | React.ReactChildren;
};

export default function DefaultLayout({ children }: Props) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
