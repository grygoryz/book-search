import {SET_BOOKS, SET_CURRENT_PAGE, SET_PAGE_SIZE, SET_TOTAL_BOOKS_COUNT} from "../actions/booksActions";


const initialState = {
    booksList: [

    ],
    totalCount: 0,
    currentPage: 1,
    pageSize: 20
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
        default:
            return state;
    }
};