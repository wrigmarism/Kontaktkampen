import React from 'react';
import ReactDOM from 'react-dom';
import { Companies } from './pages/Companies.js';
import CompanyContainer from './components/companyContainer';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <CompanyContainer />
  </React.StrictMode>,
  document.getElementById('root')
);

