import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'

class Book extends Component {
    state = {
        select: this.props.book.shelf
    }
    handleEvent = event => {
        console.log(event.target)
        this.setState({select: event.target.value});
        BooksAPI.update(this.props.book, event.target.value)
    }
    componentDidMount() {
        // BooksAPI.update(this.props.book, this.state.select)
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
                            onChange={this.handleEvent}
                            value={this.state.select} 
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