import {
    SET_BOOKS,
    SET_CURRENT_PAGE,
    SET_IS_FETCHING,
    SET_PAGE_SIZE, SET_SEARCHING_OPTIONS,
    SET_TOTAL_BOOKS_COUNT
} from "../actions/booksActions";

const initialState = {
    booksList: null,
    totalCount: 0,
    currentPage: 1,
    pageSize: 10,
    isFetching: false,
    searchingOptions: null
};

export const booksReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_BOOKS: {
            return {...state, booksList: action.payload};
        }
        case SET_TOTAL_BOOKS_COUNT: {
            return {...state, totalCount: action.count};
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.pageNumber};
        }
        case SET_PAGE_SIZE: {
            return {...state, pageSize: action.pageSize};
        }
        case SET_IS_FETCHING: {
            return {...state, isFetching: action.value};
        }
        case SET_SEARCHING_OPTIONS: {
            return {...state, searchingOptions: action.options};
        }
        default:
            return state;
    }
};