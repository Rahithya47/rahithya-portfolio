import React from 'react';
import { experience } from '../../data';
import { Reveal } from '../ui';
export default function Experience() {
  return (
    <section id="experience" className="sec">
      <Reveal>
        <h2 className="h2">Experience and practical work.</h2>
        <p className="mt-4 max-w-xl">I have no full-time employment yet. This is my project work, virtual experience and leadership. I'm looking for a 2027 internship or entry-level role and I'm open to relocation, Bengaluru preferred.</p>
        <ol className="mt-10 border-l border-ink-line ml-1">
          {experience.map((e) => (
            <li key={e.title} className="relative pl-8 pb-8">
              <span aria-hidden className="absolute -left-[5px] top-2 h-2.5 w-2.5 bg-lime" />
              <span className="text-sm text-lime">{e.when}</span>
              <h3 className="text-white font-display text-xl">{e.title}</h3>
              <p className="text-sm">{e.org}</p><p className="mt-2 max-w-xl">{e.note}</p>
            </li>))}
        </ol>
      </Reveal>
    </section>
  );
}
