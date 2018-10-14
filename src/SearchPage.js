import React, { Component } from 'react'
import Book from './Book'
import { Link } from 'react-router-dom'
import Search404 from './Search404';

class SearchPage extends Component {

	render() {
		const queryResult = this.props.state.queryResult
		const query = this.props.state.query

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
							value={this.query}
						/>
					</div>
				</div>
				<div className="search-books-results">
					<ol className="books-grid">
						{/* on empty query do nothing, on API respons w/ empty object call the Search404 component else call Book */}
						{ query === '' ?  null : 
							queryResult.error === 'empty query' ? <Search404 />:
								queryResult.map(book => 
									<Book book={book} updateBook={this.props.updateBook} key={book.id}/>)
						}
					</ol>
				</div>
			</div>
		)
	}
}

export default SearchPage
