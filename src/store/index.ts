import { createGlobalState } from 'react-hooks-global-state';

const initialState = {
  auth: {
    signed: false,
    loading: false,
    token: null,
  },
};

const { GlobalStateProvider, useGlobalState } = createGlobalState(initialState);

export { GlobalStateProvider, useGlobalState };
