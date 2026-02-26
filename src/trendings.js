import React from "react";
import { Link } from "react-router-dom";
import "./trendings.scss";


function Trendings() {
  return (
    <div className="trendings">
      <h2 className="trendings-title">Trendings</h2>

      <Link to="/trending1" className="trending-card">
        AI-Powered Art Tools Reshape Digital Creativity
      </Link>

      <Link to="/trending2" className="trending-card">
        Quantum Computing Breakthrough Announced
      </Link>

      <Link to="/trending3" className="trending-card">
        VR Headsets Become Mainstream in 2025
      </Link>
    </div>
  );
}



export default Trendings;