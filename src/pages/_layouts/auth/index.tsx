import React from 'react';

import { Wrapper, Content } from './styles';
import logo from '../../../assets/logo-2.png';

type Props = {
  children: React.ReactChild | React.ReactChildren;
};

export default function AuthLayout({ children }: Props) {
  return (
    <Wrapper>
      <Content>
        <img src={logo} alt="TEnsina" />
        {children}
      </Content>
    </Wrapper>
  );
}
