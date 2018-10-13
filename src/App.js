import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'

import SearchPage from './SearchPage'
import MainPage from './MainPage'


class BooksApp extends React.Component {
  
  state = {
    /*
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
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
    // toogle page
    // this.setState({showSearchPage: true})
    BooksAPI.getAll().then(result => this.setState( {bookShelf: result} ))
  }
  
  render() {
    
    return (
      <div className="app">
        {this.state.showSearchPage ? 
        <SearchPage
          state={this.state}
          onChange={(event) => this.updateQuery(event.target.value)}
          onClick={() => this.setState({ showSearchPage: false, queryResult: []})}
          updateBook={this.updateBook.bind(this)}
        /> :
        <MainPage
          state={this.state}
          onClick={() => this.setState({ showSearchPage: true })}
          updateBook={this.updateBook.bind(this)}
        />
        }
      </div>
    )
  }
}

export default BooksApp
