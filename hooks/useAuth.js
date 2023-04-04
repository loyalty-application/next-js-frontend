import React, { createContext, useState, useContext, useEffect } from 'react'
import Cookies from 'js-cookie'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import api from '../config/Api'


const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadUserFromCookies() {
            const token = Cookies.get('token')
            const user_id = Cookies.get('user_id')

            if (token && user_id) {
                api.defaults.headers.Authorization = `Bearer ${token}`
                let res = await api.get(`/api/v1/user/${user_id}`)
                delete res.data.password
                const user = res.data
                if (user) setUser(user);
            }
            setLoading(false)
        }
        loadUserFromCookies()
    }, [])

    const signup = async (email, password) => {
        try {
            let res = await api.post('/api/v1/auth/registration', { email, password }).catch((err) => {
                // handle axios errors 
                console.log(err)
            })

            delete res.data.password
            const token = res.data.token
            const currUser = res.data

            if (token && currUser) {
                Cookies.set('token', token)
                Cookies.set('user_id', currUser.user_id)
                api.defaults.headers.Authorization = `Bearer ${token}`
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

            if (token && currUser) {
                Cookies.set('token', token)
                Cookies.set('user_id', currUser.user_id)
                api.defaults.headers.Authorization = `Bearer ${token}`
                setUser(currUser)
            }

        } catch (e) {
            console.log(e)
            // handle error
        }
    }

    const logout = () => {
        Cookies.remove('token')
        Cookies.remove('user_id')
        setUser(null)
        delete api.defaults.headers.Authorization
    }


    return (
        <AuthContext.Provider value={{ isAuthenticated: !!user, user, login, loading, logout, signup }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)

export const ProtectRoute = ({ children }) => {

    const { isAuthenticated, loading } = useAuth();
    if (loading) {
        return <div className='p-10'><Skeleton className='p-5' count={5} height={100} /></div>
    }
    return children;
}

