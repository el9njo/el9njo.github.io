import { NavLink, Outlet } from 'react-router-dom'
import { navLinks } from './siteContent'

export function Layout() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(45,212,191,0.22),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(251,191,36,0.16),_transparent_24%),linear-gradient(180deg,_#07111f_0%,_#0f172a_45%,_#020617_100%)] text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 py-6 md:px-6 lg:px-8">
        <header className="sticky top-4 z-20 mb-8">
          <div className="glass-panel flex flex-col gap-4 px-5 py-4 md:flex-row md:items-center md:justify-between">
            <NavLink to="/" className="text-left">
              <p className="text-xl font-semibold tracking-tight text-white">Hi! I'm Eirik</p>
            </NavLink>

            <nav className="flex flex-wrap gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `nav-pill ${isActive ? 'nav-pill-active' : 'nav-pill-idle'}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </div>
        </header>

        <main className="flex-1 pb-10">
          <Outlet />
        </main>

        <footer className="border-t border-white/10 py-6 text-sm text-slate-400">
          <p>Pls hire me ;)</p>
        </footer>
      </div>
    </div>
  )
}
