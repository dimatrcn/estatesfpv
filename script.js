const youtubeProjects = [
  { id: "2RGSBYdBOE4", title: "Cabana" },
  { id: "94vJ3wUul9s", title: "Cabana" },
  { id: "aFdwNYeufi8", title: "Bungalow" },
];

const projectGrid = document.querySelector('#youtubeProjects');

function renderProjects() {
  projectGrid.innerHTML = youtubeProjects.map((p) => `
    <article class="yt-card reveal">
      <a class="yt-thumb" href="https://youtu.be/${p.id}" target="_blank" rel="noopener noreferrer" aria-label="Vezi ${p.title} pe YouTube">
        <img src="https://i.ytimg.com/vi/${p.id}/maxresdefault.jpg" alt="${p.title}" loading="lazy">
        <span class="play" aria-hidden="true"></span>
      </a>
      <div class="yt-meta">
        <h3>${p.title}</h3>
        <span>TOUR FPV</span>
      </div>
    </article>
  `).join('');
}

renderProjects();

document.querySelector('#year').textContent = new Date().getFullYear();

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));

const heroVideo = document.querySelector('#heroVideo');
const soundToggle = document.querySelector('#soundToggle');
soundToggle.addEventListener('click', async () => {
  heroVideo.muted = !heroVideo.muted;
  soundToggle.textContent = `Sunet: ${heroVideo.muted ? 'off' : 'on'}`;
  soundToggle.setAttribute('aria-label', heroVideo.muted ? 'Activează sunetul' : 'Dezactivează sunetul');
  if (heroVideo.paused) { try { await heroVideo.play(); } catch (_) {} }
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: .12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
