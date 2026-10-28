import React, { useState } from 'react';
import { certifications } from '../../data';
import { Reveal } from '../ui';
const cats = ['All', ...new Set(certifications.map((c) => c.category))];
export default function Certifications() {
  const [cat, setCat] = useState('All');
  return (
    <section id="certifications" className="sec">
      <Reveal>
        <h2 className="h2">Certifications.</h2>
        <p className="mt-4 max-w-xl text-sm">Cisco and Simplilearn items are course completions. Accenture and TCS are virtual job simulations, not formal professional certifications.</p>
        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter certifications">{cats.map((c) => <button key={c} className="chip" aria-pressed={cat === c} onClick={() => setCat(c)}>{c}</button>)}</div>
        <ul className="mt-8 divide-y divide-ink-line border-y border-ink-line">
          {certifications.filter((c) => cat === 'All' || c.category === cat).map((c) => <li key={c.title} className="py-4 flex justify-between gap-6">{c.url ? <a href={c.url} target="_blank" rel="noreferrer" className="text-white underline underline-offset-4 hover:text-lime">{c.title}</a> : <span className="text-white">{c.title}</span>}<span className="text-sm shrink-0 text-right">{c.issuer}<span className="block text-xs text-zinc-500">{c.kind}</span></span></li>)}
        </ul>
      </Reveal>
    </section>
  );
}
