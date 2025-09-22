import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="section pt-8">
      <div className="glass rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm opacity-80">© {new Date().getFullYear()} Prabasha Jayaweera. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/jkprashmitha" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
            <Github />
          </a>
          <a href="https://www.linkedin.com/in/prabasha" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
            <Linkedin />
          </a>
          <a href="mailto:prabashajayaweera89@gmail.com" className="hover:text-primary transition-colors">
            <Mail />
          </a>
        </div>
      </div>
    </footer>
  )
}
