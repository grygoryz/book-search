import {ActionsType, SET_ERROR} from "../actions/AppActions";

const initialState = {
    error: null as string | null
};

export const appReducer = (state = initialState, action: ActionsType): State => {
    switch(action.type) {
        case SET_ERROR: {
            return {...state, error: action.value}
        }
        default:
            return state;
    }
};

type State = typeof initialState;