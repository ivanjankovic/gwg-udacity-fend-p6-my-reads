import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'

class Book extends Component {

    bookUpdate(event) {
        BooksAPI.update(this.props.book, event.target.value).then(this.props.onChange)
    }
    
    render() {
        const book = this.props.book
        
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                    <div className="book-shelf-changer">
                        <select 
                            onChange={event => this.bookUpdate(event)}
                            value={book.shelf} 
                        >
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                        </select>
                    </div>
                    </div>
                    <div className="book-title">To Kill a Mockingbird</div>
                    <div className="book-authors">Harper Lee</div>
                </div>
            </li>
        )
    }
}

export default Book