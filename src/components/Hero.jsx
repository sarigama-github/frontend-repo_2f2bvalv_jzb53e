import { motion } from 'framer-motion'

function Hero({ onScrollTo }) {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      {/* Deep gradient + noise texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]" style={{
        backgroundImage: 'url(https://grainy-gradients.vercel.app/noise.svg)'
      }} />

      {/* Aurora ribbons */}
      <div className="absolute -inset-[30%] opacity-60 blur-3xl" style={{
        background: 'conic-gradient(from 90deg at 70% 40%, rgba(99,102,241,0.25), transparent 30%), conic-gradient(from 200deg at 30% 80%, rgba(236,72,153,0.25), transparent 40%)'
      }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[11px] uppercase tracking-[0.28em] text-blue-200/80">
          Independent Developer
          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-5 text-5xl md:text-7xl font-black text-white tracking-tight">
          Crafting playful interfaces for serious products
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="mt-6 text-lg md:text-xl text-blue-200/80 max-w-2xl mx-auto">
          I design, build, and ship web experiences with a focus on clarity, performance, and tasteful motion.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="mt-10 flex items-center justify-center gap-3">
          <a href="#projects" onClick={onScrollTo} className="px-5 py-3 rounded-xl bg-gradient-to-br from-fuchsia-500 to-blue-500 text-white font-semibold shadow-lg shadow-fuchsia-500/20 hover:-translate-y-0.5 transition-all">
            See Work
          </a>
          <a href="#contact" onClick={onScrollTo} className="px-5 py-3 rounded-xl bg-white/10 text-white backdrop-blur border border-white/10 hover:bg-white/20 transition">
            Contact
          </a>
        </motion.div>
      </div>

      {/* Floating cards for personality */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div initial={{ y: 0, rotate: -3 }} animate={{ y: [-8, 8, -8] }} transition={{ duration: 9, repeat: Infinity }} className="absolute top-24 left-6 md:left-16 rounded-2xl border border-white/10 bg-white/10 backdrop-blur px-3 py-2 text-xs text-white/90">
          • Micro-interactions
        </motion.div>
        <motion.div initial={{ y: 0, rotate: 4 }} animate={{ y: [10, -10, 10] }} transition={{ duration: 8, repeat: Infinity }} className="absolute bottom-24 right-6 md:right-16 rounded-2xl border border-white/10 bg-white/10 backdrop-blur px-3 py-2 text-xs text-white/90">
          • Accessibility
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
