import React from 'react';
import { highlights, learning } from '../../data';
import { Reveal } from '../ui';
export default function About() {
  return (
    <section id="about" className="sec">
      <Reveal className="grid md:grid-cols-12 gap-12">
        <div className="md:col-span-7">
          <h2 className="h2">I like building practical software.</h2>
          <div className="mt-6 space-y-4 leading-relaxed">
            <p>I'm Kunisetty Rahithya, a B.Tech Information Technology student at Vignan's Foundation for Science, Technology & Research, graduating in 2027. I enjoy building practical software, from Python and Flask backend applications to computer vision and machine learning projects.</p>
            <p>I like writing reliable code, solving problems, building useful APIs, and improving software through testing and automation. I'm also expanding my knowledge of modern frontend development, Java, cloud technologies and software engineering practices.</p>
            <p>I'm looking for a 2027 internship or an entry-level role in Python, backend, AI/ML or full-stack development.</p>
          </div>
          <div className="mt-8"><p className="text-sm text-white">Currently exploring</p><ul className="mt-3 flex flex-wrap gap-2">{learning.map((l) => <li key={l} className="chip border-dashed">{l}</li>)}</ul></div>
        </div>
        <dl className="md:col-span-5 grid grid-cols-2 gap-px bg-ink-line self-start">
          {highlights.map(([v, l]) => <div key={l} className="bg-ink p-6"><dd className="font-display text-3xl text-white font-bold">{v}</dd><dt className="text-sm mt-1">{l}</dt></div>)}
        </dl>
      </Reveal>
    </section>
  );
}
