import {createContext, useState, useContext, useEffect} from 'react';
import { registerRequest, loginRequest, verifyTokenRequest } from '../api/auth';
import Cookies from 'js-cookie';

export const AuthContext = createContext()

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context;
}

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors, setErrors] = useState([]);

    const signup = async (user) => {
        try {
            const res = await registerRequest(user)
            console.log(res.data);
            setUser(res.data);
            setIsAuthenticated(true);
        } catch (error) {
            console.log(error.response);
            setErrors(error.response.data);
        }
    }

    const signin = async (user) => {
        try {
            const res = await loginRequest(user);
            console.log(res);
            setUser(res.data);
            setIsAuthenticated(true);
        } catch (error) {
            console.log(error);
            setErrors(error.response.data)
        }
    }

    useEffect(() => {
        if (errors.lenght > 0) {
            const timer = setTimeout(() => {
                setErrors([])
            }, 1000)
            return () => clearTimeout(timer)
        }
    }, [errors])

    useEffect(() => {
        async function checkLogin () {
            const cookies = Cookies.get()

            if (cookies.token) {
                try {
                    const res = await verifyTokenRequest(cookies.token)
                    if (!res.data) setIsAuthenticated(false)

                    setUser(res.data)
                    setIsAuthenticated(true)
                } catch (error) {
                    setUser(null)
                    setIsAuthenticated(false)
                }
            }
        }
        checkLogin()
    }, [])

    return (
        <AuthContext.Provider
            value={{
                signup,
                signin,
                user,
                isAuthenticated,
                errors,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}