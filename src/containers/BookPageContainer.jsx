import {connect} from "react-redux";
import React, {useEffect} from "react";
import BookPage from "../components/BookPage/BookPage";
import {Redirect, useParams} from "react-router-dom";
import {requestBook} from "../actions/BookPageActions";
import c from "../components/BookPage/BookPage.module.scss";
import Preloader from "../components/common/Preloader/Preloader";

const BookPageContainer = ({requestBook, book, isFetching, error}) => {
    let {bookId} = useParams();

    useEffect(() => {
       requestBook(bookId);
    }, [bookId]);

    if (error) return <Redirect to="/books"/>;

    if (isFetching || !book) return <div className={c.preloader}><Preloader/></div>;

    return <BookPage volumeInfo={book.volumeInfo} isFetching={isFetching} />
};

const mapStateToProps = (state) => {
    return {
        book: state.bookPage.book,
        isFetching: state.bookPage.isFetching,
        error: state.app.error
    }
};

const dispatchProps = {requestBook};

export default connect(mapStateToProps, dispatchProps)(BookPageContainer)