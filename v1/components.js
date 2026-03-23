/* components.js — inject shared nav + footer */

const NAV_HTML = `
<nav class="nav">
  <div class="nav__inner">
    <a href="index.html" class="nav__logo">
      <span class="nav__logo-mark">JIA</span>
      Joel in Action
    </a>
    <ul class="nav__links">
      <li><a href="index.html">Home</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="solutions.html">Solutions</a></li>
      <li><a href="services.html">Services</a></li>
      <li><a href="portfolio.html">Portfolio</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
    <a href="contact.html" class="btn btn--primary nav__cta">Get in Touch</a>
    <div class="nav__burger" id="burger">
      <span></span><span></span><span></span>
    </div>
  </div>
</nav>
<div class="nav__mobile" id="mobileNav">
  <a href="index.html">Home</a>
  <a href="about.html">About</a>
  <a href="solutions.html">Solutions</a>
  <a href="services.html">Services</a>
  <a href="portfolio.html">Portfolio</a>
  <a href="contact.html">Contact</a>
  <a href="contact.html" class="btn btn--primary" style="width:fit-content;margin-top:1rem">Get in Touch</a>
</div>`;

const FOOTER_HTML = `
<footer class="footer">
  <div class="container">
    <div class="footer__grid">
      <div class="footer__brand">
        <div class="nav__logo" style="margin-bottom:.8rem">
          <span class="nav__logo-mark">JIA</span>
          Joel in Action
        </div>
        <p>Transforming ideas into actionable ICT solutions for businesses and communities across East Africa and beyond.</p>
      </div>
      <div class="footer__col">
        <h4>Navigation</h4>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="solutions.html">Solutions</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="portfolio.html">Portfolio</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
      <div class="footer__col">
        <h4>Services</h4>
        <ul>
          <li><a href="services.html">Network Setup</a></li>
          <li><a href="services.html">Software Development</a></li>
          <li><a href="services.html">Systems Administration</a></li>
          <li><a href="services.html">Graphics Design</a></li>
          <li><a href="services.html">Full-Stack Solutions</a></li>
        </ul>
      </div>
      <div class="footer__col footer__contact">
        <h4>Contact</h4>
        <p><a href="mailto:info@joelinaction.tech">info@joelinaction.tech</a></p>
        <p><a href="tel:+255773013475">+255 773 013 475</a></p>
        <p style="margin-top:.8rem">Zanzibar, Tanzania</p>
        <a href="https://github.com/pyjoek" target="_blank" style="display:inline-flex;align-items:center;gap:.4rem;margin-top:1rem;color:var(--gold);font-size:.88rem;font-weight:600">
          ⌥ GitHub ↗
        </a>
      </div>
    </div>
    <div class="footer__bottom">
      <p>© 2025 Joel in Action (JIA). All rights reserved.</p>
      <p>Built with precision. Delivered with purpose.</p>
    </div>
  </div>
</footer>`;

document.addEventListener('DOMContentLoaded', () => {
  const navPlaceholder = document.getElementById('nav-placeholder');
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (navPlaceholder) navPlaceholder.innerHTML = NAV_HTML;
  if (footerPlaceholder) footerPlaceholder.innerHTML = FOOTER_HTML;
});
