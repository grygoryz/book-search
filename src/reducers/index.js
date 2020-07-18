import {combineReducers} from "redux";
import {booksReducer} from "./books";
import {reducer as formReducer} from "redux-form";
import {bookPageReducer} from "./bookPage";

export const rootReducer = combineReducers({
    books: booksReducer,
    bookPage: bookPageReducer,
    form: formReducer
});