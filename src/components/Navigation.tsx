import type { NavItem } from '../data/visionContent';

type NavigationProps = {
  items: NavItem[];
  activeId?: string;
};

export function Navigation({ items, activeId }: NavigationProps) {
  return (
    <header className="navigation">
      <a className="brand-mark" href="#arrival" aria-label="Groomed Gent Co. arrival">
        <span className="brand-sigil">GGC</span>
        <span>
          <strong>Groomed Gent Co.</strong>
          <small>The Legacy Blueprint</small>
        </span>
      </a>
      <nav className="nav-links" aria-label="Section navigation">
        {items.map((item) => (
          <a
            key={item.target}
            href={`#${item.target}`}
            className={activeId === item.target ? 'is-active' : undefined}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
