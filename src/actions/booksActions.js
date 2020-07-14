import {googleBooksAPI} from "../api/api";

export const SET_BOOKS = "SET_BOOKS";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const SET_PAGE_SIZE = "SET_PAGE_SIZE";
export const SET_TOTAL_BOOKS_COUNT = "SET_TOTAL_BOOKS_COUNT";

export const setBooks = (payload) => ({type: SET_BOOKS, payload});
export const setCurrentPage = (pageNumber) => ({type: SET_CURRENT_PAGE, pageNumber});
export const setPageSize = (pageSize) => ({type: SET_PAGE_SIZE, pageSize});
export const setTotalBooksCount = (count) => ({type: SET_TOTAL_BOOKS_COUNT, count});

export const getBooksList = (searchTerms) => async dispatch => {
    const {totalItems, items} = await googleBooksAPI.getBooksList(searchTerms);

    if (totalItems > 0) {
        dispatch(setTotalBooksCount(totalItems));
        dispatch(setBooks(items));
    } else {
        dispatch(setTotalBooksCount(0));
        dispatch(setBooks(null))
    }
};