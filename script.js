// ------------------------------
// Digital Advertising Particles (Optimized for Mobile)
// ------------------------------
const canvas = document.getElementById('digital-particles');
const ctx = canvas.getContext('2d');

// Detect mobile
const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const particleCount = isMobile ? 40 : 120;
const maxDistance = isMobile ? 80 : 120;

const adSymbols = ["💡", "📢", "🎯", "🛒", "📱", "💻", "✨"];

// Initialize particles
for (let i = 0; i < particleCount; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 3 + 1,
    dx: (Math.random() - 0.5) * (isMobile ? 0.5 : 1),
    dy: (Math.random() - 0.5) * (isMobile ? 0.5 : 1),
    symbol: adSymbols[Math.floor(Math.random() * adSymbols.length)]
  });
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    ctx.font = `${p.radius * 5}px Arial`;
    ctx.fillStyle = 'rgba(255,60,120,0.9)';
    ctx.shadowColor = 'rgba(255,60,120,0.9)';
    ctx.shadowBlur = 10;
    ctx.fillText(p.symbol, p.x, p.y);

    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0) p.x = canvas.width;
    if (p.x > canvas.width) p.x = 0;
    if (p.y < 0) p.y = canvas.height;
    if (p.y > canvas.height) p.y = 0;
  });

  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      let dx = particles[i].x - particles[j].x;
      let dy = particles[i].y - particles[j].y;
      let dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < maxDistance) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(255,180,70,${1 - dist / maxDistance})`;
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

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// ------------------------------
// CEO Card 3D Tilt (Centered)
// ------------------------------
const ceoCard = document.querySelector('.ceo-card');
if (ceoCard) {
  document.addEventListener('mousemove', (e) => {
    const rect = ceoCard.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    ceoCard.style.transform = `rotateY(${x * 15}deg) rotateX(${y * 8}deg) translateZ(0)`;
  });
  document.addEventListener('mouseleave', () => {
    ceoCard.style.transform = `rotateY(0deg) rotateX(0deg) translateZ(0)`;
  });
}

// ------------------------------
// Magazine Card Hover Effect (Restored)
// ------------------------------
const magazineCards = document.querySelectorAll('.magazine-card');
magazineCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.05)';
    card.style.boxShadow = '0 8px 20px rgba(255, 60, 120, 0.6)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
    card.style.boxShadow = 'none';
  });
});

// ------------------------------
// Scroll-triggered Fade-in Animations
// ------------------------------
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => {
  section.classList.add('fade-in');
  observer.observe(section);
});

// ------------------------------
// Glitch Hero Text Effect
// ------------------------------
const glitchText = document.querySelector('.glitch');
if (glitchText) {
  function glitchEffect() {
    glitchText.style.textShadow =
      `${Math.random() * 4}px ${Math.random() * 4}px #ff3c78,
       ${-Math.random() * 4}px ${-Math.random() * 4}px #ffb347`;
    setTimeout(glitchEffect, 300);
  }
  glitchEffect();
}

// ------------------------------
// Initial Fade-in on Page Load
// ------------------------------
window.addEventListener('load', () => {
  document.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
});
