import React from 'react';
import { createContext } from 'react';
import useAuthStore from '../hooks/useAuthStore';

export const AuthContext = createContext();

function AuthContextWrapper({ children }) {
    const auth = useAuthStore();

    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export default AuthContextWrapper;
