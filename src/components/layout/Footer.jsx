import React from 'react';
import { meta } from '../../data';
import { sections } from './Navbar';
export default function Footer() {
  return (
    <footer className="border-t border-ink-line">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-12 gap-8 text-sm">
        <div className="md:col-span-5"><p className="font-display text-xl text-white">{meta.name}</p><p className="mt-2">Practical software and intelligent systems. Open to 2027 internships and entry-level roles.</p></div>
        <nav aria-label="Footer" className="md:col-span-4"><ul className="grid grid-cols-2 gap-2">{sections.map(([l, id]) => <li key={id}><a href={`#${id}`} className="hover:text-lime">{l}</a></li>)}</ul></nav>
        <ul className="md:col-span-3 space-y-2">
          <li><a href={meta.github} target="_blank" rel="noreferrer" className="hover:text-lime">GitHub</a></li>
          <li><a href={meta.linkedin} target="_blank" rel="noreferrer" className="hover:text-lime">LinkedIn</a></li>
          <li><a href={`mailto:${meta.email}`} className="hover:text-lime">{meta.email}</a></li>
          <li><a href="#top" className="hover:text-lime">Back to top</a></li>
        </ul>
      </div>
      <p className="border-t border-ink-line px-6 py-5 text-xs text-center">© {new Date().getFullYear()} {meta.name}</p>
    </footer>
  );
}
