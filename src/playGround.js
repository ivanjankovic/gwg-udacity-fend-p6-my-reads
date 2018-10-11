import React, { Component } from 'react'
import Book from './Book'

class playGround extends Component {
    render() {
        const searchResult = this.props.searchResult
        
        return <ol>
            {searchResult.map(book => (
                <Book book={book}/>
            ))}
        </ol>
    }
}

export default playGround
