import {connect} from "react-redux";
import BooksList from "../components/BooksList/BooksList";
import {requestNewPage} from "../actions/BooksListActions";
import React, {useState} from "react";
import {Redirect} from "react-router-dom";


const BooksListContainer = ({books, totalCount, isFetching, currentPage, pageSize, requestNewPage}) => {
    const [isSearchHappened, setIsSearchHappened] = useState(false);

    books && !isSearchHappened && setIsSearchHappened(true);

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
        books: state.booksList.booksList,
        totalCount: state.booksList.totalCount,
        isFetching: state.booksList.isFetching,
        currentPage: state.booksList.currentPage,
        pageSize: state.booksList.currentSearchingOptions.pageSize
    }
};

const dispatchProps = {requestNewPage};

export default connect(mapStateToProps, dispatchProps)(BooksListContainer)