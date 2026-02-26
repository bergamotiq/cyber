import React from "react";
import "./footer.css";
import Discordlogo from "./discordlogo.svg";
import Youtubelogo from "./youtubelogo.svg"

function Footer() {
  return (
    <footer className="footer">
       
     <p>© 2025 <span className="site-name">Save News</span>. All rights reserved.</p>
  <div className="social-icons">

    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="icon yotube">
  <img src={Youtubelogo} alt="youtube" />
</a>

  <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="icon discord">
  <img src={Discordlogo} alt="discord" />
</a>
     
  </div>  
    </footer>
  );
}

export default Footer;