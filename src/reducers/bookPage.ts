import {ActionsType, FETCH_BOOK, FETCH_BOOK_FAILURE, FETCH_BOOK_SUCCESS} from "../actions/BookPageActions";
import {VolumeResource} from "../api/api";

const initialState = {
    isFetching: false,
    book: null as VolumeResource | null
};

export const bookPageReducer = (state = initialState, action: ActionsType): State => {
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

type State = typeof initialState