// Parent Component: Country.js
import React, { Component } from "react";
import States from "./States";

export default class Country extends Component {
  constructor() {
    super();
    this.state = {
      country: ""
    };
  }

  handler = (e) => {
    this.setState({ country: e.target.value });
    
  };

  render() {
    return (
      <div>
        <select onChange={this.handler}>
          <option value="">Select</option>
          <option value="IN">India</option>
          <option value="JP">Japan</option>
          <option value="ID">Indonesia</option>
          <option value="US">America</option>
        </select>
        <States cn={this.state.country}></States>
      </div>
    );
  }
}
