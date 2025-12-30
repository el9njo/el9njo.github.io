
import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout} from "./Layout.jsx";
import { About } from "./Pages/About.tsx"


function App() {
    return (
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<About />} />

                </Route>
            </Routes>
        </Router>
    );
}


export default App
