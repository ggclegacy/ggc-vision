import type { CardItem } from '../data/visionContent';

type CardGridProps = {
  items: CardItem[];
  className?: string;
};

export function CardGrid({ items, className = '' }: CardGridProps) {
  return (
    <div className={`card-grid ${className}`}>
      {items.map((item) => (
        <article className="glass-card" key={item.title}>
          {item.eyebrow ? <p className="card-eyebrow">{item.eyebrow}</p> : null}
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </article>
      ))}
    </div>
  );
}
