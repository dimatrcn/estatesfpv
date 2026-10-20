# ESTATES FPV — portofoliu static

Site static în limba română, pregătit pentru GitHub Pages. Nu necesită npm, build sau backend.

## Publicare pe GitHub Pages

1. Creează un repository nou pe GitHub.
2. Urcă **toate fișierele din acest folder** în rădăcina repository-ului.
3. În GitHub: **Settings → Pages → Build and deployment → Deploy from a branch**.
4. Selectează branch-ul `main`, folder `/ (root)` și Save.
5. După publicare, GitHub îți va afișa URL-ul site-ului.

## Ce trebuie personalizat

### 1. Brand
În `index.html`, caută `ESTATES` și înlocuiește cu numele tău / brandul tău.

### 2. Email
În `index.html`, caută `hello@estatesfpv.ro` și înlocuiește cu adresa ta.

### 3. Proiecte YouTube
Deschide `script.js` și completează lista `youtubeProjects`:

```js
const youtubeProjects = [
  { id: "ID_YOUTUBE", title: "Cabana Nord", type: "CABIN / HOSPITALITY" },
  { id: "ALT_ID", title: "Residence One", type: "REAL ESTATE" },
];
```

Pentru URL-ul `https://www.youtube.com/watch?v=ABC123xyz`, ID-ul este `ABC123xyz`.

## Video inclus

- `assets/video/hero-fpv.mp4` — versiune desktop 1080p / 30 fps, optimizată pentru web.
- `assets/video/hero-fpv-mobile.mp4` — versiune 720p / 30 fps pentru telefon.
- `assets/img/hero-poster.jpg` — poster afișat înainte de pornirea video.

Clipurile hero sunt fără audio pentru încărcare mai eficientă și autoplay predictibil. Secțiunea de portofoliu folosește aceeași versiune web.

## SEO
Actualizează în `<head>` din `index.html`:
- `<title>`
- `meta name="description"`

Dacă ai domeniu propriu, poți configura un fișier `CNAME` conform documentației GitHub Pages.


## Clipuri locale incluse în portofoliu

- `assets/video/hero-fpv.mp4` — proiectul 01 / hero
- `assets/video/project-02.mp4` — proiectul 02
- `assets/video/project-03.mp4` — proiectul 03

Posterele sunt în `assets/img/project-02.jpg` și `assets/img/project-03.jpg`. Clipurile YouTube adăugate în `script.js` vor continua numerotarea de la 04.

## Portofoliu YouTube
Proiectele din portofoliu folosesc thumbnail-uri YouTube și deschid clipul într-un tab nou la click. Am ales această variantă în locul iframe-urilor embedded pentru a evita YouTube Error 153 în preview-uri locale și pentru a păstra pagina cât mai ușoară.
