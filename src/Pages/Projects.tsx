import { featuredProjects } from '../siteContent'
import { GitHubCalendar } from 'react-github-calendar'

export function Projects() {
  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <p className="section-kicker">Projects</p>
        <h1 className="section-title">Show the work that best represents you.</h1>
        <p className="section-copy max-w-2xl">
          These cards are intentionally written as placeholders. Swap in your actual
          projects, links, screenshots, and results once you decide what you want to
          highlight.
        </p>
      </div>
        <article className="card">
            <h2 className="text-2xl font-semibold text-white">GitHub activity</h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
                This can stay as-is or be replaced with your own contribution, stats, or
                a custom snapshot of what you have been building recently.
            </p>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-white/10 bg-slate-950/80 p-4 text-white">
                <GitHubCalendar
                    username="el9njo"
                    theme={{
                        dark: ['#1f2937', '#0f766e', '#14b8a6', '#2dd4bf', '#99f6e4'],
                    }}
                    showWeekdayLabels
                />
            </div>
        </article>
      <div className="grid gap-5 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <article key={project.title} className="card card-glow">
            <p className="text-sm uppercase tracking-[0.24em] text-amber-300">
              {project.type}
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-white">{project.title}</h2>
            <p className="mt-4 text-base leading-7 text-slate-300">{project.summary}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-6 border-t border-white/10 pt-6 text-sm leading-6 text-slate-400">
              {project.highlight}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
