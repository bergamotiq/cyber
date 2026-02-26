import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import "./styles.scss";
import Article from "./article.js";
import Article01 from "./id1.js"
import Trendings from "./trendings.js";

function Home() {
  return (
    <div className="preview">
  <div className="latest">
  <h2 className="latestNews">Latest News</h2>
  
  <Link to="/article" className="read-more">
    OpenAI Unveils GPT-5, the New AI Standard
  </Link>

  <Link to="/id1" className="read-more">
    Esports: The Fastest-Growing Arena in Global Entertainment
  </Link>
</div>

  
  <Trendings />
</div>
  );
}

export default Home;
