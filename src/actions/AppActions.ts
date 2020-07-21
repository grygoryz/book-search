import {BaseThunkType, InferredActionTypes} from "../store/configureStore";

export const SET_ERROR = "SET_ERROR";

export const AppActions = {
    setError: (value: string | null) => ({type: SET_ERROR, value})
};

export const handleError = (error: Error): Thunk => dispatch => {
    dispatch(AppActions.setError(error.message));
    setTimeout(() => dispatch(AppActions.setError(null)), 4000)
};

export type ActionsType = InferredActionTypes<typeof AppActions>

type Thunk = BaseThunkType<ActionsType>