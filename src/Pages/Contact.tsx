import { contactChannels } from '../siteContent'

export function Contact() {
  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <p className="section-kicker">Contact</p>
        <h1 className="section-title">Let people know how to reach you.</h1>
        <p className="section-copy max-w-2xl">
          Replace the text below with your real contact details, preferred response
          times, availability, and the kind of work you want to attract.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {contactChannels.map((channel) => (
          <article key={channel.label} className="card">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-400">
              {channel.label}
            </p>
            <p className="mt-4 text-lg text-white">{channel.value}</p>
          </article>
        ))}
      </div>

      <article className="card space-y-4">
        <h2 className="text-2xl font-semibold text-white">Message prompt</h2>
        <p className="section-copy">
          You can replace this block with a short call-to-action such as:
          "I&apos;m available for frontend roles, product engineering work, and
          selected freelance projects."
        </p>
      </article>
    </section>
  )
}
