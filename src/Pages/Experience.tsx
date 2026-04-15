import { timeline } from '../siteContent'

export function Experience() {
  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <p className="section-kicker">Experience</p>
        <h1 className="section-title">A timeline you can fill with real milestones.</h1>
        <p className="section-copy max-w-2xl">
          This page is structured for actual experience, education, internships, or
          focused self-directed work. Replace each entry with specific dates,
          responsibilities, and outcomes.
        </p>
      </div>

      <div className="space-y-4">
        {timeline.map((item) => (
          <article key={`${item.period}-${item.role}`} className="timeline-item">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-teal-300">
              {item.period}
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-white">{item.role}</h2>
            <p className="mt-3 text-base leading-7 text-slate-300">{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
