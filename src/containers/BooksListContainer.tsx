import {connect} from "react-redux";
import BooksList from "../components/BooksList/BooksList";
import {requestNewPage} from "../actions/BooksListActions";
import React from "react";
import {Redirect} from "react-router-dom";
import {hasSubmitSucceeded} from "redux-form";
import {VolumeResource} from "../api/api";
import {AppState} from "../store/configureStore";
import c from "../components/BooksList/BooksList.module.scss";
import Preloader from "../components/common/Preloader/Preloader";

const BooksListContainer: React.FC<PropsType> = ({books, totalCount, isFetching,
                                                     currentPage, pageSize, requestNewPage, isSearchHappened}) => {

    if (isFetching) return <div className={c.loader}><Preloader/></div>;


    const errorOccurred = !isFetching && books === null;
    if (!isSearchHappened || errorOccurred) return <Redirect to="/"/>;

    return (
        <BooksList books={books}
                   totalCount={totalCount}
                   currentPage={currentPage}
                   pageSize={pageSize}
                   requestNewPage={requestNewPage}
        />
    )
};

const mapStateToProps = (state: AppState) => {
    return {
        books: state.booksList.booksList,
        totalCount: state.booksList.totalCount,
        isFetching: state.booksList.isFetching,
        currentPage: state.booksList.currentPage,
        pageSize: state.booksList.currentSearchingOptions.pageSize,
        isSearchHappened: hasSubmitSucceeded('searchForm')(state),
    }
};

export default connect<MapStateProps, MapDispatchType, {}, AppState>(mapStateToProps, {requestNewPage})(BooksListContainer)

type MapStateProps = {
    books: Array<VolumeResource> | null
    totalCount: number
    isFetching: boolean
    currentPage: number
    pageSize: number
    isSearchHappened: boolean
}

type MapDispatchType = {
    requestNewPage: (pageNumber: number) => void
}

type PropsType = MapStateProps & MapDispatchType