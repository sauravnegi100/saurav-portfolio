import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Download, ArrowRight, Phone, Mail, Award } from 'lucide-react'
import confetti from 'canvas-confetti'
import resumeFile from '../assets/Saurav Resume 1.pdf'

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

const roles = [
  'Full Stack MERN Developer',
  'B.Tech Computer Science Graduate',
  'Passionate Problem Solver',
  'UI/UX Enthusiast'
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayedRole, setDisplayedRole] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  // Typewriter effect
  useEffect(() => {
    let timer
    const currentFullRole = roles[roleIndex]
    
    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayedRole(currentFullRole.substring(0, displayedRole.length - 1))
      }, 50)
    } else {
      timer = setTimeout(() => {
        setDisplayedRole(currentFullRole.substring(0, displayedRole.length + 1))
      }, 100)
    }

    if (!isDeleting && displayedRole === currentFullRole) {
      timer = setTimeout(() => setIsDeleting(true), 2000) // Stay full for 2s
    } else if (isDeleting && displayedRole === '') {
      timer = setTimeout(() => {
        setIsDeleting(false)
        setRoleIndex((prev) => (prev + 1) % roles.length)
      }, 50)
    }

    return () => clearTimeout(timer)
  }, [displayedRole, isDeleting, roleIndex])

  const handleDownloadResume = () => {
    // Shoot celebratory confetti!
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#a855f7', '#3b82f6', '#ec4899', '#10b981']
    })

    // Also double burst for a highly satisfying feel
    setTimeout(() => {
      confetti({
        particleCount: 80,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#a855f7', '#3b82f6']
      })
      confetti({
        particleCount: 80,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#ec4899', '#10b981']
      })
    }, 250)
  }

  const handleScrollToContact = (e) => {
    e.preventDefault()
    const target = document.querySelector('#contact')
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background glow layers */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[35vw] h-[35vw] bg-purple-600/5 dark:bg-purple-600/10 blur-[120px] rounded-full pointer-events-none animate-pulse duration-[10000ms]" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[40vw] h-[40vw] bg-blue-600/5 dark:bg-blue-600/10 blur-[130px] rounded-full pointer-events-none animate-pulse duration-[8000ms]" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Left Side Content */}
        <motion.div 
          className="lg:col-span-7 flex flex-col items-start text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-300 text-xs font-semibold uppercase tracking-wider mb-6">
            <Award size={14} className="animate-pulse duration-3000" />
            Web Developer • Full Stack MERN Developer
          </div>

          <h2 className="text-slate-500 dark:text-gray-400 font-medium text-lg md:text-xl mb-2 tracking-wide font-sans">
            Hello, World! I am
          </h2>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 text-slate-900 dark:text-white leading-none font-sans">
            Saurav Negi
          </h1>

          {/* Dynamic Typing Title */}
          <div className="h-8 md:h-10 mb-6 flex items-center">
            <span className="text-xl md:text-3xl font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400 bg-clip-text text-transparent font-sans">
              {displayedRole}
            </span>
            <span className="w-1.5 h-6 md:h-8 bg-purple-600 dark:bg-purple-500 ml-1.5 animate-pulse inline-block" />
          </div>

          <p className="text-slate-600 dark:text-gray-400 text-base md:text-lg mb-8 max-w-xl leading-relaxed font-sans">
            Motivated Full Stack MERN Developer specializing in building responsive and highly scalable web applications. 
            Hands-on experience in engineering clean UIs, reusable React architectures, efficient server backends, and robust database models.
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <a
              href={resumeFile}
              download="Saurav_Negi_Resume.pdf"
              onClick={handleDownloadResume}
              className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-500 hover:to-blue-400 text-white font-semibold px-8 py-3.5 rounded-2xl shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] transition-all duration-300 scale-100 hover:scale-103 cursor-pointer"
            >
              <Download size={18} />
              Download Resume
            </a>
            
            <a
              href="#contact"
              onClick={handleScrollToContact}
              className="flex items-center gap-2 bg-slate-200/50 dark:bg-white/5 border border-slate-300/40 dark:border-white/10 hover:bg-slate-200/80 dark:hover:bg-white/10 text-slate-800 dark:text-gray-200 font-semibold px-8 py-3.5 rounded-2xl transition-all duration-300 cursor-pointer"
            >
              Get In Touch
              <ArrowRight size={18} className="text-purple-600 dark:text-purple-400" />
            </a>
          </div>

          {/* Short Bio Quick Contacts */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600 dark:text-gray-400">
            <a href="mailto:sauravnegi68@gmail.com" className="flex items-center gap-2 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              <Mail size={16} className="text-purple-500" />
              sauravnegi68@gmail.com
            </a>
            <a href="tel:+917500884775" className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Phone size={16} className="text-blue-500" />
              +91 7500884775
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              <GithubIcon size={16} className="text-purple-500" />
              GitHub Profile
            </a>
          </div>
        </motion.div>

        {/* Right Side Decorative Code & Interactive Graphic */}
        <motion.div 
          className="lg:col-span-5 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        >
          <div className="relative w-full max-w-[400px] aspect-square rounded-3xl bg-gradient-to-tr from-purple-600/10 to-blue-500/10 border border-slate-200/50 dark:border-white/5 p-6 flex flex-col justify-between shadow-[0_0_50px_rgba(0,0,0,0.1)] dark:shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden transition-colors duration-300">
            {/* Gloss backdrop */}
            <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-[2px] pointer-events-none" />

            {/* Glowing neon shapes floating */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl animate-float-slow" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl animate-float-medium" />

            {/* Simulated VS Code Window */}
            <div className="w-full h-full bg-[#0f1016] rounded-2xl border border-white/5 p-5 font-mono text-xs text-left select-none relative z-10 flex flex-col shadow-2xl">
              {/* Window Dots */}
              <div className="flex gap-1.5 mb-4 items-center">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="text-[10px] text-gray-500 ml-2">developer.js</span>
              </div>

              {/* Developer Code */}
              <div className="flex-1 space-y-2 overflow-hidden text-gray-300">
                <div>
                  <span className="text-pink-400">const</span> <span className="text-blue-400">developer</span> = &#123;
                </div>
                <div className="pl-4">
                  <span className="text-gray-400">name:</span> <span className="text-green-300">'Saurav Negi'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-gray-400">roles:</span> [
                  <span className="text-yellow-300">'MERN'</span>, <span className="text-yellow-300">'FullStack'</span>
                  ],
                </div>
                <div className="pl-4">
                  <span className="text-gray-400">skills:</span> &#123;
                </div>
                <div className="pl-8">
                  <span className="text-purple-300">frontend:</span> [<span className="text-green-300">'React.js'</span>, <span className="text-green-300">'Tailwind'</span>],
                </div>
                <div className="pl-8">
                  <span className="text-purple-300">backend:</span> [<span className="text-green-300">'Node'</span>, <span className="text-green-300">'Express'</span>, <span className="text-green-300">'MongoDB'</span>]
                </div>
                <div className="pl-4">&#125;,</div>
                <div className="pl-4 text-purple-400">
                  passion: <span className="text-yellow-400">()</span> =&gt; <span className="text-cyan-300">"Build elegant code"</span>
                </div>
                <div>&#125;;</div>
              </div>

              {/* Interactive Floating Tech Icons around the card */}
              <div className="absolute -right-4 top-1/4 w-12 h-12 bg-slate-50 dark:bg-[#0d0e14] border border-slate-200 dark:border-white/10 rounded-2xl flex items-center justify-center animate-float-slow shadow-[0_0_15px_rgba(139,92,246,0.15)] dark:shadow-[0_0_15px_rgba(139,92,246,0.2)] transition-colors duration-300">
                <span className="text-cyan-400 text-lg font-bold">⚛️</span>
              </div>
              <div className="absolute -left-6 bottom-1/4 w-12 h-12 bg-slate-50 dark:bg-[#0d0e14] border border-slate-200 dark:border-white/10 rounded-2xl flex items-center justify-center animate-float-medium shadow-[0_0_15px_rgba(59,130,246,0.15)] dark:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-colors duration-300">
                <span className="text-green-400 text-lg font-bold">👨‍💻</span>
              </div>
              <div className="absolute -right-2 bottom-8 w-12 h-12 bg-slate-50 dark:bg-[#0d0e14] border border-slate-200 dark:border-white/10 rounded-2xl flex items-center justify-center animate-float-fast shadow-[0_0_15px_rgba(236,72,153,0.15)] dark:shadow-[0_0_15px_rgba(236,72,153,0.2)] transition-colors duration-300">
                <span className="text-yellow-400 text-lg font-bold">⚡</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
