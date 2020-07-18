import {connect} from "react-redux";
import BooksList from "../components/BooksList/BooksList";
import {requestNewPage} from "../actions/booksActions";
import React, {useState} from "react";
import {Redirect} from "react-router-dom";


const BooksListContainer = ({books, totalCount, isFetching, currentPage, pageSize, requestNewPage}) => {
    const [isSearchHappened, setIsSearchHappened] = useState(false);

    !isSearchHappened && books && setIsSearchHappened(true);

    if (!isFetching && !isSearchHappened) return <Redirect to="/"/>;

    return (
            <BooksList books={books}
                       totalCount={totalCount}
                       isFetching={isFetching}
                       currentPage={currentPage}
                       pageSize={pageSize}
                       requestNewPage={requestNewPage}
                       isSearchHappened={isSearchHappened}
            />
       )
};

const mapStateToProps = (state) => {
    return {
        books: state.books.booksList,
        totalCount: state.books.totalCount,
        isFetching: state.books.isFetching,
        currentPage: state.books.currentPage,
        pageSize: state.books.pageSize,
    }
};

const dispatchProps = {requestNewPage};

export default connect(mapStateToProps, dispatchProps)(BooksListContainer)