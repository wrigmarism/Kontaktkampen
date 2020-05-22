import React from 'react';
import ReactDOM from 'react-dom';
import CompaniesPage from './pages/Companies.js';
import CompanyContainer from './components/companyContainer';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <CompaniesPage />
  </React.StrictMode>,
  document.getElementById('root')
);

