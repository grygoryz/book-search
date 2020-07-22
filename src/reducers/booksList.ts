import {
    FETCH_BOOKS,
    FETCH_BOOKS_FAILURE,
    FETCH_BOOKS_SUCCESS,
    FETCH_NEW_PAGE,
    FETCH_NEW_PAGE_FAILURE,
    FETCH_NEW_PAGE_SUCCESS,
    ActionsType,
} from "../actions/BooksListActions";
import {VolumeResource} from "../api/api";
import {SearchingOptions} from "../types/types";

const initialState = {
    booksList: null as Array<VolumeResource> | null,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    currentSearchingOptions: {
        searchTerms: null,
        pageNumber: 1,
        pageSize: 10,
        categories: "all",
        sortingMethod: "relevance"
    } as SearchingOptions,
    error: null
};

export const booksListReducer = (state = initialState, action: ActionsType): State => {
    switch (action.type) {
        case FETCH_BOOKS:
        case FETCH_NEW_PAGE: {
            return {...state, isFetching: true}
        }
        case FETCH_BOOKS_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                currentSearchingOptions: action.options,
                totalCount: action.totalCount,
                booksList: action.books,
                currentPage: 1
            }
        }
        case FETCH_NEW_PAGE_SUCCESS: {
            return {...state, isFetching: false, booksList: action.books, currentPage: action.pageNumber}
        }
        case FETCH_BOOKS_FAILURE:
        case FETCH_NEW_PAGE_FAILURE: {
            return {...state, isFetching: false}
        }
        default:
            return state;
    }
};

type State = typeof initialState