import { Link } from 'react-router-dom'
import { featuredProjects, strengths } from '../siteContent'

export function LandingPage() {
  return (
    <section className="space-y-10">
      <div className="hero-panel">
        <div className="max-w-3xl space-y-6">
          <p className="section-kicker">Developer Portfolio</p>
          <h1 className="text-5xl font-semibold tracking-tight text-white md:text-7xl">
            Eirik builds digital products with clean code and visible intent.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
            Replace this introduction with your own positioning statement. Keep it
            specific to the work you want, the stack you use, and the kind of problems
            you enjoy solving.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/projects" className="button-primary">
              View projects
            </Link>
            <Link to="/contact" className="button-secondary">
              Contact details
            </Link>
          </div>
        </div>

        <div className="card grid gap-3">
          <p className="text-sm uppercase tracking-[0.24em] text-amber-300">Focus</p>
          {strengths.slice(0, 3).map((strength) => (
            <div key={strength} className="rounded-2xl border border-white/10 bg-white/4 px-4 py-3 text-left text-slate-200">
              {strength}
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <article className="card">
          <p className="section-kicker">Snapshot</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">What this site now includes</h2>
          <p className="mt-4 text-base leading-7 text-slate-300">
            A shared navigation bar, dedicated subpages, and placeholder sections for
            your story, your work, and your contact details. You can now personalize
            content without changing the site structure first.
          </p>
        </article>

        <article className="card">
          <p className="section-kicker">Featured work</p>
          <div className="mt-4 space-y-4">
            {featuredProjects.slice(0, 2).map((project) => (
              <div key={project.title} className="rounded-3xl border border-white/10 bg-white/4 p-5 text-left">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-2 text-sm uppercase tracking-[0.22em] text-slate-400">
                  {project.type}
                </p>
                <p className="mt-4 text-base leading-7 text-slate-300">{project.summary}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}
