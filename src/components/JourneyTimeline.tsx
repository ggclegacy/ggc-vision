type JourneyTimelineProps = {
  steps: string[];
};

export function JourneyTimeline({ steps }: JourneyTimelineProps) {
  return (
    <div className="timeline" aria-label="Customer journey">
      {steps.map((step, index) => (
        <div className="timeline-step" key={step}>
          <span>{String(index + 1).padStart(2, '0')}</span>
          <strong>{step}</strong>
        </div>
      ))}
    </div>
  );
}
