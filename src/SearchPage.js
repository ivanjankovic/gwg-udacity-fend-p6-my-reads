import React, { Component } from 'react'
import Book from './Book'

class SearchPage extends Component {

    render() {
        const searchResult = this.props.searchResult

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
                        {/* { searchResult.map(book => <Book book={book} />) } */}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchPage
