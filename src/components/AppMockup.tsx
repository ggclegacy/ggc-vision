type AppMockupProps = {
  modules: string[];
};

export function AppMockup({ modules }: AppMockupProps) {
  return (
    <div className="app-mockup" aria-label="Legacy Sanctum member app dashboard mockup">
      <div className="mockup-topbar">
        <div>
          <span>Legacy Sanctum</span>
          <strong>Private Command Center</strong>
        </div>
        <div className="status-chip">Protocol Live</div>
      </div>
      <div className="mockup-body">
        <aside className="mockup-sidebar">
          <span>Body</span>
          <span>Mind</span>
          <span>Discipline</span>
          <span>Circle</span>
        </aside>
        <main className="mockup-main">
          <div className="protocol-panel">
            <p>Today’s Operating Standard</p>
            <h3>Hydrate. Train. Recover. Build.</h3>
            <div className="progress-row">
              <span />
              <span />
              <span />
            </div>
          </div>
          <div className="module-grid">
            {modules.map((module) => (
              <div className="module-tile" key={module}>
                {module}
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
