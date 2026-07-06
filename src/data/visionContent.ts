export type NavItem = {
  label: string;
  target: string;
};

export type CardItem = {
  title: string;
  body: string;
  eyebrow?: string;
};

export const navItems: NavItem[] = [
  { label: 'Arrival', target: 'arrival' },
  { label: 'Gap', target: 'market-gap' },
  { label: 'Ecosystem', target: 'ecosystem' },
  { label: 'Journey', target: 'journey' },
  { label: 'Reserve', target: 'legacy-reserve' },
  { label: 'Sanctum', target: 'legacy-sanctum' },
  { label: 'Circle', target: 'sanctum-circle' },
  { label: 'App', target: 'member-app' },
  { label: 'Code', target: 'crew-dream-code' },
  { label: 'Win', target: 'why-win' },
  { label: 'Roadmap', target: 'roadmap' },
];

export const marketCards: CardItem[] = [
  {
    title: 'Massive men’s wellness opportunity',
    body: 'Men are actively searching for sharper grooming, higher energy, better sleep, stronger bodies, and brands that understand ambition without noise.',
  },
  {
    title: 'Repeat-purchase categories',
    body: 'Grooming, supplements, skincare, shave care, and protocol-based wellness create natural replenishment behavior.',
  },
  {
    title: 'Loyalty through personalization and community',
    body: 'The brand gets stronger when the product is tied to identity, ritual, guidance, and a circle worth staying inside.',
  },
];

export const ecosystemPillars: CardItem[] = [
  {
    eyebrow: 'External standard',
    title: 'Legacy Reserve',
    body: 'Hair, beard, skin, shave, tallow, soaps, and refined barbershop craft.',
  },
  {
    eyebrow: 'Internal standard',
    title: 'Legacy Sanctum',
    body: 'Hydration, sleep, recovery, focus, vitality, performance, and longevity.',
  },
  {
    eyebrow: 'Invitation layer',
    title: 'Sanctum Circle',
    body: 'Curated boxes, QR unlocks, personalized protocols, and private onboarding.',
  },
  {
    eyebrow: 'Retention layer',
    title: 'Member App',
    body: 'Daily routines, protocol tracking, AI concierge, accountability, and private community.',
  },
  {
    eyebrow: 'Trust layer',
    title: 'Barber Studio',
    body: 'Services, rituals, craftsmanship, and the future physical authority of the brand.',
  },
  {
    eyebrow: 'Culture layer',
    title: 'Community Experiences',
    body: 'Wellness partners, events, brotherhood, private drops, and local culture.',
  },
];

export const journeySteps = [
  'First Product',
  'Routine',
  'Personalized Box',
  'Member App',
  'Barber Service',
  'Community',
  'Lifetime Loyalty',
];

export const reserveProducts = [
  'Hair & Beard Grooming Oil',
  'Peptide Hair Growth Serum',
  'Charcoal Face Cleanser',
  'Peptide Moisturizer',
  'Tallow Night Cream',
  'Sandalwood / Charcoal Soaps',
  'Future Shave & Barber Rituals',
];

export const sanctumProducts = [
  'Hydros — hydration and electrolytes',
  'Nocturne — sleep and recovery',
  'Solaris — male vitality',
  'Fortius Aqua — creatine and performance hydration',
  'Vitalis / Nexus — cellular energy and longevity',
  'Ascend — focus and mental clarity',
  'Restoria — magnesium and recovery',
  'Genesis — gut health',
];

export const circleCards: CardItem[] = [
  { title: 'Personalized product selection', body: 'A box curated around the man, not a random bundle.' },
  { title: 'QR unlock', body: 'The physical box opens a private digital briefing.' },
  { title: 'Personal protocol', body: 'Products are translated into a guided ritual and schedule.' },
  { title: 'Invite-only profile', body: 'Each recipient gets a place inside the brand world.' },
  { title: 'Founder note', body: 'A human signal that this is personal, intentional, and earned.' },
  { title: 'Membership pathway', body: 'The box becomes the first step into the Circle.' },
];

export const appModules = [
  'Daily Protocol',
  'Grooming Routine',
  'Supplement Stack',
  'Discipline Tracker',
  'Legacy Goals',
  'Crew Dream Code',
  'Private Circle',
  'AI Concierge',
  'Wellness Check-In',
  'Founder Briefings',
];

export const crewCards: CardItem[] = [
  {
    title: 'Shared growth',
    body: 'The vision becomes stronger when the people around it grow with it.',
  },
  {
    title: 'Real opportunity',
    body: 'Skills, work ethic, and consistency can turn into paths inside the brand.',
  },
  {
    title: 'Family and brotherhood',
    body: 'The culture is built on responsibility, trust, and showing up for each other.',
  },
  {
    title: 'Skills into ownership',
    body: 'The long game is helping people turn contribution into capability and capability into equity.',
  },
  {
    title: 'Legacy beyond one person',
    body: 'The brand should become bigger than the founder because the mission is bigger than one man.',
  },
];

export const winCards: CardItem[] = [
  { title: 'Repeat purchase categories', body: 'Grooming, wellness, shave care, supplements, and protocols all create recurring need.' },
  { title: 'Multiple revenue streams', body: 'Products, memberships, boxes, services, events, education, and premium drops can reinforce one another.' },
  { title: 'Premium masculine positioning', body: 'A disciplined, refined alternative to cheap basics and loud performance brands.' },
  { title: 'Personalization layer', body: 'The more tailored the protocol, the harder the experience is to replace.' },
  { title: 'App/member retention layer', body: 'The app turns purchases into rituals, tracking, accountability, and ongoing guidance.' },
  { title: 'Physical authority', body: 'Barber services and studio rituals give the brand real-world trust and craftsmanship.' },
  { title: 'Community defensibility', body: 'Culture, brotherhood, and local partnerships create gravity beyond products.' },
  { title: 'Founder-market connection', body: 'This is built from lived conviction, not a spreadsheet trend grab.' },
];

export const roadmapPhases: CardItem[] = [
  {
    eyebrow: 'Phase 1',
    title: 'Brand Foundation',
    body: 'Shopify, product pages, launch products, and product education.',
  },
  {
    eyebrow: 'Phase 2',
    title: 'Personalized Invitations',
    body: 'Blair box, QR pages, curated protocols, and private onboarding.',
  },
  {
    eyebrow: 'Phase 3',
    title: 'Member App',
    body: 'Routines, tracking, AI concierge, Circle, and accountability loops.',
  },
  {
    eyebrow: 'Phase 4',
    title: 'Barber Authority',
    body: 'Barber services, studio concept, grooming rituals, and service products.',
  },
  {
    eyebrow: 'Phase 5',
    title: 'Culture Expansion',
    body: 'Community events, wellness partnerships, local culture, and private drops.',
  },
  {
    eyebrow: 'Phase 6',
    title: 'Full Legacy Ecosystem',
    body: 'Products, app, services, memberships, boxes, events, education, and community.',
  },
];
