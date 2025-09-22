import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'

import quizImg from '../assets/quiz.jpg'
import ecommerceImg from '../assets/ecommerce.jpg'
import mindcareImg from '../assets/mindcare.jpg'
import safariImg from '../assets/safari.jpg'

const placeholder = "https://via.placeholder.com/400x250?text=Coming+Soon"

const projects = [
  {
    title: 'Quiz Website',
    description: 'Full-stack quiz platform with auth, scoring, and admin tools.',
    tech: ['HTML', 'CSS', 'JS', 'PHP', 'MySQL'],
    image: quizImg || placeholder,
    github: 'https://github.com/NSBMFinalProjects/WebModule',
    live: null,
  },
  {
    title: 'E-Commerce Clothing (Java)',
    description: 'Java-based e-commerce app with product catalog and checkout.',
    tech: ['Java', 'Servlets', 'JSP', 'MySQL'],
    image: ecommerceImg || placeholder,
    github: 'https://github.com/SenukiPerera/Clothing-website',
    live: null,
  },
  {
    title: 'Mindcare Mobile App',
    description: 'Flutter + Firebase mental health companion with chat features.',
    tech: ['Dart', 'Flutter', 'Firebase'],
    image: mindcareImg || placeholder,
    github: 'https://github.com/SenukiPerera/Mental_Health_Care_Mobile_App',
    live: null,
  },
  {
    title: 'Safari UI Redesign',
    description: 'Minneriya National Park website redesign in Figma.',
    tech: ['Figma', 'UI/UX'],
    image: safariImg || placeholder,
    github: 'https://www.figma.com/design/lDIXOjfDcXhdq4aKWT2DKf/Safari-Redesign?node-id=0-1',
    live: null,
  },
]

export default function Projects() {
  return (
    <motion.section
      className="section"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold">Projects</h2>
      <p className="mt-2 opacity-85">Selected works highlighting web, Java, Flutter, and UI design.</p>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(p => <ProjectCard key={p.title} project={p} />)}
      </div>
    </motion.section>
  )
}
