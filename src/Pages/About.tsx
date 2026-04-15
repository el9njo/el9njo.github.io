import { strengths } from '../siteContent'

export function About() {
  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <p className="section-kicker">About</p>
        <h1 className="section-title">Present your story with more than a one-line bio.</h1>
        <p className="section-copy max-w-3xl">
          Replace this section with a focused introduction: what kind of developer you
          are, what you care about building, and what makes your approach different.
          Keep it concrete and avoid generic claims.
        </p>
      </div>

      <div className="grid gap-5">
        <article className="card">
          <h2 className="text-2xl font-semibold text-white">Working style</h2>
          <p className="mt-4 text-base leading-7 text-slate-300">
            Use this space to describe how you work: maybe you enjoy shipping refined
            interfaces, improving developer workflows, or combining product thinking
            with implementation detail.
          </p>

          <div className="mt-8 grid gap-3">
            {strengths.map((strength) => (
              <div key={strength} className="rounded-2xl border border-white/10 bg-white/4 px-4 py-3 text-left text-slate-200">
                {strength}
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}
