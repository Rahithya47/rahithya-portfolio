import React, { useEffect, useRef } from 'react';
export function Reveal({ children, className = '' }) {
  const r = useRef();
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { r.current.classList.add('in'); o.disconnect(); } }, { threshold: 0.12 });
    o.observe(r.current); return () => o.disconnect();
  }, []);
  return <div ref={r} className={`rv ${className}`}>{children}</div>;
}
export function Monogram({ className = '' }) {
  const p = { fill: 'none', stroke: 'currentColor', strokeWidth: 2.5, strokeLinecap: 'square', className: 'draw' };
  return (
    <svg viewBox="0 0 64 48" className={`text-lime ${className}`} role="img" aria-label="KR monogram">
      <path {...p} d="M12 8V40M12 24L28 8M12 24L28 40" /><path {...p} d="M36 40V8H46Q54 8 54 16Q54 24 46 24H36M46 24L54 40" />
    </svg>
  );
}
