/* ===== OPTIMIZED PORTFOLIO JAVASCRIPT ===== */

// Performance optimization: Use requestAnimationFrame for smooth animations
const RAF = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;

// Cache DOM elements for better performance
const elements = {
  loadingScreen: null,
  canvas: null,
  ctx: null,
  fab: null,
  animatedName: null,
  animatedSubtitle: null
};

// Configuration object
const config = {
  stars: 180,
  planets: 2,
  animationSpeed: 0.3,
  loadingDelay: 500,
  fadeOutDelay: 150
};

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

function init() {
  cacheElements();
  setupLoadingScreen();
  setupSpaceBackground();
  setupAnimations();
  setupEventListeners();
  setupScrollEffects();
}

function cacheElements() {
  elements.loadingScreen = document.getElementById('loading-screen');
  elements.canvas = document.getElementById('space-bg');
  elements.ctx = elements.canvas?.getContext('2d');
  elements.fab = document.getElementById('beamup-fab');
  elements.animatedName = document.getElementById('animated-name');
  elements.animatedSubtitle = document.getElementById('animated-subtitle');
}

// ===== LOADING SCREEN =====
function setupLoadingScreen() {
  if (!elements.loadingScreen) return;
  
  // Always start from top of page on reload
  window.scrollTo(0, 0);
  
  // Hide loading screen after delay
  setTimeout(() => {
    elements.loadingScreen.classList.add('fade-out');
    setTimeout(() => {
      elements.loadingScreen.classList.add('hidden');
    }, config.fadeOutDelay);
  }, config.loadingDelay);
  
  // Ensure page starts from top on reload/refresh
  window.addEventListener('beforeunload', () => window.scrollTo(0, 0));
}

// ===== SPACE BACKGROUND =====
let stars = [];
let planets = [];

function setupSpaceBackground() {
  if (!elements.canvas || !elements.ctx) return;
  
  resizeCanvas();
  createStars(config.stars);
  createPlanets();
  animateSpace();
  
  window.addEventListener('resize', () => {
    resizeCanvas();
    createStars(config.stars);
    createPlanets();
  });
}

function resizeCanvas() {
  elements.canvas.width = window.innerWidth;
  elements.canvas.height = window.innerHeight;
}

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

function createStars(count) {
  stars = Array.from({ length: count }, () => ({
    x: Math.random() * elements.canvas.width,
    y: Math.random() * elements.canvas.height,
    r: Math.random() * 1.2 + 0.3,
    speed: Math.random() * 0.15 + 0.05,
    alpha: randomBetween(0.5, 1)
  }));
}

function createPlanets() {
  planets = [
    { 
      x: elements.canvas.width * 0.8, 
      y: elements.canvas.height * 0.2, 
      r: 32, 
      color: '#ffe60033', 
      speed: 0.02, 
      angle: 0 
    },
    { 
      x: elements.canvas.width * 0.2, 
      y: elements.canvas.height * 0.7, 
      r: 18, 
      color: '#6a82fb44', 
      speed: 0.015, 
      angle: 0 
    }
  ];
}

function animateSpace() {
  if (!elements.ctx) return;
  
  elements.ctx.clearRect(0, 0, elements.canvas.width, elements.canvas.height);
  
  // Draw stars
  stars.forEach(star => {
    elements.ctx.save();
    elements.ctx.globalAlpha = star.alpha;
    elements.ctx.beginPath();
    elements.ctx.arc(star.x, star.y, star.r, 0, 2 * Math.PI);
    elements.ctx.fillStyle = '#fff';
    elements.ctx.shadowColor = '#fff';
    elements.ctx.shadowBlur = 8;
    elements.ctx.fill();
    elements.ctx.restore();
    
    star.x -= star.speed;
    if (star.x < 0) {
      star.x = elements.canvas.width;
      star.y = Math.random() * elements.canvas.height;
    }
  });
  
  // Draw planets
  planets.forEach(planet => {
    elements.ctx.save();
    elements.ctx.globalAlpha = 0.7;
    elements.ctx.beginPath();
    elements.ctx.arc(
      planet.x + Math.sin(planet.angle) * 10,
      planet.y + Math.cos(planet.angle) * 10,
      planet.r, 0, 2 * Math.PI
    );
    elements.ctx.fillStyle = planet.color;
    elements.ctx.shadowColor = planet.color;
    elements.ctx.shadowBlur = 32;
    elements.ctx.fill();
    elements.ctx.restore();
    
    planet.angle += planet.speed;
  });
  
  RAF(animateSpace);
}

// ===== ANIMATIONS =====
function setupAnimations() {
  // Start name animation after loading screen
  setTimeout(animateNameAndSubtitle, config.loadingDelay + 200);
}

function animateNameAndSubtitle() {
  if (!elements.animatedName || !elements.animatedSubtitle) return;
  
  const fullText = "Hi, I'm Dhruv Gajjar";
  const subtitleText = "Mechanical Engineer";
  let charIndex = 0;
  
  // Clear both texts initially
  elements.animatedName.innerHTML = '';
  elements.animatedSubtitle.innerHTML = '';
  
  function typeNextChar() {
    if (charIndex < fullText.length) {
      // Add highlight class to "Dhruv Gajjar" part
      if (charIndex >= 7) {
        const beforeHighlight = fullText.slice(0, 7);
        const highlighted = fullText.slice(7, charIndex + 1);
        elements.animatedName.innerHTML = beforeHighlight + '<span class="highlight">' + highlighted + '</span>';
      } else {
        elements.animatedName.textContent = fullText.slice(0, charIndex + 1);
      }
      charIndex++;
      setTimeout(typeNextChar, 80);
    } else {
      // Start subtitle animation after name is complete
      setTimeout(animateSubtitle, 400);
    }
  }
  
  function animateSubtitle() {
    elements.animatedSubtitle.textContent = subtitleText;
    elements.animatedSubtitle.classList.add('subtitle-animate');
  }
  
  typeNextChar();
}

// ===== SCROLL EFFECTS =====
function setupScrollEffects() {
  // Scroll-triggered fade-in
  const fadeEls = document.querySelectorAll('.fade-in');
  const trigger = window.innerHeight * 0.85;
  
  function onScrollFadeIn() {
    fadeEls.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < trigger) {
        el.classList.add('visible');
      }
    });
  }
  
  window.addEventListener('scroll', throttle(onScrollFadeIn, 16)); // ~60fps
  onScrollFadeIn(); // Initial check
}

// ===== FLOATING ACTION BUTTON =====
let isFlying = false;

function setupEventListeners() {
  if (elements.fab) {
    elements.fab.addEventListener('click', handleFabClick);
  }
  
  window.addEventListener('scroll', throttle(checkFabVisibility, 16));
  window.addEventListener('resize', throttle(checkFabVisibility, 16));
  checkFabVisibility();
}

function checkFabVisibility() {
  if (!elements.fab) return;
  
  const hero = document.getElementById('home');
  if (!hero) return;
  
  const heroRect = hero.getBoundingClientRect();
  const isAtTop = heroRect.top >= -50;
  
  if (heroRect.bottom < 0 && !isFlying) {
    elements.fab.classList.add('visible');
  } else if (isAtTop && isFlying) {
    // Reset the flying state when we reach the top
    elements.fab.classList.remove('flying');
    elements.fab.classList.remove('visible');
    isFlying = false;
    // Small delay to allow fade out
    setTimeout(() => {
      elements.fab.style.transform = '';
      elements.fab.style.opacity = '';
    }, 300);
  } else if (!isFlying) {
    elements.fab.classList.remove('visible');
  }
}

function handleFabClick(e) {
  e.preventDefault();
  
  if (isFlying) return; // Prevent multiple clicks during animation
  
  const hero = document.getElementById('home');
  if (hero) {
    // Start flying animation
    isFlying = true;
    elements.fab.classList.add('flying');
    
    // Scroll to top smoothly
    hero.scrollIntoView({ behavior: 'smooth' });
  }
}

// ===== UTILITY FUNCTIONS =====
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// ===== PERFORMANCE OPTIMIZATIONS =====

// Debounce resize events
let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    if (elements.canvas) {
      resizeCanvas();
      createStars(config.stars);
      createPlanets();
    }
  }, 250);
});

// Intersection Observer for better performance
if ('IntersectionObserver' in window) {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);
  
  // Observe all fade-in elements
  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });
}

// ===== ERROR HANDLING =====
window.addEventListener('error', (e) => {
  console.warn('Portfolio script error:', e.error);
});

// ===== ACCESSIBILITY =====
// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && elements.fab?.classList.contains('visible')) {
    elements.fab.classList.remove('visible');
  }
});

// ===== SERVICE WORKER SUPPORT =====
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('SW registered: ', registration);
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}
 

 