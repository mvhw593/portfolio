// Filter logic
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('.filter-btn.active').classList.remove('active');
    button.classList.add('active');

    const category = button.getAttribute('data-filter');

    projectCards.forEach(card => {
      const match = category === 'all' || card.getAttribute('data-category') === category;
      card.style.display = match ? 'block' : 'none';
    });
  });
});

  const toggleButton = document.querySelector('.grid-toggle');
  const projectsContainer = document.querySelector('.projects-grid');

  toggleButton.addEventListener('click', () => {
    projectsContainer.classList.toggle('grid-view');
    toggleButton.classList.toggle('active');
  });

// link to case study
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      const link = card.getAttribute('data-link');
      if (link) {
        window.location.href = link;
      }
    });
  });

// the floating gif


const gif = document.querySelector('.floating-gif');
const size = 450; // Match your gif size
const margin = 50; // Keep distance from edges

// Start position somewhere around top-right
let x = window.innerWidth * 0.75;
let y = window.innerHeight * 0.35;

// Start with diagonal movement
let dx = 1.5; // horizontal speed
let dy = 1.2; // vertical speed

function animateBounce() {
  const maxX = window.innerWidth - size - margin;
  const maxY = window.innerHeight - size - margin;
  const minX = margin;
  const minY = margin;

  x += dx;
  y += dy;

  // Bounce off horizontal edges
  if (x > maxX || x < minX) {
    dx *= -1;
    x = Math.max(minX, Math.min(x, maxX)); // Clamp within bounds
  }

  // Bounce off vertical edges
  if (y > maxY || y < minY) {
    dy *= -1;
    y = Math.max(minY, Math.min(y, maxY)); // Clamp within bounds
  }

  gif.style.transform = `translate(${x}px, ${y}px)`;
  requestAnimationFrame(animateBounce);
}

animateBounce();

window.addEventListener('resize', () => {
  // You could optionally re-calculate bounds here
});