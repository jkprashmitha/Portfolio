import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

export default function ProjectCard({ project }) {
  // Decide the main URL for card click: prefer github, fallback to live
  const cardLink = project.github || project.live || '#'

  return (
    <a href={cardLink} target="_blank" rel="noreferrer">
      <motion.div
        whileHover={{ y: -6, scale: 1.01 }}
        className="glass rounded-xl overflow-hidden flex flex-col cursor-pointer"
      >
        <div
          className="relative h-44 bg-cover bg-center"
          style={{ backgroundImage: `url(${project.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
        <div className="p-5 flex-1 flex flex-col">
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p className="text-sm opacity-80 mt-1 flex-1">{project.description}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tech.map(t => (
              <span
                key={t}
                className="text-xs px-2 py-1 rounded bg-white/10 border border-white/10"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="mt-4 flex gap-3">
            {project.github && (
              <span className="btn btn-outline flex items-center gap-1">
                <Github size={18} /> 
              </span>
            )}
            {project.live && (
              <span className="btn btn-primary flex items-center gap-1">
                <ExternalLink size={18} /> Live
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </a>
  )
}
