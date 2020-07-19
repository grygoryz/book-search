import {connect} from "react-redux";
import BooksList from "../components/BooksList/BooksList";
import {requestNewPage} from "../actions/BooksListActions";
import React, {useState} from "react";
import {Redirect} from "react-router-dom";
import {hasSubmitSucceeded} from "redux-form";

// проверить еще раз без !isFetching

const BooksListContainer = ({books, totalCount, isFetching, currentPage, pageSize, requestNewPage, isSearchHappened}) => {

    if (!isFetching && !isSearchHappened) return <Redirect to="/"/>;

    return (
            <BooksList books={books}
                       totalCount={totalCount}
                       isFetching={isFetching}
                       currentPage={currentPage}
                       pageSize={pageSize}
                       requestNewPage={requestNewPage}
            />
       )
};

const mapStateToProps = (state) => {
    return {
        books: state.booksList.booksList,
        totalCount: state.booksList.totalCount,
        isFetching: state.booksList.isFetching,
        currentPage: state.booksList.currentPage,
        pageSize: state.booksList.currentSearchingOptions.pageSize,
        isSearchHappened: hasSubmitSucceeded('searchForm')(state)
    }
};

const dispatchProps = {requestNewPage};

export default connect(mapStateToProps, dispatchProps)(BooksListContainer)