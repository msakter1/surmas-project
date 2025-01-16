document.getElementById('add-book-btn').addEventListener('click', function () {
    // Prompt user for book details
    const bookTitle = prompt('Enter the book title:');
    const bookPreview = prompt('Enter a short preview for the book:');
  
    // Ensure input is not empty
    if (bookTitle && bookPreview) {
      // Create a new book block
      const newBook = document.createElement('div');
      newBook.classList.add('book-preview');
      newBook.innerHTML = `<h3>${bookTitle}</h3><p>${bookPreview}</p>`;
  
      // Add the new book to the top of the book list
      const bookList = document.getElementById('book-list');
      bookList.insertBefore(newBook, bookList.firstChild);
  
      // Optional: Scroll to the top of the sidebar to show the new book
      bookList.scrollTop = 0;
    } else {
      alert('Please provide both a title and a preview.');
    }
  });