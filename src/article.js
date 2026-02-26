import React from "react";
import "./article.scss";

function Article() {
  return (
    <article className="article">
      <h1 className="article-title">OpenAI unveiled GPT-5, the new standard for AI.</h1>
      <p className="article-meta">By TechNews | August 15, 2025</p>
      <img
        src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
        alt="AI Concept"
        className="article-image"
      />
      <div className="article-content">
        <p>
          OpenAI officially announced GPT-5, a next-generation language model capable of not only generating text but also analyzing data in real time,
           creating interactive apps, and integrating with smart devices.
        </p>
        <p>
         According to the developers, GPT-5 has twice the contextual memory of its previous version and improved logical reasoning skills.
        </p>
        <p>
          Experts believe this could change the way we approach automation, learning, and the creative industries.
The update is already available to developers via an API.
        </p>
      </div>
    </article>
  );
}

export default Article;