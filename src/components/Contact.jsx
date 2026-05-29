import { motion } from 'framer-motion'
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'

const GithubIcon = ({ size = 20, className = '' }) => (
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

const LinkedinIcon = ({ size = 20, className = '' }) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const contactLinks = [
  {
    label: 'Email',
    value: 'sauravnegi68@gmail.com',
    href: 'mailto:sauravnegi68@gmail.com',
    icon: Mail,
    color: 'purple'
  },
  {
    label: 'Phone',
    value: '+91 7500884775',
    href: 'tel:+917500884775',
    icon: Phone,
    color: 'blue'
  },
  {
    label: 'WhatsApp',
    value: 'Chat on WhatsApp',
    href: 'https://wa.me/917500884775',
    icon: MessageCircle,
    color: 'green',
    featured: true
  },
  {
    label: 'Location',
    value: 'Kotdwara, Uttarakhand, India',
    href: null,
    icon: MapPin,
    color: 'pink'
  }
]

const colorClasses = {
  purple: 'text-purple-500 dark:text-purple-400 border-purple-500/20 bg-purple-500/10 hover:border-purple-500/40 hover:bg-purple-500/5',
  blue: 'text-blue-500 dark:text-blue-400 border-blue-500/20 bg-blue-500/10 hover:border-blue-500/40 hover:bg-blue-500/5',
  green: 'text-emerald-500 dark:text-emerald-400 border-emerald-500/20 bg-emerald-500/10 hover:border-emerald-500/40 hover:bg-emerald-500/5',
  pink: 'text-pink-500 dark:text-pink-400 border-pink-500/20 bg-pink-500/10'
}

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden border-t border-slate-200/50 dark:border-white/5">
      <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] bg-emerald-500/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-0 w-[40vw] h-[40vw] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <motion.p
            className="text-base font-semibold uppercase tracking-wider text-purple-500 dark:text-purple-400 mb-2 font-sans"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Contact
          </motion.p>
          <motion.h2
            className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white font-sans"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Let's Build Together
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        <motion.div
          className="glass-panel rounded-3xl p-6 md:p-8 border border-slate-200/50 dark:border-white/5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8 text-center">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-sans">
              Direct Contact Information
            </h3>
            <p className="text-slate-600 dark:text-gray-400 text-sm md:text-base leading-relaxed mt-3 font-sans">
              I am actively looking for full-time MERN Stack / React Developer opportunities and available for immediate joining.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {contactLinks.map((item) => {
              const Icon = item.icon
              const content = (
                <>
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${colorClasses[item.color]}`}>
                    <Icon size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-500 dark:text-gray-500 font-semibold font-sans uppercase">
                      {item.label}
                    </p>
                    <p className="text-sm md:text-base font-semibold text-slate-800 dark:text-gray-200 font-sans break-words">
                      {item.value}
                    </p>
                  </div>
                </>
              )

              const className = `flex items-center gap-4 p-4 rounded-2xl bg-slate-100/80 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 transition-all duration-300 group ${item.featured ? 'md:col-span-2 bg-emerald-500/10 dark:bg-emerald-500/5 border-emerald-500/20' : ''}`

              return item.href ? (
                <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined} className={className}>
                  {content}
                </a>
              ) : (
                <div key={item.label} className={className}>
                  {content}
                </div>
              )
            })}
          </div>

          <div className="pt-8 mt-8 border-t border-slate-200/50 dark:border-white/5 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-purple-500/10 border border-slate-200 dark:border-white/10 hover:border-purple-500/30 flex items-center justify-center text-slate-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 cursor-pointer"
              aria-label="GitHub profile"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-blue-500/10 border border-slate-200 dark:border-white/10 hover:border-blue-500/30 flex items-center justify-center text-slate-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 cursor-pointer"
              aria-label="LinkedIn profile"
            >
              <LinkedinIcon size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
