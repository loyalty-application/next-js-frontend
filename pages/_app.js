import '../styles/globals.css'
import "tailwindcss/tailwind.css";
import { AuthProvider, ProtectRoute } from '../contexts/AuthContext'

function MyApp({ Component, pageProps }) {
    const getLayout = Component.getLayout || ((page) => page)

    return <AuthProvider>
        <ProtectRoute>
            {getLayout(<Component {...pageProps} />)}
        </ProtectRoute>
    </AuthProvider>
}

export default MyApp
