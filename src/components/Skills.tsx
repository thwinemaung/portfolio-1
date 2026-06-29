'use client';
import { useReveal } from '@/hooks/useReveal';
import type { SkillGroup } from '@/sanity/lib/queries';

export default function Skills({ skills }: { skills: SkillGroup[] }) {
  useReveal();
  return (
    <>
      <div className="sec-divider" />
      <section id="skills">
        <div className="wrap section">
          <div className="sec-row">
            <div><p className="sec-label rv">Skills</p></div>
            <div className="rv d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '26px 48px' }}>
              {skills.map((g) => (
                <div key={g.cat} className="skill-section">
                  <p className="skill-cat">{g.cat}</p>
                  <div className="skill-tags">
                    {g.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
