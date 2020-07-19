import {combineReducers} from "redux";
import {booksListReducer} from "./booksList";
import {reducer as formReducer} from "redux-form";
import {bookPageReducer} from "./bookPage";

export const rootReducer = combineReducers({
    booksList: booksListReducer,
    bookPage: bookPageReducer,
    form: formReducer
});