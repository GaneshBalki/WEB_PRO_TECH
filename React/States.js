// Child Component: States.js
import React, { Component } from "react";

export default class States extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: props.cn,
      temp: []
    };
    this.India = ["Maharashtra", "Andhra Pradesh", "Uttar Pradesh", "Gujrat"];
    this.Japan = ["Akita", "Aomori", "Timari", "Chozi", "Okinawa"];
    this.Indonesia = ["Bali", "Banten", "Jambi", "Java Timur"];
    this.America = ["Maine", "Alaska", "California", "Hawaii", "Mexico"];
  }

  selectState = () => {
    console.log(this.state.country)
    switch (this.state.country) {
      case "IN":
        this.setState({ temp: [...this.India] });
        break;
      case "JP":
        this.setState({ temp: [...this.Japan] });
        break;
      case "ID":
        this.setState({ temp: [...this.Indonesia] });
        break;
      case "US":
        this.setState({ temp: [...this.America] });
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <div>
        <select>
          <option value="">Select</option>
          {this.state.temp.map((st, index) => (
            <option key={index}>{st}</option>
          ))}
        </select>
      </div>
    );
  }
}
