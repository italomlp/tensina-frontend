import { createGlobalState } from 'react-hooks-global-state';

const initialState = {
  auth: {
    signed: false,
    loading: false,
    token: null,
  },
  user: {
    profile: {
      name: 'Nome de Usuário',
      email: 'exemplo@email.com',
      birthDate: new Date().setFullYear(new Date().getFullYear() - 20),
      avatar: 'https://api.adorable.io/avatars/200/abott@adorable.png',
    },
  },
};

const { GlobalStateProvider, useGlobalState } = createGlobalState(initialState);

export { GlobalStateProvider, useGlobalState };
