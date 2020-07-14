import React from "react";
import c from "./BooksList.module.scss";
import BookCard from "../BookCard/BookCard";

const BookList = ({books, totalCount}) => {
    return (
        <div className={c.container}>
            <div>{totalCount}</div>
            <div className={c.grid}>
                {books && books.map(({volumeInfo, id}) => {
                    return  <div key={id} className={c.wrapper}>
                        <BookCard title={volumeInfo.title}
                                  authors={volumeInfo.authors}
                                  categories={volumeInfo.categories}
                                  image={volumeInfo.imageLinks ? volumeInfo.imageLinks.thumbnail : ""}
                    /></div>
                })}
            </div>
        </div>
    );
};

export default BookList;
