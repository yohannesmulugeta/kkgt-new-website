(() => {
  const files = ['site-1.js', 'site-2.js', 'site-3.js', 'site-4.js'];
  const base = '/kkgt-new-website/standalone/';

  function installMotion() {
    const content = document.getElementById('content');
    if (!content) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let progress = document.querySelector('.scroll-progress');
    if (!progress) {
      progress = document.createElement('div');
      progress.className = 'scroll-progress';
      progress.setAttribute('aria-hidden', 'true');
      document.body.appendChild(progress);
    }

    let hero = null;
    let heroPhoto = null;
    let heroContent = null;
    let movingPhotos = [];
    let ticking = false;
    const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

    const refresh = () => {
      hero = content.querySelector('.reference-hero');
      heroPhoto = content.querySelector('.reference-hero-photo');
      heroContent = content.querySelector('.reference-hero-content');
      movingPhotos = [...content.querySelectorAll('.reference-about-media>.photo,.origin-card>.photo,.process-visual.photo,.evidence>.photo,.page-hero>.photo')];
      requestTick();
    };

    const update = () => {
      ticking = false;
      const y = window.scrollY || document.documentElement.scrollTop;
      const range = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      progress.style.transform = `scaleX(${clamp(y / range, 0, 1)})`;
      if (reduced) return;

      if (hero && heroPhoto && heroContent) {
        const heroProgress = clamp(y / Math.max(1, hero.offsetHeight), 0, 1);
        heroPhoto.style.transform = `translate3d(0,${heroProgress * 34}px,0) scale(${1.045 + heroProgress * .018})`;
        heroContent.style.transform = `translate3d(0,${heroProgress * -26}px,0)`;
        heroContent.style.opacity = String(clamp(1 - heroProgress * .82, .18, 1));
      }

      for (const photo of movingPhotos) {
        const box = photo.getBoundingClientRect();
        if (box.bottom < -80 || box.top > window.innerHeight + 80) continue;
        const offset = (box.top + box.height / 2 - window.innerHeight / 2) / window.innerHeight;
        photo.style.transform = `translate3d(0,${clamp(offset * -15, -15, 15)}px,0) scale(1.035)`;
      }
    };

    const requestTick = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    };

    const observer = new MutationObserver(refresh);
    observer.observe(content, { childList: true });
    window.addEventListener('scroll', requestTick, { passive: true });
    window.addEventListener('resize', requestTick, { passive: true });
    refresh();
  }

  async function start() {
    try {
      const responses = await Promise.all(files.map((file) => fetch(base + file, { cache: 'no-cache' })));
      const failed = responses.find((response) => !response.ok);
      if (failed) throw new Error(`Website script failed to load: HTTP ${failed.status}`);
      const source = (await Promise.all(responses.map((response) => response.text()))).join('\n');
      new Function(source)();
      installMotion();
    } catch (error) {
      console.error(error);
      const content = document.getElementById('content');
      if (content) content.innerHTML = '<section style="min-height:70vh;display:grid;place-content:center;padding:120px 24px;text-align:center"><h1 style="font-size:clamp(38px,7vw,72px);margin-bottom:16px">The preview could not start.</h1><p style="max-width:620px;margin:auto;color:#5c675f">Refresh the page. If the problem continues, check the latest GitHub Pages deployment.</p></section>';
    }
  }

  start();
})();
