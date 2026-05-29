import { motion } from 'framer-motion'
import { Code, Server, Database, Wrench, Heart } from 'lucide-react'

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Code,
    color: 'text-purple-600 dark:text-purple-400 border-purple-500/20 bg-purple-500/5',
    skills: [
      { name: 'React.js', level: '90%', color: 'hover:shadow-[0_0_20px_rgba(97,218,251,0.2)] hover:border-[#61dafb]/40 hover:text-[#61dafb]', badgeColor: 'bg-[#61dafb]/10' },
      { name: 'JavaScript', level: '85%', color: 'hover:shadow-[0_0_20px_rgba(247,223,30,0.15)] hover:border-[#f7df1e]/40 hover:text-[#f7df1e]', badgeColor: 'bg-[#f7df1e]/10' },
      { name: 'Tailwind CSS', level: '95%', color: 'hover:shadow-[0_0_20px_rgba(56,178,172,0.2)] hover:border-[#38b2ac]/40 hover:text-[#38b2ac]', badgeColor: 'bg-[#38b2ac]/10' },
      { name: 'HTML5', level: '90%', color: 'hover:shadow-[0_0_20px_rgba(227,79,38,0.2)] hover:border-[#e34f26]/40 hover:text-[#e34f26]', badgeColor: 'bg-[#e34f26]/10' },
      { name: 'CSS3', level: '88%', color: 'hover:shadow-[0_0_20px_rgba(21,114,182,0.2)] hover:border-[#1572b6]/40 hover:text-[#1572b6]', badgeColor: 'bg-[#1572b6]/10' }
    ]
  },
  {
    title: 'Backend Engineering',
    icon: Server,
    color: 'text-blue-600 dark:text-blue-400 border-blue-500/20 bg-blue-500/5',
    skills: [
      { name: 'Node.js', level: '80%', color: 'hover:shadow-[0_0_20px_rgba(67,133,61,0.2)] hover:border-[#43853d]/40 hover:text-[#43853d]', badgeColor: 'bg-[#43853d]/10' },
      { name: 'Express.js', level: '82%', color: 'hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] hover:border-purple-500/40 hover:text-purple-600 dark:hover:text-white', badgeColor: 'bg-purple-500/10' }
    ]
  },
  {
    title: 'Databases & Storage',
    icon: Database,
    color: 'text-emerald-600 dark:text-emerald-400 border-emerald-500/20 bg-emerald-500/5',
    skills: [
      { name: 'MongoDB', level: '85%', color: 'hover:shadow-[0_0_20px_rgba(71,162,72,0.2)] hover:border-[#47a248]/40 hover:text-[#47a248]', badgeColor: 'bg-[#47a248]/10' },
      { name: 'SQL', level: '78%', color: 'hover:shadow-[0_0_20px_rgba(242,145,17,0.15)] hover:border-[#f29111]/40 hover:text-[#f29111]', badgeColor: 'bg-[#f29111]/10' }
    ]
  },
  {
    title: 'Tools & DevOps',
    icon: Wrench,
    color: 'text-pink-600 dark:text-pink-400 border-pink-500/20 bg-pink-500/5',
    skills: [
      { name: 'Git', level: '85%', color: 'hover:shadow-[0_0_20px_rgba(240,80,50,0.15)] hover:border-[#f05032]/40 hover:text-[#f05032]', badgeColor: 'bg-[#f05032]/10' },
      { name: 'GitHub', level: '88%', color: 'hover:shadow-[0_0_20px_rgba(175,0,255,0.15)] hover:border-purple-400/40 hover:text-purple-600 dark:hover:text-purple-400', badgeColor: 'bg-purple-400/10' },
      { name: 'VS Code', level: '92%', color: 'hover:shadow-[0_0_20px_rgba(0,122,204,0.15)] hover:border-[#007acc]/40 hover:text-[#007acc]', badgeColor: 'bg-[#007acc]/10' },
      { name: 'Postman', level: '80%', color: 'hover:shadow-[0_0_20px_rgba(255,108,55,0.15)] hover:border-[#ff6c37]/40 hover:text-[#ff6c37]', badgeColor: 'bg-[#ff6c37]/10' }
    ]
  }
]

const softSkills = [
  'Problem-solving',
  'Teamwork & Collaboration',
  'Effective Communication',
  'Adaptability',
  'Quick Learning',
  'Active Listening'
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-200/10 dark:bg-[#070709]/30 border-y border-slate-200/60 dark:border-white/5 transition-colors duration-300">
      {/* Background glow layers */}
      <div className="absolute top-0 right-0 w-[30vw] h-[30vw] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-base font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-2 font-sans"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            My Expertise
          </motion.h2>
          <motion.h1 
            className="text-3xl md:text-5xl font-bold tracking-tight text-slate-850 dark:text-white font-sans transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Skills & Core Competencies
          </motion.h1>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Skill Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <motion.div
                key={index}
                className="glass-panel rounded-3xl p-6 md:p-8 border border-slate-200/50 dark:border-white/5 flex flex-col justify-between transition-colors duration-300"
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 rounded-2xl border ${category.color} flex items-center justify-center`}>
                      <IconComponent size={22} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white font-sans transition-colors duration-300">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {category.skills.map((skill, i) => (
                      <div
                        key={i}
                        className={`flex items-center justify-between p-3 rounded-2xl bg-slate-100/50 dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/5 text-slate-700 dark:text-gray-300 text-sm font-medium transition-all duration-300 cursor-default ${skill.color}`}
                      >
                        <span className="font-sans">{skill.name}</span>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono text-slate-500 dark:text-gray-400 ${skill.badgeColor}`}>
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Soft Skills Section */}
        <motion.div
          className="glass-panel rounded-3xl p-8 border border-slate-200/50 dark:border-white/5 text-center relative overflow-hidden transition-colors duration-300"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Subtle decoration */}
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-500/5 rounded-full blur-xl pointer-events-none" />
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500/5 rounded-full blur-xl pointer-events-none" />

          <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center justify-center gap-2 font-sans relative z-10 transition-colors duration-300">
            <Heart className="text-pink-500 dark:text-pink-400" />
            Soft Skills & Professional Strengths
          </h3>

          <div className="flex flex-wrap justify-center gap-3 relative z-10">
            {softSkills.map((skill, index) => (
              <motion.span
                key={index}
                className="px-5 py-2.5 rounded-2xl bg-slate-100/60 dark:bg-white/[0.03] border border-slate-200/60 dark:border-white/10 hover:border-purple-500/30 hover:bg-purple-500/10 dark:hover:bg-purple-500/5 text-slate-700 dark:text-gray-300 font-medium text-sm transition-all duration-300 shadow-sm cursor-default"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
