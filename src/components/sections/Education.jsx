import React from 'react';
import { education } from '../../data';
import { Reveal } from '../ui';
export default function Education() {
  const [main, ...rest] = education;
  return (
    <section id="education" className="sec">
      <Reveal>
        <h2 className="h2">Education.</h2>
        <div className="mt-10 grid md:grid-cols-12 gap-px bg-ink-line border border-ink-line">
          <article className="md:col-span-7 bg-ink p-8">
            <p className="text-sm text-lime">{main.when}</p>
            <h3 className="font-display text-2xl text-white mt-2">{main.level}</h3>
            <p className="mt-2">{main.school}</p><p className="text-sm">{main.place}</p>
            <p className="mt-4 font-display text-3xl text-white">{main.score}</p>
            <p className="mt-6 text-sm text-white">Relevant coursework</p>
            <ul className="mt-3 flex flex-wrap gap-2">{main.courses.map((c) => <li key={c} className="chip">{c}</li>)}</ul>
          </article>
          <div className="md:col-span-5 grid gap-px">
            {rest.map((e) => <article key={e.level} className="bg-ink p-8"><p className="text-sm text-lime">{e.when}</p><h3 className="font-display text-xl text-white mt-1">{e.level}</h3><p className="mt-1">{e.school}</p><p className="mt-3 font-display text-2xl text-white">{e.score}</p></article>)}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
