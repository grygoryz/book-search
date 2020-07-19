export const SET_ERROR = "SET_ERROR";

export const setError = (value) => ({type: SET_ERROR, value});

export const handleError = (error) => dispatch => {
    dispatch(setError(error.message));
    setTimeout(() => dispatch(setError(null)), 4000)
};