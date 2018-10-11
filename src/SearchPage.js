import React, { Component } from 'react'
import Book from './Book'

class SearchPage extends Component {

    // componentDidMount(){
    //     const state = this.props.state

    //     BooksAPI.search(state.query).then(result => this.setState( {queryResult: result} )).catch(console.log(result))
    //    
    // }

    render() {
        const queryResult = this.props.state.queryResult

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <a className="close-search" onClick={this.props.onClick}>Close</a>
                    <div className="search-books-input-wrapper">
                        {/* onChange update state */}
                        <input 
                            type="text"
                            placeholder="Search by title or author"
                            onChange={this.props.onChange}
                            value={this.props.query}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                <div style={{ backgroundColor: 'lightblue', color: 'darkblue', textAlign: 'center', font: 15 }}>
                    {JSON.stringify(this.props.query)}
                </div>
                    <ol className="books-grid">
                        {/* call the Book component */}
                        { !queryResult || !queryResult.length ? null : queryResult.map(book => <Book book={book}/>) }
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchPage
