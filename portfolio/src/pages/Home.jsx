import { motion } from 'framer-motion'
import { Download, Mail, Rocket } from 'lucide-react'
import heroImg from '../assets/galaxy.jpg'

export default function Home() {
  return (
    <section className="section min-h-[78vh] flex items-center relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.18),transparent_40%),radial-gradient(circle_at_80%_50%,rgba(34,211,238,0.16),transparent_40%)]" />
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <motion.p initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-secondary font-medium tracking-wide inline-flex items-center gap-2">
            <Rocket size={18} /> Intern Software Engineer
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight">
            Prabasha Jayaweera
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="mt-4 opacity-90">
            Detail-oriented MIS student passionate about building efficient, scalable software with Java, Dart/Flutter, and JavaScript focused on clean UI and quality assurance. 
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="mt-6 flex flex-wrap gap-20 justify-center">
            <a className="btn btn-primary flex items-center gap-2" href="/PrabashaJayaweera_CV.pdf" download>
              <Download size={18} /> Download CV
            </a>
            <a className="btn btn-outline flex items-center gap-2" href="/contact">
              <Mail size={18} /> Contact Me
            </a>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
          className="relative">
          <div className="rounded-2xl overflow-hidden glass w-100 h-100 mt-5">
  <img src={heroImg} alt="Galaxy background" className="w-full h-full object-cover" />
</div>

          <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-primary/20 via-secondary/20 to-accent/10 blur-2xl animate-pulseGlow" />
        </motion.div>
      </div>
    </section>
  )
}
