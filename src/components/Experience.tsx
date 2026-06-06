'use client';
import { useState, useEffect } from 'react';
import { useReveal } from '@/hooks/useReveal';
import { EXPERIENCE, type Experience as Exp } from '@/data';
import { IconX, IconExtLink } from '@/components/Icons';

function ExpModal({ e, onClose }: { e: Exp; onClose: () => void }) {
  useEffect(() => {
    const fn = (ev: KeyboardEvent) => { if (ev.key === 'Escape') onClose(); };
    document.addEventListener('keydown', fn);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', fn); document.body.style.overflow = ''; };
  }, [onClose]);

  return (
    <div className="modal-bg" onClick={(ev) => { if (ev.target === ev.currentTarget) onClose(); }}>
      <div className="modal">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 18 }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 10, flexWrap: 'wrap' }}>
              <span className="tag">{e.company}</span>
              <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--fg-3)' }}>{e.period}</span>
            </div>
            <h2 style={{ fontSize: 19, fontWeight: 600, letterSpacing: '-0.025em', color: 'var(--fg)', marginBottom: 6 }}>{e.title}</h2>
            <div style={{ fontSize: 13, color: 'var(--fg-2)' }}>{e.location}</div>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--fg-3)', padding: 4, transition: 'color var(--t)', marginLeft: 12, flexShrink: 0 }}
            onMouseEnter={(ev) => (ev.currentTarget.style.color = 'var(--fg)')}
            onMouseLeave={(ev) => (ev.currentTarget.style.color = 'var(--fg-3)')}
          ><IconX size={16} /></button>
        </div>

        <p style={{ fontSize: 14, color: 'var(--fg-2)', lineHeight: 1.8, marginBottom: 20, paddingTop: 18, borderTop: '1px solid var(--border)' }}>{e.summary}</p>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 18, marginBottom: 20 }}>
          <p style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--fg-3)', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: 12 }}>Highlights</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
            {e.bullets.map((b, i) => (
              <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <span style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--accent)', flexShrink: 0, marginTop: 1 }}>→</span>
                <span style={{ fontSize: 13, color: 'var(--fg-2)', lineHeight: 1.6 }}>{b}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 18 }}>
          <p style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--fg-3)', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: 12 }}>Stack</p>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {e.stack.map((s) => <span key={s} className="tag">{s}</span>)}
          </div>
        </div>

        <div style={{ marginTop: 24, display: 'flex', justifyContent: 'flex-end' }}>
          <button onClick={onClose}
            style={{ fontFamily: 'var(--sans)', fontSize: 13, color: 'var(--fg-2)', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--r)', padding: '7px 16px', cursor: 'pointer', transition: 'border-color var(--t)' }}
            onMouseEnter={(ev) => (ev.currentTarget.style.borderColor = 'var(--fg-2)')}
            onMouseLeave={(ev) => (ev.currentTarget.style.borderColor = 'var(--border)')}
          >Close</button>
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const [modal, setModal] = useState<Exp | null>(null);
  useReveal();
  return (
    <>
      <div className="sec-divider" />
      <section id="experience">
        <div className="wrap section">
          <div className="sec-row">
            <div>
              <p className="sec-label rv">Experience</p>
              <p className="rv d1" style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--fg-3)', marginTop: 8, lineHeight: 1.6 }}>
                {EXPERIENCE.length} roles<br />~7 yrs total
              </p>
            </div>
            <div className="rv d1">
              {EXPERIENCE.map((e, i) => (
                <div key={i} className="exp-row" onClick={() => setModal(e)} style={{ cursor: 'pointer' }}>
                  <div className="exp-head">
                    <div className="exp-title-wrap">
                      <span className="exp-title">{e.title}</span>
                      <div className="exp-co">{e.company}</div>
                      <div className="exp-summary">{e.summary}</div>
                    </div>
                    <div className="exp-period">{e.period}</div>
                    <div className="exp-caret"><IconExtLink size={12} /></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {modal && <ExpModal e={modal} onClose={() => setModal(null)} />}
    </>
  );
}
