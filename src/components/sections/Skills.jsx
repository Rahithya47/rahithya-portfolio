import React, { useState } from 'react';
import { skillGroups, learning } from '../../data';
import { Reveal } from '../ui';
export default function Skills() {
  const [cat, setCat] = useState('All');
  const shown = skillGroups.filter(([n]) => cat === 'All' || n === cat);
  return (
    <section id="skills" className="sec">
      <Reveal>
        <h2 className="h2">Skills I've used in my projects.</h2>
        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter skills by category">
          {['All', ...skillGroups.map(([n]) => n)].map((n) => <button key={n} className="chip" aria-pressed={cat === n} onClick={() => setCat(n)}>{n}</button>)}
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
          {shown.map(([n, items]) => <div key={n} className="border-t border-ink-line pt-4"><h3 className="text-white font-display text-xl">{n}</h3><p className="mt-2 leading-relaxed">{items.join(', ')}</p></div>)}
        </div>
        <div className="mt-16 border-t border-lime/40 pt-6">
          <h3 className="text-white font-display text-xl">Currently learning</h3>
          <p className="text-sm mt-1">Not yet used in a finished project.</p>
          <ul className="mt-4 flex flex-wrap gap-2">{learning.map((l) => <li key={l} className="chip border-dashed">{l}</li>)}</ul>
        </div>
      </Reveal>
    </section>
  );
}
