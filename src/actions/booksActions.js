import {googleBooksAPI} from "../api/api";

// rename books -> booksList

export const SET_BOOKS = "SET_BOOKS";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const SET_PAGE_SIZE = "SET_PAGE_SIZE";
export const SET_TOTAL_BOOKS_COUNT = "SET_TOTAL_BOOKS_COUNT";
export const SET_IS_FETCHING = "SET_IS_FETCHING";
export const SET_CURRENT_SEARCHING_OPTIONS = "SET_CURRENT_SEARCHING_OPTIONS";

export const SET_BOOK = "SET_BOOK";

export const setBooks = (payload) => ({type: SET_BOOKS, payload});
export const setCurrentPage = (pageNumber) => ({type: SET_CURRENT_PAGE, pageNumber});
export const setPageSize = (pageSize) => ({type: SET_PAGE_SIZE, pageSize});
export const setTotalBooksCount = (count) => ({type: SET_TOTAL_BOOKS_COUNT, count});
export const setIsFetching = (value) => ({type: SET_IS_FETCHING, value});
export const setCurrentSearchingOptions = (options) => ({type: SET_CURRENT_SEARCHING_OPTIONS, options});

export const setBook = (payload) => ({type: SET_BOOK, payload});

export const requestBooks = options => async dispatch => {
    await withFetchingSwitching(dispatch, async () => {

        const response = await googleBooksAPI.getBooksList(options);
        dispatch(setCurrentPage(1));

        if (response.totalItems > 0) {
            dispatch(requestBooksSuccess(response, options))
        } else {
            dispatch(requestBooksFailed());
        }
    })
};

export const requestBooksSuccess = (response, options) => dispatch => {
    dispatch(setCurrentSearchingOptions(options));
    options.pageSize && dispatch(setPageSize(options.pageSize));
    dispatch(setTotalBooksCount(response.totalItems));
    dispatch(setBooks(response.items));
};

export const requestBooksFailed = () => dispatch => {
    dispatch(setCurrentSearchingOptions(null));
    dispatch(setTotalBooksCount(0));
    dispatch(setBooks(null))
};

export const requestNewPage = pageNumber => async (dispatch, getState) => {
    await withFetchingSwitching(dispatch, async () => {
        const options = getState().books.currentSearchingOptions;
        const {items} = await googleBooksAPI.getBooksList({...options, pageNumber});

        dispatch(setCurrentPage(pageNumber));
        dispatch(setBooks(items));
    });
};

export const requestBook = bookId => async dispatch => {
    await withFetchingSwitching(dispatch, async () => {
        const response = await googleBooksAPI.getBook(bookId);

        dispatch(setBook(response));
    })
};

const withFetchingSwitching = async (dispatch, func) => {
    dispatch(setIsFetching(true));
    await func();
    dispatch(setIsFetching(false))
};

