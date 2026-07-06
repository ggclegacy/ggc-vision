import type { CardItem } from '../data/visionContent';
import type { CSSProperties } from 'react';

type EcosystemMapProps = {
  pillars: CardItem[];
};

export function EcosystemMap({ pillars }: EcosystemMapProps) {
  return (
    <div className="ecosystem-wrap">
      <div className="ecosystem-architecture">
        {pillars.map((pillar, index) => (
          <article
            className={`pillar-card ecosystem-node ecosystem-node-${index + 1}`}
            key={pillar.title}
            style={{ '--delay': `${index * 80}ms` } as CSSProperties}
          >
            <span className="pillar-number">{String(index + 1).padStart(2, '0')}</span>
            <p className="card-eyebrow">{pillar.eyebrow}</p>
            <h3>{pillar.title}</h3>
            <p>{pillar.body}</p>
          </article>
        ))}
        <div className="ecosystem-core">
          <span>GGC</span>
          <strong>Legacy Engine</strong>
          <small>Products + Protocols + Culture</small>
        </div>
      </div>
    </div>
  );
}
