import '../styles/globals.css'
import "tailwindcss/tailwind.css";
import { AuthProvider, ProtectRoute } from '../contexts/AuthContext'

function MyApp({ Component, pageProps }) {

    return <AuthProvider>
        <ProtectRoute>
            <Component {...pageProps} />
        </ProtectRoute>
    </AuthProvider>
}

export default MyApp
