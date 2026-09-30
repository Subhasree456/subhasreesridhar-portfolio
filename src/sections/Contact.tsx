import { useState, type FormEvent } from 'react'
import { ArrowRight, ArrowUpRight, GitHub, LinkedIn, Mail, Phone } from '../components/Icons'
import { links } from '../data/profile'

type Status = 'idle' | 'sending' | 'sent' | 'error'

const field =
  'w-full border-0 border-b border-line-2 bg-transparent px-0 py-3 text-[1.05rem] text-paper placeholder:text-dim transition-colors duration-300 focus:border-lime focus:outline-none focus-visible:outline-none'

export function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('sending')
    try {
      const body = new URLSearchParams(new FormData(form) as unknown as Record<string, string>).toString()
      // Posts to the static skeleton so Netlify's form handler receives it.
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      })
      if (!res.ok) throw new Error(`Status ${res.status}`)
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  const channels = [
    { label: 'Phone', value: links.phoneDisplay, href: links.phoneHref, icon: <Phone />, external: false },
    { label: 'Email', value: links.email, href: `mailto:${links.email}`, icon: <Mail />, external: false },
    { label: 'GitHub', value: `github.com/${links.githubHandle}`, href: links.github, icon: <GitHub />, external: true },
    { label: 'LinkedIn', value: 'Subhasree Sridhar', href: links.linkedin, icon: <LinkedIn />, external: true },
  ]

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative overflow-hidden py-24 md:py-36">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="container-x relative">
        <p className="reveal label flex items-center gap-3 border-t border-line pt-6">
          <span className="text-lime">(07)</span> Contact
        </p>
        <h2
          id="contact-title"
          className="reveal mt-10 text-[clamp(2.7rem,9.5vw,10rem)] font-bold uppercase leading-[0.84] tracking-[-0.055em]"
        >
          Let's build
          <br />
          something <span className="font-serif font-normal normal-case italic tracking-[-0.02em] text-lime">useful.</span>
        </h2>
        <p className="reveal mt-8 max-w-xl text-lg leading-relaxed text-mute">
          Open to opportunities, collaborations, and meaningful technical projects.
        </p>

        <div className="mt-16 grid gap-16 lg:grid-cols-12 lg:gap-12">
          <ul className="reveal border-t border-line lg:col-span-5">
            {channels.map((c) => (
              <li key={c.label} className="border-b border-line">
                <a
                  href={c.href}
                  {...(c.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                  className="group flex items-center justify-between gap-4 py-5"
                >
                  <span className="flex min-w-0 items-center gap-4">
                    <span className="text-dim transition-colors group-hover:text-lime">{c.icon}</span>
                    <span className="min-w-0">
                      <span className="label block text-dim">{c.label}</span>
                      <span className="mt-1 block truncate text-paper">{c.value}</span>
                    </span>
                  </span>
                  <ArrowUpRight className="size-4 shrink-0 text-mute transition-transform duration-300 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-paper" />
                </a>
              </li>
            ))}
          </ul>

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="reveal border border-line bg-ink-2/80 p-6 backdrop-blur-sm sm:p-10 lg:col-span-7"
            aria-describedby="form-status"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Leave this empty: <input name="bot-field" tabIndex={-1} autoComplete="off" />
              </label>
            </p>
            <p className="label text-dim">Send a message</p>
            <div className="mt-6 grid gap-8 sm:grid-cols-2">
              <div>
                <label htmlFor="c-name" className="label">
                  Name
                </label>
                <input id="c-name" name="name" type="text" autoComplete="name" required placeholder="Your name" className={field} />
              </div>
              <div>
                <label htmlFor="c-email" className="label">
                  Email
                </label>
                <input
                  id="c-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="you@example.com"
                  className={field}
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="c-message" className="label">
                  Message
                </label>
                <textarea
                  id="c-message"
                  name="message"
                  required
                  rows={5}
                  placeholder="What would you like to talk about?"
                  className={`${field} resize-y`}
                />
              </div>
            </div>
            <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <p id="form-status" role="status" aria-live="polite" className="text-sm text-mute">
                {status === 'sent' && <span className="text-lime">Thank you — your message has been sent.</span>}
                {status === 'error' && (
                  <span className="text-paper">
                    Something went wrong. Please try again or email{' '}
                    <a className="underline" href={`mailto:${links.email}`}>
                      {links.email}
                    </a>
                    .
                  </span>
                )}
                {status === 'sending' && 'Sending…'}
              </p>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="group inline-flex h-12 items-center justify-center gap-2.5 bg-lime px-7 font-mono text-[0.72rem] font-medium uppercase tracking-[0.14em] text-ink transition-colors duration-300 hover:bg-paper disabled:opacity-60"
              >
                {status === 'sending' ? 'Sending' : 'Send Message'}
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
