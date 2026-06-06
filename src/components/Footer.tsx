'use client';
import { IconDownload } from '@/components/Icons';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--fg-3)' }}>
          alex.reyes · {new Date().getFullYear()}
        </span>
        <a href="#" download
          style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--sans)', fontSize: 12.5, fontWeight: 500, color: 'var(--bg)', background: 'var(--fg)', border: '1px solid var(--fg)', borderRadius: 'var(--r)', padding: '7px 12px', textDecoration: 'none', transition: 'opacity var(--t), transform var(--t)' }}
          onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.9'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'none'; }}
        >
          <IconDownload size={12} />
          Download résumé
          <span style={{ fontFamily: 'var(--mono)', fontSize: 10, fontWeight: 400, opacity: 0.6, marginLeft: 2 }}>PDF</span>
        </a>
      </div>
    </footer>
  );
}
