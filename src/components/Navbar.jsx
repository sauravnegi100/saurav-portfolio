import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Cpu, Sun, Moon } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About & Education', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
]

export default function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      
      // Determine active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1))
      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    setIsOpen(false)
    const target = document.querySelector(href)
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      })
    }
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-4 bg-white/80 dark:bg-[#070709]/75 backdrop-blur-md border-b border-slate-200/50 dark:border-white/5' 
          : 'py-6 bg-transparent'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleLinkClick(e, '#home')}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-blue-500 flex items-center justify-center text-white font-bold text-lg shadow-[0_0_15px_rgba(139,92,246,0.3)] group-hover:scale-105 transition-transform duration-300">
            SN
          </div>
          <span className="font-sans font-bold text-xl tracking-tight bg-gradient-to-r from-slate-900 via-purple-700 to-blue-600 dark:from-white dark:via-gray-100 dark:to-purple-400 bg-clip-text text-transparent transition-colors duration-300">
            Saurav Negi
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-200/40 dark:bg-white/5 px-4 py-1.5 rounded-full border border-slate-200/20 dark:border-white/5 transition-colors duration-300">
          {navLinks.map((link) => {
            const id = link.href.substring(1)
            const isActive = activeSection === id
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 cursor-pointer ${
                  isActive ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-gray-200'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-500/10 dark:from-purple-600/30 dark:to-blue-500/30 rounded-full border border-purple-500/20 dark:border-purple-500/30 -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {link.name}
              </a>
            )
          })}
        </nav>

        {/* Theme Toggle */}
        <div className="hidden md:flex items-center gap-4">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-yellow-400 hover:scale-105 cursor-pointer transition-all duration-200 flex items-center justify-center"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <motion.div initial={{ rotate: -90 }} animate={{ rotate: 0 }} transition={{ duration: 0.3 }}>
                <Sun size={18} className="text-amber-400 fill-amber-400/20" />
              </motion.div>
            ) : (
              <motion.div initial={{ rotate: 90 }} animate={{ rotate: 0 }} transition={{ duration: 0.3 }}>
                <Moon size={18} className="text-purple-600 fill-purple-600/20" />
              </motion.div>
            )}
          </button>

        </div>

        {/* Mobile menu trigger + theme toggle row */}
        <div className="flex md:hidden items-center gap-2">
          {/* Mobile Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-yellow-400 cursor-pointer transition-all duration-200 flex items-center justify-center"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-purple-600" />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-b border-slate-200/50 dark:border-white/5 bg-white/95 dark:bg-[#070709]/95 backdrop-blur-lg w-full absolute top-full left-0 overflow-hidden shadow-lg transition-colors duration-300"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => {
                const id = link.href.substring(1)
                const isActive = activeSection === id
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`flex items-center justify-between py-2.5 px-4 rounded-xl text-base font-semibold transition-all ${
                      isActive 
                        ? 'text-purple-600 dark:text-white bg-purple-500/10 dark:bg-purple-600/20 border border-purple-500/20' 
                        : 'text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-gray-200'
                    }`}
                  >
                    <span>{link.name}</span>
                    <Cpu size={16} className={isActive ? 'text-purple-500 dark:text-purple-400' : 'text-slate-400 dark:text-gray-600'} />
                  </a>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
