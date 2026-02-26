import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./styles.scss"; 
import Home from "./Home.js";
import About from "./About.js";
import Search from "./search.js";
import Footer from "./footer.js";
import Neonrain from "./neonrain.js"; 
import Article from "./article.js";
import Article01 from "./id1.js";
import logo from "./logo.png";
import Trendings from "./trendings.js";

function App() {
  const navigate = useNavigate();

  return (
    <div className="mainApp">
      < Neonrain/>
      <header className="header">
        <img src={logo} alt="Logo"  className="logo"/>
        <nav className="nav">
          <div className="search">
            <Search />
          </div>
          <div className="nav-buttons">
            <button
              className="cybr-btn"
              onClick={() => navigate("/")}
            >
              News<span aria-hidden="true">_</span>
              <span aria-hidden="true" className="cybr-btn__glitch">News_</span>
              <span aria-hidden="true" className="cybr-btn__tag">R22</span>
            </button>
            <button
              className="cybr-btn"
              onClick={() => navigate("/about")}
            >
              About<span aria-hidden="true">_</span>
              <span aria-hidden="true" className="cybr-btn__glitch">About_</span>
              <span aria-hidden="true" className="cybr-btn__tag">R23</span>
            </button>
            <button
              className="cybr-btn"
              onClick={() => navigate("/contacts")}
            >
              Contacts<span aria-hidden="true">_</span>
              <span aria-hidden="true" className="cybr-btn__glitch">Contacts_</span>
              <span aria-hidden="true" className="cybr-btn__tag">R24</span>
            </button>
            <button
              className="cybr-btn"
              onClick={() => navigate("/trendings")}
            >
              Trending<span aria-hidden="true">_</span>
              <span aria-hidden="true" className="cybr-btn__glitch">Trending_</span>
              <span aria-hidden="true" className="cybr-btn__tag">R25</span>
            </button>
          </div>
        </nav>
      </header>

      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/article" element={<Article />} />
          <Route path="/id1" element={<Article01 />} />
          {/* <Route path="/contacts" element={<Contacts />} /> */}
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
