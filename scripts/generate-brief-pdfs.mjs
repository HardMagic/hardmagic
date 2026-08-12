import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { chromium } from '@playwright/test';
import { briefs } from '../src/data/briefs.ts';

const output = resolve('infra/brief-delivery/source-pdfs');
await mkdir(output, { recursive: true });
const escape = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
const pick = (items, index) => items[index % items.length];
const sourceLink = (value) => {
  const url = String(value).match(/https:\/\/\S+$/)?.[0];
  const text = url ? String(value).slice(0, -url.length).trim() : String(value);
  return `${escape(text)}${url ? `<a href="${escape(url)}">Open primary source ↗</a>` : ''}`;
};
const modes = ['evidence', 'projection', 'implication', 'workshop', 'uncertainty'];

function authoredBody(brief, chapter, pageNumber) {
  const mode = modes[(pageNumber + brief.slug.length) % modes.length];
  const evidence = pick(brief.evidenceNeeds, pageNumber - 2);
  const limitation = pick(brief.limitations, pageNumber - 2);
  const audience = pick(brief.audience, pageNumber - 2);
  const diagram = pick(brief.diagrams, pageNumber - 2);
  const worksheet = pick(brief.worksheets, pageNumber - 2);
  const sections = {
    evidence: {
      label: 'Evidence / 2024–2026',
      title: 'The signal beneath the chapter',
      copy: `This chapter begins with what can be inspected now. The cited material establishes a signal or operating boundary; it does not prove the 2035 outcome. Read the source, note its population and method, and decide what organization-specific evidence would confirm or weaken the interpretation.`,
      feature: `<div class="source-card"><span>PRIMARY SOURCE NOTE</span><p>${sourceLink(evidence)}</p></div>`,
    },
    projection: {
      label: 'Inference / View from 2035',
      title: 'A future history, not a forecast',
      copy: `Imagine this chapter as a memo recovered from 2035. ${escape(chapter.title)} has become ordinary practice only if leaders made authority, rights, memory, infrastructure, and audience consequence visible while the systems were still forming. Timing may change; the durable design question is who can inspect and reverse the decision.`,
      feature: `<blockquote>${escape(brief.thesis)}</blockquote>`,
    },
    implication: {
      label: `Implication / ${escape(audience)}`,
      title: 'What changes when the signal compounds',
      copy: `For ${escape(audience)}, the strategic work is not to predict a winning model or channel. It is to preserve optionality while building a recognizable point of view. Treat ${escape(chapter.title.toLowerCase())} as a decision system: name the owner, define the evidence threshold, record exceptions, and make the next move small enough to learn from.`,
      feature: `<div class="decision-card"><span>EXECUTIVE QUESTION</span><p>${escape(brief.decision)}</p></div>`,
    },
    workshop: {
      label: 'Recommendation / This quarter',
      title: 'Turn the argument into an operating move',
      copy: `Use the instrument on this page with one real campaign, workflow, archive, product, or audience decision. Do not score an imagined future state. Record the present owner, available evidence, constraints, dissent, and the smallest reversible action that would produce new knowledge.`,
      feature: `<div class="worksheet-card"><span>WORKING INSTRUMENT</span><h3>${escape(worksheet)}</h3><ol><li>State the decision in one sentence.</li><li>Name the accountable human authority.</li><li>Attach evidence and unresolved objections.</li><li>Choose a reversible 30-day move.</li></ol></div>`,
    },
    uncertainty: {
      label: 'Uncertainty / Disconfirming evidence',
      title: 'What would change this conclusion',
      copy: `A serious future history carries its own stopping rules. Revisit this chapter when law, labor terms, audience behavior, energy constraints, model economics, or provenance standards move materially. A scenario that cannot be contradicted is theater, not decision support.`,
      feature: `<div class="boundary-card"><span>PROJECTION BOUNDARY</span><p>${escape(limitation)}</p></div>`,
    },
  };
  return { mode, ...sections[mode], diagram, worksheet, limitation };
}

function pageContent(brief, pageNumber) {
  const chapter = brief.chapters.find(({ pages }) => pageNumber >= pages.start && pageNumber <= pages.end) ?? brief.chapters.at(-1);
  const localPage = pageNumber - chapter.pages.start + 1;
  if (pageNumber === 1) return `<div class="cover-grid"><p>HARDMAGIC / TECHNICAL BRIEF</p><h1>${escape(brief.title)}</h1><blockquote>${escape(brief.thesis)}</blockquote><div><b>Decision edition · August 2026</b><span>${brief.pageCount} pages · Private recipient edition</span></div></div>`;
  if (pageNumber === brief.pageCount) return `<div class="closing"><p>HARDMAGIC CORPORATION</p><h2>Make the next decision inspectable.</h2><p>${escape(brief.decision)}</p><div class="rule"></div><p>Reply to the delivery message to request a bounded working session. This document is decision support, not legal, financial, security, or investment advice.</p><b>DREAM IN REALITY.</b></div>`;
  const authored = authoredBody(brief, chapter, pageNumber);
  return `<div class="running mode-${authored.mode}"><header><span>${escape(brief.title)}</span><b>${String(pageNumber).padStart(2, '0')} / ${brief.pageCount}</b></header><main><p class="kicker">${escape(authored.label)} · ${escape(chapter.title)} · ${localPage}</p><h2>${escape(authored.title)}</h2><p class="chapter-line">${escape(chapter.title)}</p><p class="lead">${escape(authored.copy)}</p><div class="feature">${authored.feature}</div><div class="columns"><div><h3>The operating question</h3><p>${escape(brief.decision)}</p><h3>Reader position</h3><p>This page is written for ${escape(pick(brief.audience, pageNumber - 1))}. Translate the scenario into that role’s actual authority, constraints, and evidence.</p></div><aside><span>FIGURE ${String(pageNumber - 1).padStart(2, '0')}</span><div class="diagram"><i></i><i></i><i></i><b>HM</b></div><h3>${escape(authored.diagram)}</h3><p>Conceptual operating diagram. Validate every boundary against the participating organization’s real systems.</p></aside></div></main><footer>HardMagic Corporation · Evidence cutoff 12 August 2026 · Scenario, not prediction · hardmagic.com</footer></div>`;
}

function documentFor(brief) {
  const pages = Array.from({ length: brief.pageCount }, (_, index) => `<section class="page">${pageContent(brief, index + 1)}</section>`).join('');
  return `<!doctype html><html><head><meta charset="utf-8"><title>${escape(brief.title)}</title><style>@page{size:Letter;margin:0}*{box-sizing:border-box}body{margin:0;color:#150c0f;font:15px/1.5 Arial,sans-serif}.page{position:relative;width:8.5in;height:11in;overflow:hidden;padding:.7in;background:#f5eee6;break-after:page}.page:nth-child(4n+2){background:#efe3d7}.cover-grid{height:100%;display:flex;flex-direction:column;justify-content:space-between;padding:.15in;background:radial-gradient(circle at 70% 18%,#c52a5266,transparent 2in),linear-gradient(145deg,#090608,#4f0a20 65%,#a4143d);color:#fff}.cover-grid>p,.kicker,header,footer,.workbench span,aside>span,.feature span{font-size:9px;font-weight:700;letter-spacing:.16em;text-transform:uppercase}.cover-grid h1{max-width:6.4in;margin:0;font:56px/.9 Georgia,serif;letter-spacing:-.05em}.cover-grid blockquote{max-width:6in;margin:0;font:21px/1.3 Georgia,serif}.cover-grid>div{display:flex;justify-content:space-between}.cover-grid>div span{color:#dccbd0}.running{height:100%;display:grid;grid-template-rows:auto 1fr auto}.running header{display:flex;justify-content:space-between;padding-bottom:14px;border-bottom:1px solid #baaeb0;color:#685a5e}.running main{padding-top:.3in}.kicker{color:#99143a}.running h2{max-width:6.7in;margin:10px 0 8px;font:37px/.96 Georgia,serif;letter-spacing:-.04em}.chapter-line{margin:0 0 12px;color:#99143a;font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}.lead{max-width:6.8in;margin-bottom:14px;font-size:15px;line-height:1.4}.feature{min-height:1.25in;margin:.16in 0;padding:.18in .22in;border:1px solid #aa969d;background:#fffaf4}.feature p,.feature blockquote{margin:7px 0 0}.feature blockquote{font:18px/1.3 Georgia,serif}.feature a{display:block;margin-top:8px;color:#8b1236;font-size:9px;font-weight:700}.worksheet-card ol{display:grid;grid-template-columns:1fr 1fr;gap:5px 20px;margin:8px 0 0;padding-left:18px;font-size:10px}.worksheet-card h3{margin:6px 0}.mode-projection .feature,.mode-uncertainty .feature{background:#170d12;color:#fff;border-color:#5e3b48}.mode-projection .feature a,.mode-uncertainty .feature a{color:#f57a9c}.columns{display:grid;grid-template-columns:1.08fr .92fr;gap:.32in;margin-top:.2in}.columns h3,.workbench b{font-size:12px}.columns p{color:#51464a;font-size:11px}.columns aside{padding:.18in;background:#140d10;color:#fff}.columns aside p{color:#c9bdc0;font-size:10px}.diagram{position:relative;height:1.25in;margin:10px 0;background:radial-gradient(circle,#9b153d 0 10%,#35131d 11% 35%,#140d10 36%)}.diagram i{position:absolute;left:50%;top:50%;width:43%;height:1px;background:#9a7781;transform-origin:left}.diagram i:nth-child(1){transform:rotate(20deg)}.diagram i:nth-child(2){transform:rotate(140deg)}.diagram i:nth-child(3){transform:rotate(260deg)}.diagram b{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}.workbench{display:grid;grid-template-columns:1fr 1fr;gap:1px;margin-top:.3in;background:#b8aaad}.workbench>div{min-height:1.25in;padding:.18in;background:#fffaf4}.workbench span{display:block;margin-bottom:8px;color:#99143a}.workbench b{display:block}.workbench p{margin:8px 0 0;color:#66595d;font-size:11px}.running footer{padding-top:12px;border-top:1px solid #baaeb0;color:#75686c}.closing{height:100%;display:flex;flex-direction:column;justify-content:center;background:radial-gradient(circle at 70% 25%,#85123555,transparent 2.5in),#090608;color:#fff;padding:.65in}.closing>p:first-child{font-size:10px;letter-spacing:.18em}.closing h2{margin:.2in 0;font:58px/.9 Georgia,serif;letter-spacing:-.05em}.closing p{max-width:5.8in;color:#cdbfc2;font-size:17px}.closing .rule{width:1.5in;height:5px;margin:.35in 0;background:#c52a52}.closing>b{margin-top:.5in;color:#e34a70;letter-spacing:.18em}</style></head><body>${pages}</body></html>`;
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
