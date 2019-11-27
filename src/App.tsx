import React from 'react';
import { Router } from 'react-router-dom';

import { GlobalStateProvider } from './store';
import history from './services/history';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <GlobalStateProvider>
      <Router history={history}>
        <Routes />
      </Router>
    </GlobalStateProvider>
  );
};

export default App;
