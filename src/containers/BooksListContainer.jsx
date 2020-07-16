import {connect} from "react-redux";
import BooksList from "../components/BooksList/BooksList";
import {requestNewPage} from "../actions/booksActions";
import React from "react";

const BooksListContainer = (props) => {

    return <BooksList {...props} />
};

const mapStateToProps = (state) => {
    return {
        books: state.books.booksList,
        totalCount: state.books.totalCount,
        isFetching: state.books.isFetching,
        currentPage: state.books.currentPage,
        pageSize: state.books.pageSize
    }
};

const dispatchProps = {requestNewPage};

export default connect(mapStateToProps, dispatchProps)(BooksListContainer)