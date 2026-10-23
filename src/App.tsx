import './App.css'
import {Outlet, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Navbar from "./components/Navbar.tsx";
import Team from "./pages/Team.tsx";
import Projects from "./pages/Projects.tsx";
import Contact from "./pages/Contact.tsx";
import NotFound from "./pages/NotFound.tsx";
import LanguageSwitch from "./components/LanguageSwitch.tsx";

function Layout() {
  return (
      <div className="min-h-screen bg-slate-950 text-white">
        <Navbar />
        <main>
          <Outlet />
        </main>
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
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
  )
}

export default App
