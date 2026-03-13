import { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark-mode" : ""}>

      <div className="container">

        <button
          className="toggle-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "Toggle Light Mode" : "Toggle Dark Mode"}
        </button>

        <Header />
        <About />
        <Skills />
        <Education />
        <Contact />

        <footer className="footer">
          © 2026 Rishalenn Pelarija. All rights reserved.
        </footer>

      </div>

    </div>
  );
}

export default App;