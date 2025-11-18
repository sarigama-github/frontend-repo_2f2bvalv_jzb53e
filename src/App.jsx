import { useCallback, useMemo, useState, useEffect } from 'react'
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

  // Scroll progress for a subtle top bar
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY
      const height = document.documentElement.scrollHeight - window.innerHeight
      setProgress(height > 0 ? scrolled / height : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = useMemo(() => ([
    { id: 'projects', label: 'Work' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ]), [])

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-fuchsia-400/30 selection:text-white">
      {/* Scroll progress */}
      <div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-fuchsia-400 via-blue-400 to-emerald-400 z-[60]" style={{ width: `${Math.max(2, progress * 100)}%` }} />

      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50">
        <div className="mx-auto max-w-6xl px-6 py-3 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <span className="inline-grid place-items-center h-9 w-9 rounded-xl bg-white text-slate-900 font-black tracking-tight group-hover:rotate-6 transition-transform">
              <span>Y</span>
            </span>
            <span className="font-medium tracking-tight text-blue-100/90 group-hover:text-white transition-colors">Your Name</span>
          </a>
          <nav className="flex items-center gap-1 bg-white/5 border border-white/10 backdrop-blur rounded-full p-1">
            {navItems.map(item => (
              <a key={item.id} href={`#${item.id}`} onClick={handleAnchor}
                 className="px-3 md:px-4 py-2 rounded-full text-sm text-blue-200/80 hover:text-white hover:bg-white/10 transition">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="pt-20">
        <Hero onScrollTo={handleAnchor} />
        <Projects />
        <About />
        <Contact />
      </main>

      <footer className="py-10 text-center text-blue-200/70">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-center gap-3">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Open for collaborations</span>
          </div>
          <div className="mt-2 opacity-60">© {new Date().getFullYear()} Your Name</div>
        </div>
      </footer>
    </div>
  )
}

export default App
