import {combineReducers} from "redux";
import {booksReducer} from "./books";
import {reducer as formReducer} from "redux-form";

export const rootReducer = combineReducers({
    books: booksReducer,
    form: formReducer
});