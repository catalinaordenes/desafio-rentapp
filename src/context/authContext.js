import React, { useContext, useState } from 'react'

const AuthContext = React.createContext()
const initialState = () => {
    const user = JSON.parse(
        sessionStorage.getItem(`test-auth-user`) || null,
    )
    return user
}

function AuthProvider({ children }) {
    const [user, setUser] = useState(initialState())
    function logIn({  user }) {
        sessionStorage.setItem(`test-auth-user`, JSON.stringify(user))
        return setUser(user)
    }
    function logOut() {
        sessionStorage.removeItem(`test-auth-user`)
        window.location.reload()
        return setUser(null)
    }
    return (
        <AuthContext.Provider value={{ user, logIn, logOut }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error(`useAuth must be used within a AuthProvider`)
    }
    return context
}

export  { AuthProvider, useAuth }