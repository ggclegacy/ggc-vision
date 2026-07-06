import type { ReactNode } from 'react';

type SectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
  variant?: 'default' | 'hero' | 'compact';
};

export function Section({ id, eyebrow, title, intro, children, variant = 'default' }: SectionProps) {
  const sectionClass = `section-${id.replace(/[^a-z0-9]+/gi, '-')}`;

  return (
    <section id={id} className={`section section-${variant} ${sectionClass}`}>
      <div className="section-inner">
        <div className="section-heading">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h2>{title}</h2>
          {intro ? <p className="section-intro">{intro}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
