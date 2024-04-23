import React, { useState } from 'react'

const AuthContext = createContext(null)

export const AuthProvider = () => {
    const [user, setUser] = useState(null)

    const login = (user) => {
        setUser(user)
    }

    const logout = () => {
        setUser(null)
    }
}