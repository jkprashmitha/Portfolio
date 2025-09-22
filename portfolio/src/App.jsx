import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'


export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  const location = useLocation()
  const pageVariants = {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -12, transition: { duration: 0.3 } }
  }

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Animated galaxy gradient background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1026] via-[#121a3a] to-[#0a0f24] dark:from-[#020617] dark:via-[#0b1026] dark:to-black" />
        <div className="absolute inset-0 mix-blend-screen opacity-60 animate-gradientMove"
             style={{ backgroundImage: 'linear-gradient(120deg, rgba(99,102,241,0.25), rgba(34,211,238,0.18), rgba(245,158,11,0.18))', backgroundSize: '200% 200%' }} />
        <div className="absolute inset-0 starfield" />
      </div>

      <Navbar theme={theme} setTheme={setTheme} />

       <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>

      <Footer />
      <ScrollToTop />
    </div>
  )
}
