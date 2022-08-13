let myLibrary = [];

function Book(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayDefault() {
    // some default books
    const book1 = new Book("It Starts with Us: A Novel", "Collen Hoover", 100, false);
    const book2 = new Book("56 Days", "Catherine Ryan Howards", 100, false);
    // add default books to library
    addBookToLibrary(book1);
    addBookToLibrary(book2);

    let books = document.getElementsByClassName("books")[0];

    for (let i = 0; i < myLibrary.length; i++) {
        let card = document.createElement("div");
        card.setAttribute("class", "card");
        let title = document.createElement("div");
        title.innerText = myLibrary[i].title;
        title.setAttribute("class", "title");
        let author = document.createElement("div");
        author.innerText = myLibrary[i].author;
        author.setAttribute("class", "author");
        let pages = document.createElement("div");
        pages.innerText = myLibrary[i].pages;
        pages.setAttribute("class", "pages");
        let haveRead = document.createElement("div");
        haveRead.innerText = myLibrary[i].haveRead;
        haveRead.setAttribute("class", "haveRead");
        let btn = document.createElement("button");
        btn.onclick = function(e) {
            console.log(e.target.parentNode.parentNode);
            books.removeChild(e.target.parentNode.parentNode);
        }
        let header = document.createElement("div");
        header.setAttribute("class", "header");
        header.append(title);
        header.append(btn);
        card.append(header);
        card.append(author);
        card.append(pages);
        card.append(haveRead);
        books.append(card);
    }
}

let submitbtn = document.getElementsByClassName("submit")[0];

displayDefault();
