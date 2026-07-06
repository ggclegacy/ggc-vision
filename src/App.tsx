import { useEffect, useState } from 'react';
import { AppMockup } from './components/AppMockup';
import { CardGrid } from './components/CardGrid';
import { EcosystemMap } from './components/EcosystemMap';
import { JourneyTimeline } from './components/JourneyTimeline';
import { Navigation } from './components/Navigation';
import { Roadmap } from './components/Roadmap';
import { Section } from './components/Section';
import ggcLogo from './assets/ggclogo.png';
import {
  appModules,
  circleCards,
  crewCards,
  ecosystemPillars,
  journeySteps,
  marketCards,
  navItems,
  reserveProducts,
  roadmapPhases,
  sanctumProducts,
  winCards,
} from './data/visionContent';

function ProductList({ items, tone }: { items: string[]; tone: 'reserve' | 'sanctum' }) {
  return (
    <div className={`product-grid product-grid-${tone}`}>
      {items.map((item) => (
        <article className="product-card" key={item}>
          <span />
          <strong>{item}</strong>
        </article>
      ))}
    </div>
  );
}

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function App() {
  const [activeId, setActiveId] = useState('arrival');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('.hero-section, .section'));
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      sections.forEach((section) => section.classList.add('is-visible'));
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.16 },
    );

    const activeObserver = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveId(visibleEntry.target.id);
        }
      },
      {
        rootMargin: '-34% 0px -52% 0px',
        threshold: [0.12, 0.28, 0.44, 0.6],
      },
    );

    sections.forEach((section) => {
      revealObserver.observe(section);
      activeObserver.observe(section);
    });

    const handleScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      setScrollProgress(Math.min(1, Math.max(0, progress)));
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      revealObserver.disconnect();
      activeObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true">
        <span style={{ transform: `scaleX(${scrollProgress})` }} />
      </div>
      <Navigation items={navItems} activeId={activeId} />
      <main>
        <section id="arrival" className="hero-section">
          <div className="hero-content">
            <p className="eyebrow">Groomed Gent Co.</p>
            <h1>The Legacy Blueprint</h1>
            <p className="hero-subtitle">
              The full Groomed Gent Co. vision — from premium grooming to men’s wellness, private
              membership, barber culture, and legacy-building.
            </p>
            <p className="tagline">Where Grooming Meets Health. Where Mindset Builds Legacy.</p>
            <p className="hero-statement">
              Groomed Gent Co. is building a premium masculine ecosystem for men who want to look
              sharper, live stronger, operate with discipline, and build something that lasts.
            </p>
            <div className="button-row">
              <button onClick={() => scrollToSection('market-gap')}>Explore the Vision</button>
              <button className="button-secondary" onClick={() => scrollToSection('ecosystem')}>
                View the Ecosystem
              </button>
            </div>
          </div>
          <div className="hero-emblem" aria-label="Groomed Gent Co. logo emblem">
            <div className="emblem-aura" aria-hidden="true" />
            <div className="emblem-plate" aria-hidden="true" />
            <div className="emblem-ring emblem-ring--machined" aria-hidden="true" />
            <div className="emblem-ring emblem-ring--outer" aria-hidden="true" />
            <div className="emblem-ring emblem-ring--segmented" aria-hidden="true" />
            <div className="emblem-ring emblem-ring--inner" aria-hidden="true" />
            <div className="emblem-ring emblem-ring--precision" aria-hidden="true" />
            <div className="emblem-orbit" aria-hidden="true" />
            <div className="emblem-crosshair" aria-hidden="true" />
            <div className="emblem-compass" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="emblem-node emblem-node--one" aria-hidden="true" />
            <div className="emblem-node emblem-node--two" aria-hidden="true" />
            <div className="emblem-node emblem-node--three" aria-hidden="true" />
            <div className="hero-logo-stage">
              <img className="hero-logo" src={ggcLogo} alt="Groomed Gent Co. logo" />
            </div>
          </div>
        </section>

        <Section
          id="market-gap"
          eyebrow="Market Gap"
          title="Men Are Ready for More Than Products"
          intro="Most men’s brands fall into weak lanes: cheap basic grooming, loud gym-bro supplements, generic wellness apps, or luxury without a real masculine operating system."
        >
          <div className="positioning-line">
            Groomed Gent Co. sits at the intersection of grooming, wellness, discipline, culture,
            and legacy.
          </div>
          <CardGrid items={marketCards} />
        </Section>

        <Section id="ecosystem" eyebrow="Empire Map" title="The Groomed Gent Co. Ecosystem">
          <EcosystemMap pillars={ecosystemPillars} />
          <div className="command-line">
            Products create revenue. The ecosystem creates loyalty. The world creates equity.
          </div>
        </Section>

        <Section
          id="journey"
          eyebrow="Customer Journey"
          title="One Brand. Multiple Entry Points. One Deeper Journey."
          intro="A man may enter through a grooming oil, a hydration powder, a sleep product, a barber service, or a private box. But every entry point leads deeper into the same brand world."
        >
          <JourneyTimeline steps={journeySteps} />
        </Section>

        <Section
          id="legacy-reserve"
          eyebrow="Legacy Reserve"
          title="Legacy Reserve: The External Standard"
          intro="Legacy Reserve helps a man sharpen how he presents himself — clean, disciplined, refined, and confident."
        >
          <ProductList items={reserveProducts} tone="reserve" />
        </Section>

        <Section
          id="legacy-sanctum"
          eyebrow="Legacy Sanctum"
          title="Legacy Sanctum: The Internal Standard"
          intro="Legacy Sanctum is built for the man who wants his body, mind, and energy operating with intention."
        >
          <ProductList items={sanctumProducts} tone="sanctum" />
        </Section>

        <Section
          id="sanctum-circle"
          eyebrow="Sanctum Circle Box"
          title="The Box Is Not Packaging. It Is the Invitation."
          intro="Selected people receive a curated physical box with products chosen for them. They scan a QR code and unlock a personal digital experience explaining their products, their protocol, and their place inside the brand world."
        >
          <div className="box-stage">
            <div className="box-object" aria-hidden="true">
              <span>Sanctum Circle</span>
            </div>
            <CardGrid items={circleCards} className="tight-grid" />
          </div>
        </Section>

        <Section
          id="member-app"
          eyebrow="Member App"
          title="The App Becomes the Operating System"
          intro="This is not a generic wellness app. It is a private command center for men building body, mind, business, discipline, relationships, and legacy."
        >
          <AppMockup modules={appModules} />
        </Section>

        <Section
          id="crew-dream-code"
          eyebrow="Crew Dream Code"
          title="Crew Dream Code"
          intro="Crew Dream Code is the belief that the people closest to the vision should not just watch it happen. They should have a path to build inside it, grow from it, and create their own legacy through it."
        >
          <CardGrid items={crewCards} />
        </Section>

        <Section id="why-win" eyebrow="Investor Logic" title="Why This Can Win">
          <CardGrid items={winCards} className="dense-grid" />
          <div className="command-line">
            Most small brands sell products. Groomed Gent Co. is building a product ecosystem, a
            member system, and a culture.
          </div>
        </Section>

        <Section id="roadmap" eyebrow="Execution Path" title="The Roadmap">
          <Roadmap phases={roadmapPhases} />
        </Section>

        <Section
          id="closing"
          eyebrow="Closing"
          title="This Is Bigger Than a Product Line"
          intro="Groomed Gent Co. is being built as a premium masculine brand world — one that helps men look sharper, live stronger, operate with discipline, and build a legacy that lasts."
          variant="compact"
        >
          <div className="final-line">
            The brand is the world. The box is the invitation. The app is the operating system.
          </div>
          <div className="button-row centered">
            <button onClick={() => scrollToSection('ecosystem')}>View Ecosystem</button>
            <button className="button-secondary" onClick={() => scrollToSection('roadmap')}>
              View Roadmap
            </button>
            <button className="button-secondary" onClick={() => scrollToSection('sanctum-circle')}>
              Enter The Sanctum
            </button>
          </div>
        </Section>
      </main>
    </>
  );
}
