import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, Calendar, MapPin, Award } from 'lucide-react'

const timelineData = [
  {
    type: 'training',
    title: 'MERN Stack Trainee',
    organization: 'QSpiders Trainee Institute',
    date: 'Recent training',
    location: 'Delhi / Offline',
    description: [
      'Rigorous hands-on training in HTML5, CSS3, Tailwind CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB.',
      'Completed multiple assignments, debugging mock drill rounds, and real-time project modules.',
      'Significantly improved algorithmic problem-solving and full-stack application debugging skills.'
    ],
    icon: Briefcase,
    color: 'from-purple-600 to-indigo-500'
  },
  {
    type: 'education',
    title: 'B.Tech in Computer Science & Engineering',
    organization: 'Institute of Technology Gopeshwar',
    date: '2022 - 2025',
    location: 'Chamoli, Uttarakhand, India',
    description: [
      'Graduated with active projects focus in web engineering and intelligent systems.',
      'Studied Data Structures, Database Systems, Software Engineering, and Computer Networks.',
      'Participated in coding hackathons and technical events.'
    ],
    icon: GraduationCap,
    color: 'from-blue-600 to-cyan-500'
  },
  {
    type: 'education',
    title: 'Diploma in Engineering',
    organization: 'Government Polytechnic Beerokhal',
    // date: 'Completed prior to B.Tech lateral entry',
    location: 'Pauri Garhwal, Uttarakhand, India',
    description: [
      'Acquired foundational principles in computer science and basic hardware/software layouts.',
      'Developed strong algorithmic foundations.'
    ],
    icon: GraduationCap,
    color: 'from-pink-600 to-rose-500'
  }
]

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background glow layers */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-purple-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-base font-semibold uppercase tracking-wider text-purple-500 dark:text-purple-400 mb-2 font-sans"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            My Background
          </motion.h2>
          <motion.h1 
            className="text-3xl md:text-5xl font-bold tracking-tight text-slate-850 dark:text-white font-sans"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            About Me & Journey
          </motion.h1>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Text Block: Professional Summary */}
          <motion.div 
            className="lg:col-span-5 text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-panel rounded-3xl p-8 border border-slate-200/50 dark:border-white/5 relative overflow-hidden transition-colors duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 rounded-full blur-xl pointer-events-none" />
              
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2 font-sans">
                <Award className="text-purple-500 dark:text-purple-400" />
                Who I Am
              </h3>
              
              <p className="text-slate-600 dark:text-gray-300 leading-relaxed mb-6 font-sans">
                I am a motivated **Full Stack MERN Developer** with deep passion for building robust, scalable web products. 
                My path has transitioned from foundational engineering concepts in my Diploma program into deep computing paradigms during my **B.Tech in Computer Science & Engineering**.
              </p>
              
              <p className="text-slate-600 dark:text-gray-300 leading-relaxed mb-6 font-sans">
                Through intensive training at **QSpiders**, I've mastered modern frontend practices using **React.js & Tailwind CSS** alongside backend servers powered by **Node.js, Express.js, & MongoDB**.
              </p>

              <div className="p-4 rounded-2xl bg-purple-500/5 border border-purple-200/60 dark:border-purple-500/10 text-purple-700 dark:text-purple-300 text-sm italic font-sans transition-colors duration-300">
                "I believe in clean architecture, writing self-documenting code, and continuously shipping beautiful interactive interfaces."
              </div>
            </div>
          </motion.div>

          {/* Right Block: Journey Timeline */}
          <div className="lg:col-span-7 relative pl-4 md:pl-8 text-left">
            {/* Timeline Vertical Axis Line */}
            <div className="absolute left-[23px] md:left-[39px] top-4 bottom-4 w-0.5 bg-slate-200 dark:bg-white/5 transition-colors duration-300" />

            <div className="space-y-12">
              {timelineData.map((item, index) => {
                const IconComponent = item.icon
                return (
                  <motion.div
                    key={index}
                    className="relative flex items-start gap-4 md:gap-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                  >
                    {/* Timeline Node Point Icon */}
                    <div className={`relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-tr ${item.color} p-0.5 flex items-center justify-center shadow-lg`}>
                      <div className="w-full h-full bg-white dark:bg-[#0b0c10] rounded-[14px] flex items-center justify-center text-slate-800 dark:text-gray-200 transition-colors duration-300">
                        <IconComponent size={20} className="stroke-[2px]" />
                      </div>
                    </div>

                    {/* Timeline Card details */}
                    <div className="flex-1 glass-panel rounded-3xl p-6 md:p-8 border border-slate-200/50 dark:border-white/5 hover:border-purple-500/20 dark:hover:border-white/10 transition-all duration-300 relative">
                      {/* Timeline tag pill */}
                     {item.date &&  <span className="absolute top-6 right-6 inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider text-purple-600 dark:text-purple-400 bg-purple-500/5 border border-purple-500/10 px-2.5 py-1 rounded-full">
                        <Calendar size={10} />
                        {item.date}
                      </span>}

                      <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-1 font-sans mr-24 transition-colors duration-300">
                        {item.title}
                      </h3>
                      
                      <div className="text-purple-600 dark:text-purple-400 font-medium text-sm mb-3 flex items-center gap-1 font-sans transition-colors duration-300">
                        <span>{item.organization}</span>
                        <span className="text-slate-300 dark:text-gray-600">•</span>
                        <span className="text-slate-500 dark:text-gray-400 flex items-center gap-0.5 text-xs transition-colors duration-300">
                          <MapPin size={12} />
                          {item.location}
                        </span>
                      </div>

                      <ul className="space-y-2 text-slate-600 dark:text-gray-400 text-sm list-disc pl-4 font-sans transition-colors duration-300">
                        {item.description.map((desc, i) => (
                          <li key={i} className="leading-relaxed">
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
