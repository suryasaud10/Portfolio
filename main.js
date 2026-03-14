// main.js - Elegant Smooth Interactions

const text = "Full Stack Developer | Django & Real-time Web Apps";
const paragraph = document.getElementById("hero-text");
let index = 0;

function typeLetter() {
    if(index < text.length) {
        paragraph.textContent += text[index];
        index++;
        setTimeout(typeLetter, 100); // 100ms per letter
    }
}

paragraph.textContent = ""; // clear initially
typeLetter();

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Mobile menu
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
});

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('active'));
});

// Header scroll effect
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.style.background = window.scrollY > 100 
    ? 'rgba(10,10,14,0.98)' 
    : 'rgba(10,10,14,0.95)';
});

// Scroll animations
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.project-card, .skill-category').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(40px)';
  el.style.transition = 'all 0.8s ease';
  observer.observe(el);
});

// Form handler
document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault();
  const btn = e.target.querySelector('button');
  const original = btn.textContent;
  
  btn.textContent = 'Sending...';
  btn.disabled = true;
  
  setTimeout(() => {
    btn.textContent = 'Message Sent! ✨';
    setTimeout(() => {
      btn.textContent = original;
      btn.disabled = false;
      e.target.reset();
    }, 2000);
  }, 1500);
});

// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();