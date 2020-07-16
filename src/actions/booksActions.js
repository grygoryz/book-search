import {googleBooksAPI} from "../api/api";

export const SET_BOOKS = "SET_BOOKS";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const SET_PAGE_SIZE = "SET_PAGE_SIZE";
export const SET_TOTAL_BOOKS_COUNT = "SET_TOTAL_BOOKS_COUNT";
export const SET_IS_FETCHING = "SET_IS_FETCHING";
export const SET_SEARCHING_OPTIONS = "SET_SEARCHING_OPTIONS";

export const setBooks = (payload) => ({type: SET_BOOKS, payload});
export const setCurrentPage = (pageNumber) => ({type: SET_CURRENT_PAGE, pageNumber});
export const setPageSize = (pageSize) => ({type: SET_PAGE_SIZE, pageSize});
export const setTotalBooksCount = (count) => ({type: SET_TOTAL_BOOKS_COUNT, count});
export const setIsFetching = (value) => ({type: SET_IS_FETCHING, value});
export const setSearchingOptions = (options) => ({type: SET_SEARCHING_OPTIONS, options});

export const requestBooks = options => async dispatch => {
    dispatch(setIsFetching(true));

    const response = await googleBooksAPI.getBooksList(options);

    dispatch(setCurrentPage(1));

    if (response.totalItems > 0) {
        dispatch(requestBooksSuccess(response, options))
    } else {
        dispatch(requestBooksFailed());
    }

    dispatch(setIsFetching(false));
};

export const requestBooksSuccess = (response, options) => dispatch => {
    dispatch(setSearchingOptions(options));
    dispatch(setTotalBooksCount(response.totalItems));
    dispatch(setBooks(response.items));
};

export const requestBooksFailed = () => dispatch => {
    dispatch(setSearchingOptions(null));
    dispatch(setTotalBooksCount(0));
    dispatch(setBooks(null))
};

export const requestNewPage = pageNumber => async (dispatch, getState) => {
    dispatch(setIsFetching(true));
    dispatch(setCurrentPage(pageNumber));
    const options = getState().books.searchingOptions;

    const {items} = await googleBooksAPI.getBooksList({...options, pageNumber});

    dispatch(setBooks(items));
    dispatch(setIsFetching(false));
};


