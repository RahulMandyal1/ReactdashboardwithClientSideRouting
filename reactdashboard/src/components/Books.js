import React, { Component } from "react";
import booksData from "../data/books.json";
export default class Books extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
    };
  }

  // all the peoples from the  data
  allBooks = () => {
    return booksData.reduce((acc, book) => {
      acc.push(book);
      return acc;
    }, []);
  };

  //people based  on user search term
  filteredBooks = () => {
    return this.allBooks().filter((book) => {
      if (this.state.searchTerm === "") {
        return this.allBooks();
      }
      if (book.title.toLowerCase().includes(this.state.searchTerm)) {
        return book;
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

        <div className="cards-container book-container">
          {this.filteredBooks().map((book) => {
            return (
              <div className="card">
                <img src={book.image}  className="book-image"/>
                <h2 className="book-title"> {book.title}</h2>
                <p className="author-name">{book.author}</p>
                <a href={book.website} className="buy-button">buy now</a>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
