(() => {
  const files = ['site-1.js', 'site-2.js', 'site-3.js', 'site-4.js'];
  const base = '/kkgt-new-website/standalone/';

  async function start() {
    try {
      const responses = await Promise.all(files.map((file) => fetch(base + file, { cache: 'no-cache' })));
      const failed = responses.find((response) => !response.ok);
      if (failed) throw new Error(`Website script failed to load: HTTP ${failed.status}`);
      const source = (await Promise.all(responses.map((response) => response.text()))).join('\n');
      new Function(source)();
    } catch (error) {
      console.error(error);
      const content = document.getElementById('content');
      if (content) {
        content.innerHTML = '<section style="min-height:70vh;display:grid;place-content:center;padding:120px 24px;text-align:center"><h1 style="font-size:clamp(38px,7vw,72px);margin-bottom:16px">The preview could not start.</h1><p style="max-width:620px;margin:auto;color:#5c675f">Refresh the page. If the problem continues, open the GitHub repository and check the latest verification workflow.</p></section>';
      }
    }
  }

  start();
})();
