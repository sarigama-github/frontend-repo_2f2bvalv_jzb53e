function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About</h2>
          <p className="text-blue-200/80 leading-relaxed">
            I build interfaces that balance brand personality with usability. My toolkit spans design systems, front‑end architecture, and motion design.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-2 text-blue-200/80 text-sm">
            <span className="px-3 py-2 rounded-xl bg-white/5 border border-white/10">React / TypeScript</span>
            <span className="px-3 py-2 rounded-xl bg-white/5 border border-white/10">Tailwind / Motion</span>
            <span className="px-3 py-2 rounded-xl bg-white/5 border border-white/10">FastAPI / MongoDB</span>
            <span className="px-3 py-2 rounded-xl bg-white/5 border border-white/10">Design Systems</span>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
            <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop" alt="Portrait" className="h-full w-full object-cover" />
          </div>
          <div className="absolute -z-10 -inset-6 blur-3xl bg-gradient-to-tr from-fuchsia-500/20 to-blue-500/20 rounded-3xl" />
        </div>
      </div>
    </section>
  )
}

export default About
