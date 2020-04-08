import React from 'react';

import { Routes } from './Routes';
import { PageHeader } from './components/PageHeader/PageHeader';
import { PageContent } from './components/PageContent/PageContent';

import './App.scss';

function App() {
  return (
    <div>
      <PageHeader />
      <PageContent>
        <Routes />
      </PageContent>
    </div>
  );
}

export default App;
