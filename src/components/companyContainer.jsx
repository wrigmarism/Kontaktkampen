import React from "react";
import ReactDOM from "react-dom";
import { getData } from "../helpers/db";
import Company from "../helpers/companyClass.js";
import CompanyCard from "./companyCard";

import Accordion from "react-bootstrap/Accordion";

class CompanyContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: [],
      isLoading: true
    };
  }

   componentDidMount() {
    var data = getData("company").then(
      this.setState({ hits: data, isLoading: false })
    );
    //console.log(data);
    // data.then(function(result) {
    //     result.forEach(function (doc) {
    //         list.push(doc);
    //         });

    // console.log(list[1]);
    // });
  }

  render() {
    const hits = this.state;
    
    return (
      <Accordion>
        { if(this.state.isLoading == false){Object.keys(hits).map(function (keyName, keyIndex) {
          // use keyName to get current key's name
          // and a[keyName] to get its value
          new CompanyCard(hits[keyName]);
        }
        else{
          '<h1>"Loading"</h1>'
        }
        })}
      </Accordion>
    );
  }
}

export default CompanyContainer;
