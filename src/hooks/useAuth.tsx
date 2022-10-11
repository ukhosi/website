import React from 'react';
import { AuthContext } from 'src/contexts/AuthProvider';


const useAuth = () => {
    return React.useContext(AuthContext)
};

export default useAuth;