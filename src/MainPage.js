import React, { Component } from 'react'
import Book from './Book'

class MainPage extends Component {

    render() {
        const bookShelf = this.props.state.bookShelf
        
        return (
            <div className="list-books">
            <div className="list-books-title">
            <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
            <div>
                <div className="bookshelf">
                <h2 className="bookshelf-title">Currently-Reading</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                    {/* call the Book component */}
                    { bookShelf.map(book => book.shelf === 'currentlyReading' ? <Book book={book} /> : null) }
                    </ol>
                </div>
                </div>
                <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                    {/* call the Book component */}
                    { bookShelf.map(book => book.shelf === 'wantToRead' ? <Book book={book} /> : null) }
                    </ol>
                </div>
                </div>
                <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                    {/* call the Book component */}
                    { bookShelf.map(book => book.shelf === 'read' ? <Book book={book} /> : null) }
                    </ol>
                </div>
                </div>
            </div>
            </div>
            <div className="open-search">
            <a onClick={this.props.onClick}>Add a book</a>
            </div>
        </div>
        )
    }
}

export default MainPage
