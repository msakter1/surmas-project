// Sample book reflections
const books = [
    {
      title: "The Boyfriend",
      preview: "A fast, easy read with a twist at the end...",
      fullReflection: "The Boyfriend by Freida McFadden started off as a light, quick read with fairly simple characters. However, the last few chapters completely flipped the story with a shocking twist I didn't see coming. It left me with so many questions, and I couldn't stop thinking about it even after finishing."
    },
    {
      title: "Project Hail Mary",
      preview: "An exciting sci-fi adventure with a heartwarming twist...",
      fullReflection: "Project Hail Mary by Andy Weir is a thrilling journey through space. With a protagonist you can't help but root for and a plot full of scientific puzzles, this book kept me hooked from start to finish. The unexpected friendship at the heart of the story added a touching emotional depth."
    }
  ];
  
  // Select DOM elements
  const bookList = document.getElementById("book-list");
  const mainContent = document.querySelector(".main-content");
  
  // Function to render books in the sidebar
  function renderBooks() {
    bookList.innerHTML = ""; // Clear existing content
    books.forEach((book, index) => {
      const bookPreview = document.createElement("div");
      bookPreview.classList.add("book-preview");
      bookPreview.dataset.index = index;
  
      bookPreview.innerHTML = `
        <h3>${book.title}</h3>
        <p>${book.preview}</p>
      `;
  
      // Add click event to load full reflection
      bookPreview.addEventListener("click", () => {
        displayReflection(index);
      });
  
      bookList.appendChild(bookPreview);
    });
  }
  
  // Function to display full reflection in the main content
  function displayReflection(index) {
    const book = books[index];
    mainContent.innerHTML = `
      <h1>${book.title}</h1>
      <p>${book.fullReflection}</p>
    `;
  }
  
  // Initialize the sidebar with book previews
  renderBooks();
  