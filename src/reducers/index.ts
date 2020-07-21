import {combineReducers} from "redux";
import {booksListReducer} from "./booksList";
import {reducer as formReducer} from "redux-form";
import {bookPageReducer} from "./bookPage";
import {appReducer} from "./app";

export const rootReducer = combineReducers({
    app: appReducer,
    booksList: booksListReducer,
    bookPage: bookPageReducer,
    form: formReducer
});

