import React, {useState} from "react";
import c from "./BooksList.module.scss";
import BookCard from "../BookCard/BookCard";
import Paginator from "../common/Paginator/Paginator";

const BookList = ({books, totalCount, isFetching, currentPage, pageSize, requestNewPage}) => {
    const [isSearchHappened, setIsSearchHappened] = useState(false);

    !isSearchHappened && books && setIsSearchHappened(true);

    return (
        <div className={c.container}>
            {/*<Paginator totalItemsCount={111111}*/}
            {/*           currentPage={1} pageSize={20}*/}
            {/*           portionSize={10} onPageChanged={(p) => requestNewPage(p)} />*/}
            {!isSearchHappened
                ? <div className={c.slogan}><span>Search!</span></div>
                : <div className={c.count}>
                    {totalCount ? `Found ${totalCount} results` : "No results were found. Try another queries!"}
                </div>}

                {books && <div>
                    <Paginator totalItemsCount={totalCount}
                               currentPage={currentPage} pageSize={pageSize}
                               portionSize={10} onPageChanged={(p) => requestNewPage(p)} />

                    {isFetching
                        ? <span>LOADING...</span>
                        : <div className={c.grid}>
                            {books.map(({volumeInfo, id}) => {
                                return <div key={id} className={c.wrapper}>
                                    <BookCard title={volumeInfo.title}
                                              authors={volumeInfo.authors}
                                              categories={volumeInfo.categories}
                                              image={volumeInfo.imageLinks ? volumeInfo.imageLinks.thumbnail : null}
                                    /></div>
                            })}</div>}

                </div>}
        </div>
    );
};

export default BookList;
