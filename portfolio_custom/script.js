// case study menu sidebar

document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.case-section');
  const navLinks = document.querySelectorAll('.case-menu a');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const id = entry.target.id;
      const link = document.querySelector(`.case-menu a[href="#${id}"]`);

      if (entry.isIntersecting) {
        // Remove "active" from all links
        navLinks.forEach(link => link.classList.remove('active'));
        // Add "active" to the current one
        if (link) {
          link.classList.add('active');
        }
      }
    });
  }, {
    // trigger when the section is 50% visible
    threshold: 0.5
  });

  sections.forEach(section => {
    observer.observe(section);
  });
});


const toggle = document.getElementById('navbar-toggle');
const menu = document.getElementById('navbar-menu');
const overlay = document.getElementById('navbar-overlay');
const body = document.body;

toggle.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('open');
  toggle.classList.toggle('open');
  overlay.classList.toggle('active');
  body.classList.toggle('menu-open');
});

// Close menu if overlay is clicked
overlay.addEventListener('click', () => {
  menu.classList.remove('open');
  toggle.classList.remove('open');
  overlay.classList.remove('active');
  body.classList.remove('menu-open');
});

  







