import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo-2.svg';
import { Container, Content, Profile } from './styles';
import { useGlobalState } from '../../store';

export default function Header() {
  const [{ profile }] = useGlobalState('user');

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/home">
            <img src={logo} alt="TEnsina" />
          </Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <span>{profile.email}</span>
            </div>
            <img
              src={
                profile.avatar ||
                'https://api.adorable.io/avatars/50/abott@adorable.png'
              }
              alt={profile.name}
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
