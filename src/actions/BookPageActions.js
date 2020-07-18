import {googleBooksAPI} from "../api/api";

export const FETCH_BOOK = "FETCH_BOOK";
export const FETCH_BOOK_SUCCESS = "FETCH_BOOK_SUCCESS";
export const FETCH_BOOK_FAILURE = "FETCH_BOOK_FAILURE";

export const fetchBook = () => ({type: FETCH_BOOK});
export const fetchBookSuccess = (book) => ({type: FETCH_BOOK_SUCCESS, book});
export const fetchBookFailure = (error) => ({type: FETCH_BOOK_FAILURE, error});

export const requestBook = bookId => async dispatch => {
    dispatch(fetchBook());
    try {
        const response = await googleBooksAPI.getBook(bookId);
        dispatch(fetchBookSuccess(response));
    } catch (e) {
        dispatch(fetchBookFailure(e.message))
    }
};

