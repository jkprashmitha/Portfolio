import { motion } from 'framer-motion'
import profile from '../assets/profile.jpg'

const timeline = [
  { period: 'Sep 2022 – Present', role: 'BSc in MIS (Special)', org: 'NSBM Green University', desc: 'Management Information Systems with computing focus.' },
  { period: 'Jan 2025 – Present', role: 'BIT (UCSC)', org: 'University of Colombo School of Computing', desc: 'Core CS fundamentals and software engineering.' },

]
const experience = [
  { period: 'Apr 2023 – Present', role: 'Prompt Engineer (Freelance)', org: 'Self-employed', desc: 'Built automation prompts, solved CS tasks using GPT-4.1, Gemini, Claude, Grok.' },
  { period: 'Jan 2022 – Mar 2023', role: 'IT Support Trainee', org: 'Freelancing', desc: 'Troubleshooting, QA checks, and user enablement.' },
];

const strengths = [
  'Problem solving and SQA mindset',
  'Team collaboration and communication',
  'Version control (Git) and Agile',
  'Cross-platform with Flutter and web',
]

const fadeUp = { hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }
const slideLeft = { hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }

export default function About() {
  return (
    <section className="section">
      <div className="grid md:grid-cols-3 gap-10">

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <div className="rounded-2xl overflow-hidden glass mt-5">
            <img
              src={profile}
              alt="Profile"
              className="w-full aspect-square object-cover hover:scale-[1.03] transition-transform"
            />
          </div>
        </motion.div>

        <div className="md:col-span-2">
          <motion.h2
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl font-bold"
          >
            About Me
          </motion.h2>

          <motion.p
            className="mt-4 opacity-90"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            MIS undergraduate focused on web and mobile app development, blending UI quality with robust backend logic. Experienced with Java, Dart/Flutter, JavaScript, SQL, and test-driven fundamentals. 
          </motion.p>

          <motion.h3
            className="mt-8 font-semibold"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Strengths
          </motion.h3>

<div className="flex justify-center">
          <motion.ul
            className="mt-3 grid sm:grid-cols-2 gap-2"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {strengths.map(s => <li key={s} className="opacity-90">• {s}</li>)}
          </motion.ul>
</div>
          <motion.h3
            className="mt-8 font-semibold"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Education
          </motion.h3>

          <div className="mt-3 space-y-4">
            {timeline.map((t, i) => (
              <motion.div
                key={i}
                initial="hidden"
                animate="visible"
                variants={slideLeft}
                transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
                className="glass rounded-xl p-4"
              >
                <div className="text-sm opacity-70">{t.period}</div>
                <div className="font-semibold">{t.role} — {t.org}</div>
                <div className="text-sm opacity-85">{t.desc}</div>
              </motion.div>
              
            ))}
          </div>
         <motion.h3
            className="mt-8 font-semibold"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Experience
          </motion.h3>
            <div className="mt-3 space-y-4">
              {experience.map((t, i) => (
                     <motion.div
                key={i}
                initial="hidden"
                animate="visible"
                variants={slideLeft}
                transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
                className="glass rounded-xl p-4"
                >
               
                  <div className="text-sm opacity-70">{t.period}</div>
                  <div className="font-semibold">{t.role} — {t.org}</div>
                  <div className="text-sm opacity-85">{t.desc}</div>
                 
                
                 </motion.div>
              ))}
            </div>
        </div>
      </div>
    </section>
  )
}
