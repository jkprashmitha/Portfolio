import { Link, NavLink, useLocation } from 'react-router-dom'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { motion, px } from 'framer-motion'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/skills', label: 'Skills' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar({ theme, setTheme }) {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="sticky top-0 z-40">
     
      <div className="section py-4 flex items-center justify-between glass rounded-2xl mt-4">
        <Link to="/" className="font-semibold tracking-tight ml-4">
          <span className="text-secondary">Prabasha Jayaweera</span> 
        </Link>

        <nav className="hidden md:flex gap-6">
          {nav.map(n => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `text-sm hover:text-primary transition-colors  ${isActive ? 'text-primary' : 'opacity-90'}`
              }>
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2 mr-4">
          <button
            aria-label="Toggle theme"
            className="btn btn-outline"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            <span className="hidden sm:inline">{theme === 'dark' ? 'Light' : 'Dark'}</span>
          </button>
          <button className="md:hidden btn btn-outline" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="md:hidden section pt-0">
          <div className="glass rounded-xl p-4 flex flex-col">
            {nav.map(n => (
              <NavLink key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-2">
                {n.label}
              </NavLink>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  )
}
