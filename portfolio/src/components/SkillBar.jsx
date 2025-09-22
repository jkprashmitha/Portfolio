import { motion } from 'framer-motion'

export default function SkillBar({ name, level }) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span>{name}</span>
        <span className="opacity-70">{level}%</span>
      </div>
      <div className="h-2 rounded bg-white/10 overflow-hidden">
        <motion.div
  initial={{ width: 0 }}
  animate={{ width: `${level}%` }}   // ← animate every render
  transition={{ duration: 0.8, ease: 'easeOut' }}
  className="h-full bg-primary"
/>

      </div>
    </div>
  )
}
