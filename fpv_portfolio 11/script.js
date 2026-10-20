// =========================================================
// PORTOFOLIU YOUTUBE
// Înlocuiește ID-urile demo cu ID-urile clipurilor tale YouTube.
// Exemplu URL: https://www.youtube.com/watch?v=dQw4w9WgXcQ
// ID-ul este partea de după v=  -> dQw4w9WgXcQ
// Poți adăuga oricâte proiecte în această listă.
// =========================================================
const youtubeProjects = [
  // Exemplu:
  // { id: "ID_YOUTUBE", title: "Cabana Nord", type: "CABIN / HOSPITALITY" },
  // { id: "ID_YOUTUBE", title: "Residence One", type: "REAL ESTATE" },
];

const projectGrid = document.querySelector('#youtubeProjects');

function renderProjects() {
  if (!youtubeProjects.length) {
    projectGrid.innerHTML = '';
    return;
  }

  projectGrid.innerHTML = youtubeProjects.map((p, i) => `
    <article class="yt-card reveal">
      <div class="yt-thumb" data-video-id="${p.id}" role="button" tabindex="0" aria-label="Redă ${p.title}">
        <img src="https://i.ytimg.com/vi/${p.id}/maxresdefault.jpg" alt="${p.title}" loading="lazy">
        <span class="play" aria-hidden="true"></span>
      </div>
      <div class="yt-meta">
        <h3>${p.title}</h3>
        <span>${String(i + 4).padStart(2, '0')} · ${p.type || 'FPV FILM'}</span>
      </div>
    </article>
  `).join('');

  document.querySelectorAll('.yt-thumb[data-video-id]').forEach(el => {
    const play = () => {
      const id = el.dataset.videoId;
      el.innerHTML = `<iframe class="yt-frame" src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0" title="YouTube video" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
    };
    el.addEventListener('click', play, { once: true });
    el.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); play(); }
    }, { once: true });
  });
}

renderProjects();

document.querySelector('#year').textContent = new Date().getFullYear();

// Mobile menu
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

// Hero sound control
const heroVideo = document.querySelector('#heroVideo');
const soundToggle = document.querySelector('#soundToggle');
soundToggle.addEventListener('click', async () => {
  heroVideo.muted = !heroVideo.muted;
  soundToggle.textContent = `Sunet: ${heroVideo.muted ? 'off' : 'on'}`;
  soundToggle.setAttribute('aria-label', heroVideo.muted ? 'Activează sunetul' : 'Dezactivează sunetul');
  if (heroVideo.paused) {
    try { await heroVideo.play(); } catch (_) {}
  }
});

// Reveal on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: .12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
