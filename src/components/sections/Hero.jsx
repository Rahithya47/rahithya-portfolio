import React from 'react';
import { meta, profiles } from '../../data';
import { Monogram } from '../ui';
export default function Hero() {
  const move = (e) => { const r = e.currentTarget.getBoundingClientRect(); e.currentTarget.style.setProperty('--x', e.clientX - r.left + 'px'); e.currentTarget.style.setProperty('--y', e.clientY - r.top + 'px'); };
  return (
    <header id="top" onMouseMove={move} style={{ '--x': '70%', '--y': '30%' }} className="relative min-h-screen grid-bg flex items-center overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(480px circle at var(--x) var(--y), rgb(var(--accent) / .12), transparent 65%)' }} />
      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-16 w-full grid lg:grid-cols-12 gap-12 items-end">
        <div className="lg:col-span-8">
          <p className="flex items-center gap-3 text-sm text-zinc-300">
            <span className="relative flex h-2.5 w-2.5"><span className="ping2 absolute inline-flex h-full w-full rounded-full bg-lime" /><span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-lime" /></span>
            Available for 2027 internships and entry-level roles
          </p>
          <p className="font-mono text-sm text-lime mt-6">Software Engineer in the Making | IT Undergraduate</p>
          <h1 className="font-display font-extrabold text-white text-5xl sm:text-6xl lg:text-[5.5rem] leading-[1.02] tracking-tight mt-4">
            Building thoughtful software. <span className="text-lime">Exploring intelligent systems.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed">I'm {meta.name}, an IT student at Vignan University, graduating in 2027. I build backend applications, AI-powered projects, and practical software solutions.</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#projects" className="btn btn-lime">Explore projects</a>
            <a href={meta.resume} download="Kunisetty_Rahithya_Resume.pdf" className="btn">Download resume</a>
            <a href="#contact" className="btn">Contact me</a>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">{profiles.slice(0, 2).map((p) => <li key={p.name}><a href={p.url} target="_blank" rel="noreferrer" className="hover:text-lime underline underline-offset-4">{p.name}</a></li>)}</ul>
        </div>
        <aside className="lg:col-span-4 border-l border-ink-line pl-8">
          <Monogram className="w-40" />
          <dl className="mt-8 space-y-4 text-sm">
            <div><dt className="text-zinc-500">Studying</dt><dd className="text-white">B.Tech Information Technology, 2027</dd></div>
            <div><dt className="text-zinc-500">Based in</dt><dd className="text-white">{meta.location}</dd></div>
            <div><dt className="text-zinc-500">Relocation</dt><dd className="text-white">{meta.relocation}</dd></div>
          </dl>
        </aside>
      </div>
    </header>
  );
}
