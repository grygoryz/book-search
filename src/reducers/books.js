import {
    FETCH_BOOKS,
    FETCH_BOOKS_FAILURE,
    FETCH_BOOKS_SUCCESS,
    FETCH_NEW_PAGE,
    FETCH_NEW_PAGE_FAILURE,
    FETCH_NEW_PAGE_SUCCESS,
    SET_BOOK,
    SET_IS_FETCHING,
} from "../actions/booksActions";

const initialState = {
    booksList: null,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    pageSize: 10,
    currentSearchingOptions: {
        pageSize: 10,
        category: "all",
        sortingMethod: "relevance"
    },
    book: null
};

export const booksReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_BOOKS:
        case FETCH_NEW_PAGE:
        {
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
        case FETCH_BOOKS_FAILURE: {
            return {...state, isFetching: false}
        }
        case FETCH_NEW_PAGE_SUCCESS: {
            return {...state, isFetching: false, booksList: action.books, currentPage: action.pageNumber}
        }
        case FETCH_NEW_PAGE_FAILURE: {
            return {...state, isFetching: false}
        }
        case SET_IS_FETCHING: {
            return {...state, isFetching: action.value};
        }
        case SET_BOOK: {
            return {...state, book: action.payload};
        }
        default:
            return state;
    }
};