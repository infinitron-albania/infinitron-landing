import {useEffect} from 'react'
import './App.css'
import {Outlet, Route, Routes, useLocation} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Navbar from "./components/Navbar.tsx";
import Team from "./pages/Team.tsx";
import Projects from "./pages/Projects.tsx";
import Contact from "./pages/Contact.tsx";

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function Layout() {
  return (
      <div className="min-h-screen bg-slate-950 text-white">
        <ScrollToTop />
        <Navbar />
        <main>
          <Outlet />
        </main>
      </div>
  )
}

function App() {
  return (
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/ekipi" element={<Team />} />
          <Route path="/projektet" element={<Projects />} />
          <Route path="/kontakt" element={<Contact />} />
        </Route>
      </Routes>
  )
}

export default App
