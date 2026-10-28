import React from 'react';
import { achievements, profiles } from '../../data';
import { Reveal } from '../ui';
export default function Achievements() {
  return (
    <section id="achievements" className="sec">
      <Reveal>
        <h2 className="h2">Achievements and coding profiles.</h2>
        <ul className="mt-10 divide-y divide-ink-line border-y border-ink-line">{achievements.map((a) => <li key={a.title} className="py-5"><h3 className="text-white font-display text-xl">{a.title}</h3><p className="mt-1">{a.text}</p></li>)}</ul>
        <ul className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-line border border-ink-line">{profiles.map((p) => <li key={p.name} className="bg-ink"><a href={p.url} target="_blank" rel="noreferrer" aria-label={`${p.name} profile, ${p.handle}, opens in a new tab`} className="block p-5 hover:bg-ink-2 hover:text-lime transition-colors"><span className="text-white block">{p.name}</span><span className="text-sm">{p.handle}</span></a></li>)}</ul>
      </Reveal>
    </section>
  );
}
