import React from 'react';
const A = 'rgb(var(--accent))', Ln = 'rgb(var(--line))', B = 'rgb(var(--ink2))', T = 'rgb(var(--fg))';
const s = (fill, stroke) => ({ style: { fill, stroke } });
export function ResumePreview() {
  return (<svg viewBox="0 0 320 220" className="w-full" aria-hidden><rect x="100" y="10" width="120" height="200" {...s(B, A)} />
    {[34, 50, 62, 74, 98, 110, 122, 146, 158, 170].map((y, i) => <rect key={y} x="112" y={y} width={i % 3 ? 96 : 52} height="5" {...s(i === 2 || i === 6 ? A : Ln, 'none')} />)}
    <rect x="112" y="18" width="30" height="6" {...s(T, 'none')} /><path d="M236 40h40M236 40l8-6M236 40l8 6" style={{ stroke: A, fill: 'none' }} /><text x="236" y="60" fontSize="9" fontFamily="monospace" style={{ fill: A }}>ATS</text></svg>);
}
const pts = [[160, 170], [135, 140], [118, 112], [108, 86], [150, 120], [150, 84], [150, 56], [168, 118], [172, 80], [174, 52], [186, 124], [194, 90], [198, 64]];
export function MousePreview() {
  return (<svg viewBox="0 0 320 220" className="w-full" aria-hidden><rect x="60" y="10" width="200" height="200" strokeDasharray="4 4" style={{ fill: 'none', stroke: Ln }} />
    {pts.map(([x, y], i) => <g key={i}>{i > 0 && <line x1={pts[i - 1][0]} y1={pts[i - 1][1]} x2={x} y2={y} style={{ stroke: Ln }} />}<circle cx={x} cy={y} r="3.5" {...s(i === 6 ? A : T, 'none')} /></g>)}
    <path d="M232 40l0 22 6-5 4 9 4-2-4-9 8-1z" {...s(A, 'none')} /></svg>);
}
export function SpamPreview() {
  const rows = [['Meeting notes for Monday', 'ham'], ['You won a free prize!!!', 'spam'], ['Assignment deadline', 'ham'], ['Claim your reward now', 'spam']];
  return (<svg viewBox="0 0 320 220" className="w-full" aria-hidden>{rows.map(([t, k], i) => <g key={t} transform={`translate(30 ${24 + i * 40})`}>
    <rect width="260" height="30" {...s(B, k === 'spam' ? A : Ln)} /><text x="10" y="19" fontSize="10" fontFamily="monospace" style={{ fill: T }}>{t}</text>
    <text x="226" y="19" fontSize="9" fontFamily="monospace" style={{ fill: k === 'spam' ? A : Ln }}>{k}</text></g>)}</svg>);
}
export const previews = { resume: ResumePreview, mouse: MousePreview, spam: SpamPreview };
