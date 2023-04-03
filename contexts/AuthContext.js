import React, { createContext, useState, useContext, useEffect } from 'react'
import Cookies from 'js-cookie'
import Router, { useRouter } from 'next/router'
import api from '../config/api'

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadUserFromCookies() {
            const token = Cookies.get('token')
            if (token) {
                console.log("Got a token in the cookies, let's see if it is valid")
                api.defaults.headers.Authorization = `Bearer ${token}`
                //const { data: user } = await api.get('users/me')
                if (user) setUser(user);
            }
            setLoading(false)
        }
        loadUserFromCookies()
    }, [])

    const signup = async (email, password, fullname) => {
        try {
            let res = await api.post('/api/v1/auth/registration', { email, password }).catch((err) => {
                // handle axios errors 
                console.log(err)
            })

            delete res.data.password
            const token = res.data.token
            const currUser = res.data

            if (token) {
                Cookies.set('token', token, { expires: 60 })
                api.defaults.headers.Authorization = `Bearer ${token.token}`
                setUser(currUser)
            }

        } catch (e) {
            // handle error
            console.log(e)
        }
    }
    const login = async (email, password) => {
        try {
            let res = await api.post('/api/v1/auth/login', { email, password }).catch((err) => {
                // handle axios errors 
                console.log(err)
            })
            delete res.data.password

            const token = res.data.token
            const currUser = res.data

            if (token) {
                Cookies.set('token', token, { expires: 60 })
                api.defaults.headers.Authorization = `Bearer ${token.token}`
                setUser(currUser)
            }

        } catch (e) {
            console.log(e)
            // handle error
        }
    }

    const logout = (email, password) => {
        Cookies.remove('token')
        setUser(null)
        delete api.defaults.headers.Authorization
        window.location.pathname = '/Login'
    }


    console.log(`logged in as: ${user}`)

    return (
        <AuthContext.Provider value={{ isAuthenticated: !!user, user, login, loading, logout, signup }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)

