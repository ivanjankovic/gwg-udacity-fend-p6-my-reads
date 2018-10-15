import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'

import SearchPage from './SearchPage'
import MainPage from './MainPage'

import { BrowserRouter, Route } from 'react-router-dom' 

class BooksApp extends React.Component {
  
  state = {
    showSearchPage: false,
    bookShelf: [],
    query: '',
    queryResult: []
  }

  // update query state and make API call
  updateQuery(query) {
    this.setState( {query: query.trim()} )
    // if query is empty dont make api call instead update results to empty array
    query === '' ?  this.setState( {queryResult: []} ) : 
      BooksAPI.search(query).then(result => this.setState( {queryResult: result} ))
        .then(this.assignShelfProperty(this.state.queryResult))
  }

  // assign shelf property to books on search page
  assignShelfProperty(result) {
    // check if the API request is empty
    return result.error === 'empty query' ? null :
      result.map(bk => 
        {this.state.bookShelf.map(sbk => sbk.id === bk.id ? bk.shelf = sbk.shelf : null); return bk.shelf ? null : bk.shelf = 'none'} )
  }

  // update books shelf property
  updateBook(book, shelf) {
      BooksAPI.update(book, shelf)
      this.componentDidMount()
  }
  
  //get all the book which are on the shelf
  componentDidMount(){
    BooksAPI.getAll().then(result => this.setState( {bookShelf: result} ))
  }
  
  render() {
    
    return (
      <BrowserRouter>
        <div className="app">
          <Route exact path='/' component={() => <MainPage
            state={this.state}
            onClick={() => this.setState({ showSearchPage: true })}
            updateBook={this.updateBook.bind(this)}
            />}
          />
          <Route path='/search' render={() => <SearchPage
            state={this.state}
            onChange={(event) => this.updateQuery(event.target.value)}
            onClick={() => this.setState({ showSearchPage: false, queryResult: []})}
            updateBook={this.updateBook.bind(this)}
            />}
          />
        </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp
