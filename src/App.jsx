import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/App.scss";
//pages
import { Home } from "./pages/Home.jsx";
import { Collection } from "./pages/Collection.jsx";
//components
import { Header } from "./components/common/Header.jsx";
import { Footer } from "./components/common/Footer.jsx";

export function App() {

  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <Home />
              }
            />
            <Route
              path="/home"
              element={
                <Home />
              }
            />
            <Route path="/collection" element={<Collection />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}
