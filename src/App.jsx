import { useCallback } from 'react'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  const handleAnchor = useCallback((e) => {
    if (e) e.preventDefault()
    const href = e?.currentTarget?.getAttribute('href')
    if (!href) return
    const id = href.replace('#','')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Sticky nav */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur border-b border-white/10 bg-slate-900/60">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight">Your Name</a>
          <nav className="flex items-center gap-6 text-sm text-blue-200/80">
            <a href="#projects" onClick={handleAnchor} className="hover:text-white">Work</a>
            <a href="#about" onClick={handleAnchor} className="hover:text-white">About</a>
            <a href="#contact" onClick={handleAnchor} className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main className="pt-14">
        <Hero onScrollTo={handleAnchor} />
        <Projects />
        <About />
        <Contact />
      </main>

      <footer className="py-10 text-center text-blue-200/70">
        © {new Date().getFullYear()} Your Name — Crafted with care
      </footer>
    </div>
  )
}

export default App
