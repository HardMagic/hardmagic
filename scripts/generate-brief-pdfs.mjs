import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { chromium } from '@playwright/test';
import { briefs } from '../src/data/briefs.ts';

const output = resolve('infra/brief-delivery/source-pdfs');
await mkdir(output, { recursive: true });
const escape = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
const pick = (items, index) => items[index % items.length];

function pageContent(brief, pageNumber) {
  const chapter = brief.chapters.find(({ pages }) => pageNumber >= pages.start && pageNumber <= pages.end) ?? brief.chapters.at(-1);
  const localPage = pageNumber - chapter.pages.start + 1;
  const diagram = pick(brief.diagrams, pageNumber - 1);
  const worksheet = pick(brief.worksheets, pageNumber - 1);
  const evidence = pick(brief.evidenceNeeds, pageNumber - 1);
  const limitation = pick(brief.limitations, pageNumber - 1);
  if (pageNumber === 1) return `<div class="cover-grid"><p>HARDMAGIC / TECHNICAL BRIEF</p><h1>${escape(brief.title)}</h1><blockquote>${escape(brief.thesis)}</blockquote><div><b>Decision edition · August 2026</b><span>${brief.pageCount} pages · Private recipient edition</span></div></div>`;
  if (pageNumber === brief.pageCount) return `<div class="closing"><p>HARDMAGIC CORPORATION</p><h2>Make the next decision inspectable.</h2><p>${escape(brief.decision)}</p><div class="rule"></div><p>Reply to the delivery message to request a bounded working session. This document is decision support, not legal, financial, security, or investment advice.</p><b>DREAM IN REALITY.</b></div>`;
  return `<div class="running"><header><span>${escape(brief.title)}</span><b>${String(pageNumber).padStart(2, '0')} / ${brief.pageCount}</b></header><main><p class="kicker">${escape(chapter.title)} · ${localPage}</p><h2>${escape(chapter.title)}</h2><p class="lead">${escape(brief.thesis)}</p><div class="columns"><div><h3>The operating question</h3><p>${escape(brief.decision)}</p><p>For ${escape(pick(brief.audience, pageNumber - 1))}, the useful work is to make authority, evidence, constraints, and the next reversible decision visible. The aim is not tool adoption in isolation; it is a production capability the organization can explain and improve.</p><h3>What to inspect now</h3><p>${escape(evidence)}</p></div><aside><span>FIGURE ${String(pageNumber - 1).padStart(2, '0')}</span><div class="diagram"><i></i><i></i><i></i><b>HM</b></div><h3>${escape(diagram)}</h3><p>Conceptual operating diagram. Validate every boundary and dependency against the participating organization’s real systems.</p></aside></div><div class="workbench"><div><span>WORKSHEET</span><b>${escape(worksheet)}</b><p>Record the current owner, evidence available, unresolved risk, and smallest useful next action.</p></div><div><span>BOUNDARY</span><b>No universal prescription</b><p>${escape(limitation)}</p></div></div></main><footer>HardMagic Corporation · Privately owned GenAI and media company · hardmagic.com</footer></div>`;
}

function documentFor(brief) {
  const pages = Array.from({ length: brief.pageCount }, (_, index) => `<section class="page">${pageContent(brief, index + 1)}</section>`).join('');
  return `<!doctype html><html><head><meta charset="utf-8"><title>${escape(brief.title)}</title><style>@page{size:Letter;margin:0}*{box-sizing:border-box}body{margin:0;color:#150c0f;font:15px/1.5 Arial,sans-serif}.page{position:relative;width:8.5in;height:11in;overflow:hidden;padding:.7in;background:#f5eee6;break-after:page}.page:nth-child(4n+2){background:#efe3d7}.cover-grid{height:100%;display:flex;flex-direction:column;justify-content:space-between;padding:.15in;background:linear-gradient(145deg,#11090c,#5f0c27 65%,#c52a52);color:#fff}.cover-grid>p,.kicker,header,footer,.workbench span,aside>span{font-size:9px;font-weight:700;letter-spacing:.16em;text-transform:uppercase}.cover-grid h1{max-width:6.4in;margin:0;font-size:56px;line-height:.9;letter-spacing:-.05em}.cover-grid blockquote{max-width:6in;margin:0;font-size:21px;line-height:1.3}.cover-grid>div{display:flex;justify-content:space-between}.cover-grid>div span{color:#dccbd0}.running{height:100%;display:grid;grid-template-rows:auto 1fr auto}.running header{display:flex;justify-content:space-between;padding-bottom:14px;border-bottom:1px solid #baaeb0;color:#685a5e}.running main{padding-top:.38in}.kicker{color:#99143a}.running h2{max-width:6.7in;margin:12px 0 20px;font-size:37px;line-height:.96;letter-spacing:-.04em}.lead{max-width:6.8in;font-size:18px;line-height:1.35}.columns{display:grid;grid-template-columns:1.08fr .92fr;gap:.4in;margin-top:.32in}.columns h3,.workbench b{font-size:13px}.columns p{color:#51464a}.columns aside{padding:.22in;background:#140d10;color:#fff}.columns aside p{color:#c9bdc0;font-size:11px}.diagram{position:relative;height:1.75in;margin:14px 0;background:radial-gradient(circle,#9b153d 0 10%,#35131d 11% 35%,#140d10 36%)}.diagram i{position:absolute;left:50%;top:50%;width:43%;height:1px;background:#9a7781;transform-origin:left}.diagram i:nth-child(1){transform:rotate(20deg)}.diagram i:nth-child(2){transform:rotate(140deg)}.diagram i:nth-child(3){transform:rotate(260deg)}.diagram b{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}.workbench{display:grid;grid-template-columns:1fr 1fr;gap:1px;margin-top:.3in;background:#b8aaad}.workbench>div{min-height:1.25in;padding:.18in;background:#fffaf4}.workbench span{display:block;margin-bottom:8px;color:#99143a}.workbench b{display:block}.workbench p{margin:8px 0 0;color:#66595d;font-size:11px}.running footer{padding-top:12px;border-top:1px solid #baaeb0;color:#75686c}.closing{height:100%;display:flex;flex-direction:column;justify-content:center;background:#120b0e;color:#fff;padding:.65in}.closing>p:first-child{font-size:10px;letter-spacing:.18em}.closing h2{margin:.2in 0;font-size:58px;line-height:.9;letter-spacing:-.05em}.closing p{max-width:5.8in;color:#cdbfc2;font-size:17px}.closing .rule{width:1.5in;height:5px;margin:.35in 0;background:#c52a52}.closing>b{margin-top:.5in;color:#e34a70;letter-spacing:.18em}</style></head><body>${pages}</body></html>`;
}

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
for (const brief of briefs) {
  const html = documentFor(brief);
  await writeFile(resolve(output, `${brief.slug}.html`), html);
  await page.setContent(html, { waitUntil: 'load' });
  await page.pdf({ path: resolve(output, `${brief.slug}.pdf`), format: 'Letter', printBackground: true, preferCSSPageSize: true, margin: { top: 0, right: 0, bottom: 0, left: 0 } });
  console.log(`${brief.slug}: ${brief.pageCount} authored pages`);
}
await browser.close();
