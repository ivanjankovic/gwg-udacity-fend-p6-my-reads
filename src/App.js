import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import PlayGround from './playGround'
import SearchPage from './SearchPage'
import MainPage from './MainPage';

class BooksApp extends React.Component {
  
  state = {
    /*
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    bookShelf: [],
    query: '',
    searchResult: {},
    showSearchPage: false
  }

  updateQuery(query) {
    this.setState({query: query.trim()})
  }

  handleChange(event) {
    alert('A name was submitted');
    console.log('Steva')
    // this.setState({value: event.target.value});
  }

  handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
  }
  testAPIrequest() {
    const emptyState = []
  
    BooksAPI.search('Gandhi')
      .then((querRsults) => {
        querRsults.map(book => console.log(book.authors));
        querRsults.map(book => emptyState.push({
          title: book.title,
          authors: book.authors,
          thumbnail: book.imageLinks.thumbnail
        }));
      })
    console.log(typeof emptyState)
    console.log('BooksArray', emptyState);
    this.setState({ searchResult: emptyState })
  }
  componentWillMount(){
    // const fetchAndLog = async () => {
    //   const response = await fetch('https://facebook.github.io/react-native/movies.json');
    //   const json = await response.json();
    //   // just log ‘json’
    //   console.log(json);
    // }
    // fetchAndLog();
    // this.setState({showSearchPage: true})
    BooksAPI.getAll().then(result => this.setState( {bookShelf: result} ))
  
  }
  
  render() {
    
    return (
      <div className="app">
        {this.state.showSearchPage ? 
        <SearchPage
          query={this.state.query}
          searchResult={this.state.searchResult}
          onChange={(event) => this.updateQuery(event.target.value)}
          onClick={() => this.setState({ showSearchPage: false })}
        /> :
        <MainPage
          state={this.state}
          onClick={() => this.setState({ showSearchPage: true })}
        />
        }
      </div>
    )
  }
}

export default BooksApp
