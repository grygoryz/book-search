import React from "react";
import c from "./BooksList.module.scss";
import BookCard from "../BookCard/BookCard";
import Paginator from "../common/Paginator/Paginator";
import useWindowWidth from "../../hooks/useWindowWidth";
import {VolumeResource} from "../../api/api";

type Props = {
    books: Array<VolumeResource> | null
    totalCount: number
    currentPage: number
    pageSize: number
    requestNewPage: (pageNumber: number) => void
}

const BookList: React.FC<Props> = ({books, totalCount, currentPage, pageSize, requestNewPage}) => {
    const width = useWindowWidth();

    return (
        <div className={c.container}>
            <div className={c.count}>
                {totalCount ? `Found ${totalCount} results` : "No results were found. Try another queries!"}
            </div>
            <div>
                <div className={c.grid}>
                    {books && books.map(({volumeInfo, id}) => {
                        return <div key={id} className={c.wrapper}>
                            <BookCard title={volumeInfo.title}
                                      authors={volumeInfo.authors}
                                      categories={volumeInfo.categories}
                                      image={volumeInfo.imageLinks ? volumeInfo.imageLinks.thumbnail : null}
                                      id={id}
                            /></div>
                    })}</div>
                {totalCount !== 0 && <Paginator totalItemsCount={totalCount} currentPage={currentPage}
                                          pageSize={pageSize} portionSize={width > 450 ? 10 : 5}
                                          onPageChanged={(p) => requestNewPage(p)}/>}
            </div>
        </div>
    );
};

export default BookList;
