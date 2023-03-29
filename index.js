function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch("https://anapioficeandfire.com/api/books")//fetches data from api
  .then ((resp) => resp.json())//jsonify the response
  .then (renderBooks);// then call on second function, renderBooks
}
//function receives an array of books then iterates the array, creating a h2 dom element with the book.name as its innerhtml value and appends it to main 
function renderBooks(books) { 
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}
//add Dom content loaded event listener, once all html mark has been loaded, run fetchBooks 
document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});