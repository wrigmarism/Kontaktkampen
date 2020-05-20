import React from 'react';
import ReactDOM from 'react-dom';
import { getData } from '../helpers/db';

import Accordion from 'react-bootstrap/Accordion';

class CompanyCard extends React.Component {
    constructor(props) {
      super(props);
      console.log(props);
      this.state = {
        hits: [],
      };
    }

    async componentDidMount() {
      
    }
  
    render() {
      const { hits } = this.state;
   
      return (
        <h1>"jag är ett företag"</h1>
      );
    }
  }

  export default CompanyCard;