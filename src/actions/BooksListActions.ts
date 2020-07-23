import {googleBooksAPI, VolumeResource} from "../api/api";
import {handleError} from "./AppActions";
import {BaseThunkType, InferredActionTypes} from "../store/configureStore";
import {SearchingOptions} from "../types/types";

export const FETCH_BOOKS = "FETCH_BOOKS";
export const FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS";
export const FETCH_BOOKS_FAILURE = "FETCH_BOOKS_FAILURE";
export const FETCH_NEW_PAGE = "FETCH_NEW_PAGE";
export const FETCH_NEW_PAGE_SUCCESS = "FETCH_NEW_PAGE_SUCCESS";
export const FETCH_NEW_PAGE_FAILURE = "FETCH_NEW_PAGE_FAILURE";

export const BooksListActions = {
    fetchBooks: () => ({type: FETCH_BOOKS} as const),
    fetchBooksSuccess: (options: SearchingOptions,
                        totalCount: number,
                        books: Array<VolumeResource> | null) => ({type: FETCH_BOOKS_SUCCESS, options, totalCount, books} as const),
    fetchBooksFailure: () => ({type: FETCH_BOOKS_FAILURE} as const),
    fetchNewPage: () => ({type: FETCH_NEW_PAGE} as const),
    fetchNewPageSuccess: (pageNumber: number, books: Array<VolumeResource>) => ({type: FETCH_NEW_PAGE_SUCCESS, pageNumber, books} as const),
    fetchNewPageFailure: () => ({type: FETCH_NEW_PAGE_FAILURE} as const)
};

export const requestBooks = (options: SearchingOptions): Thunk => async dispatch => {
    dispatch(BooksListActions.fetchBooks());

    try {
        const response = await googleBooksAPI.getBooksList(options);
        dispatch(BooksListActions.fetchBooksSuccess(options, response.totalItems, response.items))
    } catch (e) {
        dispatch(BooksListActions.fetchBooksFailure());
        dispatch(handleError(e))
    }
};

export const requestNewPage = (pageNumber: number): Thunk => async (dispatch, getState) => {
    dispatch(BooksListActions.fetchNewPage());

    try {
        const options = getState().booksList.currentSearchingOptions;
        const response = await googleBooksAPI.getBooksList({...options, pageNumber} as SearchingOptions);

        dispatch(BooksListActions.fetchNewPageSuccess(pageNumber, response.items))
    } catch (e) {
        dispatch(BooksListActions.fetchNewPageFailure());
        dispatch(handleError(e))
    }
};

export type ActionsType = InferredActionTypes<typeof BooksListActions>

type Thunk = BaseThunkType<ActionsType>



