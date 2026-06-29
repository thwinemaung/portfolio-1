'use client';
import { useReveal } from '@/hooks/useReveal';
import { socialIcon, IconDownload } from '@/components/Icons';
import type { SocialLink } from '@/sanity/lib/queries';

const STATS = [
  { n: '2,847', label: 'cups of coffee',         foot: 'give or take' },
  { n: '∞',     label: 'tabs open',              foot: 'help' },
  { n: '127',   label: 'bugs blamed on caching', foot: 'not my fault' },
  { n: '6',     label: 'rubber ducks on staff',  foot: 'senior' },
];

export default function Hero({ socials }: { socials: SocialLink[] }) {
  useReveal();
  return (
    <section id="hero" className="hero-bg">
      <div className="wrap" style={{ paddingTop: 104, paddingBottom: 80 }}>
        <h1 className="rv d1" style={{ fontSize: 'clamp(2.2rem,4.5vw,3.4rem)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.1, color: 'var(--fg)', marginBottom: 14 }}>
          Alex Reyes
        </h1>
        <p className="rv d2" style={{ fontSize: 'clamp(1rem,2vw,1.15rem)', color: 'var(--fg-2)', fontWeight: 400, letterSpacing: '-0.015em', marginBottom: 20 }}>
          Senior Software Engineer — Backend &amp; Infrastructure
        </p>
        <p className="rv d3" style={{ fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.82, maxWidth: 520, marginBottom: 36, fontWeight: 300 }}>
          I build reliable backend systems and infrastructure that engineering teams can depend on — from distributed job queues and auth services to CI tooling and observability platforms.
        </p>

        {/* Social links + résumé */}
        <div className="rv d4" style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
          {socials.map((s) => (
            <a
              key={s.id} href={s.href} title={s.label} aria-label={s.label}
              style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 38, height: 38, borderRadius: 'var(--r)', color: 'var(--fg-3)', background: 'var(--bg-raised)', border: '1px solid var(--border)', textDecoration: 'none', transition: 'color var(--t), border-color var(--t), transform var(--t)' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--fg)'; e.currentTarget.style.borderColor = 'var(--fg-2)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--fg-3)'; e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'none'; }}
            >
              {socialIcon(s.id)}
            </a>
          ))}
          <div style={{ width: 1, height: 22, background: 'var(--border)' }} />
          <a href="#" download
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--sans)', fontSize: 13, fontWeight: 500, color: 'var(--bg)', background: 'var(--fg)', border: '1px solid var(--fg)', borderRadius: 'var(--r)', padding: '9px 14px', textDecoration: 'none', transition: 'opacity var(--t), transform var(--t)' }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.9'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'none'; }}
          >
            <IconDownload size={13} />
            Download résumé
            <span style={{ fontFamily: 'var(--mono)', fontSize: 10, fontWeight: 400, opacity: 0.6, marginLeft: 2 }}>PDF · 142KB</span>
          </a>
        </div>

        {/* Fun stats */}
        <div className="rv d4" style={{ marginTop: 40, paddingTop: 18, borderTop: '1px solid var(--border-s)' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '6px 22px', color: 'var(--fg-3)' }}>
            <span style={{ fontFamily: 'var(--caveat)', fontSize: 13, color: 'var(--fg-3)', marginRight: 2, fontStyle: 'italic' }}>p.s. —</span>
            {STATS.map((s, i) => (
              <span key={i} style={{ display: 'inline-flex', alignItems: 'baseline', gap: 6 }}>
                <span style={{ fontFamily: 'var(--caveat)', fontWeight: 600, fontSize: 22, color: 'var(--fg-2)', lineHeight: 1, letterSpacing: '-0.005em' }}>{s.n}</span>
                <span style={{ fontSize: 11.5, color: 'var(--fg-3)' }}>{s.label}</span>
                <span title={s.foot} style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--accent)', cursor: 'help', opacity: 0.7 }}>*</span>
                {i < STATS.length - 1 && <span style={{ color: 'var(--border)', marginLeft: 14, fontSize: 11 }}>·</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
