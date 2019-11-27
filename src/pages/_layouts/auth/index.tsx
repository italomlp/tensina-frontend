import React from 'react';

// import { Container } from './styles';

type Props = {
  children: React.ReactChild | React.ReactChildren;
};

export default function AuthLayout({ children }: Props) {
  return <div>{children}</div>;
}
