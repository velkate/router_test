import { useContext } from 'react';
import { AuthContext } from '../lib/AuthContextWrapper';

const useAuth = () => {
    return useContext(AuthContext);
};

export default useAuth;
