import React, { useState } from 'react';
import { meta } from '../../data';
import { Reveal } from '../ui';
export default function Contact() {
  const [f, setF] = useState({ name: '', email: '', message: '', company: '' }); const [busy, setBusy] = useState(false); const [err, setErr] = useState({}); const [status, setStatus] = useState(''); const [copied, setCopied] = useState(false);
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const copy = async () => { try { await navigator.clipboard.writeText(meta.email); setCopied(true); setTimeout(() => setCopied(false), 2000); } catch { window.prompt('Copy my email:', meta.email); } };
  const submit = (e) => {
    e.preventDefault(); if (f.company) return; const x = {};
    if (f.name.trim().length < 2) x.name = 'Enter your name.';
    if (!/^\S+@\S+\.\S+$/.test(f.email)) x.email = 'Enter a valid email address.';
    if (f.message.trim().length < 10) x.message = 'Write at least 10 characters.';
    setErr(x); if (Object.keys(x).length) return;
    setBusy(true); setTimeout(() => setBusy(false), 1500); window.location.href = `mailto:${meta.email}?subject=${encodeURIComponent('Portfolio message from ' + f.name)}&body=${encodeURIComponent(`${f.message}\n\n${f.name} (${f.email})`)}`;
    setStatus(`An email draft should have opened in your email app. Nothing is sent until you press send there. If it did not open, email ${meta.email} directly.`);
  };
  const E = ({ k }) => err[k] ? <p id={`e-${k}`} className="text-sm text-red-400 mt-1">{err[k]}</p> : null;
  return (
    <section id="contact" className="sec">
      <Reveal className="grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <h2 className="h2">Let's talk about an internship or a role.</h2>
          <p className="mt-4">{meta.relocation}.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={copy} className="btn">Copy email</button>
            <a href={meta.resume} download="Kunisetty_Rahithya_Resume.pdf" className="btn">Download resume</a>
          </div>
          <p aria-live="polite" className="mt-3 text-sm text-lime h-5">{copied ? 'Email copied to clipboard.' : ''}</p>
          <p className="mt-6 text-sm">{meta.email}<br />{meta.phone}</p>
          <p className="mt-4 flex gap-6 text-sm"><a className="underline underline-offset-4 hover:text-lime" href={meta.github} target="_blank" rel="noreferrer">GitHub</a><a className="underline underline-offset-4 hover:text-lime" href={meta.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></p>
        </div>
        <form onSubmit={submit} noValidate className="md:col-span-7 space-y-6">
          {[['name', 'Your name', 'text'], ['email', 'Your email', 'email']].map(([k, l, t]) => <div key={k}><label htmlFor={k} className="text-sm">{l}</label><input id={k} type={t} value={f[k]} onChange={set(k)} aria-invalid={!!err[k]} aria-describedby={`e-${k}`} className="inp" /><E k={k} /></div>)}
          <div><label htmlFor="message" className="text-sm">Message</label><textarea id="message" rows="4" value={f.message} onChange={set('message')} aria-invalid={!!err.message} aria-describedby="e-message" className="inp" /><E k="message" /></div>
          <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" value={f.company} onChange={set('company')} />
          <button type="submit" disabled={busy} className="btn btn-lime">{busy ? 'Opening email app...' : 'Open email draft'}</button>
          <p aria-live="polite" className="text-sm">{status}</p>
        </form>
      </Reveal>
    </section>
  );
}
