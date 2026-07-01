class Book {

    constructor(title, author, price) {
        this.title = title;
        this.author = author;
        this.price = price;
    }

    
    displayBook() {
        console.log("Book Title: " + this.title);
        console.log("Author: " + this.author);
        console.log("Price: ₹" + this.price);
    }
}

let book1 = new Book("Harry Poter", "J.K.Rowling", 3000);
book1.displayBook();


