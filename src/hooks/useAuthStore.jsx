import { useReducer } from 'react';
import { usePersistedState, usePersistedReducer } from './usePersist';

export const LOGIN = 'login';
export const LOGOUT = 'logout';

const initialState = { token: null };

function reducer(state, action) {
    switch (action.type) {
        case LOGIN:
            return { ...state, token: action.payload };
        case LOGOUT:
            return { ...state, token: null };
        default:
            throw new Error();
    }
}

// actions
export const switchToLogOut = () => ({
    type: LOGOUT,
});

export const switchToLogIn = (payload) => async (dispatch) => {
    // imitate request to server
    dispatch({
        type: LOGIN,
        payload,
    });
};

const useAuthStore = () => {
    const persistedState = usePersistedState(initialState, 'auth');

    const [state, dispatch] = usePersistedReducer(
        useReducer(reducer, persistedState),
        'auth'
    );

    const dispatchExtended = (arg) => {
        if (typeof arg === 'function') {
            return arg(dispatch);
        }
        return dispatch(arg);
    };
    return { auth: state, dispatch: dispatchExtended };
};

export default useAuthStore;
