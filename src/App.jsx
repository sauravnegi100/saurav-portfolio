import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark'
  })

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-800 dark:bg-[#070709] dark:text-gray-200 transition-colors duration-300 overflow-x-hidden flex flex-col font-sans select-none">
      
      {/* Decorative Floating Cosmic Particles */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Subtle Tech Grids */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        {/* Orbiting / floating particles */}
        <div className="absolute top-[10%] left-[8%] w-1.5 h-1.5 bg-purple-500 rounded-full opacity-20 dark:opacity-30 animate-float-slow" />
        <div className="absolute top-[35%] right-[12%] w-2 h-2 bg-blue-500 rounded-full opacity-15 dark:opacity-20 animate-float-medium" />
        <div className="absolute top-[65%] left-[15%] w-1 h-1 bg-pink-500 rounded-full opacity-25 dark:opacity-35 animate-float-fast" />
        <div className="absolute bottom-[20%] right-[10%] w-2.5 h-2.5 bg-purple-500 rounded-full opacity-15 dark:opacity-20 animate-float-slow" />
      </div>

      {/* Floating Glass Navigation Bar */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Container */}
      <main className="flex-1 relative z-10">
        <Hero />
        
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </main>

      {/* Premium Footer */}
      <footer className="py-12 border-t border-slate-200/50 dark:border-white/5 bg-slate-100/80 dark:bg-[#040406]/90 transition-colors duration-300 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-500 font-sans">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-blue-500 flex items-center justify-center text-white font-bold text-sm shadow-[0_0_10px_rgba(139,92,246,0.3)]">
              SN
            </div>
            <span>© {new Date().getFullYear()} Saurav Negi. All rights reserved.</span>
          </div>
          
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-xs">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
              Available for Hire
            </span>
            <span className="text-gray-300 dark:text-gray-700">|</span>
            <span className="font-mono text-[10px]">Built with React & Tailwind CSS v4</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
