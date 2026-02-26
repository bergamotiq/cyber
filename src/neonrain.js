import React, { useRef, useEffect } from "react";
import "./neonrain.css";


const Neonrain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const letters = "アァイィウヴエェオカガキギクグケゲコゴABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split(
      ""
    );
    const fontSize = 14;
    const columns = Math.floor(width / fontSize);
    const drops = Array(columns).fill(1);

    const neonColors = ["#0ff", "#f0f", "#ff00aa"];

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        const color = neonColors[Math.floor(Math.random() * neonColors.length)];

        ctx.fillStyle = color;
        ctx.shadowColor = color;
        ctx.shadowBlur = 8;

        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 35);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas className="neonrain" ref={canvasRef} style={{ display: "block" }} />;
};

export default Neonrain;