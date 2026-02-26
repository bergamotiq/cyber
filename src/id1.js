import React from "react";
import "./article.scss";
import Esports from "./Esports.png"

function Article01() {
  return (
    <article className="article">
        <h1 className="article-title">Esports: The Fastest-Growing Arena in Global Entertainment</h1>
        <p className="article-meta">Автор: SaveNews | 15 августа 2025</p>
      <img
        src= {Esports}
        alt="AI Concept"
        className="article-image"
      />
      <div className="article-content">
        <p>
            Top teams and players train like professional athletes, supported by coaches, analysts, and even fitness trainers. Major brands such as Nike, Coca-Cola, and Intel have jumped on board, seeing esports as a prime avenue for reaching younger, tech-savvy audiences.
        </p>
        <p>
          Streaming platforms like Twitch and YouTube Gaming make it easy to watch live matches, follow favorite players, and join global fan communities. Cities around the world now host tournaments to boost tourism and local economies, proving esports’ economic impact is real.
        </p>
        <p>Challenges like player burnout, inconsistent regulations, and ethical concerns over gambling exist, but the industry keeps growing at a rapid pace. With technology evolving and viewership climbing, esports is not just a game—it’s shaping the future of global entertainment.</p>
      </div>
    </article>
  );
}

export default Article01;