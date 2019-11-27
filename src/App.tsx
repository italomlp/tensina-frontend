import React from 'react';
import { Router } from 'react-router-dom';

import { GlobalStateProvider } from './store';
import history from './services/history';
import Routes from './routes';
import GlobalStyles from './styles/global';

const App: React.FC = () => {
  return (
    <GlobalStateProvider>
      <GlobalStyles />
      <Router history={history}>
        <Routes />
      </Router>
    </GlobalStateProvider>
  );
};

export default App;
