import React, { useEffect, useRef, useState } from 'react';
import { projects, meta } from '../../data';
import { previews } from '../previews';
import { Reveal } from '../ui';

function CaseStudy({ p, onClose }) {
  const btn = useRef(); const root = useRef(); const Pv = previews[p.id];
  useEffect(() => {
    const k = (e) => e.key === 'Escape' && onClose();
    const prev = document.activeElement;
    const trap = (e) => {
      if (e.key !== 'Tab') return;
      const f = [...root.current.querySelectorAll('a[href],button')]; const a = f[0], z = f[f.length - 1];
      if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); }
      else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); }
    };
    document.addEventListener('keydown', k); document.addEventListener('keydown', trap); document.body.style.overflow = 'hidden'; btn.current.focus();
    return () => { document.removeEventListener('keydown', k); document.removeEventListener('keydown', trap); document.body.style.overflow = ''; prev && prev.focus(); };
  }, [onClose]);
  const H = ({ children }) => <h4 className="text-white font-display text-xl mt-10 mb-3">{children}</h4>;
  return (
    <div role="dialog" aria-modal="true" aria-label={`${p.title} case study`} ref={root} className="fixed inset-0 z-50 bg-ink overflow-y-auto" onClick={onClose}>
      <div className="max-w-3xl mx-auto px-6 py-16" onClick={(e) => e.stopPropagation()}>
        <button ref={btn} onClick={onClose} className="btn mb-10">Close case study</button>
        <p className="text-lime text-sm">{p.kind}</p>
        <h3 className="font-display text-4xl md:text-5xl font-bold text-white mt-2">{p.title}</h3>
        <div className="mt-8 border border-ink-line p-4 grid-bg"><Pv /></div>
        {p.screenshots.length ? <div className="mt-4 grid gap-4">{p.screenshots.map((x) => <img key={x.src} src={x.src} alt={x.alt} loading="lazy" className="w-full border border-ink-line" />)}</div> : <p className="text-xs mt-2 text-zinc-500">Illustration of the concept, not a screenshot.</p>}
        <H>The problem</H><p>{p.problem}</p>
        <H>My solution</H><p>{p.solution}</p>
        <H>What I built</H><ul className="list-disc pl-5 space-y-1">{p.contribution.map((c) => <li key={c}>{c}</li>)}</ul>
        <H>Architecture</H>
        <ol className="flex flex-col md:flex-row md:items-stretch" aria-label="Data flow, step by step">{p.flow.map((st, i) => <li key={st} className="flex flex-col md:flex-row md:items-center md:flex-1"><span className="border border-ink-line px-3 py-3 text-sm text-white text-center md:flex-1 md:h-full flex items-center justify-center"><span className="text-lime mr-2" aria-hidden>{i + 1}</span>{st}</span>{i < p.flow.length - 1 && <span aria-hidden className="self-center w-px h-5 md:w-4 md:h-px bg-lime" />}</li>)}</ol>
        {p.api && <><H>API example</H><p className="text-sm text-white">{p.api.title}</p><pre className="mt-2 overflow-x-auto border border-ink-line bg-ink-2 p-4 text-xs font-mono text-zinc-300">{p.api.request}{'\n\n'}{p.api.response}</pre></>}
        <H>Engineering decision</H><ul className="list-disc pl-5">{p.decisions.map((d) => <li key={d}>{d}</li>)}</ul>
        {p.results && <><H>Results</H><ul className="list-disc pl-5">{p.results.map((r) => <li key={r}>{r}</li>)}</ul></>}
        <H>Tech stack</H><ul className="flex flex-wrap gap-2">{p.stack.map((s) => <li key={s} className="chip">{s}</li>)}</ul>
        <div className="mt-10 flex gap-3"><a href={p.repo || meta.github} target="_blank" rel="noreferrer" className="btn btn-lime">{p.repo ? 'View repository' : 'GitHub profile'}</a>{p.demo && <a href={p.demo} target="_blank" rel="noreferrer" className="btn">Live demo</a>}</div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [open, setOpen] = useState(null); const [f, setF] = useState('All');
  return (
    <section id="projects" className="sec">
      <h2 className="h2 max-w-2xl">Three projects, each built end to end.</h2>
      <p className="mt-4 max-w-lg">Open any project for the problem, my solution, what I built, and how it works.</p>
      <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects">{['All', 'Backend', 'AI / ML', 'Computer Vision'].map((c) => <button key={c} className="chip" aria-pressed={f === c} onClick={() => setF(c)}>{c}</button>)}</div>
      <div className="mt-16 space-y-24">
        {projects.filter((p) => f === 'All' || p.filters.includes(f)).map((p, i) => { const Pv = previews[p.id]; const flip = i % 2; return (
          <Reveal key={p.id} className="grid md:grid-cols-12 gap-8 items-center group">
            <button onClick={() => setOpen(p)} aria-label={`Open ${p.title} case study`} className={`md:col-span-7 border border-ink-line p-6 grid-bg group-hover:border-lime transition-colors ${flip ? 'md:order-2' : ''}`}>
              <div className="group-hover:scale-105 transition-transform duration-500"><Pv /></div>
            </button>
            <div className={`md:col-span-5 ${flip ? 'md:order-1' : ''}`}>
              <p className="text-lime text-sm">{i === 0 ? 'Featured. ' : ''}{p.kind}</p>
              <h3 className="font-display text-3xl font-bold text-white mt-2">{p.title}</h3>
              <p className="mt-4">{p.summary}</p>
              <ul className="mt-5 flex flex-wrap gap-2">{p.stack.map((s) => <li key={s} className="chip">{s}</li>)}</ul>
              <button onClick={() => setOpen(p)} className="btn mt-6">Read case study</button>
            </div>
          </Reveal>); })}
      </div>
      {open && <CaseStudy p={open} onClose={() => setOpen(null)} />}
    </section>
  );
}
