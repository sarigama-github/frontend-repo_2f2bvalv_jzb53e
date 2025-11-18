function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-blue-200/80 leading-relaxed">
            I’m a front-end developer with a love for expressive UI. My work focuses on accessible, performant interfaces with micro-interactions that feel alive. I enjoy turning complex problems into elegant, simple experiences.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-2 text-blue-200/80 text-sm">
            <li>• React, TypeScript</li>
            <li>• Tailwind, Framer Motion</li>
            <li>• FastAPI, MongoDB</li>
            <li>• Design Systems</li>
          </ul>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop" alt="Portrait" className="h-full w-full object-cover" />
          </div>
          <div className="absolute -z-10 -inset-6 blur-3xl bg-blue-500/20 rounded-3xl" />
        </div>
      </div>
    </section>
  )
}

export default About
