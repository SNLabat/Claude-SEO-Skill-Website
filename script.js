/* ============================================================
   Claude SEO Skill — script.js
   ============================================================ */

'use strict';

/* ===== YEAR ===== */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ===== MOBILE NAV ===== */
const navToggle = document.querySelector('.nav__toggle');
const navLinks  = document.querySelector('.nav__links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navLinks.classList.toggle('nav__links--open', !expanded);
  });

  // Close on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.setAttribute('aria-expanded', 'false');
      navLinks.classList.remove('nav__links--open');
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
      navToggle.setAttribute('aria-expanded', 'false');
      navLinks.classList.remove('nav__links--open');
    }
  });
}

/* ===== DEMO TABS ===== */
const tabs   = document.querySelectorAll('[role="tab"]');
const panels = document.querySelectorAll('.demo-panel');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.getAttribute('aria-controls');

    // Deactivate all
    tabs.forEach(t => {
      t.classList.remove('demo-tab--active');
      t.setAttribute('aria-selected', 'false');
    });

    panels.forEach(p => p.classList.add('demo-panel--hidden'));

    // Activate selected
    tab.classList.add('demo-tab--active');
    tab.setAttribute('aria-selected', 'true');

    const panel = document.getElementById(target);
    if (panel) panel.classList.remove('demo-panel--hidden');
  });
});

/* ===== FAQ ACCORDION ===== */
document.querySelectorAll('.faq__question').forEach(btn => {
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    const answerId = btn.getAttribute('aria-controls');
    const answer   = document.getElementById(answerId);

    if (!answer) return;

    if (expanded) {
      btn.setAttribute('aria-expanded', 'false');
      answer.hidden = true;
    } else {
      // Close all others
      document.querySelectorAll('.faq__question').forEach(other => {
        if (other !== btn) {
          other.setAttribute('aria-expanded', 'false');
          const otherId = other.getAttribute('aria-controls');
          const otherAnswer = document.getElementById(otherId);
          if (otherAnswer) otherAnswer.hidden = true;
        }
      });

      btn.setAttribute('aria-expanded', 'true');
      answer.hidden = false;
    }
  });
});

/* ===== SCROLL ANIMATIONS ===== */
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion && 'IntersectionObserver' in window) {
  const observeTargets = document.querySelectorAll(
    '.feature-card, .step, .comparison-card, .faq__item'
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationDelay = entry.target.dataset.delay || '0ms';
        entry.target.classList.add('animate-fade-up');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  // Stagger cards within grids
  document.querySelectorAll('.features__grid, .comparison-grid').forEach(grid => {
    Array.from(grid.children).forEach((child, i) => {
      child.dataset.delay = `${i * 60}ms`;
    });
  });

  observeTargets.forEach(el => observer.observe(el));
}

/* ===== ACTIVE NAV ON SCROLL ===== */
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav__links a[href^="#"]');

if (sections.length && navItems.length) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navItems.forEach(link => {
          link.style.color = '';
          if (link.getAttribute('href') === `#${id}`) {
            link.style.color = 'var(--color-orange)';
          }
        });
      }
    });
  }, { rootMargin: '-30% 0px -60% 0px' });

  sections.forEach(s => sectionObserver.observe(s));
}

/* ===== SMOOTH HEADER SHADOW ON SCROLL ===== */
const header = document.querySelector('.site-header');
if (header) {
  window.addEventListener('scroll', () => {
    header.style.boxShadow = window.scrollY > 10
      ? '0 2px 16px rgba(28,24,20,.08)'
      : '';
  }, { passive: true });
}
