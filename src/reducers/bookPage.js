import {FETCH_BOOK, FETCH_BOOK_FAILURE, FETCH_BOOK_SUCCESS} from "../actions/BookPageActions";

const initialState = {
    isFetching: false,
    book: null
};

export const bookPageReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_BOOK: {
            return {...state, isFetching: true}
        }
        case FETCH_BOOK_SUCCESS: {
            return {...state, isFetching: false, book: action.book}
        }
        case FETCH_BOOK_FAILURE: {
            return {...state, isFetching: false}
        }
        default:
            return state;
    }
};