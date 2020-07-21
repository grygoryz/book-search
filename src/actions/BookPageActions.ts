import {googleBooksAPI, VolumeResource} from "../api/api";
import {handleError} from "./AppActions";
import {BaseThunkType, InferredActionTypes} from "../store/configureStore";

export const FETCH_BOOK = "FETCH_BOOK";
export const FETCH_BOOK_SUCCESS = "FETCH_BOOK_SUCCESS";
export const FETCH_BOOK_FAILURE = "FETCH_BOOK_FAILURE";

export const BookPageActions = {
    fetchBook: () => ({type: FETCH_BOOK} as const),
    fetchBookSuccess: (book: VolumeResource) => ({type: FETCH_BOOK_SUCCESS, book} as const),
    fetchBookFailure: () => ({type: FETCH_BOOK_FAILURE} as const)
};

export const requestBook = (bookId: string): Thunk => async dispatch => {
    dispatch(BookPageActions.fetchBook());
    try {
        const response = await googleBooksAPI.getBook(bookId);
        dispatch(BookPageActions.fetchBookSuccess(response));
    } catch (e) {
        dispatch(BookPageActions.fetchBookFailure());
        dispatch(handleError(e))
    }
};

export type ActionsType = InferredActionTypes<typeof BookPageActions>

type Thunk = BaseThunkType<ActionsType>

