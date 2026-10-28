import React, { Suspense, lazy, useEffect, useState } from 'react';
import { Navbar, Footer, Hero, About, Education, Projects, Skills, Experience, Achievements } from './components';
// Below-the-fold sections load on demand (imported by path so they get their own chunks).
const Certifications = lazy(() => import('./components/sections/Certifications'));
const Contact = lazy(() => import('./components/sections/Contact'));
function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => { const f = () => setShow(window.scrollY > 700); window.addEventListener('scroll', f, { passive: true }); return () => window.removeEventListener('scroll', f); }, []);
  return show ? <button aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 z-40 h-11 w-11 bg-lime text-ink font-bold">Up</button> : null;
}
export default function App() {
  const [dark, setDark] = useState(() => { try { return localStorage.getItem('theme') !== 'light'; } catch { return true; } });
  useEffect(() => {
    document.documentElement.classList.toggle('light', !dark);
    document.querySelector('meta[name=theme-color]')?.setAttribute('content', dark ? '#0b1020' : '#f8fafc');
    try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch { /* storage unavailable */ }
  }, [dark]);
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:z-50 focus:bg-lime focus:text-ink focus:p-3">Skip to content</a>
      <Navbar dark={dark} setDark={setDark} />
      <main id="main">
        <Hero /><About /><Education /><Projects /><Skills /><Experience /><Achievements />
        <Suspense fallback={<div className="h-96" />}><Certifications /><Contact /></Suspense>
      </main>
      <Footer /><BackToTop />
    </>
  );
}
