import Navbar from '../components/navigation/AdminNavbar.js'

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
        </>
    )
}
