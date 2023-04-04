import Navbar from '../components/navigation/Navbar.js'

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
        </>
    )
}
