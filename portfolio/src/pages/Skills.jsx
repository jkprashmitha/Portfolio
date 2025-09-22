import SkillBar from '../components/SkillBar'

const groups = [
  {
    name: 'Frontend',
    items: [
      { name: 'HTML/CSS', level: 85 },
      { name: 'JavaScript', level: 78 },
      { name: 'React (basics)', level: 65 },
      { name: 'Tailwind CSS', level: 72 },
    ],
  },
  {
    name: 'Backend',
    items: [
      { name: 'Java', level: 80 },
      { name: 'PHP', level: 70 },
      { name: 'MySQL', level: 75 },
      { name: 'MS SQL Server', level: 65 },
    ],
  },
  {
    name: 'Mobile & Tools', 
    items: [
      { name: 'Dart/Flutter', level: 78 },
      { name: 'Git', level: 75 },
      { name: 'SQA / Testing', level: 70 },
      { name: 'Agile', level: 68 },
    ],
  },
  {
    name: 'Others',
    items: [
      { name: 'Prompt Engineering', level: 85 },
      { name: 'Linux/Windows', level: 70 },
      { name: 'Pega (low-code)', level: 55 },
    ],
  },
]

export default function Skills() {
  return (
    <section className="section">
      <h2 className="text-3xl font-bold">Skills</h2>
      <p className="mt-2 opacity-85">Technical strengths structured by domain with animated proficiency bars.</p>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {groups.map(g => (
          <div key={g.name} className="glass rounded-2xl p-6">
            <h3 className="font-semibold">{g.name}</h3>
            <div className="mt-4 space-y-4">
              {g.items.map(it => <SkillBar key={it.name} name={it.name} level={it.level} />)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
