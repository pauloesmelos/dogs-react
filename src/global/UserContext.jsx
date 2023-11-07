import React from 'react';
import { useNavigate } from 'react-router-dom';
import userTokenValidate from '../hooks/auth/useTokenValidate';
import useUserGet from '../hooks/auth/useUserGet';

export const UserContext = React.createContext();
export const UserContextProvider = ({ children }) => {
    const [dataUser, setDataUser] = React.useState(null);
    const [token, setToken] = React.useState('');
    const [isLogin, setIsLogin] = React.useState(false);
    const navigate = useNavigate();
    const { data, isError, isLoading } = useUserGet(token); // user

    React.useEffect(() => {
        const token = window.localStorage.getItem("token");
        if(token) {
            setToken(token);
            setIsLogin(true);
            console.log("valido");
        }
        else {
            setIsLogin(false);
        }
    }, []);
    React.useEffect(() => {
        setDataUser(data);
    }, [data]);
    function logout() {
        setDataUser(null);
        setIsLogin(false);
        setToken('');
        window.localStorage.removeItem("token");
        navigate("/login");
    }

    return (
        <UserContext.Provider value={{ dataUser,setDataUser, isLogin, setIsLogin, isError, token, setToken, isLoading, logout, navigate }}>
            {children}
        </UserContext.Provider>
    )
}