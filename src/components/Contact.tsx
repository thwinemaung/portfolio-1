'use client';
import { useReveal } from '@/hooks/useReveal';
import { IconArrowUpRight, socialIcon } from '@/components/Icons';
import type { ContactLink } from '@/sanity/lib/queries';

export default function Contact({ contactLinks }: { contactLinks: ContactLink[] }) {
  useReveal();
  return (
    <>
      <div className="sec-divider" />
      <section id="contact">
        <div className="wrap section">
          <div className="sec-row">
            <div><p className="sec-label rv">Contact</p></div>
            <div style={{ maxWidth: 520 }}>
              <p className="rv" style={{ fontSize: 15, color: 'var(--fg)', fontWeight: 500, marginBottom: 8 }}>Get in touch</p>
              <p className="rv d1" style={{ fontSize: 14, color: 'var(--fg-2)', lineHeight: 1.82, marginBottom: 32, fontWeight: 300 }}>
                Open to full-time roles, contract work, and interesting technical conversations. Usually respond within 1–2 business days.
              </p>
              <div className="rv d2" style={{ display: 'flex', flexDirection: 'column' }}>
                {contactLinks.map((c) => (
                  <a key={c.id} href={c.href}
                    style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 12px', marginLeft: -12, marginRight: -12, borderBottom: '1px solid var(--border-s)', textDecoration: 'none', borderRadius: 'var(--r)', transition: 'background var(--t)', cursor: 'pointer' }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--bg-card)')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                  >
                    <div style={{ width: 36, height: 36, borderRadius: 'var(--r)', background: 'var(--bg-raised)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--fg-2)', flexShrink: 0 }}>
                      {socialIcon(c.id)}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--fg)', marginBottom: 2 }}>{c.label}</div>
                      <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--accent)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{c.value}</div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
                      <span style={{ fontSize: 12, color: 'var(--fg-3)' }}>{c.note}</span>
                      <span style={{ color: 'var(--fg-3)' }}><IconArrowUpRight /></span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
