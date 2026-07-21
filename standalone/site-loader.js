(() => {
  const files = ['site-1.js', 'site-2.js', 'site-3.js', 'site-4.js'];
  const base = '/kkgt-new-website/standalone/';

  const photoImages = {
    'hero-coffee': 'https://images.unsplash.com/photo-1746623691157-c4c7a3bad0c4?auto=format&fit=crop&q=82&w=2400',
    'about-operations': 'https://images.unsplash.com/photo-1524350876685-274059332603?auto=format&fit=crop&q=82&w=1800',
    'coffee-export': 'https://images.unsplash.com/photo-1524350876685-274059332603?auto=format&fit=crop&q=82&w=1800',
    agrochemicals: 'https://images.pexels.com/photos/4894608/pexels-photo-4894608.jpeg?auto=compress&cs=tinysrgb&w=1800',
    'coffee-farming': 'https://images.unsplash.com/photo-1762277142767-6e614520de15?auto=format&fit=crop&q=82&w=1800',
    commodities: 'https://images.unsplash.com/photo-1558638174-ec861599048e?auto=format&fit=crop&q=82&w=1800',
    contact: 'https://images.unsplash.com/photo-1762277142767-6e614520de15?auto=format&fit=crop&q=82&w=1800',
    quality: 'https://images.unsplash.com/photo-1524350876685-274059332603?auto=format&fit=crop&q=82&w=1800',
    sustainability: 'https://images.unsplash.com/photo-1746623691157-c4c7a3bad0c4?auto=format&fit=crop&q=82&w=1800',
    'origin-yirgacheffe': 'https://images.unsplash.com/photo-1746623691157-c4c7a3bad0c4?auto=format&fit=crop&q=80&w=1400',
    'origin-sidama': 'https://images.unsplash.com/photo-1762277142767-6e614520de15?auto=format&fit=crop&q=80&w=1400',
    'origin-limmu': 'https://images.unsplash.com/photo-1524350876685-274059332603?auto=format&fit=crop&q=80&w=1400',
    'origin-lekempti': 'https://images.unsplash.com/photo-1746623691157-c4c7a3bad0c4?auto=format&fit=crop&q=80&w=1400',
    'origin-djimmah': 'https://images.unsplash.com/photo-1762277142767-6e614520de15?auto=format&fit=crop&q=80&w=1400'
  };

  Object.assign(window.IMAGES || (window.IMAGES = {}), photoImages);

  function installMotion() {
    const content = document.getElementById('content');
    if (!content) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const progress = document.createElement('div');
    progress.className = 'scroll-progress';
    progress.setAttribute('aria-hidden', 'true');
    document.body.appendChild(progress);

    let hero;
    let heroImage;
    let heroContent;
    let movingImages = [];
    let ticking = false;

    const refresh = () => {
      hero = content.querySelector('.hero');
      heroImage = hero?.querySelector('.visual img');
      heroContent = hero?.querySelector('.hero-content');
      movingImages = [...content.querySelectorAll('.business-card .visual img, .origin-card .visual img, .evidence .visual img, .process-visual img, .page-hero .visual img')];

      content.querySelectorAll('img').forEach((image) => {
        image.decoding = 'async';
        if (!image.closest('.hero')) image.loading = 'lazy';
      });

      requestTick();
    };

    const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

    const update = () => {
      ticking = false;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollRange = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      progress.style.transform = `scaleX(${clamp(scrollTop / scrollRange, 0, 1)})`;

      if (reducedMotion) return;

      if (hero && heroImage && heroContent) {
        const heroProgress = clamp(scrollTop / Math.max(1, hero.offsetHeight), 0, 1);
        heroImage.style.transform = `translate3d(0, ${heroProgress * 46}px, 0) scale(${1.09 - heroProgress * 0.025})`;
        heroContent.style.transform = `translate3d(0, ${heroProgress * -52}px, 0)`;
        heroContent.style.opacity = String(clamp(1 - heroProgress * 1.15, 0, 1));
      }

      movingImages.forEach((image) => {
        if (image === heroImage) return;
        const frame = image.parentElement?.getBoundingClientRect();
        if (!frame || frame.bottom < -100 || frame.top > window.innerHeight + 100) return;
        const centerOffset = (frame.top + frame.height / 2 - window.innerHeight / 2) / window.innerHeight;
        const movement = clamp(centerOffset * -34, -28, 28);
        image.style.transform = `translate3d(0, ${movement}px, 0) scale(1.09)`;
      });
    };

    const requestTick = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    };

    const observer = new MutationObserver(refresh);
    observer.observe(content, { childList: true, subtree: false });
    window.addEventListener('scroll', requestTick, { passive: true });
    window.addEventListener('resize', requestTick, { passive: true });

    refresh();
  }

  async function start() {
    try {
      const responses = await Promise.all(files.map((file) => fetch(base + file, { cache: 'no-cache' })));
      const failed = responses.find((response) => !response.ok);
      if (failed) throw new Error(`Website script failed to load: HTTP ${failed.status}`);

      let source = (await Promise.all(responses.map((response) => response.text()))).join('\n');
      source = source.replace(
        /const IMAGES=\{[\s\S]*?\};\s*const nav=/,
        'const IMAGES=window.IMAGES||{};\nconst nav=',
      );

      if (!source.includes('const IMAGES=window.IMAGES||{};')) {
        throw new Error('The photographic image map could not be connected to the website application.');
      }

      new Function(source)();
      installMotion();
    } catch (error) {
      console.error(error);
      const content = document.getElementById('content');
      if (content) {
        content.innerHTML = '<section style="min-height:70vh;display:grid;place-content:center;padding:120px 24px;text-align:center"><h1 style="font-size:clamp(38px,7vw,72px);margin-bottom:16px">The preview could not start.</h1><p style="max-width:620px;margin:auto;color:#5c675f">Refresh the page. If the problem continues, open the GitHub repository and check the latest deployment workflow.</p></section>';
      }
    }
  }

  start();
})();
