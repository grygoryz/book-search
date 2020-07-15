import React, {useState} from "react";
import c from "./BooksList.module.scss";
import BookCard from "../BookCard/BookCard";

const BookList = ({books, totalCount}) => {
    const [isSearchHappened, setIsSearchHappened] = useState(false);

    !isSearchHappened && books && setIsSearchHappened(true);

    return (
        <div className={c.container}>
            {!isSearchHappened
                ? <div className={c.slogan}><span>Search!</span></div>
                : <div className={c.count}>
                    {totalCount ? `Found ${totalCount} results` : "No results were found. Try another queries!"}
                </div>}
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
