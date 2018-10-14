import React, { Component } from 'react'

class Search404 extends Component {

    state = {
        queryTerms: ['Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'],
        imageURL: 'https://alumni.berkeley.edu/sites/default/files/styles/960x400/public/SuperMario.png'
    }

    render() {
        return (
            <div className='holder404'>
                <div className='image_holder'>
                    <img src={this.state.imageURL} alt="puzzeld face"></img>
				</div>
                <p>Serach results are limited to search terms listed below</p>
                <div className='term-list'>
                    <ul>
                        { this.state.queryTerms.map(term => <li>{term}</li>) }
                    </ul>
                </div>
            </div>
        )
    }
}

export default Search404