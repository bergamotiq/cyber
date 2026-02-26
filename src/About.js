import React from "react";
import "./about.scss";

function About() {
  return (
    <section className="about">
      <div className="about-container">
        <h1 className="about-title">About <span>Save News</span></h1>
        <p className="about-text">
          <strong>Save News</strong> — This is a modern news portal dedicated to cutting-edge technologies, the IT industry,
          and the world of esports.We collect the latest news, exclusive reviews,
          and analytical materials for you to keep you up-to-date on the latest trends.
        </p>
        <p className="about-text">
          Our authors monitor developments in artificial intelligence,
          virtual and augmented reality, as well as the main
          tournaments and events in the esports scene.
          If you want to stay one step ahead, welcome!
        </p>
      </div>
    </section>
  );
}

export default About;