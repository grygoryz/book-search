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

export const getBooksList = (options) => async (dispatch) => {
    dispatch(setIsFetching(true));
    const {totalItems, items} = await googleBooksAPI.getBooksList(options);
    dispatch(setCurrentPage(1));

    if (totalItems > 0) {
        dispatch(setSearchingOptions(options));
        options.pageSize && dispatch(setPageSize(options.pageSize));
        dispatch(setTotalBooksCount(totalItems));
        dispatch(setBooks(items));
    } else {
        dispatch(setSearchingOptions(null));
        dispatch(setTotalBooksCount(0));
        dispatch(setBooks(null))
    }

    dispatch(setIsFetching(false));
};

export const requestNewPage = (pageNumber) => async (dispatch, getState) => {
    const options = getState().books.searchingOptions;

    dispatch(setIsFetching(true));
    const {items} = await googleBooksAPI.getBooksList({...options, pageNumber});

    dispatch(setBooks(items));
    dispatch(setCurrentPage(pageNumber));

    dispatch(setIsFetching(false));
};

// export const loadNewPage = (searchTerms, pageNumber, pageSize) => async (dispatch) => {
//     const {items} = await googleBooksAPI.getBooksList(searchTerms, pageNumber, pageSize);
//
//     dispatch(setBooks(items));
// };