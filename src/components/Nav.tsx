'use client';
import { useEffect } from 'react';
import { useScrolled } from '@/hooks/useScrolled';
import { useActiveSection } from '@/hooks/useActiveSection';
import { scrollTo } from '@/lib/scroll';
import { SEC_IDS, SEC_LABELS } from '@/data';

export default function Nav() {
  const scrolled = useScrolled(30);
  const active = useActiveSection(SEC_IDS);

  useEffect(() => {
    let last = window.scrollY;
    const fn = () => {
      const cur = window.scrollY;
      const nav = document.querySelector('.nav');
      if (!nav) return;
      if (cur <= 80) nav.classList.remove('hide');
      else if (cur > last + 6) nav.classList.add('hide');
      else if (cur < last - 6) nav.classList.remove('hide');
      last = cur;
    };
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav className={`nav${scrolled ? ' sc' : ''}`}>
      <div className="nav-inner">
        <button className="nav-brand" onClick={() => scrollTo('hero')}>Alex Reyes</button>
        <div className="nav-links">
          {SEC_IDS.slice(1).map((id, i) => (
            <button
              key={id}
              className={`nav-a${active === id ? ' act' : ''}`}
              onClick={() => scrollTo(id)}
            >
              {SEC_LABELS[i + 1]}
            </button>
          ))}
        </div>
        <button className="nav-cta" onClick={() => scrollTo('contact')}>Contact</button>
      </div>
    </nav>
  );
}
