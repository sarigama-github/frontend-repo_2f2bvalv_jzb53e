import { motion } from 'framer-motion'

function Hero({ onScrollTo }) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Gradient background with glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950" />
      <div className="absolute -inset-[30%] opacity-40 blur-3xl" style={{
        background:
          'radial-gradient(600px 300px at 50% 0%, rgba(99,102,241,0.25), transparent), radial-gradient(400px 300px at 0% 100%, rgba(59,130,246,0.25), transparent), radial-gradient(400px 300px at 100% 100%, rgba(236,72,153,0.25), transparent)'
      }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-sm tracking-[0.35em] uppercase text-blue-300/80">Portfolio</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-white to-pink-300 tracking-tight">
          Creative Developer
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mt-6 text-lg md:text-xl text-blue-200/80 max-w-2xl mx-auto">
          I design and build playful, performant experiences on the web — blending thoughtful UX with delightful details.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }} className="mt-10 flex items-center justify-center gap-4">
          <a href="#projects" onClick={onScrollTo} className="px-5 py-3 rounded-xl bg-blue-500 text-white font-semibold shadow-lg shadow-blue-500/30 hover:-translate-y-0.5 transition-all">
            See Work
          </a>
          <a href="#contact" onClick={onScrollTo} className="px-5 py-3 rounded-xl bg-white/10 text-white backdrop-blur border border-white/20 hover:bg-white/20 transition">
            Contact
          </a>
        </motion.div>
      </div>

      {/* Floating shapes */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div initial={{ y: 0 }} animate={{ y: [-10, 10, -10] }} transition={{ duration: 8, repeat: Infinity }} className="absolute top-20 left-10 h-24 w-24 rounded-3xl bg-blue-500/20 blur-xl" />
        <motion.div initial={{ y: 0 }} animate={{ y: [10, -10, 10] }} transition={{ duration: 7, repeat: Infinity }} className="absolute bottom-24 right-10 h-32 w-32 rounded-full bg-pink-500/20 blur-xl" />
      </div>
    </section>
  )
}

export default Hero
