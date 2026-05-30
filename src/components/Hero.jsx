import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Download, ArrowRight, Phone, Mail, Award } from "lucide-react";
import confetti from "canvas-confetti";
import resumeFile from "../assets/Saurav Resume 1.pdf";
import profileImg from "../assets/saurav1.jpeg";

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
);

const roles = [
  "Full Stack MERN Developer",
  "B.Tech Computer Science Graduate",
  "Passionate Problem Solver",
  "UI/UX Enthusiast",
];

const particlesData = [
  { top: "12%", left: "8%", size: "4px", color: "bg-purple-500/30 dark:bg-purple-400/40", factor: 0.05 },
  { top: "25%", left: "45%", size: "3px", color: "bg-pink-500/30 dark:bg-pink-400/40", factor: -0.03 },
  { top: "18%", left: "85%", size: "5px", color: "bg-blue-500/30 dark:bg-blue-400/40", factor: 0.07 },
  { top: "45%", left: "80%", size: "3px", color: "bg-purple-400/30 dark:bg-purple-300/40", factor: -0.06 },
  { top: "70%", left: "10%", size: "5px", color: "bg-indigo-500/30 dark:bg-indigo-400/40", factor: 0.04 },
  { top: "85%", left: "38%", size: "3px", color: "bg-pink-400/30 dark:bg-pink-300/40", factor: -0.05 },
  { top: "62%", left: "75%", size: "4px", color: "bg-cyan-500/30 dark:bg-cyan-400/40", factor: 0.06 },
  { top: "80%", left: "92%", size: "3px", color: "bg-blue-400/30 dark:bg-blue-300/40", factor: -0.03 },
  { top: "35%", left: "18%", size: "3px", color: "bg-violet-400/30 dark:bg-violet-300/40", factor: 0.08 },
  { top: "50%", left: "28%", size: "3px", color: "bg-fuchsia-400/30 dark:bg-fuchsia-300/40", factor: -0.04 },
  { top: "15%", left: "60%", size: "4px", color: "bg-purple-500/30 dark:bg-purple-400/40", factor: 0.03 },
  { top: "78%", left: "62%", size: "3px", color: "bg-blue-500/30 dark:bg-blue-400/40", factor: -0.04 },
];

const InteractiveParticle = ({ top, left, size, color, factor, smoothX, smoothY }) => {
  const x = useTransform(smoothX, (val) => val * factor);
  const y = useTransform(smoothY, (val) => val * factor);

  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none ${color} blur-[0.5px]`}
      style={{
        top,
        left,
        width: size,
        height: size,
        x,
        y,
      }}
    />
  );
};

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Mouse position hooks for parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 100 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX - window.innerWidth / 2;
      const y = e.clientY - window.innerHeight / 2;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const glow1X = useTransform(smoothX, (x) => x * 0.02);
  const glow1Y = useTransform(smoothY, (y) => y * 0.02);
  const glow2X = useTransform(smoothX, (x) => x * -0.02);
  const glow2Y = useTransform(smoothY, (y) => y * -0.02);

  // Typewriter effect
  useEffect(() => {
    let timer;
    const currentFullRole = roles[roleIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayedRole(
          currentFullRole.substring(0, displayedRole.length - 1),
        );
      }, 50);
    } else {
      timer = setTimeout(() => {
        setDisplayedRole(
          currentFullRole.substring(0, displayedRole.length + 1),
        );
      }, 100);
    }

    if (!isDeleting && displayedRole === currentFullRole) {
      timer = setTimeout(() => setIsDeleting(true), 2000); // Stay full for 2s
    } else if (isDeleting && displayedRole === "") {
      timer = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 50);
    }

    return () => clearTimeout(timer);
  }, [displayedRole, isDeleting, roleIndex]);

  const handleDownloadResume = () => {
    // Shoot celebratory confetti!
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#a855f7", "#3b82f6", "#ec4899", "#10b981"],
    });

    // Also double burst for a highly satisfying feel
    setTimeout(() => {
      confetti({
        particleCount: 80,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#a855f7", "#3b82f6"],
      });
      confetti({
        particleCount: 80,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#ec4899", "#10b981"],
      });
    }, 250);
  };

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const target = document.querySelector("#contact");
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background glow layers */}
      <motion.div
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[35vw] h-[35vw] bg-purple-600/5 dark:bg-purple-600/10 blur-[120px] rounded-full pointer-events-none animate-pulse duration-[10000ms]"
        style={{ x: glow1X, y: glow1Y }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[40vw] h-[40vw] bg-blue-600/5 dark:bg-blue-600/10 blur-[130px] rounded-full pointer-events-none animate-pulse duration-[8000ms]"
        style={{ x: glow2X, y: glow2Y }}
      />

      {/* Interactive Cursor-Reactive Cosmic Particles */}
      {particlesData.map((p, idx) => (
        <InteractiveParticle
          key={idx}
          top={p.top}
          left={p.left}
          size={p.size}
          color={p.color}
          factor={p.factor}
          smoothX={smoothX}
          smoothY={smoothY}
        />
      ))}

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Left Side Content */}
        <motion.div
          className="lg:col-span-7 flex flex-col items-start text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
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
            Motivated Full Stack MERN Developer specializing in building
            responsive and highly scalable web applications. Hands-on experience
            in engineering clean UIs, reusable React architectures, efficient
            server backends, and robust database models.
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
              <ArrowRight
                size={18}
                className="text-purple-600 dark:text-purple-400"
              />
            </a>
          </div>

          {/* Short Bio Quick Contacts */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600 dark:text-gray-400">
            <a
              href="mailto:sauravnegi68@gmail.com"
              className="flex items-center gap-2 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              <Mail size={16} className="text-purple-500" />
              sauravnegi68@gmail.com
            </a>
            <a
              href="tel:+917500884775"
              className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Phone size={16} className="text-blue-500" />
              +91 7500884775
            </a>
            <a
              href="https://github.com/sauravnegi100"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              <GithubIcon size={16} className="text-purple-500" />
              GitHub Profile
            </a>
          </div>
        </motion.div>

        {/* Right Side Profile Image with SVG Blended Edges */}
        <motion.div
          className="lg:col-span-5 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <div className="relative w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[500px] xl:max-w-[560px] aspect-[4/5] group flex justify-center items-center">
            {/* Glowing background blob behind the image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 dark:from-purple-500/15 dark:to-blue-500/15 rounded-full blur-3xl pointer-events-none" />

            {/* Image Wrapper with Rounded Corners and Fading Edges using SVG Mask */}
            <div
              className="relative w-full h-full select-none transition-transform duration-500 group-hover:scale-[1.01]"
              style={{
                maskImage: "url(#smooth-edge-mask)",
                WebkitMaskImage: "url(#smooth-edge-mask)",
              }}
            >
              <img
                src={profileImg}
                alt="Saurav Negi"
                className="w-full h-full object-cover select-none"
              />
            </div>

            {/* Subtle Interactive Floating Tech Icons */}
            <div className="absolute -right-4 top-1/4 w-12 h-12 bg-white/20 dark:bg-black/35 backdrop-blur-md border border-white/10 dark:border-white/5 rounded-2xl flex items-center justify-center animate-float-slow shadow-lg transition-all duration-300 hover:scale-110 z-20">
              <span className="text-cyan-400 text-lg font-bold">⚛️</span>
            </div>
            <div className="absolute -left-6 bottom-1/4 w-12 h-12 bg-white/20 dark:bg-black/35 backdrop-blur-md border border-white/10 dark:border-white/5 rounded-2xl flex items-center justify-center animate-float-medium shadow-lg transition-all duration-300 hover:scale-110 z-20">
              <span className="text-green-400 text-lg font-bold">👨‍💻</span>
            </div>
            <div className="absolute -right-2 bottom-8 w-12 h-12 bg-white/20 dark:bg-black/35 backdrop-blur-md border border-white/10 dark:border-white/5 rounded-2xl flex items-center justify-center animate-float-fast shadow-lg transition-all duration-300 hover:scale-110 z-20">
              <span className="text-yellow-400 text-lg font-bold">⚡</span>
            </div>
          </div>
        </motion.div>

        {/* Hidden SVG Definition for the Blending Mask */}
        <div className="absolute overflow-hidden" style={{ width: 0, height: 0, opacity: 0 }}>
          <svg>
            <defs>
              <filter id="smooth-edge-blur" x="0" y="0" width="1" height="1" filterUnits="objectBoundingBox">
                <feGaussianBlur stdDeviation="0.05" />
              </filter>
              <mask id="smooth-edge-mask" maskContentUnits="objectBoundingBox">
                <rect width="1" height="1" fill="black" />
                <rect
                  x="0.06"
                  y="0.06"
                  width="0.88"
                  height="0.88"
                  rx="0.08"
                  ry="0.08"
                  fill="white"
                  filter="url(#smooth-edge-blur)"
                />
              </mask>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
}
