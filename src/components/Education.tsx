'use client';
import { useReveal } from '@/hooks/useReveal';
import type { SanityEducation, SanityCertification } from '@/sanity/lib/queries';

export default function Education({
  education,
  certifications,
}: {
  education: SanityEducation[];
  certifications: SanityCertification[];
}) {
  useReveal();
  return (
    <>
      <div className="sec-divider" />
      <section id="education">
        <div className="wrap section">
          <div className="sec-row">
            <div><p className="sec-label rv">Education &amp;<br />Certificates</p></div>
            <div>
              <div className="rv d1" style={{ marginBottom: 32 }}>
                {education.map((e, i) => (
                  <div key={i} className="xrow">
                    <div className="xrow-head">
                      <span className="xrow-title">{e.degree}</span>
                      <span className="xrow-period">{e.year}</span>
                    </div>
                    <div className="xrow-sub">{e.school}</div>
                    {e.highlights && e.highlights.length > 0 ? (
                      e.highlights.map((h, hi) => (
                        <div key={hi} className="xrow-desc">{h}</div>
                      ))
                    ) : (
                      <div className="xrow-desc">{e.desc}</div>
                    )}
                  </div>
                ))}
              </div>
              <p className="sec-label rv" style={{ marginBottom: 12 }}>Certifications</p>
              <div className="rv d2">
                {certifications.map((c, i) => (
                  <div key={i} className="cert-row">
                    <span className="cert-badge">{c.badge}</span>
                    <div style={{ flex: 1 }}>
                      <div className="cert-name">{c.name}</div>
                      <div className="cert-issuer">{c.issuer}</div>
                    </div>
                    <span className="cert-year">{c.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
