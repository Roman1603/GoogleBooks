import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import BookList from './BookList/BookList';
import SearchBar from './SearchBar/SearchBar';
import googleBooks from './api/googleBooks';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      booklist: [],



    }
  }

  handleSearch = async (printType, filter, searchField) => {
    const response = await googleBooks.get("/volumes?", {
      params: {
        q: searchField,
        filter: filter,
        printType: printType
      }
    })
    console.log(response);
    this.setState({ booklist: response.data.items })

  }



  render() {
    return (
      <div className='App' >
        <Header />
        <SearchBar
          handleSearch={this.handleSearch}
        />
        <BookList booklist={this.state.booklist} />
      </div >
    );
  }
}

export default App;










