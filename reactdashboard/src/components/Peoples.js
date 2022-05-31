import React, { Component } from "react";
import got from "../data/got";

export default class Peoples extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
    };
  }

  // all the peoples from the  data
  everyone = () => {
    return got.houses.reduce((acc, house) => {
      house.people.forEach((people) => {
        acc.push(people);
      });
      return acc;
    }, []);
  };

  //people based  on user search term
  filteredPeople = () => {
    return this.everyone().filter((people) => {
      if (this.state.searchTerm === "") {
        return this.everyone();
      }
      if (people.name.toLowerCase().includes(this.state.searchTerm)) {
        return people;
      }
    });
  };

  //responsible to change the input value
  handleSearch = ({ target }) => {
    const { value } = target;
    this.setState({
      searchTerm: value,
    });
  };

  render() {
    console.log(this.filteredPeople());
    return (
      <div className="container">
        <div className="search-box">
          <input
            type="text"
            value={this.searchTerm}
            onChange={this.handleSearch}
            placeholder="search here"
          />
        </div>

        <div className="cards-container">
          {this.filteredPeople().map((people) => {
            return <h2 key={people.name}>{people.name}</h2>;
          })}
        </div>
      </div>
    );
  }
}
