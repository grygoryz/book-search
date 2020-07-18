import {connect} from "react-redux";
import React, {useEffect} from "react";
import BookPage from "../components/BookPage/BookPage";
import {useParams} from "react-router-dom";
import {requestBook} from "../actions/BookPageActions";

const BookPageContainer = ({requestBook, book, isFetching}) => {
    let {bookId} = useParams();

    useEffect(() => {
       requestBook(bookId);
    }, [bookId]);


    return <BookPage volumeInfo={book && book.volumeInfo} isFetching={isFetching} />
};

const mapStateToProps = (state) => {
    return {
        book: state.bookPage.book,
        isFetching: state.bookPage.isFetching
    }
};

const dispatchProps = {requestBook};

export default connect(mapStateToProps, dispatchProps)(BookPageContainer)