## Project Specification Checklist

`Application Setup`
- [x] created with create-react-app
- [x] requires only npm install and npm start to get it installed and launched.
- [ ] README describes the project
- [ ] README has instructions for installing and launching

`Main Page`
- [x] main page shows 3 shelves for books
- [x] each book is shown on the correct shelf, along with its title and author(s).
- [x] main page shows a control that allows users to move books between shelves
- [x] control is tied to each book instance
- [x] moving a book to a different shelf works correctly
- [x] when the browser is refreshed, the same information is displayed on the page.

`Search Page`
- [x] search page has a search input field
- [x] as the user types into the search field, books that match the query are displayed on the page, along with their titles and author(s). You can use throttle/debounce but are not required to do so
- [x] search results are not shown when all of the text is deleted out of the search input box
- [x] invalid queries are handled and prior search results are not shown
- [x] search works correctly when a book does not have a thumbnail or an author. (To test this, try searching for "poetry" and "biography")
- [x] user is able to search for multiple words, such as “artificial intelligence.”
- [x] if a book is assigned to a shelf on the main page and that book appears on the search page, the correct shelf should be selected on the search page. If that book's shelf is changed on the search page, that change should be reflected on the main page as well. The option "None" should be selected if a book has not been assigned to a shelf
- [x] When an item is categorized on the search page and the user navigates to the main page, it appears on that shelf in the main page

`Routing`
- [x] main page contains a link to the search page. When the link is clicked, the search page is displayed and the URL in the browser’s address bar is /search
- [x] search page contains a link to the main page. When the link is clicked, the main page is displayed and the URL in the browser’s address bar is /.

`Code Functionality`

- [x] Component state is passed down from parent components to child components.
- [x] The state variable is not modified directly - setState() function is used correctly.
- [x] books have the same state on both the search page and the main application page: If a book is on a bookshelf, that is reflected in both locations.
- [x] The code runs without errors