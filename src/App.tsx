
import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout} from "./Layout.jsx";
import { About } from "./Pages/About.tsx"
import { LandingPage} from "./Pages/main.tsx";


function App() {
    return (
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/about" element={<About />}/>
                    {/*<Route path="/experience" element={< Experience />}/> */}

                </Route>
            </Routes>
        </Router>
    );
}


export default App
