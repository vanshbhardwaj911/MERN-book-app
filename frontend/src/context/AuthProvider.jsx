import React, { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

export default function AuthProvider({ children }) { 
    const InitialAuthuser = localStorage.getItem("Users");
    const [authuser, setAuthuser] = useState(
        InitialAuthuser ? JSON.parse(InitialAuthuser) : undefined
    );
    return (
        <AuthContext.Provider value={[authuser, setAuthuser]}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    return useContext(AuthContext);
};
