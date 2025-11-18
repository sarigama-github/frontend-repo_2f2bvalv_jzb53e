import { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      subject: form.get('subject') || null,
      message: form.get('message'),
      tags: ['portfolio']
    }

    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail ? JSON.stringify(data.detail) : 'Failed to send')
      setStatus({ ok: true, msg: 'Message sent! Thank you.' })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ ok: false, msg: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Let’s work together</h2>
        <form onSubmit={handleSubmit} className="grid gap-4 bg-white/5 border border-white/10 backdrop-blur rounded-2xl p-6">
          <div className="grid md:grid-cols-2 gap-4">
            <input name="name" required placeholder="Your name" className="px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input name="email" type="email" required placeholder="Your email" className="px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <input name="subject" placeholder="Subject (optional)" className="px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <textarea name="message" required rows="5" placeholder="Your message" className="px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <div className="flex items-center gap-3">
            <button disabled={loading} className="px-5 py-3 rounded-xl bg-blue-500 text-white font-semibold disabled:opacity-60">
              {loading ? 'Sending...' : 'Send Message'}
            </button>
            {status && (
              <span className={`${status.ok ? 'text-green-300' : 'text-red-300'} text-sm`}>
                {status.msg}
              </span>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
