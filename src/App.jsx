import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/App.scss";
//pages
import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";
//components
import { Header } from './components/Header.jsx';
import { Footer } from "./components/Footer.jsx";

export function App() {
  
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
