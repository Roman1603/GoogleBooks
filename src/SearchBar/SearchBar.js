import React from 'react';



class SearchBar extends React.Component {

  state = {
    printType: 'all',
    filter: 'ebooks',
    searchField: ''
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })

  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSearch(this.state.printType, this.state.filter, this.state.searchField)
  }

  render() {
    return (
      <form className='form'
        onSubmit={this.handleSubmit} >
        <div className='search-contaier'>
          <label htmlFor='search'>Search:</label>
          <input
            className='search-input'
            name='searchField'
            onChange={this.handleChange}
            placeholder='search for a book'
            type='text'
            required>
          </input>
          <button type='submit'>Search</button>
        </div>
        <div className='filter-bar'>
          <label htmlFor='printType'>Print Type:</label>
          <select
            name='printType'
            onChange={this.handleChange}>
            <option value='all'>All</option>
            <option value='books'>Books</option>

          </select>
          <label htmlFor='filter'>Book Type:</label>
          <select
            onChange={this.handleChange}
            name="filter">
            <option value=''>No Filter</option>
            <option value='ebooks'>All Google eBooks</option>
            <option value='free-ebooks'>Free eBooks</option>
            <option value='full'>Public eBooks</option>
            <option value='paid-ebooks'>Paid eBooks</option>
            <option value='partial'>Partial eBooks</option>
          </select>
        </div>
      </form >);
  }
}


export default SearchBar;
