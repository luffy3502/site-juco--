:root {
  --red: #b70d23;
  --red-strong: #d3122c;
  --red-dark: #780817;
  --ink: #09090b;
  --charcoal: #151518;
  --graphite: #24242a;
  --muted: #6d7280;
  --line: rgba(255, 255, 255, 0.13);
  --paper: #f6f3ef;
  --white: #ffffff;
  --steel: #dce7ea;
  --shadow: 0 26px 80px rgba(0, 0, 0, 0.28);
  --radius: 8px;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Inter", Arial, sans-serif;
  background: var(--ink);
  color: var(--white);
  line-height: 1.6;
}

img {
  max-width: 100%;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
a {
  -webkit-tap-highlight-color: transparent;
}

.container {
  width: min(1160px, calc(100% - 40px));
  margin-inline: auto;
}

.site-header {
  position: fixed;
  top: 16px;
  left: 50%;
  z-index: 50;
  width: min(1180px, calc(100% - 32px));
  transform: translateX(-50%);
  display: grid;
  grid-template-columns: 260px 1fr auto;
  align-items: center;
  gap: 22px;
  padding: 8px 12px 8px 14px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: var(--radius);
  background: rgba(8, 8, 10, 0.68);
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.24);
  backdrop-filter: blur(18px);
  transition: 0.25s ease;
}

.site-header.is-scrolled {
  top: 8px;
  background: rgba(8, 8, 10, 0.9);
}

.brand img {
  width: 244px;
  height: 80px;
  object-fit: cover;
  object-position: center;
}

.main-nav {
  justify-self: end;
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.78);
}

.main-nav a {
  position: relative;
  transition: color 0.2s ease;
}

.main-nav a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -7px;
  width: 100%;
  height: 2px;
  transform: scaleX(0);
  transform-origin: right;
  background: var(--red-strong);
  transition: transform 0.2s ease;
}

.main-nav a:hover {
  color: var(--white);
}

.main-nav a:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

.mobile-nav-cta {
  display: none;
}

.header-cta,
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 46px;
  border-radius: var(--radius);
  font-weight: 800;
  letter-spacing: 0;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.header-cta {
  padding: 0 18px;
  background: var(--red);
  color: var(--white);
  box-shadow: 0 12px 32px rgba(183, 13, 35, 0.35);
}

.header-cta:hover,
.btn:hover {
  transform: translateY(-2px);
}

.nav-toggle {
  display: none;
  width: 44px;
  height: 44px;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: rgba(255, 255, 255, 0.07);
  color: var(--white);
}

.hero {
  position: relative;
  min-height: 92vh;
  overflow: hidden;
  display: grid;
  align-items: center;
  padding: 130px 0 64px;
}

.hero-bg,
.cta-bg {
  position: absolute;
  inset: 0;
  background-image: url("assets/hero-tech.png");
  background-size: cover;
  background-position: center;
  transform: scale(1.02);
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgba(5, 5, 7, 0.94) 0%, rgba(9, 9, 11, 0.86) 38%, rgba(9, 9, 11, 0.5) 70%, rgba(183, 13, 35, 0.28) 100%),
    radial-gradient(circle at 20% 80%, rgba(183, 13, 35, 0.46), transparent 34%);
}

.hero-grid {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 340px;
  gap: 48px;
  align-items: end;
}

.hero-content {
  max-width: 760px;
}

.hero-logo {
  width: min(360px, 72vw);
  margin-bottom: 28px;
  filter: drop-shadow(0 22px 32px rgba(0, 0, 0, 0.38));
}

.eyebrow {
  margin: 0 0 14px;
  color: var(--steel);
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

h1,
h2,
h3,
p {
  overflow-wrap: anywhere;
}

h1 {
  margin: 0;
  max-width: 900px;
  font-size: clamp(2.35rem, 6vw, 5.6rem);
  line-height: 0.95;
  font-weight: 900;
  text-transform: uppercase;
}

.hero-subtitle {
  max-width: 700px;
  margin: 26px 0 0;
  color: rgba(255, 255, 255, 0.78);
  font-size: clamp(1rem, 2vw, 1.22rem);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 34px;
}

.btn {
  min-width: 190px;
  padding: 0 20px;
  border: 1px solid transparent;
}

.btn svg,
.header-cta svg,
.nav-toggle svg {
  width: 19px;
  height: 19px;
}

.btn-primary {
  background: var(--red);
  color: var(--white);
  box-shadow: 0 18px 46px rgba(183, 13, 35, 0.4);
}

.btn-secondary {
  border-color: rgba(255, 255, 255, 0.24);
  background: rgba(255, 255, 255, 0.08);
}

.btn-large {
  min-height: 56px;
  padding-inline: 28px;
  text-transform: uppercase;
}

.hero-panel {
  position: relative;
  padding: 26px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: var(--radius);
  background: rgba(10, 10, 12, 0.72);
  box-shadow: var(--shadow);
  backdrop-filter: blur(18px);
}

.signal-line {
  height: 4px;
  margin-bottom: 18px;
  border-radius: 99px;
  background: linear-gradient(90deg, var(--red), var(--steel), transparent);
}

.metric {
  display: grid;
  gap: 2px;
  padding: 20px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.11);
}

.metric:last-child {
  border-bottom: 0;
}

.metric strong {
  font-size: 2.5rem;
  line-height: 1;
}

.metric span:last-child {
  color: rgba(255, 255, 255, 0.68);
  font-weight: 700;
}

.intro-strip {
  position: relative;
  z-index: 2;
  margin-top: -28px;
}

.strip-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  overflow: hidden;
  border-radius: var(--radius);
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.1);
  box-shadow: var(--shadow);
}

.strip-grid span {
  min-height: 76px;
  display: grid;
  place-items: center;
  padding: 14px;
  background: #101013;
  color: rgba(255, 255, 255, 0.78);
  text-align: center;
  font-weight: 800;
}

.section {
  padding: 108px 0;
}

.about,
.benefits,
.testimonials {
  background: var(--paper);
  color: var(--ink);
}

.services,
.process {
  background: #0c0c0f;
}

.solutions,
.portfolio {
  background: #151518;
}

.two-column {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: 60px;
  align-items: center;
}

.section-heading {
  max-width: 760px;
  margin-bottom: 42px;
}

.section-heading h2,
.section-copy h2,
.final-cta h2 {
  margin: 0;
  font-size: clamp(2rem, 4vw, 3.8rem);
  line-height: 1.04;
  font-weight: 900;
}

.section-copy p:not(.eyebrow),
.section-heading + p {
  color: var(--muted);
}

.about .eyebrow,
.benefits .eyebrow,
.testimonials .eyebrow {
  color: var(--red);
}

.feature-grid,
.cards-grid,
.solution-grid,
.testimonial-grid,
.portfolio-grid {
  display: grid;
  gap: 18px;
}

.feature-grid {
  grid-template-columns: repeat(2, 1fr);
}

.feature-grid article,
.service-card,
.solution-card,
.testimonial,
.mockup {
  border-radius: var(--radius);
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}

.feature-grid article {
  min-height: 118px;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 20px;
  border: 1px solid rgba(9, 9, 11, 0.09);
  background: var(--white);
  box-shadow: 0 18px 38px rgba(20, 20, 24, 0.07);
  font-weight: 900;
}

.feature-grid svg,
.benefit-list svg {
  width: 24px;
  min-width: 24px;
  color: var(--red);
}

.cards-grid {
  grid-template-columns: repeat(3, 1fr);
}

.service-card,
.solution-card {
  min-height: 248px;
  padding: 28px;
  border: 1px solid rgba(255, 255, 255, 0.11);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.03));
}

.service-card:hover,
.solution-card:hover,
.mockup:hover,
.testimonial:hover {
  transform: translateY(-6px);
  border-color: rgba(211, 18, 44, 0.45);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.24);
}

.service-card svg,
.solution-card svg {
  width: 34px;
  height: 34px;
  margin-bottom: 24px;
  color: var(--red-strong);
}

.service-card h3,
.solution-card h3,
.timeline-step h3 {
  margin: 0 0 12px;
  font-size: 1.18rem;
}

.service-card p,
.solution-card p,
.timeline-step p {
  margin: 0;
  color: rgba(255, 255, 255, 0.68);
}

.solution-grid {
  grid-template-columns: repeat(5, 1fr);
}

.solution-card {
  min-height: 230px;
}

.timeline {
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}

.timeline::before {
  content: "";
  position: absolute;
  top: 38px;
  left: 8%;
  right: 8%;
  height: 2px;
  background: linear-gradient(90deg, var(--red), rgba(255, 255, 255, 0.18), var(--red));
}

.timeline-step {
  position: relative;
  padding: 0 6px;
}

.timeline-step span {
  position: relative;
  z-index: 1;
  width: 76px;
  height: 76px;
  display: grid;
  place-items: center;
  margin-bottom: 24px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 50%;
  background: var(--red);
  box-shadow: 0 18px 36px rgba(183, 13, 35, 0.28);
  font-weight: 900;
}

.benefit-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.benefit-list span {
  min-height: 68px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  border: 1px solid rgba(9, 9, 11, 0.08);
  border-radius: var(--radius);
  background: var(--white);
  box-shadow: 0 14px 28px rgba(20, 20, 24, 0.06);
  font-weight: 900;
}

.portfolio-grid {
  grid-template-columns: repeat(4, 1fr);
}

.mockup {
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: #0d0d10;
}

.mockup-bar {
  display: flex;
  gap: 7px;
  padding: 13px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.mockup-bar span {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.32);
}

.mockup-screen {
  min-height: 250px;
  display: grid;
  place-items: center;
  gap: 14px;
  padding: 24px;
  text-align: center;
  background:
    linear-gradient(140deg, rgba(183, 13, 35, 0.34), transparent 42%),
    radial-gradient(circle at center, rgba(220, 231, 234, 0.16), transparent 34%);
}

.mockup-screen img {
  width: 150px;
}

.mockup-screen svg {
  width: 62px;
  height: 62px;
  color: var(--red-strong);
}

.mockup-screen strong {
  font-size: 1.05rem;
}

.testimonial-grid {
  grid-template-columns: repeat(3, 1fr);
}

.testimonial {
  padding: 28px;
  border: 1px solid rgba(9, 9, 11, 0.08);
  background: var(--white);
  box-shadow: 0 18px 38px rgba(20, 20, 24, 0.07);
}

.testimonial img {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 22px;
}

.testimonial p {
  margin: 0 0 22px;
  color: #33343a;
  font-size: 1.02rem;
}

.testimonial strong,
.testimonial span {
  display: block;
}

.testimonial span {
  color: var(--red);
  font-weight: 800;
}

.final-cta {
  position: relative;
  overflow: hidden;
  padding: 120px 0;
  text-align: center;
}

.final-cta::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(9, 9, 11, 0.86), rgba(9, 9, 11, 0.94)), rgba(183, 13, 35, 0.18);
  z-index: 1;
}

.final-cta .container {
  position: relative;
  z-index: 2;
  max-width: 850px;
}

.final-cta img {
  width: 250px;
  margin: 0 auto 28px;
}

.final-cta h2 {
  text-transform: uppercase;
}

.final-cta p {
  max-width: 680px;
  margin: 20px auto 32px;
  color: rgba(255, 255, 255, 0.76);
}

.site-footer {
  padding: 64px 0 0;
  background: #060607;
  color: rgba(255, 255, 255, 0.74);
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr 0.8fr 1fr 0.8fr;
  gap: 34px;
}

.site-footer img {
  width: 170px;
  margin-bottom: 18px;
}

.site-footer h3 {
  margin: 0 0 18px;
  color: var(--white);
  font-size: 1rem;
}

.site-footer a {
  display: block;
  margin-bottom: 10px;
  transition: color 0.2s ease;
}

.site-footer a:hover {
  color: var(--white);
}

.footer-bottom {
  margin-top: 48px;
  padding: 22px 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
}

.reveal {
  opacity: 0;
  transform: translateY(22px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 1060px) {
  .site-header {
    grid-template-columns: 1fr auto;
    padding: 8px 10px 8px 12px;
  }

  .brand img {
    width: 190px;
    height: 62px;
  }

  .nav-toggle {
    display: grid;
    place-items: center;
    justify-self: end;
  }

  .main-nav {
    position: absolute;
    top: calc(100% + 12px);
    left: 0;
    right: 0;
    display: none;
    grid-template-columns: 1fr;
    gap: 8px;
    padding: 14px;
    border: 1px solid rgba(255, 255, 255, 0.14);
    border-radius: var(--radius);
    background:
      linear-gradient(180deg, rgba(23, 23, 27, 0.98), rgba(8, 8, 10, 0.98)),
      radial-gradient(circle at 100% 0%, rgba(183, 13, 35, 0.24), transparent 38%);
    box-shadow: 0 26px 70px rgba(0, 0, 0, 0.42);
    backdrop-filter: blur(18px);
  }

  .main-nav.is-open {
    display: grid;
  }

  .main-nav a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 48px;
    padding: 0 14px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: var(--radius);
    background: rgba(255, 255, 255, 0.055);
    color: rgba(255, 255, 255, 0.88);
    font-weight: 800;
  }

  .main-nav a::after {
    position: static;
    width: 7px;
    height: 7px;
    transform: none;
    border-radius: 50%;
    background: rgba(211, 18, 44, 0.9);
  }

  .main-nav a:hover {
    border-color: rgba(211, 18, 44, 0.42);
    background: rgba(183, 13, 35, 0.18);
  }

  .main-nav a:hover::after {
    transform: none;
  }

  .header-cta {
    display: none;
  }

  .mobile-nav-cta {
    display: flex;
    justify-content: center;
    margin-top: 4px;
    background: var(--red) !important;
    border-color: rgba(255, 255, 255, 0.16) !important;
    color: var(--white) !important;
    box-shadow: 0 16px 34px rgba(183, 13, 35, 0.32);
  }

  .mobile-nav-cta::after {
    display: none;
  }

  .hero-grid,
  .two-column {
    grid-template-columns: 1fr;
  }

  .hero-panel {
    max-width: 620px;
  }

  .cards-grid,
  .testimonial-grid,
  .portfolio-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .solution-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .timeline {
    grid-template-columns: 1fr 1fr;
  }

  .timeline::before {
    display: none;
  }

  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 720px) {
  .container {
    width: min(100% - 28px, 1160px);
  }

  .site-header {
    top: 10px;
    width: calc(100% - 20px);
  }

  .brand img {
    width: 164px;
    height: 54px;
  }

  .hero {
    min-height: 92vh;
    padding-top: 112px;
  }

  .hero-overlay {
    background:
      linear-gradient(180deg, rgba(5, 5, 7, 0.95) 0%, rgba(9, 9, 11, 0.82) 60%, rgba(183, 13, 35, 0.28) 100%),
      radial-gradient(circle at 20% 70%, rgba(183, 13, 35, 0.38), transparent 38%);
  }

  .hero-actions,
  .btn {
    width: 100%;
  }

  .strip-grid,
  .feature-grid,
  .cards-grid,
  .solution-grid,
  .benefit-list,
  .portfolio-grid,
  .testimonial-grid,
  .timeline,
  .footer-grid {
    grid-template-columns: 1fr;
  }

  .section {
    padding: 78px 0;
  }

  .hero-panel {
    padding: 20px;
  }

  .metric strong {
    font-size: 2rem;
  }

  .service-card,
  .solution-card {
    min-height: 0;
  }

  .mockup-screen {
    min-height: 210px;
  }
}
