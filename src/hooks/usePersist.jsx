import { useEffect } from 'react';

export const usePersistedState = (initialState, key = 'state') => {
    const persistedState = localStorage.getItem(key);
    return persistedState ? JSON.parse(persistedState) : initialState;
};

export const usePersistedReducer = ([state, dispatch], key = 'state') => {
    useEffect(
        () => localStorage.setItem(key, JSON.stringify(state)),
        [key, state]
    );
    return [state, dispatch];
};
