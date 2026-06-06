'use client';
import { useState, useEffect } from 'react';
import { useReveal } from '@/hooks/useReveal';
import { PROJECTS, FILTER_TYPES, type Project } from '@/data';
import { IconX, IconExtLink } from '@/components/Icons';

function ProjModal({ p, onClose }: { p: Project; onClose: () => void }) {
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', fn);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', fn); document.body.style.overflow = ''; };
  }, [onClose]);

  const isPersonal = p.kind === 'personal';
  return (
    <div className="modal-bg" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 18 }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 10, flexWrap: 'wrap' }}>
              <span className="tag">{p.type}</span>
              <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--fg-3)' }}>{p.year}</span>
            </div>
            <h2 style={{ fontSize: 19, fontWeight: 600, letterSpacing: '-0.025em', color: 'var(--fg)', marginBottom: 6 }}>{p.name}</h2>
            {!isPersonal && p.client && (
              <div style={{ fontSize: 13, color: 'var(--fg-2)' }}>for <span style={{ fontWeight: 500, color: 'var(--fg)' }}>{p.client}</span></div>
            )}
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--fg-3)', padding: 4, transition: 'color var(--t)', marginLeft: 12, flexShrink: 0 }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--fg)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--fg-3)')}
          ><IconX size={16} /></button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 0, padding: '14px 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', marginBottom: 20 }}>
          {([['Role', p.role], ['Duration', p.duration], [isPersonal ? 'Source' : 'Status', isPersonal ? (p.url || 'GitHub') : 'Private (NDA)']] as [string,string][]).map(([k, v], i) => (
            <div key={k} style={{ paddingLeft: i ? 16 : 0, borderLeft: i ? '1px solid var(--border-s)' : 'none' }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--fg-3)', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: 4 }}>{k}</div>
              <div style={{ fontSize: 12.5, color: 'var(--fg)', fontWeight: 500, lineHeight: 1.4, wordBreak: 'break-word' }}>{v}</div>
            </div>
          ))}
        </div>

        <p style={{ fontSize: 14, color: 'var(--fg-2)', lineHeight: 1.8, marginBottom: 18 }}>{p.desc}</p>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 24 }}>
          {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
        </div>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 18 }}>
          <p style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--fg-3)', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: 12 }}>Key outcomes</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
            {p.outcomes.map((o, i) => (
              <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <span style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--accent)', flexShrink: 0, marginTop: 1 }}>→</span>
                <span style={{ fontSize: 13, color: 'var(--fg-2)', lineHeight: 1.6 }}>{o}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
          {isPersonal && p.url && p.url !== 'private' ? (
            <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--accent)', textDecoration: 'none' }}>
              <IconExtLink size={11} /> {p.url}
            </a>
          ) : (
            <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--fg-3)' }}>Source under NDA — references on request</span>
          )}
          <button onClick={onClose}
            style={{ fontFamily: 'var(--sans)', fontSize: 13, color: 'var(--fg-2)', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--r)', padding: '7px 16px', cursor: 'pointer', transition: 'border-color var(--t)' }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--fg-2)')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
          >Close</button>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [modal, setModal] = useState<Project | null>(null);
  useReveal();

  const shown = PROJECTS.filter((p) => filter === 'All' || p.type === filter);

  return (
    <>
      <div className="sec-divider" />
      <section id="projects">
        <div className="wrap section">
          <div className="sec-row">
            <div>
              <p className="sec-label rv" style={{ marginBottom: 16 }}>Projects</p>
              <div className="rv d1" style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {FILTER_TYPES.map((f) => (
                  <button key={f} onClick={() => setFilter(f)}
                    style={{ fontFamily: 'var(--sans)', fontSize: 13, textAlign: 'left', background: filter === f ? 'var(--bg-card)' : 'none', color: filter === f ? 'var(--fg)' : 'var(--fg-2)', border: filter === f ? '1px solid var(--border)' : '1px solid transparent', borderRadius: 'var(--r)', padding: '5px 10px', cursor: 'pointer', transition: 'all var(--t)', fontWeight: filter === f ? 500 : 400 }}
                  >{f}</button>
                ))}
              </div>
            </div>
            <div>
              <div className="rv" style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 10 }}>
                <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--fg-3)' }}>{shown.length} of {PROJECTS.length}</span>
              </div>
              <div className="rv d1">
                <table className="proj-table">
                  <thead>
                    <tr>
                      <th style={{ width: 28 }}>#</th>
                      <th>Project</th>
                      <th>Stack</th>
                      <th>Year</th>
                    </tr>
                  </thead>
                  <tbody>
                    {shown.map((p, i) => (
                      <tr key={p.id} className="proj-row" onClick={() => setModal(p)}>
                        <td><span className="proj-num">{String(i + 1).padStart(2, '0')}</span></td>
                        <td>
                          <div className="proj-name">{p.name}</div>
                          <div className="proj-desc">{p.desc}</div>
                        </td>
                        <td><div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>{p.tags.map((t) => <span key={t} className="tag">{t}</span>)}</div></td>
                        <td><span className="proj-year">{p.year}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      {modal && <ProjModal p={modal} onClose={() => setModal(null)} />}
    </>
  );
}
