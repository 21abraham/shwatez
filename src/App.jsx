import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import Studio from "./pages/Studio.jsx";
import Market from "./pages/Market.jsx";


function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Studio />} />
                    <Route path="/Market" element={<Market />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
