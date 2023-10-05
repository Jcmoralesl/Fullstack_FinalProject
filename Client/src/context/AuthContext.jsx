import { createContext, useState, useContext } from "react";
import { registerRequest } from "../api/auth"

export const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext)
    if (!context) {
        throw new Error ("useAuth must be used within an AuthProvider")
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
        console.log(res.data)
        setUser(res.data)
        setIsAuthenticated(true)
        } catch (error) {
            console.log(error.response)
            setErrors(error.response.data)
        }
    }
    return (
        <authContext.Provider value = {{
            signup,
            user,
            isAuthenticated,
            errors, 
        }} >
            {children}
        </authContext.Provider>
    )
}