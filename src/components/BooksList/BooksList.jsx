import React from "react";
import c from "./BooksList.module.scss";
import BookCard from "../BookCard/BookCard";
import Paginator from "../common/Paginator/Paginator";
import Preloader from "../common/Preloader/Preloader";
import useWindowWidth from "../../hooks/useWindowWidth";

const BookList = ({books, totalCount, isFetching, currentPage, pageSize, requestNewPage}) => {
    const width = useWindowWidth();

    if (isFetching) return <div className={c.loader}><Preloader/></div>;

    return (
        <div className={c.container}>
            <div className={c.count}>
                {totalCount ? `Found ${totalCount} results` : "No results were found. Try another queries!"}
            </div>
            <div>
                <div className={c.grid}>
                    {books.map(({volumeInfo, id}) => {
                        return <div key={id} className={c.wrapper}>
                            <BookCard title={volumeInfo.title}
                                      authors={volumeInfo.authors}
                                      categories={volumeInfo.categories}
                                      image={volumeInfo.imageLinks ? volumeInfo.imageLinks.thumbnail : null}
                                      id={id}
                            /></div>
                    })}</div>
                <Paginator totalItemsCount={totalCount}
                           currentPage={currentPage} pageSize={pageSize}
                           portionSize={width > 450 ? 10 : 5} onPageChanged={(p) => requestNewPage(p)}/>
            </div>
        </div>
    );
};

export default BookList;
