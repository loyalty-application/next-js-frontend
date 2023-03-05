import Head from 'next/head'
import Sidebar from './components/SideNavbar'
import Container from './components/Container'

export default function Home() {
  return (
    <div className="min-h-screen md:flex">
      <div>
        <Sidebar />
      </div>
      <div className="w-full md:w-auto md:flex-grow">
        <Container />
      </div>
    </div>    
  )
}
