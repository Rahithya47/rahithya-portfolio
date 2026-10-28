import React, { useEffect, useState } from 'react';
import { Monogram } from '../ui';
import { meta } from '../../data';
export const sections = [['Home', 'top'], ['About', 'about'], ['Education', 'education'], ['Projects', 'projects'], ['Skills', 'skills'], ['Achievements', 'achievements'], ['Certifications', 'certifications'], ['Contact', 'contact']];
export default function Navbar({ dark, setDark }) {
  const [open, setOpen] = useState(false); const [active, setActive] = useState('top');
  useEffect(() => {
    const f = () => { let cur = 'top'; sections.forEach(([, id]) => { const el = document.getElementById(id); if (el && el.getBoundingClientRect().top <= 120) cur = id; }); setActive(cur); };
    f(); window.addEventListener('scroll', f, { passive: true }); return () => window.removeEventListener('scroll', f);
  }, []);
  const toggle = <button onClick={() => setDark(!dark)} aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'} className="btn !px-3 !py-2">{dark ? 'Light' : 'Dark'}</button>;
  return (
    <nav aria-label="Main" className="fixed top-0 inset-x-0 z-40 bg-ink/90 backdrop-blur border-b border-ink-line">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        <a href="#top" aria-label="Kunisetty Rahithya, home" className="w-10 shrink-0"><Monogram /></a>
        <ul className="hidden lg:flex gap-5 text-sm">{sections.map(([l, id]) => <li key={id}><a href={`#${id}`} aria-current={active === id ? 'true' : undefined} className={`transition-colors hover:text-lime ${active === id ? 'text-lime' : ''}`}>{l}</a></li>)}</ul>
        <div className="flex items-center gap-2">
          {toggle}
          <a href={meta.resume} download="Kunisetty_Rahithya_Resume.pdf" className="btn btn-lime !px-3 !py-2">Resume</a>
          <button className="lg:hidden btn !px-3 !py-2" aria-expanded={open} aria-controls="m-menu" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}</button>
        </div>
      </div>
      {open && <ul id="m-menu" className="lg:hidden px-6 pb-6 space-y-3 text-lg">{sections.map(([l, id]) => <li key={id}><a href={`#${id}`} onClick={() => setOpen(false)} className={active === id ? 'text-lime' : 'text-white'}>{l}</a></li>)}</ul>}
    </nav>
  );
}
