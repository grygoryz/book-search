import {googleBooksAPI} from "../api/api";
import {handleError} from "./AppActions";

export const FETCH_BOOKS = "FETCH_BOOKS";
export const FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS";
export const FETCH_BOOKS_FAILURE = "FETCH_BOOKS_FAILURE";
export const FETCH_NEW_PAGE = "FETCH_NEW_PAGE";
export const FETCH_NEW_PAGE_SUCCESS = "FETCH_NEW_PAGE_SUCCESS";
export const FETCH_NEW_PAGE_FAILURE = "FETCH_NEW_PAGE_FAILURE";

export const fetchBooks = () => ({type: FETCH_BOOKS});
export const fetchBooksSuccess = (options, totalCount, books) => ({type: FETCH_BOOKS_SUCCESS, options, totalCount, books});
export const fetchBooksFailure = () => ({type: FETCH_BOOKS_FAILURE});
export const fetchNewPage = () => ({type: FETCH_NEW_PAGE});
export const fetchNewPageSuccess = (pageNumber, books) => ({type: FETCH_NEW_PAGE_SUCCESS, pageNumber, books});
export const fetchNewPageFailure = () => ({type: FETCH_NEW_PAGE_FAILURE});

export const requestBooks = options => async dispatch => {
    dispatch(fetchBooks());

    try {
        const response = await googleBooksAPI.getBooksList(options);

        if (response.totalItems > 0){
            dispatch(fetchBooksSuccess(options, response.totalItems, response.items))
        } else {
            dispatch(fetchBooksSuccess(null, 0, null))
        }
    } catch (e) {
        dispatch(fetchBooksFailure());
        dispatch(handleError(e))
    }
};

export const requestNewPage = pageNumber => async (dispatch, getState) => {
    dispatch(fetchNewPage());

    try {
        const options = getState().booksList.currentSearchingOptions;
        const response = await googleBooksAPI.getBooksList({...options, pageNumber});

        dispatch(fetchNewPageSuccess(pageNumber, response.items))
    } catch (e) {
        dispatch(fetchNewPageFailure());
        dispatch(handleError(e))
    }
};



