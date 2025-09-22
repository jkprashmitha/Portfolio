import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ScrollToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const h = () => setShow(window.scrollY > 400)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])
  if (!show) return null
  return (
    <motion.button
      initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-6 right-6 btn btn-primary rounded-full p-3"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
    >
      <ArrowUp />
    </motion.button>
  )
}
