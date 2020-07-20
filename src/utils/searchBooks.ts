import { BookType } from "../types";

const searchBooks = (books : Array<BookType>, term : string): Array<BookType> => {
    if (term.length === 0) {
        return books;
    }
    return books.filter(book => {
        return (book.title.toLowerCase().indexOf(term) > -1 ||
            book.author.toLowerCase().indexOf(term) > -1);
    });
}

export default searchBooks