import { motion } from 'framer-motion'
import { ExternalLink, Leaf, FileText, HeartPulse, ShieldAlert } from 'lucide-react'

// Custom GitHub Icon Component
const GithubIcon = ({ size = 20, className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

const projectsData = [
  {
    title: 'GoGreenRaven Website',
    subtitle: 'Team Collaboration Platform',
    icon: Leaf,
    color: 'text-emerald-400 border-emerald-500/20 bg-emerald-500/5',
    gradient: 'from-emerald-500/20 via-teal-500/20 to-blue-500/20',
    hoverGlow: 'hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] hover:border-emerald-500/30',
    tech: ['React.js', 'Tailwind CSS', 'Responsive Web Design'],
    description: [
      'Collaborated with a team of developers to design and develop the official GoGreenRaven website.',
      'Built custom responsive UI components using React.js and Tailwind CSS ensuring seamless user experiences.',
      'Maintained consistent design libraries, optimized bundle sizes, and resolved debugging challenges.',
      'Engineered interactive structured layouts resulting in polished responsive views.'
    ],
    liveLink: 'https://gogreenraven.com',
    githubLink: 'https://github.com'
  },
  {
    title: 'Resume Builder Application',
    subtitle: 'Dynamic Builder Utility',
    icon: FileText,
    color: 'text-purple-400 border-purple-500/20 bg-purple-500/5',
    gradient: 'from-purple-500/20 via-indigo-500/20 to-blue-500/20',
    hoverGlow: 'hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] hover:border-purple-500/30',
    tech: ['React.js', 'Tailwind CSS', 'JSON Server', 'React Router'],
    description: [
      'Developed a dynamic Resume Builder application featuring user authentication (Login/Signup).',
      'Implemented form-based resume inputs with responsive, real-time live preview matching clean templates.',
      'Utilized JSON Server mock backend to store and secure user details and resume states.',
      'Built fully structured CRUD operations allowing users to create, read, update, and delete resumes.'
    ],
    liveLink: null,
    githubLink: 'https://github.com'
  },
  {
    title: 'MindEase: AI Mental Companion',
    subtitle: 'Mental Health Interface',
    icon: HeartPulse,
    color: 'text-pink-400 border-pink-500/20 bg-pink-500/5',
    gradient: 'from-pink-500/20 via-rose-500/20 to-orange-500/20',
    hoverGlow: 'hover:shadow-[0_0_30px_rgba(236,72,153,0.15)] hover:border-pink-500/30',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Web Design'],
    description: [
      'Developed an interactive responsive frontend interface targeting mental health tracking and exercises.',
      'Designed smooth transitions and calming color systems to elevate general usability.',
      'Integrated rich resources, interactive mood-log structures, and responsive grids.'
    ],
    liveLink: null,
    githubLink: null
  },
  {
    title: 'AI Fake News Detection Tool',
    subtitle: 'Interactive Frontend UI',
    icon: ShieldAlert,
    color: 'text-blue-400 border-blue-500/20 bg-blue-500/5',
    gradient: 'from-blue-500/20 via-indigo-500/20 to-purple-500/20',
    hoverGlow: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:border-blue-500/30',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'JSON API'],
    description: [
      'Built clean web frontend elements for user input processing and detailed verification summaries.',
      'Created custom result visual gauges displaying risk indices dynamically.',
      'Developed sleek interactive tooltips and input validator checks.'
    ],
    liveLink: null,
    githubLink: null
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background glow layers */}
      <div className="absolute top-1/3 right-1/4 w-[40vw] h-[40vw] bg-purple-500/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-[40vw] h-[40vw] bg-blue-500/5 blur-[140px] rounded-full pointer-events-none" />

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
            My Creations
          </motion.h2>
          <motion.h1 
            className="text-3xl md:text-5xl font-bold tracking-tight text-slate-850 dark:text-white font-sans transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Featured Projects
          </motion.h1>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => {
            const ProjectIcon = project.icon
            return (
              <motion.div
                key={index}
                className={`glass-panel rounded-3xl p-6 md:p-8 border border-slate-200/50 dark:border-white/5 flex flex-col justify-between transition-all duration-300 relative group overflow-hidden ${project.hoverGlow}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
              >
                {/* Background soft color panel on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`} />

                <div>
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-6 relative z-10">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-2xl border ${project.color} flex items-center justify-center`}>
                        <ProjectIcon size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-800 dark:text-white font-sans tracking-tight transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-slate-500 dark:text-gray-400 text-xs font-semibold uppercase tracking-wider font-sans transition-colors duration-300">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                    {project.tech.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-xl bg-slate-100 dark:bg-white/[0.03] border border-slate-200/60 dark:border-white/5 text-slate-600 dark:text-gray-300 font-mono text-xs transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bullet description */}
                  <ul className="space-y-2.5 text-slate-600 dark:text-gray-400 text-sm list-disc pl-4 mb-8 font-sans relative z-10 text-left transition-colors duration-300">
                    {project.description.map((point, i) => (
                      <li key={i} className="leading-relaxed">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions bottom row */}
                <div className="flex items-center gap-4 relative z-10 pt-4 border-t border-slate-200/60 dark:border-white/5 transition-colors duration-300">
                  {project.githubLink && (<a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-300/60 dark:border-white/10 text-slate-700 dark:text-gray-300 text-sm font-semibold transition-all duration-300 cursor-pointer"
                  >
                    <GithubIcon size={16} />
                    Source Code
                  </a>)}
                  
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-500 hover:to-blue-400 text-white text-sm font-semibold transition-all duration-300 cursor-pointer"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
