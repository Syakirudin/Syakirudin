import React, { useEffect, useRef } from 'react';
import "../styles/stackComponent.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const techIcons = [
  { icon: "f13b", color: "#E34F26", title: "HTML" },        // HTML icon Unicode
  { icon: "f38b", color: "#1572B6", title: "CSS" },         // CSS icon Unicode
  { icon: "f3b8", color: "#F7DF1E", title: "JavaScript" },  // JS icon Unicode
  { icon: "f3e2", color: "#3776AB", title: "Python" },      // Python icon Unicode
  { icon: "f41b", color: "#61DBFB", title: "React" },       // React icon Unicode
  { icon: "f3d3", color: "#8CC84B", title: "Node.js" },     // Node.js icon Unicode
  { icon: "f799", color: "#57A64A", title: "Figma" },        // Excel icon Unicode
  { icon: "f1c3", color: "#57A64A", title: "Excel" }, 
  { icon: "f3bd", color: "#ff0000", title: "Laravel" },
];

class IconParticle {
  constructor(canvas, icon) {
    this.canvas = canvas;
    this.x = Math.random() * (canvas.width - 40) + 20;
    this.y = Math.random() * (canvas.height - 40) + 20;
    this.velocityX = (Math.random() - 0.5) * 2;
    this.velocityY = (Math.random() - 0.5) * 2;
    this.size = 40;
    this.icon = icon;
  }

  update() {
    this.x += this.velocityX;
    this.y += this.velocityY;

    const padding = 20;
    if (this.x > this.canvas.width - padding || this.x < padding) this.velocityX *= -1;
    if (this.y > this.canvas.height - padding || this.y < padding) this.velocityY *= -1;
  }

  draw(ctx) {
    ctx.font = `${this.size}px "Font Awesome 5 Free", "Font Awesome 5 Brands"`;
    ctx.fillStyle = this.icon.color;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(String.fromCharCode(parseInt(this.icon.icon, 16)), this.x, this.y);
  }
}

const StackComponent = ({ setShowStack }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      const container = canvas.parentElement;
      canvas.width = container.clientWidth - 40;
      canvas.height = container.clientHeight - 40;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles = techIcons.map(icon => new IconParticle(canvas, icon));

    const connectParticles = () => {
      const maxDistance = 150;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(150, 150, 150, ${1 - distance / maxDistance})`;
            ctx.lineWidth = 5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw(ctx);
      });

      connectParticles();
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="stack-use">
      <button className="close-btn" onClick={() => setShowStack(false)}>
        <i className="fa-regular fa-circle-xmark"></i>
      </button>
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          backgroundColor: 'transparent'
        }}
      />
    </div>
  );
};

export default StackComponent;
