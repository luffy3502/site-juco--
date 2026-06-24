const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const revealItems = document.querySelectorAll(".reveal");
const counters = document.querySelectorAll("[data-count]");

if (window.lucide) {
  window.lucide.createIcons();
}

const syncHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 20);
};

window.addEventListener("scroll", syncHeader, { passive: true });
syncHeader();

navToggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.innerHTML = isOpen ? '<i data-lucide="x"></i>' : '<i data-lucide="menu"></i>';
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
    if (navToggle) {
      navToggle.innerHTML = '<i data-lucide="menu"></i>';
      if (window.lucide) {
        window.lucide.createIcons();
      }
    }
  });
});

const animateCounter = (counter) => {
  const target = Number(counter.dataset.count || 0);
  const duration = 1200;
  const startTime = performance.now();

  const tick = (now) => {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    counter.textContent = Math.round(target * eased);

    if (progress < 1) {
      requestAnimationFrame(tick);
    }
  };

  requestAnimationFrame(tick);
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    entry.target.classList.add("is-visible");

    entry.target.querySelectorAll("[data-count]").forEach((counter) => {
      if (counter.dataset.animated) return;
      counter.dataset.animated = "true";
      animateCounter(counter);
    });

    if (entry.target.matches("[data-count]") && !entry.target.dataset.animated) {
      entry.target.dataset.animated = "true";
      animateCounter(entry.target);
    }
  });
}, {
  threshold: 0.15
});

revealItems.forEach((item) => observer.observe(item));
counters.forEach((counter) => observer.observe(counter));
