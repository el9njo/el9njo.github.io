import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './Layout'
import { About } from './Pages/About'
import { Contact } from './Pages/Contact'
import { Experience } from './Pages/Experience'
import { LandingPage } from './Pages/main'
import { Projects } from './Pages/Projects'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
