import React, { Component } from 'react'
import Book from './Book'
import { Link } from 'react-router-dom'

class SearchPage extends Component {

	render() {
		const queryResult = this.props.state.queryResult

		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link exact to='/'className="close-search" onClick={this.props.onClick}>Close</Link>
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
					<ol className="books-grid">
						{/* call the Book component */}
						{ !queryResult || !queryResult.length ? null : queryResult.map(book => 
							<Book book={book} updateBook={this.props.updateBook} key={book.id}/>) }
					</ol>
				</div>
			</div>
		)
	}
}

export default SearchPage
