import './App.css'
import {Outlet, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Navbar from "./components/Navbar.tsx";
import Team from "./pages/Team.tsx";
import Portfolio from "./pages/Portfolio.tsx";
import Contact from "./pages/Contact.tsx";
import NotFound from "./pages/NotFound.tsx";
import LanguageSwitch from "./components/LanguageSwitch.tsx";
import Footer from "./components/Footer.tsx";

function Layout() {
  return (
      <div className="min-h-screen bg-slate-950 text-white">
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
        <LanguageSwitch />
      </div>
  )
}

function App() {
  return (
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/projects" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
  )
}

export default App
