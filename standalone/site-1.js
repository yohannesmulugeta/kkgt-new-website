(()=>{
const BASE='/kkgt-new-website';
const IMAGES=window.IMAGES||{};
const nav=[['Home',''],['About','about'],['Coffee Export','coffee-export'],['Agrochemicals','agrochemicals'],['Commodities','commodities'],['Sustainability','sustainability'],['Quality','quality'],['Contact','contact']];
const origins=[['Yirgacheffe','Southern Ethiopia','origin-yirgacheffe'],['Sidama','Southern Ethiopia','origin-sidama'],['Limmu','South-west Ethiopia','origin-limmu'],['Lekempti','Western Ethiopia','origin-lekempti'],['Djimmah','South-west Ethiopia','origin-djimmah']];
const products=[['BASECOR 80% WDG','Herbicide','WDG'],['CURTAIL 15.5% SC','Herbicide','SC'],['TABAN 80% WP','Fungicide','WP'],['PROLIGHT 45% SC','Fungicide','SC'],['AZADON 24% EC','Herbicide','EC'],['INSIDER 27% FS','Seed treatment','FS']];
const processes=[['Responsible sourcing','Supplier and lot information should be documented before preparation.'],['Selection and inspection','Incoming products are reviewed against agreed requirements.'],['Processing and preparation','Products are prepared according to commodity and buyer needs.'],['Quality verification','Checks confirm that the prepared lot aligns with agreed specifications.'],['Packaging and documentation','Packaging and commercial documentation are coordinated.'],['Shipment coordination','Dispatch and buyer communication are managed through the final stage.']];
const business=[
 ['01','Green Coffee Export','Supplying distinctive Ethiopian green coffee to international markets.','coffee-export','coffee-export'],
 ['02','Agrochemical Solutions','Providing crop-protection products and agricultural inputs for productive farming.','agrochemicals','agrochemicals'],
 ['03','Coffee Farming','Growing coffee through responsible farm management and farmer relationships.','sustainability','coffee-farming'],
 ['04','Oilseeds & Pulses','Supplying selected Ethiopian oilseeds and pulses to regional and global buyers.','commodities','commodities']
];
const esc=s=>String(s).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
const img=(key,alt,cls='')=>`<div class="visual photo photo-${key} ${cls}" role="img" aria-label="${esc(alt)}"><span class="illustrative">Illustrative testing visual</span></div>`;
const hero=(eyebrow,title,intro,key)=>`<section class="page-hero">${img(key,title)}<div class="page-hero-content reveal"><span class="eyebrow light">${eyebrow}</span><h1>${title}</h1><p>${intro}</p></div></section>`;
const heading=(eye,title,intro='')=>`<div><span class="eyebrow">${eye}</span><h2>${title}</h2>${intro?`<p class="body-copy heading-copy">${intro}</p>`:''}</div>`;
function home(){return `
<section class="reference-hero">
  <div class="photo photo-hero-coffee reference-hero-photo" role="img" aria-label="Illustrative Ethiopian coffee landscape"></div>
  <div class="reference-hero-shade"></div>
  <div class="reference-hero-content reveal">
    <span class="reference-kicker">Quality products · Sustainable growth</span>
    <h1>From Ethiopian soil<br>to <em>global markets</em>.</h1>
    <p>KKGT connects agricultural production, crop inputs and export opportunities through four focused business areas.</p>
    <div class="actions"><a class="button orange" href="#core-business">Explore our business →</a><a class="button ghost route" href="${BASE}/contact">Contact KKGT →</a></div>
    <div class="hero-stats" aria-label="Company strengths"><div><strong>4</strong><span>Business areas</span></div><div><strong>Ethiopia</strong><span>Our origin</span></div><div><strong>Global</strong><span>Our market</span></div><div><strong>Sustainable</strong><span>Our commitment</span></div></div>
  </div>
  <a class="scroll-cue" href="#about-home" aria-label="Scroll to company introduction"><span></span>Scroll</a>
</section>
<section class="reference-about" id="about-home">
  <div class="reference-wrap reference-about-grid">
    <div class="reference-about-copy reveal">
      <span class="mini-label">About KKGT</span>
      <h2>An Ethiopian agricultural company committed to quality and growth.</h2>
      <p>KKGT Import Export works across coffee export, agricultural inputs, commodity trading and farming. We create value for farmers, customers and partners through quality, integrity and long-term relationships.</p>
      <a class="button green route" href="${BASE}/about">Learn more about KKGT →</a>
    </div>
    <div class="reference-established reveal"><span class="calendar-icon" aria-hidden="true">▦</span><small>Established</small><strong>1999 E.C.</strong><p>Building long-term partnerships for sustainable success.</p></div>
    <div class="reference-about-media reveal">
      <div class="photo photo-about-operations" role="img" aria-label="Illustrative Ethiopian coffee preparation"></div>
      <div class="reference-values"><span>✦ <b>Quality you can trust</b></span><span>◎ <b>Partnerships that grow</b></span><span>❋ <b>Sustainability in action</b></span></div>
    </div>
  </div>
</section>
<section class="reference-business" id="core-business">
  <div class="reference-wrap">
    <div class="reference-section-title reveal"><span>Four focused business areas</span><h2>Our core businesses</h2><p>Integrated agricultural operations connecting Ethiopian products with local and international markets.</p></div>
    <div class="reference-card-grid">${business.map(b=>`<article class="reference-business-card reveal"><div class="photo photo-${b[4]}" role="img" aria-label="Illustrative ${esc(b[1])}"></div><div class="reference-card-shade"></div><div class="reference-card-copy"><span>${b[0]}</span><h3>${b[1]}</h3><p>${b[2]}</p><a class="route" href="${BASE}/${b[3]}">Learn more →</a></div></article>`).join('')}</div>
  </div>
</section>
<section class="section origins reference-lower"><div class="wide"><div class="section-head reveal">${heading('Coffee origins','Distinct origins. Exceptional Ethiopian coffee.')}<p>Origin details, grades, processing methods and availability will be added after company verification.</p></div><div class="origin-row">${origins.map((o,i)=>`<article class="origin-card reveal">${img(o[2],`Illustrative ${o[0]} origin landscape`)}<div class="origin-copy"><span>0${i+1} · ${o[1]}</span><h3>${o[0]}</h3><p>Origin-inspired visual; not presented as a specific KKGT farm.</p></div></article>`).join('')}</div></div></section>
<section class="section"><div class="wrap">${heading('Export process','Prepared with care. Explained with clarity.','The process below is a structured draft and should be aligned with the company’s actual workflow.')}<div class="process-grid process-grid-compact"><div class="reveal">${img('quality','Illustrative coffee quality inspection','process-visual')}</div><div class="steps">${processes.map((s,i)=>`<article class="step reveal"><span>0${i+1}</span><div><h3>${s[0]}</h3><p>${s[1]}</p></div></article>`).join('')}</div></div></div></section>
<section class="cta-band"><div class="wrap cta-inner reveal"><h2>Start the right agricultural conversation.</h2><a class="button orange route" href="${BASE}/contact">Contact KKGT →</a></div></section>`}
