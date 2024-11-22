import React, { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext();

const url = process.env.REACT_APP_API_URL;
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [mobileSidebar, setMobileSidebar] = useState(false);

    useEffect(() => {
        const GetUser = async () => {
          const res = await fetch(url)
          const data = await res.json()
          setUser(data)
        //   console.log(data)
        }
        GetUser()
    }, [])
    

    const login = (user) => {
        setUser(user)
    }

    const logout = () => {
        setUser(null)
    }

    return(
        <AuthContext.Provider value={{ user, login, logout, mobileSidebar, setMobileSidebar }}>
            { children }
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}