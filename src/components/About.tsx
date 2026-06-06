'use client';
import { useReveal } from '@/hooks/useReveal';

export default function About() {
  useReveal();
  return (
    <>
      <div className="sec-divider" />
      <section id="about">
        <div className="wrap section">
          <div className="sec-row">
            <div><p className="sec-label rv">About</p></div>
            <div>
              <p className="rv" style={{ fontSize: 15, color: 'var(--fg)', lineHeight: 1.82, marginBottom: 14, maxWidth: 600 }}>
                I&apos;m a backend and infrastructure engineer with five years of experience building the systems products rely on — job queues, auth services, APIs, CI tooling, and observability platforms.
              </p>
              <p className="rv d1" style={{ fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.82, marginBottom: 24, fontWeight: 300, maxWidth: 600 }}>
                I care about correctness, reliability, and writing code the next engineer can understand. Good documentation and clear API design are part of the job, not afterthoughts.
              </p>
              <div className="rv d2" style={{ display: 'flex', gap: 7, flexWrap: 'wrap' }}>
                {['Distributed Systems', 'API Design', 'Developer Tooling', 'Open Source'].map((t) => (
                  <span key={t} className="tag hi">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
