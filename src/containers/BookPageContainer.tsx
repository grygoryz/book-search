import {connect} from "react-redux";
import React, {useEffect} from "react";
import BookPage from "../components/BookPage/BookPage";
import {Redirect, useParams} from "react-router-dom";
import {requestBook} from "../actions/BookPageActions";
import c from "../components/BookPage/BookPage.module.scss";
import Preloader from "../components/common/Preloader/Preloader";
import {VolumeResource} from "../api/api";
import {AppState} from "../store/configureStore";

const BookPageContainer: React.FC<Props> = ({requestBook, book, isFetching, error}) => {
    let {bookId} = useParams();

    useEffect(() => {
        requestBook(bookId);
    }, [bookId, requestBook]);

    if (error) return <Redirect to="/books"/>;

    if (isFetching || !book) return <div className={c.preloader}><Preloader/></div>;

    return <BookPage volumeInfo={book.volumeInfo}/>
};

const mapStateToProps = (state: AppState) => {
    return {
        book: state.bookPage.book,
        isFetching: state.bookPage.isFetching,
        error: state.app.error
    }
};

export default connect<MapStateProps, MapDispatchProps, {}, AppState>(mapStateToProps, {requestBook})(BookPageContainer)

type MapStateProps = {
    book: VolumeResource | null
    isFetching: boolean
    error: string | null
}

type MapDispatchProps = {
    requestBook: (bookId: string) => void
}

type Props = MapStateProps & MapDispatchProps