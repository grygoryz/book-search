import {
    SET_BOOKS,
    SET_CURRENT_PAGE,
    SET_IS_FETCHING,
    SET_SEARCHING_OPTIONS,
    SET_TOTAL_BOOKS_COUNT
} from "../actions/booksActions";

const initialState = {
    booksList: null,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    searchingOptions: {
        searchTerms: null,
        pageSize: 10,
        sortingMethod: "relevance",
        categories: "all"
    }
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
        case SET_IS_FETCHING: {
            return {...state, isFetching: action.value};
        }
        case SET_SEARCHING_OPTIONS: {
            return {...state, searchingOptions: {...state.searchingOptions ,...action.options}};
        }
        default:
            return state;
    }
};