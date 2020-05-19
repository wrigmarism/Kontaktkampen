import React from "react";
import ReactDOM from "react-dom";
import { getData } from '../helpers/db';


import Accordion from 'react-bootstrap/Accordion';

class CompanyContainer extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        hits: [],
      };
    }

    async componentDidMount() {
      var data = await getData("company");
      var list = [];
        // data.then(function(result) {
        //     result.forEach(function (doc) {
        //         list.push(doc);
        //         });
                
            // console.log(list[1]);
            // });
            
            this.setState({ hits: data });
    }
  
    render() {
      const { hits } = this.state;
   
      return (
        <Accordion> 
          {hits.map(hit =>
            <li key={hit.objectID}>
              <a href={hit.name}>{hit.name}</a>
            </li>
          )}
        </Accordion> 
      );
    }
  }

  export default CompanyContainer;
