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
    queryResult: [],
    queryTerms: ['Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS']
  }

  updateQuery(query) {
    this.setState( {query: query.trim()} )
    return query === '' ? null : BooksAPI.search(query).then(result => this.setState( {queryResult: result} ))
      .then(this.isBookOnShelf(this.state.queryResult))
  }
  isBookOnShelf(result) {
    result.map(bk => 
      {this.state.bookShelf.map(sbk => sbk.id === bk.id ? bk.shelf = sbk.shelf : null); return bk.shelf ? null : bk.shelf = 'none'} )
  }

  updateBook(book, shelf) {
      BooksAPI.update(book, shelf)
      this.componentDidMount()
  }
  
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
