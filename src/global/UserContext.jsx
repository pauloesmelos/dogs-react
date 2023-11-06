import React from 'react';
import useUserGet from '../hooks/auth/useUserGet';

export const UserContext = React.createContext();
export const UserContextProvider = ({ children }) => {
    const [token, setToken] = React.useState('');
    const [isLogin, setIsLogin] = React.useState(false);
    const { data, isError, isLoading, refetch } = useUserGet(token); // user

    React.useEffect(() => {
        const token = window.localStorage.getItem("token");
        if(token && validateToken) {
            setToken(token);
            setIsLogin(true);
        }
    }, []);

    return (
        <UserContext.Provider value={{ data, isLogin, isError, isLoading, refetch }}>
            {children}
        </UserContext.Provider>
    )
}