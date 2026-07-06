import type { CardItem } from '../data/visionContent';

type RoadmapProps = {
  phases: CardItem[];
};

export function Roadmap({ phases }: RoadmapProps) {
  return (
    <div className="roadmap">
      {phases.map((phase) => (
        <article className="roadmap-phase" key={phase.eyebrow}>
          <p className="card-eyebrow">{phase.eyebrow}</p>
          <h3>{phase.title}</h3>
          <p>{phase.body}</p>
        </article>
      ))}
    </div>
  );
}
