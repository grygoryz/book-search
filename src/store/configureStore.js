import {rootReducer} from "../reducers";
import thunkMiddleware from "redux-thunk";
import {applyMiddleware, compose, createStore} from "redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));

export default store;