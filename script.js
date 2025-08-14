// ------------------------------
// Digital Particles
// ------------------------------
const canvas = document.getElementById('digital-particles');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const particleCount = 120;

// Initialize particles
for (let i = 0; i < particleCount; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 3 + 1,
    dx: (Math.random() - 0.5) * 1,
    dy: (Math.random() - 0.5) * 1
  });
}

// Draw particles and connecting lines
function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw particles
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255,60,120,0.8)'; // Neon pink
    ctx.shadowColor = 'rgba(255,60,120,0.9)';
    ctx.shadowBlur = 10;
    ctx.fill();

    // Move particle
    p.x += p.dx;
    p.y += p.dy;

    // Wrap around edges
    if (p.x < 0) p.x = canvas.width;
    if (p.x > canvas.width) p.x = 0;
    if (p.y < 0) p.y = canvas.height;
    if (p.y > canvas.height) p.y = 0;
  });

  // Draw connecting lines
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      let dx = particles[i].x - particles[j].x;
      let dy = particles[i].y - particles[j].y;
      let dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(255,180,70,${1 - dist / 120})`; // Neon orange
        ctx.lineWidth = 1;
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }

  requestAnimationFrame(drawParticles);
}

drawParticles();

// Resize canvas on window resize
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// ------------------------------
// CEO Card 3D Tilt Effect
// ------------------------------
const ceoCard = document.querySelector('.ceo-card');
document.addEventListener('mousemove', (e) => {
  const x = e.clientX / window.innerWidth - 0.5;
  const y = e.clientY / window.innerHeight - 0.5;
  ceoCard.style.transform = `rotateY(${x * 20}deg) rotateX(${y * 10}deg)`;
});

// ------------------------------
// Scroll-triggered Fade-in Animations
// ------------------------------
const sections = document.querySelectorAll('section');
const options = { threshold: 0.2 };

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, options);

sections.forEach(section => {
  section.classList.add('hidden');
  observer.observe(section);
});

// ------------------------------
// Glitch Hero Text Effect
// ------------------------------
const glitchText = document.querySelector('.glitch');
function glitchEffect(){
  glitchText.style.textShadow = `${Math.random()*5}px ${Math.random()*5}px #ff3c78, ${-Math.random()*5}px ${-Math.random()*5}px #ffb347`;
  setTimeout(glitchEffect, 300);
}
glitchEffect();
