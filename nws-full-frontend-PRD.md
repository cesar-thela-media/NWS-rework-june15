# NWS Custom Homes — Full Frontend PRD v2
**Scope:** All pages, all sections, frontend only. Zero backend. Zero form submissions. No CMS.
**Stack:** Next.js 14 App Router · TypeScript · Inline styles only (no Tailwind classes in JSX) · Playfair Display + DM Sans
**Design system:** Inherited from the existing home page. All new pages use the same tokens.

---

## 0. GLOBAL CONSTANTS & TYPES

### `lib/constants.ts` — create this first, import everywhere
```ts
export const CONTACT = {
  phone: '(281) 299-2309',
  phoneMobile: '(713) 884-6571',
  phoneHref: 'tel:2812992309',
  phoneMobileHref: 'tel:7138846571',
  email: 'info@nws-homes.com',
  address: 'Richmond, TX',
  hours: {
    weekday: 'Mon–Fri: 8:00 AM – 6:00 PM',
    saturday: 'Sat: 8:00 AM – 12:00 PM',
    sunday: 'Sun: Closed',
  },
};

export const COLORS = {
  plaster:    '#F7F4EF',
  espresso:   '#2B2118',
  terracotta: '#B5552D',
  sage:       '#9A9B8C',
  white:      '#FFFFFF',
  placeholder: '#D8CFC4', // image placeholder bg
};

export const FONTS = {
  serif: 'var(--font-playfair), Georgia, serif',
  sans:  'var(--font-dm-sans), system-ui, sans-serif',
};
```

### `lib/types.ts`
```ts
export interface Service {
  slug: string;
  navLabel: string;        // short label for nav dropdown
  title: string;           // headline word 1
  titleAccent: string;     // headline word 2 — renders in terracotta italic
  heroSubtitle: string;
  intro: string[];         // array of paragraphs
  includes: string[];
  processSteps: string[];  // exactly 4
  relatedSlugs: string[];  // exactly 3
  iconType: string;        // SVG icon key
  cardDescription: string; // 1–2 sentences for the services grid card
}

export interface Testimonial {
  id: string;
  name: string;
  initial: string;
  city: string;
  date: string;
  source: 'Google' | 'Angi';
  quote: string;
  service?: string;        // optional — which service this relates to
}

export interface Area {
  slug: string;
  label: string;
  state: string;
  isPrimary?: boolean;
  tagline: string;
  description: string;
}

export interface FAQ {
  id: string;
  category: 'General' | 'Process' | 'Pricing' | 'Quality' | 'Areas';
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  category: 'custom-homes' | 'kitchen' | 'bathroom' | 'remodeling';
  title: string;
  area: string;
  aspectRatio: '4/3' | '3/4' | '1/1'; // varies per item for masonry feel
}

export interface NavItem {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
}
```

---

## 1. DATA FILES (complete with real content)

### `data/services.ts`
```ts
import type { Service } from '@/lib/types';

export const services: Service[] = [
  {
    slug: 'custom-home-building',
    navLabel: 'Custom Home Building',
    title: 'Custom Home',
    titleAccent: 'Building.',
    heroSubtitle: 'Designed around your life, built on your land, finished on time.',
    intro: [
      'Building a custom home is the biggest investment most families ever make. At NWS, we treat it that way — every decision is yours, every detail is deliberate, and every phase is communicated clearly before it begins.',
      'We handle architecture coordination, permitting, material sourcing, and full construction under one roof. No subcontractor roulette. No surprise change orders. The same crew that broke ground finishes your home.',
    ],
    includes: [
      'Lot selection assistance',
      'Floor plan design coordination',
      'Permit filing & management',
      'Foundation & framing',
      'Roofing, siding & exterior',
      'Interior finishes & fixtures',
      'Landscaping coordination',
      'Final walkthrough & warranty',
    ],
    processSteps: ['Land & Vision Consultation', 'Design & Permit', 'Build Phase', 'Final Walkthrough'],
    relatedSlugs: ['whole-home-remodeling', 'room-additions', 'open-concept'],
    iconType: 'house',
    cardDescription: 'Architecture and construction under one roof — built around your life, your land, and your budget.',
  },
  {
    slug: 'kitchen-remodeling',
    navLabel: 'Kitchen Remodeling',
    title: 'Kitchen',
    titleAccent: 'Remodeling.',
    heroSubtitle: 'From layout to finishes — the kitchen your family deserves.',
    intro: [
      'Your kitchen is where your family starts and ends every day. A poorly designed one makes that harder. A great one makes it better.',
      'We handle every phase in-house: demo, cabinetry, countertop fabrication, backsplash, flooring, lighting, and appliance rough-in. Fixed price and exact timeline before we lift a tool.',
    ],
    includes: [
      'Cabinet design & installation',
      'Countertop fabrication & install',
      'Backsplash tile work',
      'Island design & build',
      'Appliance rough-in',
      'Lighting & electrical',
      'Flooring installation',
    ],
    processSteps: ['Consultation & Measurement', 'Material Selection', 'Demo & Prep', 'Install & Finish'],
    relatedSlugs: ['bathroom-remodeling', 'whole-home-remodeling', 'open-concept'],
    iconType: 'kitchen',
    cardDescription: 'From layout to finishes, the kitchen of your dreams built for how you actually cook.',
  },
  {
    slug: 'bathroom-remodeling',
    navLabel: 'Bathroom Remodeling',
    title: 'Bathroom',
    titleAccent: 'Remodeling.',
    heroSubtitle: 'Spa-worthy bathrooms that blend comfort, style, and real-world function.',
    intro: [
      'A bathroom remodel is one of the highest-ROI projects you can do on a home. We treat it like it — premium materials, precise tile work, and finishes that last decades, not years.',
      'Whether you want a master bath overhaul, a guest bath refresh, or a full wet room conversion, we handle permits, demo, tile, fixtures, and all plumbing rough-in in-house.',
    ],
    includes: [
      'Full demo & haul-off',
      'Tile & stone installation',
      'Shower & tub work',
      'Vanity & fixture installation',
      'Plumbing rough-in',
      'Lighting & exhaust',
      'Flooring & waterproofing',
    ],
    processSteps: ['Design Consultation', 'Material Selection', 'Demo & Waterproofing', 'Tile & Fixtures'],
    relatedSlugs: ['shower-remodel', 'bathtub-remodel', 'kitchen-remodeling'],
    iconType: 'bath',
    cardDescription: 'Spa-worthy bathrooms that blend comfort, style, and real-world function.',
  },
  {
    slug: 'whole-home-remodeling',
    navLabel: 'Whole Home Remodeling',
    title: 'Whole Home',
    titleAccent: 'Remodeling.',
    heroSubtitle: 'Top-to-bottom transformation — every room, one accountable crew.',
    intro: [
      'A whole-home remodel is the most complex project a homeowner can undertake. It requires a contractor who can manage multiple simultaneous trades without losing the thread — or your budget.',
      'We\'ve completed full-home transformations from Cinco Ranch to Sugar Land. One project manager. One crew. One fixed price. No chaos.',
    ],
    includes: [
      'Full project management',
      'Structural work & permitting',
      'Kitchen & bath remodels',
      'Flooring throughout',
      'Paint & interior finishes',
      'Electrical & lighting updates',
      'Plumbing updates',
      'Final staging walkthrough',
    ],
    processSteps: ['Scope & Budget Session', 'Phased Design Plan', 'Staged Build', 'Room-by-Room Handoff'],
    relatedSlugs: ['kitchen-remodeling', 'bathroom-remodeling', 'room-additions'],
    iconType: 'home',
    cardDescription: 'Top-to-bottom transformation — every room, one accountable crew.',
  },
  {
    slug: 'shower-remodel',
    navLabel: 'Shower Remodel',
    title: 'Shower',
    titleAccent: 'Remodel.',
    heroSubtitle: 'Modern, functional, and custom-fit shower spaces designed around you.',
    intro: [
      'Your shower should be the best part of your morning. We build zero-entry walk-ins, frameless glass enclosures, steam showers, and custom tile surrounds — all with proper waterproofing that lasts.',
      'We handle tile layout design, waterproofing membrane, plumbing rough-in, glass installation, and fixture selection in-house.',
    ],
    includes: [
      'Waterproofing membrane installation',
      'Custom tile & stone work',
      'Frameless glass enclosures',
      'Plumbing rough-in & fixtures',
      'Niche & bench builds',
      'Zero-entry / ADA options',
      'Steam system rough-in',
    ],
    processSteps: ['Measurement & Design', 'Tile & Fixture Selection', 'Waterproof & Tile', 'Glass & Fixtures'],
    relatedSlugs: ['bathroom-remodeling', 'bathtub-remodel', 'whole-home-remodeling'],
    iconType: 'shower',
    cardDescription: 'Modern, functional, and custom-fit shower spaces designed around you.',
  },
  {
    slug: 'bathtub-remodel',
    navLabel: 'Bathtub Remodel',
    title: 'Bathtub',
    titleAccent: 'Remodel.',
    heroSubtitle: 'From clawfoot to freestanding — the perfect centerpiece for your bathroom.',
    intro: [
      'The right bathtub transforms a bathroom from functional to restorative. We install freestanding soaking tubs, clawfoots, alcove tubs, and jetted systems — with all plumbing and surround work done in-house.',
      'We also do tub-to-shower conversions for homeowners ready to reclaim the space.',
    ],
    includes: [
      'Tub removal & haul-off',
      'Plumbing rough-in & drain work',
      'Freestanding & alcove installs',
      'Tile & stone surrounds',
      'Deck & platform builds',
      'Fixture & faucet installation',
      'Tub-to-shower conversions',
    ],
    processSteps: ['Selection Consultation', 'Plumbing Assessment', 'Demo & Rough-in', 'Install & Surround'],
    relatedSlugs: ['shower-remodel', 'bathroom-remodeling', 'whole-home-remodeling'],
    iconType: 'tub',
    cardDescription: 'From clawfoot to freestanding — the perfect centerpiece for your bathroom.',
  },
  {
    slug: 'room-additions',
    navLabel: 'Room Additions',
    title: 'Room',
    titleAccent: 'Additions.',
    heroSubtitle: 'Seamless additions that look original to your home.',
    intro: [
      'A well-built room addition is indistinguishable from the original structure. We handle the full scope: foundation, framing, roofline integration, exterior match, and interior finish — all permitted and inspected.',
      'We\'ve added master suites, sunrooms, second stories, in-law suites, and bonus rooms across Fort Bend County.',
    ],
    includes: [
      'Foundation work',
      'Framing & structural',
      'Roofline integration',
      'Exterior material matching',
      'Electrical & HVAC extension',
      'Interior finishes',
      'Permit management',
    ],
    processSteps: ['Structural Assessment', 'Design & Permit', 'Foundation & Frame', 'Finish & Inspect'],
    relatedSlugs: ['custom-home-building', 'whole-home-remodeling', 'garage-conversions'],
    iconType: 'addition',
    cardDescription: 'Seamless additions that look original to your home — master suites, second stories, sunrooms.',
  },
  {
    slug: 'basement-remodeling',
    navLabel: 'Basement Finishing',
    title: 'Basement',
    titleAccent: 'Finishing.',
    heroSubtitle: 'Transform unfinished space into livable square footage you\'ll actually use.',
    intro: [
      'An unfinished basement is untapped potential. We convert raw concrete space into home theaters, playrooms, home offices, gyms, and full living suites — with proper egress, electrical, and moisture management.',
      'Every basement project includes a moisture assessment before we frame a single wall.',
    ],
    includes: [
      'Moisture & egress assessment',
      'Framing & insulation',
      'Electrical & lighting',
      'Drywall & paint',
      'Flooring installation',
      'Bathroom rough-in (if applicable)',
      'Custom layouts & built-ins',
    ],
    processSteps: ['Moisture Assessment', 'Design & Layout', 'Frame & Rough-in', 'Finish & Inspect'],
    relatedSlugs: ['room-additions', 'whole-home-remodeling', 'garage-conversions'],
    iconType: 'basement',
    cardDescription: 'Transform unfinished space into livable square footage you\'ll actually use.',
  },
  {
    slug: 'garage-conversions',
    navLabel: 'Garage Conversions',
    title: 'Garage',
    titleAccent: 'Conversions.',
    heroSubtitle: 'Office, gym, guest suite — your garage has more potential than you think.',
    intro: [
      'A garage conversion adds livable square footage without the cost of a full addition. We handle insulation, HVAC extension, electrical, flooring, and all interior finishes.',
      'We also do garage remodels for homeowners who want to keep the garage function but improve the space — epoxy floors, built-in storage, upgraded doors.',
    ],
    includes: [
      'Insulation & vapor barrier',
      'HVAC extension',
      'Electrical updates',
      'Drywall & interior finish',
      'Flooring (LVP, epoxy, tile)',
      'Permit management',
      'Door & window upgrades',
    ],
    processSteps: ['Feasibility Assessment', 'Design & Permit', 'Rough-in Phase', 'Finish & Inspect'],
    relatedSlugs: ['room-additions', 'basement-remodeling', 'whole-home-remodeling'],
    iconType: 'garage',
    cardDescription: 'Office, gym, guest suite — your garage has more potential than you think.',
  },
  {
    slug: 'open-concept',
    navLabel: 'Open Concept',
    title: 'Open Concept',
    titleAccent: 'Remodeling.',
    heroSubtitle: 'Wall removal, layout redesign, and light optimization for modern living.',
    intro: [
      'Open concept layouts make homes feel larger, brighter, and better connected. We handle structural assessment, load-bearing wall removal with proper beam installation, and the full finish work afterward.',
      'Every wall removal includes a structural engineer sign-off and full permit — no exceptions.',
    ],
    includes: [
      'Structural engineering assessment',
      'Load-bearing wall removal',
      'Beam & header installation',
      'Electrical rerouting',
      'Flooring unification',
      'Ceiling & drywall repair',
      'Permit & inspection management',
    ],
    processSteps: ['Structural Assessment', 'Engineer Sign-off & Permit', 'Demo & Beam Install', 'Finish Work'],
    relatedSlugs: ['kitchen-remodeling', 'whole-home-remodeling', 'room-additions'],
    iconType: 'openplan',
    cardDescription: 'Wall removal, layout redesign, and light optimization for modern living.',
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(s => s.slug === slug);
}

export function getRelatedServices(slugs: string[]): Service[] {
  return slugs.map(s => getServiceBySlug(s)).filter(Boolean) as Service[];
}
```

---

### `data/testimonials.ts`
```ts
import type { Testimonial } from '@/lib/types';

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Allison C.',
    initial: 'A',
    city: 'Richmond, TX',
    date: 'Aug 2023',
    source: 'Google',
    quote: 'They handled every hiccup calmly and finished in just 3 months. The kitchen is beyond what we imagined.',
    service: 'kitchen-remodeling',
  },
  {
    id: 't2',
    name: 'Katie J.',
    initial: 'K',
    city: 'Richmond, TX',
    date: 'Aug 2023',
    source: 'Google',
    quote: 'Great communicators throughout the entire home build. We are very pleased with the outcome and service.',
    service: 'custom-home-building',
  },
  {
    id: 't3',
    name: 'Carrie N.',
    initial: 'C',
    city: 'Sugar Land, TX',
    date: 'Jul 2023',
    source: 'Google',
    quote: 'We keep going back to them because they do good work. Used NWS for several projects from minor to major.',
    service: 'whole-home-remodeling',
  },
  {
    id: 't4',
    name: 'Amy H.',
    initial: 'A',
    city: 'Katy, TX',
    date: 'Jul 2023',
    source: 'Google',
    quote: 'Always responded, always showed up, and made sure the job was done right. Will use NWS again no doubt.',
    service: 'bathroom-remodeling',
  },
  {
    id: 't5',
    name: 'Drew L.',
    initial: 'D',
    city: 'Cinco Ranch, TX',
    date: 'Jun 2021',
    source: 'Google',
    quote: 'First class operation from scope of work to final punch list. Would highly recommend for custom builds.',
    service: 'custom-home-building',
  },
  {
    id: 't6',
    name: 'Sheila V.',
    initial: 'S',
    city: 'Richmond, TX',
    date: 'Mar 2020',
    source: 'Google',
    quote: 'NWS remodeled all 4 of our bathrooms and did a fantastic job. Friendly, quality work. Highly recommended.',
    service: 'bathroom-remodeling',
  },
  {
    id: 't7',
    name: 'Tim O.',
    initial: 'T',
    city: 'Fulshear, TX',
    date: 'Mar 2017',
    source: 'Angi',
    quote: 'Excellent value. They can do anything. Worked with us on questions and concerns throughout every project.',
    service: 'whole-home-remodeling',
  },
  {
    id: 't8',
    name: 'Mark D.',
    initial: 'M',
    city: 'Richmond, TX',
    date: 'Oct 2017',
    source: 'Angi',
    quote: 'Professional and very detailed. Updated daily on progress. Project did not go over budget. Results were great.',
    service: 'room-additions',
  },
];

// Helper: get 3 testimonials for a page, optionally filtered by service
export function getTestimonials(serviceSlug?: string, count = 3): Testimonial[] {
  if (serviceSlug) {
    const relevant = testimonials.filter(t => t.service === serviceSlug);
    if (relevant.length >= count) return relevant.slice(0, count);
    // pad with general ones if not enough service-specific
    const others = testimonials.filter(t => t.service !== serviceSlug);
    return [...relevant, ...others].slice(0, count);
  }
  return testimonials.slice(0, count);
}
```

---

### `data/areas.ts`
```ts
import type { Area } from '@/lib/types';

export const areas: Area[] = [
  {
    slug: 'richmond',
    label: 'Richmond',
    state: 'TX',
    isPrimary: true,
    tagline: 'Our Home Base',
    description: 'NWS has called Richmond home since 2007. We know the neighborhoods, the permit offices, and the neighborhoods inside-out.',
  },
  {
    slug: 'sugar-land',
    label: 'Sugar Land',
    state: 'TX',
    tagline: 'Premium Remodels & Custom Builds',
    description: 'One of the fastest-growing cities in Fort Bend County. We\'ve completed dozens of kitchen and whole-home remodels across Sugar Land.',
  },
  {
    slug: 'katy',
    label: 'Katy',
    state: 'TX',
    tagline: 'Custom Homes & Major Remodels',
    description: 'Katy\'s booming growth means plenty of new builds and older homes ready for a refresh. We serve all of Katy and the surrounding subdivisions.',
  },
  {
    slug: 'fulshear',
    label: 'Fulshear',
    state: 'TX',
    tagline: 'Luxury Builds & Additions',
    description: 'Fulshear\'s upscale communities are a great fit for our custom home building and high-end remodeling work.',
  },
  {
    slug: 'cinco-ranch',
    label: 'Cinco Ranch',
    state: 'TX',
    tagline: 'Remodels & Room Additions',
    description: 'Established neighborhoods with homes ready for kitchen updates, bathroom overhauls, and room additions. We\'ve built a strong track record here.',
  },
  {
    slug: 'rosenberg',
    label: 'Rosenberg',
    state: 'TX',
    tagline: 'Full-Service Remodeling',
    description: 'From historic homes to newer builds, we handle remodeling projects of all sizes across Rosenberg.',
  },
  {
    slug: 'weston-lakes',
    label: 'Weston Lakes',
    state: 'TX',
    tagline: 'Custom & Luxury Remodeling',
    description: 'Weston Lakes\' gated community homes deserve premium craftsmanship. We bring the same standards to every project here.',
  },
  {
    slug: 'west-houston',
    label: 'West Side of Houston',
    state: 'TX',
    tagline: 'Serving the Energy Corridor & Beyond',
    description: 'The West Side of Houston includes some of the most active remodeling markets in the metro. We serve clients from Memorial to the Energy Corridor.',
  },
  {
    slug: 'park-row',
    label: 'Park Row',
    state: 'TX',
    tagline: 'Remodeling & Home Additions',
    description: 'Park Row\'s established neighborhoods offer plenty of opportunities for thoughtful renovations and well-planned additions.',
  },
];
```

---

### `data/faqs.ts`
```ts
import type { FAQ } from '@/lib/types';

export const faqs: FAQ[] = [
  {
    id: 'f1',
    category: 'General',
    question: 'What services do you offer?',
    answer: 'We offer custom home building, whole-home remodeling, kitchen remodeling, bathroom remodeling, shower and bathtub remodels, room additions, basement finishing, garage conversions, and open concept remodeling. We handle every trade in-house.',
  },
  {
    id: 'f2',
    category: 'General',
    question: 'Are you a franchise or a local company?',
    answer: 'We are 100% locally owned and operated in Richmond, TX. Not a franchise, not a national chain. When you call us, you get us — the same team from first consultation through final walkthrough.',
  },
  {
    id: 'f3',
    category: 'Process',
    question: 'How do I get started?',
    answer: 'Call us at (281) 299-2309 or fill out the contact form for a free consultation. We\'ll schedule an on-site visit, assess your project, and provide a detailed written quote before any work begins. No surprises.',
  },
  {
    id: 'f4',
    category: 'Process',
    question: 'What is your typical project timeline?',
    answer: 'It depends on scope. A bathroom remodel typically takes 2–4 weeks. A kitchen remodel runs 4–8 weeks. A room addition or whole-home remodel can range from 2–6 months. A custom home build runs 6–12 months. We give a specific timeline in writing before we start.',
  },
  {
    id: 'f5',
    category: 'Process',
    question: 'Do you handle permits?',
    answer: 'Yes. We manage all permitting and inspections for every project that requires it. You don\'t need to deal with the city — we handle it.',
  },
  {
    id: 'f6',
    category: 'Process',
    question: 'Will I have a dedicated project manager?',
    answer: 'Yes. Every project has a single point of contact — the same manager from start to finish. You\'ll have their direct number and can reach them any time during business hours.',
  },
  {
    id: 'f7',
    category: 'Pricing',
    question: 'Do you offer free consultations?',
    answer: 'Yes — always free. And if you mention the website when you call, you\'ll receive 5% off your project total.',
  },
  {
    id: 'f8',
    category: 'Pricing',
    question: 'Do you give fixed-price quotes or estimates?',
    answer: 'We provide fixed-price quotes before work begins. If scope changes during the project, we discuss and agree on any change order in writing before proceeding. No surprise invoices.',
  },
  {
    id: 'f9',
    category: 'Pricing',
    question: 'Do you offer financing?',
    answer: 'We work with financing partners for larger projects. Ask during your consultation and we\'ll walk you through the options available for your project size.',
  },
  {
    id: 'f10',
    category: 'Quality',
    question: 'Are you licensed and insured in Texas?',
    answer: 'Yes. Fully licensed as a Texas contractor and carrying comprehensive general liability insurance on every project. We can provide documentation on request.',
  },
  {
    id: 'f11',
    category: 'Quality',
    question: 'Do you use subcontractors?',
    answer: 'Our core crew handles the majority of all work. For specialized licensed trades (electrical, plumbing), we use the same trusted subs we\'ve worked with for years — not random hires from a platform.',
  },
  {
    id: 'f12',
    category: 'Quality',
    question: 'What kind of warranty do you offer?',
    answer: 'We stand behind our work. Workmanship issues that arise after project completion are addressed at no charge. Specific warranty terms are included in every contract.',
  },
  {
    id: 'f13',
    category: 'Areas',
    question: 'What areas do you serve?',
    answer: 'We primarily serve Richmond, Sugar Land, Katy, Fulshear, Cinco Ranch, Rosenberg, Weston Lakes, Park Row, and the West Side of Houston. If you\'re in the Greater Houston area and not on that list, call us — we likely serve you.',
  },
  {
    id: 'f14',
    category: 'Areas',
    question: 'Do you travel outside Fort Bend County?',
    answer: 'For the right project, yes. We\'ve completed work throughout the Greater Houston metro. Give us a call and describe your project — if we can serve you well, we will.',
  },
];
```

---

### `data/gallery.ts`
```ts
import type { GalleryItem } from '@/lib/types';

// 18 placeholder items — replace src with real photos when available
export const galleryItems: GalleryItem[] = [
  { id: 'g1',  category: 'kitchen',       title: 'Marble Island Kitchen',       area: 'Cinco Ranch, TX',  aspectRatio: '4/3' },
  { id: 'g2',  category: 'custom-homes',  title: 'Modern Farmhouse Build',      area: 'Fulshear, TX',     aspectRatio: '3/4' },
  { id: 'g3',  category: 'bathroom',      title: 'Master Bath Overhaul',        area: 'Sugar Land, TX',   aspectRatio: '4/3' },
  { id: 'g4',  category: 'remodeling',    title: 'Full Home Transformation',    area: 'Richmond, TX',     aspectRatio: '3/4' },
  { id: 'g5',  category: 'kitchen',       title: 'Open Concept Kitchen',        area: 'Katy, TX',         aspectRatio: '1/1' },
  { id: 'g6',  category: 'custom-homes',  title: 'Two-Story Custom Home',       area: 'Weston Lakes, TX', aspectRatio: '4/3' },
  { id: 'g7',  category: 'bathroom',      title: 'Spa Shower Remodel',          area: 'Richmond, TX',     aspectRatio: '3/4' },
  { id: 'g8',  category: 'remodeling',    title: 'Kitchen & Bath Combo',        area: 'Cinco Ranch, TX',  aspectRatio: '4/3' },
  { id: 'g9',  category: 'kitchen',       title: 'Dark Cabinetry Kitchen',      area: 'Sugar Land, TX',   aspectRatio: '4/3' },
  { id: 'g10', category: 'custom-homes',  title: 'Craftsman Custom Build',      area: 'Rosenberg, TX',    aspectRatio: '3/4' },
  { id: 'g11', category: 'bathroom',      title: 'Freestanding Tub Install',    area: 'Katy, TX',         aspectRatio: '1/1' },
  { id: 'g12', category: 'remodeling',    title: 'Whole-Home Remodel',          area: 'Park Row, TX',     aspectRatio: '4/3' },
  { id: 'g13', category: 'kitchen',       title: 'White Shaker Kitchen',        area: 'Fulshear, TX',     aspectRatio: '3/4' },
  { id: 'g14', category: 'custom-homes',  title: 'Ranch Style Custom Home',     area: 'Richmond, TX',     aspectRatio: '4/3' },
  { id: 'g15', category: 'bathroom',      title: 'Walk-in Tile Shower',         area: 'West Houston, TX', aspectRatio: '4/3' },
  { id: 'g16', category: 'remodeling',    title: 'Open Concept Conversion',     area: 'Sugar Land, TX',   aspectRatio: '3/4' },
  { id: 'g17', category: 'kitchen',       title: 'Quartz Waterfall Island',     area: 'Katy, TX',         aspectRatio: '1/1' },
  { id: 'g18', category: 'custom-homes',  title: 'Contemporary Custom Build',   area: 'Cinco Ranch, TX',  aspectRatio: '4/3' },
];
```

---

## 2. HOOKS

### `hooks/useIsMobile.ts`
```ts
'use client';
import { useState, useEffect } from 'react';

// Initializes to false (desktop) to match SSR — prevents hydration mismatch.
// After mount, updates to actual viewport width.
export function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, [breakpoint]);

  return isMobile;
}
```

**Usage in any component:**
```tsx
const isMobile = useIsMobile();
<div style={{ gridTemplateColumns: isMobile ? '1fr' : '55fr 45fr' }}>
```

---

## 3. SHARED COMPONENTS

### `components/shared/PageHero.tsx`
```tsx
'use client';
import Link from 'next/link';
import { COLORS, FONTS } from '@/lib/constants';

interface BreadcrumbItem { label: string; href: string; }

interface PageHeroProps {
  eyebrow: string;
  // Headline is always 2 lines:
  // Line 1: titleLine1 in espresso
  // Line 2: titleLine2 in espresso + titleAccent in terracotta italic (appended)
  // If only accent on line 2, pass titleLine2 as empty string
  titleLine1: string;
  titleLine2: string;
  titleAccent: string;
  subtitle?: string;
  breadcrumb: BreadcrumbItem[];
}

export default function PageHero({ eyebrow, titleLine1, titleLine2, titleAccent, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section style={{ backgroundColor: COLORS.plaster, padding: '80px 80px 64px', position: 'relative', overflow: 'hidden' }}>
      {/* Blueprint lines */}
      <svg style={{ position: 'absolute', top: 64, left: 64, width: 200, height: 200, opacity: 0.07, pointerEvents: 'none', zIndex: 0 }} viewBox="0 0 200 200">
        <path d="M 40 0 L 0 0 L 0 40" fill="none" stroke={COLORS.sage} strokeWidth="1"/>
        <line x1="0" y1="22" x2="180" y2="22" stroke={COLORS.sage} strokeWidth="0.5" strokeDasharray="3 8"/>
        <line x1="0" y1="55" x2="180" y2="55" stroke={COLORS.sage} strokeWidth="0.5" strokeDasharray="3 8"/>
        <line x1="22" y1="0" x2="22" y2="180" stroke={COLORS.sage} strokeWidth="0.5" strokeDasharray="3 8"/>
        <line x1="55" y1="0" x2="55" y2="180" stroke={COLORS.sage} strokeWidth="0.5" strokeDasharray="3 8"/>
      </svg>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 800 }}>
        {/* Breadcrumb */}
        <nav style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 32 }}>
          {breadcrumb.map((crumb, i) => (
            <span key={crumb.href} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              {i > 0 && <span style={{ color: COLORS.sage, fontFamily: FONTS.sans, fontSize: 12 }}>›</span>}
              <Link href={crumb.href} style={{ fontFamily: FONTS.sans, fontSize: 12, color: i === breadcrumb.length - 1 ? COLORS.terracotta : COLORS.sage, textDecoration: 'none' }}>
                {crumb.label}
              </Link>
            </span>
          ))}
        </nav>

        {/* Eyebrow */}
        <p style={{ fontFamily: FONTS.sans, fontSize: 11, color: COLORS.terracotta, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 16 }}>
          {eyebrow}
        </p>

        {/* Headline */}
        <h1 style={{ fontFamily: FONTS.serif, fontSize: 'clamp(40px, 4vw, 68px)', lineHeight: 1.05, color: COLORS.espresso, margin: 0 }}>
          <span style={{ display: 'block', whiteSpace: 'nowrap' }}>{titleLine1}</span>
          <span style={{ display: 'block' }}>
            {titleLine2 && <span>{titleLine2} </span>}
            <span style={{ fontStyle: 'italic', color: COLORS.terracotta }}>{titleAccent}</span>
          </span>
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p style={{ fontFamily: FONTS.sans, fontSize: 16, color: COLORS.sage, lineHeight: 1.6, marginTop: 20, maxWidth: 520 }}>
            {subtitle}
          </p>
        )}

        {/* Decorative rule */}
        <div style={{ width: 48, height: 2, backgroundColor: COLORS.terracotta, marginTop: 32 }} />
      </div>
    </section>
  );
}
```

**Usage examples:**
```tsx
// About page
<PageHero eyebrow="ABOUT US" titleLine1="Your Go-To" titleLine2="" titleAccent="Home Builders." ... />

// Services page
<PageHero eyebrow="WHAT WE DO" titleLine1="Every Service" titleLine2="" titleAccent="You Need." ... />

// Contact page
<PageHero eyebrow="GET IN TOUCH" titleLine1="Let's Build" titleLine2="" titleAccent="Together." ... />

// Service detail (kitchen)
<PageHero eyebrow="KITCHEN REMODELING" titleLine1="Kitchen" titleLine2="" titleAccent="Remodeling." ... />
```

---

### `components/shared/CTABanner.tsx`
```tsx
import Link from 'next/link';
import { COLORS, FONTS, CONTACT } from '@/lib/constants';

interface CTABannerProps {
  eyebrow?: string;
  heading: string;
  body: string;
  primaryLabel: string;
  primaryHref: string;
}

export default function CTABanner({ eyebrow = 'START YOUR PROJECT', heading, body, primaryLabel, primaryHref }: CTABannerProps) {
  return (
    <section style={{ backgroundColor: COLORS.espresso, padding: '80px 80px', position: 'relative', overflow: 'hidden' }}>
      {/* Blueprint house watermark */}
      <svg style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 300, height: 300, opacity: 0.04, pointerEvents: 'none' }} viewBox="0 0 300 300">
        <polygon points="150,30 270,120 30,120" fill="none" stroke="white" strokeWidth="2"/>
        <rect x="50" y="120" width="200" height="150" fill="none" stroke="white" strokeWidth="2"/>
        <rect x="120" y="185" width="60" height="85" fill="none" stroke="white" strokeWidth="1.5"/>
        <rect x="70" y="140" width="45" height="45" fill="none" stroke="white" strokeWidth="1"/>
        <rect x="185" y="140" width="45" height="45" fill="none" stroke="white" strokeWidth="1"/>
      </svg>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
        <p style={{ fontFamily: FONTS.sans, fontSize: 11, color: COLORS.terracotta, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 20 }}>
          {eyebrow}
        </p>
        <h2 style={{ fontFamily: FONTS.serif, fontSize: 'clamp(36px, 3.5vw, 56px)', color: COLORS.white, lineHeight: 1.1, marginBottom: 20 }}>
          {heading}
        </h2>
        <p style={{ fontFamily: FONTS.sans, fontSize: 16, color: COLORS.sage, lineHeight: 1.6, marginBottom: 40 }}>
          {body}
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href={primaryHref} style={{ backgroundColor: COLORS.terracotta, color: COLORS.white, fontFamily: FONTS.sans, fontSize: 14, fontWeight: 600, padding: '16px 32px', borderRadius: 9999, textDecoration: 'none', display: 'inline-block' }}>
            {primaryLabel}
          </Link>
          <a href={CONTACT.phoneHref} style={{ backgroundColor: 'transparent', color: COLORS.white, fontFamily: FONTS.sans, fontSize: 14, padding: '16px 32px', borderRadius: 9999, border: '1px solid rgba(255,255,255,0.3)', textDecoration: 'none', display: 'inline-block' }}>
            Call {CONTACT.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
```

---

### `components/shared/StatsBanner.tsx`
```tsx
import { COLORS, FONTS } from '@/lib/constants';

const stats = [
  { value: '500+', label: 'Projects Completed' },
  { value: '19',   label: 'Years in Business' },
  { value: '9',    label: 'Cities Served' },
  { value: '4.9★', label: 'Google Average' },
];

export default function StatsBanner() {
  return (
    <div style={{ backgroundColor: COLORS.espresso, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      {stats.map((stat, i) => (
        <div key={stat.label} style={{ padding: '56px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
          <span style={{ fontFamily: FONTS.serif, fontSize: 'clamp(40px, 4vw, 64px)', color: COLORS.white, lineHeight: 1 }}>
            {stat.value}
          </span>
          <span style={{ fontFamily: FONTS.sans, fontSize: 11, color: COLORS.sage, textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 12 }}>
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}
```

---

### `components/shared/TestimonialStrip.tsx`
```tsx
import { COLORS, FONTS } from '@/lib/constants';
import type { Testimonial } from '@/lib/types';

interface TestimonialStripProps {
  testimonials: Testimonial[];
  eyebrow?: string;
  heading?: string;
}

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill={COLORS.terracotta}>
      <path d="M7 1l1.5 4H13l-3.5 2.5 1.5 4L7 9 3 11.5l1.5-4L1 5h4.5z"/>
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14">
      <path d="M13.6 7.2c0-.5 0-1-.1-1.4H7v2.7h3.7c-.2.9-.7 1.6-1.4 2.1v1.7h2.3c1.3-1.2 2-3 2-5.1z" fill={COLORS.sage}/>
      <path d="M7 14c1.9 0 3.4-.6 4.6-1.7l-2.2-1.7c-.6.4-1.4.7-2.4.7-1.8 0-3.4-1.2-3.9-2.9H.8v1.8C2 12.4 4.3 14 7 14z" fill={COLORS.sage}/>
      <path d="M3.1 8.4c-.1-.4-.2-.8-.2-1.4s.1-1 .2-1.4V3.8H.8C.3 4.8 0 5.9 0 7s.3 2.2.8 3.2l2.3-1.8z" fill={COLORS.sage}/>
      <path d="M7 2.8c1 0 1.9.4 2.6 1L11.4 2C10.2.7 8.7 0 7 0 4.3 0 2 1.6.8 3.8l2.3 1.8C3.6 4 5.2 2.8 7 2.8z" fill={COLORS.sage}/>
    </svg>
  );
}

export default function TestimonialStrip({ testimonials, eyebrow = 'WORD TRAVELS', heading = 'Our Clients Do the Talking.' }: TestimonialStripProps) {
  return (
    <section style={{ backgroundColor: COLORS.plaster, padding: '80px 80px' }}>
      <p style={{ fontFamily: FONTS.sans, fontSize: 11, color: COLORS.terracotta, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 12 }}>
        {eyebrow}
      </p>
      <h2 style={{ fontFamily: FONTS.serif, fontSize: 'clamp(32px, 3vw, 48px)', color: COLORS.espresso, marginBottom: 48 }}>
        {heading}
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
        {testimonials.map((t, i) => (
          <div
            key={t.id}
            style={{
              backgroundColor: COLORS.white,
              borderRadius: 24,
              padding: 32,
              display: 'flex',
              flexDirection: 'column',
              transform: i === 1 ? 'translateY(-20px)' : 'none',
              boxShadow: i === 1 ? '0 24px 64px rgba(43,33,24,0.18)' : '0 8px 32px rgba(43,33,24,0.08)',
              outline: i === 1 ? '1px solid rgba(181,85,45,0.2)' : 'none',
              position: 'relative',
              zIndex: i === 1 ? 10 : 1,
            }}
          >
            <div style={{ display: 'flex', gap: 4, marginBottom: 16 }}>
              {[...Array(5)].map((_, j) => <StarIcon key={j} />)}
            </div>
            <p style={{ fontFamily: FONTS.serif, fontSize: 16, color: COLORS.espresso, fontStyle: 'italic', lineHeight: 1.6, flex: 1, marginBottom: 24 }}>
              "{t.quote}"
            </p>
            <div style={{ borderTop: `1px solid rgba(154,154,140,0.2)`, paddingTop: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 36, height: 36, borderRadius: '50%', backgroundColor: COLORS.espresso, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FONTS.serif, fontSize: 16, color: COLORS.white, flexShrink: 0 }}>
                {t.initial}
              </div>
              <div>
                <p style={{ fontFamily: FONTS.sans, fontSize: 13, fontWeight: 600, color: COLORS.espresso }}>{t.name}</p>
                <p style={{ fontFamily: FONTS.sans, fontSize: 12, color: COLORS.sage }}>{t.city}</p>
              </div>
              <div style={{ marginLeft: 'auto' }}>
                {t.source === 'Google' && <GoogleIcon />}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
```

---

### `components/shared/NavBar.tsx` — expanded with dropdowns

```tsx
'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { COLORS, FONTS, CONTACT } from '@/lib/constants';
import { services } from '@/data/services';

const remodelingLinks = services
  .filter(s => s.slug !== 'custom-home-building')
  .map(s => ({ label: s.navLabel, href: `/services/${s.slug}` }));

const galleryLinks = [
  { label: 'Custom Homes Gallery', href: '/gallery?cat=custom-homes' },
  { label: 'Kitchen Gallery',      href: '/gallery?cat=kitchen' },
  { label: 'Bathroom Gallery',     href: '/gallery?cat=bathroom' },
  { label: 'Remodeling Gallery',   href: '/gallery?cat=remodeling' },
];

interface DropdownProps {
  items: { label: string; href: string }[];
  isOpen: boolean;
}

function Dropdown({ items, isOpen }: DropdownProps) {
  if (!isOpen) return null;
  return (
    <div style={{ position: 'absolute', top: 'calc(100% + 8px)', left: '50%', transform: 'translateX(-50%)', backgroundColor: COLORS.white, borderRadius: 16, boxShadow: '0 8px 32px rgba(43,33,24,0.14)', padding: '8px 0', minWidth: 220, zIndex: 100 }}>
      {items.map(item => (
        <Link key={item.href} href={item.href} style={{ display: 'block', padding: '10px 20px', fontFamily: FONTS.sans, fontSize: 13, color: COLORS.espresso, textDecoration: 'none', transition: 'background 0.15s' }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = COLORS.plaster)}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}

export default function NavBar() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/');

  const linkStyle = (href: string): React.CSSProperties => ({
    fontFamily: FONTS.sans, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.08em',
    color: isActive(href) ? COLORS.terracotta : COLORS.sage,
    textDecoration: 'none', cursor: 'pointer', position: 'relative',
    paddingBottom: 4, borderBottom: isActive(href) ? `2px solid ${COLORS.terracotta}` : '2px solid transparent',
    transition: 'color 0.15s',
  });

  return (
    <>
      <nav style={{ position: 'sticky', top: 0, zIndex: 50, backgroundColor: 'rgba(247,244,239,0.92)', backdropFilter: 'blur(8px)', borderBottom: '1px solid rgba(154,154,140,0.15)', height: 72, display: 'flex', alignItems: 'center', padding: '0 80px' }}>

        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', flexShrink: 0 }}>
          <svg width="28" height="24" viewBox="0 0 28 24" fill="none">
            <path d="M3 16 L10 4 L17 16" stroke={COLORS.terracotta} strokeWidth="2" fill="none" strokeLinejoin="round"/>
            <path d="M11 16 L18 4 L25 16" stroke={COLORS.terracotta} strokeWidth="2" fill="none" strokeLinejoin="round"/>
          </svg>
          <span style={{ fontFamily: FONTS.sans, fontSize: 13, fontWeight: 600, color: COLORS.espresso, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            NWS Custom Homes
          </span>
        </Link>

        {/* Center links — hidden on mobile */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 40, margin: '0 auto', position: 'relative' }}>

          <Link href="/services/custom-home-building" style={linkStyle('/services/custom-home-building')}>
            Custom Homes
          </Link>

          {/* Remodeling dropdown */}
          <div style={{ position: 'relative' }} onMouseEnter={() => setOpenMenu('remodeling')} onMouseLeave={() => setOpenMenu(null)}>
            <span style={linkStyle('/services')} onClick={() => setOpenMenu(openMenu === 'remodeling' ? null : 'remodeling')}>
              Remodeling ▾
            </span>
            <Dropdown items={remodelingLinks} isOpen={openMenu === 'remodeling'} />
          </div>

          {/* Gallery dropdown */}
          <div style={{ position: 'relative' }} onMouseEnter={() => setOpenMenu('gallery')} onMouseLeave={() => setOpenMenu(null)}>
            <span style={linkStyle('/gallery')} onClick={() => setOpenMenu(openMenu === 'gallery' ? null : 'gallery')}>
              Gallery ▾
            </span>
            <Dropdown items={galleryLinks} isOpen={openMenu === 'gallery'} />
          </div>

          <Link href="/areas" style={linkStyle('/areas')}>Areas</Link>
          <Link href="/about" style={linkStyle('/about')}>About</Link>
        </div>

        {/* Right zone */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexShrink: 0 }}>
          <a href={CONTACT.phoneHref} style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: FONTS.sans, fontSize: 13, color: COLORS.espresso, textDecoration: 'none' }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke={COLORS.sage} strokeWidth="1.5">
              <path d="M2 2C2 2 3.5.5 5 .5S7 2 7.5 3.5 6.5 5 6.5 5s.5 1.5 2 3 3 2 3 2 1.5-1 2-1S15 10.5 15 12s-1.5 2-1.5 2C8 18-4 4 2 2z" strokeLinecap="round"/>
            </svg>
            {CONTACT.phone}
          </a>
          <Link href="/contact" style={{ backgroundColor: COLORS.terracotta, color: COLORS.white, fontFamily: FONTS.sans, fontSize: 13, fontWeight: 600, padding: '10px 22px', borderRadius: 9999, textDecoration: 'none' }}>
            Free Consultation
          </Link>

          {/* Hamburger — shows on mobile */}
          <button onClick={() => setMobileOpen(!mobileOpen)} style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 4 }} aria-label="Menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={COLORS.espresso} strokeWidth="1.8">
              <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 200, backgroundColor: COLORS.white, padding: '24px 24px', overflowY: 'auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 40 }}>
            <span style={{ fontFamily: FONTS.sans, fontSize: 13, fontWeight: 600, color: COLORS.espresso, textTransform: 'uppercase', letterSpacing: '0.1em' }}>NWS Custom Homes</span>
            <button onClick={() => setMobileOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={COLORS.espresso} strokeWidth="1.8">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>
          {[
            { label: 'Home', href: '/' },
            { label: 'Custom Home Building', href: '/services/custom-home-building' },
            { label: 'Kitchen Remodeling', href: '/services/kitchen-remodeling' },
            { label: 'Bathroom Remodeling', href: '/services/bathroom-remodeling' },
            { label: 'Whole Home Remodeling', href: '/services/whole-home-remodeling' },
            { label: 'Room Additions', href: '/services/room-additions' },
            { label: 'All Services', href: '/services' },
            { label: 'Gallery', href: '/gallery' },
            { label: 'Areas We Serve', href: '/areas' },
            { label: 'About', href: '/about' },
            { label: 'FAQs', href: '/faqs' },
            { label: 'Contact', href: '/contact' },
          ].map(link => (
            <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
              style={{ display: 'block', padding: '16px 0', fontFamily: FONTS.sans, fontSize: 16, color: COLORS.espresso, textDecoration: 'none', borderBottom: `1px solid rgba(154,154,140,0.15)` }}>
              {link.label}
            </Link>
          ))}
          <a href={CONTACT.phoneHref} style={{ display: 'block', marginTop: 32, textAlign: 'center', backgroundColor: COLORS.terracotta, color: COLORS.white, fontFamily: FONTS.sans, fontSize: 15, fontWeight: 600, padding: '18px', borderRadius: 9999, textDecoration: 'none' }}>
            Call {CONTACT.phone}
          </a>
        </div>
      )}
    </>
  );
}
```

---

### `components/shared/BackToTop.tsx`
```tsx
'use client';
import { useState, useEffect } from 'react';
import { COLORS } from '@/lib/constants';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      style={{
        position: 'fixed', bottom: 32, right: 32, zIndex: 99,
        width: 44, height: 44, borderRadius: '50%',
        backgroundColor: COLORS.terracotta, border: 'none', cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 4px 16px rgba(43,33,24,0.2)',
        transition: 'opacity 0.2s, transform 0.2s',
      }}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="2">
        <path d="M8 12V4M4 8l4-4 4 4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
}
```

**Add to `app/layout.tsx`:**
```tsx
import BackToTop from '@/components/shared/BackToTop';
// inside <body>:
<BackToTop />
```

---

### `components/shared/Footer.tsx`

```tsx
import Link from 'next/link';
import { COLORS, FONTS, CONTACT } from '@/lib/constants';

const serviceLinks = [
  { label: 'Custom Home Building', href: '/services/custom-home-building' },
  { label: 'Kitchen Remodeling',   href: '/services/kitchen-remodeling' },
  { label: 'Bathroom Remodeling',  href: '/services/bathroom-remodeling' },
  { label: 'Whole Home Remodeling',href: '/services/whole-home-remodeling' },
  { label: 'Shower Remodel',       href: '/services/shower-remodel' },
  { label: 'Bathtub Remodel',      href: '/services/bathtub-remodel' },
  { label: 'Room Additions',       href: '/services/room-additions' },
  { label: 'View All Services →',  href: '/services' },
];

const quickLinks = [
  { label: 'Home',          href: '/' },
  { label: 'About',         href: '/about' },
  { label: 'Gallery',       href: '/gallery' },
  { label: 'Areas We Serve',href: '/areas' },
  { label: 'FAQs',          href: '/faqs' },
  { label: 'Contact',       href: '/contact' },
];

const colHead: React.CSSProperties = {
  fontFamily: FONTS.sans, fontSize: 11, color: COLORS.terracotta,
  textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 20,
};

const footLink: React.CSSProperties = {
  display: 'block', fontFamily: FONTS.sans, fontSize: 13,
  color: 'rgba(255,255,255,0.6)', textDecoration: 'none', marginBottom: 10,
  transition: 'color 0.15s',
};

export default function Footer() {
  return (
    <footer style={{ backgroundColor: COLORS.espresso, borderTop: `2px solid ${COLORS.terracotta}`, padding: '64px 80px 0', position: 'relative', overflow: 'hidden' }}>

      {/* Monogram */}
      <span style={{ position: 'absolute', bottom: -40, right: -20, fontFamily: FONTS.serif, fontSize: 220, color: 'rgba(255,255,255,0.04)', lineHeight: 1, pointerEvents: 'none', userSelect: 'none' }}>N</span>

      {/* 4-column grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 0.8fr 1fr', gap: 48, marginBottom: 48 }}>

        {/* Col 1 — Brand */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <svg width="28" height="24" viewBox="0 0 28 24" fill="none">
              <path d="M3 16 L10 4 L17 16" stroke={COLORS.terracotta} strokeWidth="2" fill="none" strokeLinejoin="round"/>
              <path d="M11 16 L18 4 L25 16" stroke={COLORS.terracotta} strokeWidth="2" fill="none" strokeLinejoin="round"/>
            </svg>
            <span style={{ fontFamily: FONTS.sans, fontSize: 12, fontWeight: 600, color: COLORS.white, textTransform: 'uppercase', letterSpacing: '0.1em' }}>NWS Custom Homes</span>
          </div>
          <p style={{ fontFamily: FONTS.sans, fontSize: 14, color: COLORS.sage, lineHeight: 1.6, maxWidth: 240 }}>
            Building and remodeling homes across Richmond, Katy & Sugar Land since 2007.
          </p>
          <div style={{ display: 'flex', gap: 16, marginTop: 24 }}>
            {[
              { href: 'https://www.facebook.com/NWSHomes/', label: 'Facebook', path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
              { href: 'https://www.instagram.com/nwshomes/', label: 'Instagram', path: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01 M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2z' },
            ].map(social => (
              <a key={social.href} href={social.href} target="_blank" rel="noopener" aria-label={social.label}
                style={{ color: 'rgba(255,255,255,0.4)', transition: 'color 0.15s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.9)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d={social.path}/>
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Col 2 — Services */}
        <div>
          <p style={colHead}>Services</p>
          {serviceLinks.map(link => (
            <Link key={link.href} href={link.href} style={footLink}
              onMouseEnter={e => (e.currentTarget.style.color = COLORS.white)}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}>
              {link.label}
            </Link>
          ))}
        </div>

        {/* Col 3 — Quick Links */}
        <div>
          <p style={colHead}>Quick Links</p>
          {quickLinks.map(link => (
            <Link key={link.href} href={link.href} style={footLink}
              onMouseEnter={e => (e.currentTarget.style.color = COLORS.white)}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}>
              {link.label}
            </Link>
          ))}
        </div>

        {/* Col 4 — Contact */}
        <div>
          <p style={colHead}>Get in Touch</p>
          <a href={CONTACT.phoneHref} style={{ ...footLink, marginBottom: 8 }}>Office: {CONTACT.phone}</a>
          <a href={CONTACT.phoneMobileHref} style={{ ...footLink, marginBottom: 8 }}>Mobile: {CONTACT.phoneMobile}</a>
          <a href={`mailto:${CONTACT.email}`} style={{ ...footLink, marginBottom: 24 }}>{CONTACT.email}</a>
          <p style={{ fontFamily: FONTS.sans, fontSize: 11, color: COLORS.terracotta, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>Hours</p>
          <p style={{ fontFamily: FONTS.sans, fontSize: 13, color: COLORS.sage, lineHeight: 1.8 }}>
            {CONTACT.hours.weekday}<br/>
            {CONTACT.hours.saturday}<br/>
            {CONTACT.hours.sunday}
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: '24px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p style={{ fontFamily: FONTS.sans, fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>
          © 2026 NWS Custom Homes and Remodeling. All Rights Reserved.
        </p>
        <div style={{ display: 'flex', gap: 24 }}>
          <Link href="/privacy" style={{ fontFamily: FONTS.sans, fontSize: 12, color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Privacy Policy</Link>
          <Link href="/sitemap.xml" style={{ fontFamily: FONTS.sans, fontSize: 12, color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Sitemap</Link>
        </div>
      </div>

    </footer>
  );
}
```

---

## 4. PAGE SPECS (sections only — full component code in shared specs above)

### `/about` — Section order
1. `<PageHero eyebrow="ABOUT US" titleLine1="Your Go-To" titleLine2="" titleAccent="Home Builders." subtitle="Full-service construction and remodeling in Richmond, TX — built on 35+ years of combined experience." breadcrumb={[{label:'Home',href:'/'},{label:'About',href:'/about'}]} />`
2. **AboutStory** — plaster bg, 55/45 grid, copy + photo placeholder
3. **AboutValues** — espresso bg, 3 white cards (Craftsmanship / Transparency / On Time)
4. **AboutProcess** — plaster bg, 4-step dashed strip (Consultation → Design → Build → Walkthrough)
5. `<StatsBanner />`
6. `<TestimonialStrip testimonials={getTestimonials(undefined, 3)} />`
7. `<CTABanner heading="Ready to Start Your Project?" body="Free on-site consultation — and 5% off when you mention the website." primaryLabel="Book a Consultation" primaryHref="/contact" />`

### `/services` — Section order
1. `<PageHero eyebrow="WHAT WE DO" titleLine1="Every Service" titleLine2="" titleAccent="You Need." subtitle="From ground-up custom builds to bathroom transformations — one crew, one call." breadcrumb={[{label:'Home',href:'/'},{label:'Services',href:'/services'}]} />`
2. **ServicesGrid** — plaster bg, 3-column grid of all 10 service cards (not 4-col — 10 items fits 3-col as 4+3+3 cleanly)
3. **WhyNWS** — espresso bg, 2-col: headline left + 4 checkmark bullets right
4. `<StatsBanner />`
5. `<CTABanner heading="One Call. Every Trade." body="Tell us what you need — we handle everything from first sketch to final walkthrough." primaryLabel="Get a Free Quote" primaryHref="/contact" />`

### `/services/[slug]` — Section order
```tsx
// app/services/[slug]/page.tsx
import { services, getServiceBySlug, getRelatedServices } from '@/data/services';
import { getTestimonials } from '@/data/testimonials';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return services.map(s => ({ slug: s.slug }));
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();
  const related = getRelatedServices(service.relatedSlugs);
  const testimonials = getTestimonials(service.slug, 3);
  // render sections below
}
```

Sections:
1. `<PageHero eyebrow={service.navLabel.toUpperCase()} titleLine1={service.title} titleLine2="" titleAccent={service.titleAccent} subtitle={service.heroSubtitle} breadcrumb={[{label:'Home',href:'/'},{label:'Services',href:'/services'},{label:service.navLabel,href:`/services/${service.slug}`}]} />`
2. **ServiceIntro** — plaster bg, 55/45 split: intro paragraphs left + photo placeholder right
3. **WhatIsIncluded** — espresso bg, 2-col: heading left + checklist grid right (2 columns of items)
4. **ServiceProcess** — plaster bg, 4-step dashed strip using `service.processSteps`
5. **RelatedServices** — plaster bg, 3-col card row using `related`
6. `<TestimonialStrip testimonials={testimonials} eyebrow="WHAT CLIENTS SAY" />`
7. `<CTABanner heading={`Start Your ${service.title} Project`} body="Free on-site consultation — fixed price before we begin." primaryLabel="Get a Free Quote" primaryHref="/contact" />`

### `/gallery` — Section order

**Gallery filter uses `useSearchParams` to read `?cat=` from URL.** This unifies the nav dropdown links with the page filter.

```tsx
'use client';
import { useSearchParams, useRouter } from 'next/navigation';
import { galleryItems } from '@/data/gallery';

const categories = [
  { key: 'all',         label: 'All Projects' },
  { key: 'custom-homes',label: 'Custom Homes' },
  { key: 'kitchen',     label: 'Kitchen' },
  { key: 'bathroom',    label: 'Bathroom' },
  { key: 'remodeling',  label: 'Remodeling' },
];
```

Sections:
1. `<PageHero eyebrow="OUR WORK" titleLine1="Our Work" titleLine2="" titleAccent="Speaks." ... />`
2. **GalleryFilter** — sticky filter tabs below nav, `position: 'sticky', top: 72` (72px = nav height)
3. **GalleryGrid** — 3-column CSS columns layout (not masonry library — just `columns: 3, columnGap: 16px` with `breakInside: 'avoid'` on each item). On mobile: `columns: 1`.

**Photo placeholder for each gallery item:**
```tsx
<div style={{ backgroundColor: COLORS.placeholder, borderRadius: 16, width: '100%', aspectRatio: item.aspectRatio, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', padding: 16, marginBottom: 16, breakInside: 'avoid', position: 'relative', overflow: 'hidden' }}>
  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(43,33,24,0.8), transparent)', padding: '24px 16px 16px' }}>
    <p style={{ fontFamily: FONTS.serif, fontSize: 14, color: COLORS.white }}>{item.title}</p>
    <p style={{ fontFamily: FONTS.sans, fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>{item.area}</p>
  </div>
</div>
```

4. `<CTABanner heading="Like What You See?" body="Schedule a free consultation and let's talk about your project." primaryLabel="Start Your Project" primaryHref="/contact" />`

### `/areas` — Section order
1. `<PageHero eyebrow="WHERE WE BUILD" titleLine1="Serving Greater" titleLine2="" titleAccent="Houston." subtitle="9 cities across Fort Bend County — same crew, same quality, wherever you are." breadcrumb={...} />`
2. **AreasGrid** — plaster bg, 3-col card grid. Richmond card: `outline: '2px solid #B5552D'` (inline — no Tailwind) + "OUR HOME BASE" pill tag in terracotta. Each card: white bg, `borderRadius: 24px`, `padding: 32px`.
3. **OutsideAreas** — plaster bg, centered: eyebrow + Playfair heading "Don't See Your City?" + body + terracotta call button
4. `<CTABanner heading="Ready to Build?" body="Free consultation anywhere in Greater Houston." primaryLabel="Contact Us" primaryHref="/contact" />`

### `/contact` — Section order
1. `<PageHero eyebrow="GET IN TOUCH" titleLine1="Let's Build" titleLine2="" titleAccent="Together." subtitle="Free consultation. No commitment. Just a conversation about your home." breadcrumb={...} />`
2. **ContactLayout** — plaster bg, 58/42 split:
   - LEFT: White panel, form with underline inputs. On submit button click, `useState` shows "Thank you! We'll be in touch within 1 business day." in DM Sans 14px terracotta. No actual submission.
   - RIGHT: Contact info blocks (phone / hours / location) with thin `rgba(43,33,24,0.1)` hairline separators. Static map placeholder div `height: 200px, backgroundColor: COLORS.placeholder, borderRadius: 16px`.

### `/faqs` — Section order
1. `<PageHero eyebrow="FAQ" titleLine1="Got" titleLine2="" titleAccent="Questions?" subtitle="Everything you need to know before starting your project." breadcrumb={...} />`
2. **FAQAccordion** — plaster bg. Group FAQs by category. Each category header: DM Sans 11px terracotta uppercase. Each FAQ item:

```tsx
function FAQItem({ faq }: { faq: FAQ }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ backgroundColor: COLORS.white, borderRadius: 16, marginBottom: 12, overflow: 'hidden' }}>
      <button onClick={() => setOpen(!open)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 32px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
        <span style={{ fontFamily: FONTS.serif, fontSize: 18, color: COLORS.espresso, flex: 1, paddingRight: 24 }}>{faq.question}</span>
        <span style={{ fontFamily: FONTS.sans, fontSize: 20, color: COLORS.terracotta, flexShrink: 0, transition: 'transform 0.2s', transform: open ? 'rotate(45deg)' : 'none' }}>+</span>
      </button>
      <div style={{ maxHeight: open ? 400 : 0, overflow: 'hidden', transition: 'max-height 0.3s ease' }}>
        <p style={{ fontFamily: FONTS.sans, fontSize: 15, color: COLORS.sage, lineHeight: 1.7, padding: '0 32px 24px' }}>{faq.answer}</p>
      </div>
    </div>
  );
}
```

3. **StillHaveQuestions** — espresso bg, centered: Playfair 40px white + DM Sans body + 2 buttons (terracotta call + ghost contact)
4. `<CTABanner heading="Ready to Get Started?" body="Free consultation — we'll talk through your project and give you a firm quote." primaryLabel="Contact Us" primaryHref="/contact" />`

---

## 5. SEO METADATA

Each page exports metadata via Next.js App Router:

```tsx
// app/about/page.tsx
export const metadata = {
  title: 'About NWS Custom Homes | Richmond, TX Since 2007',
  description: 'Learn about NWS Custom Homes and Remodeling — full-service construction and remodeling in Richmond, TX with 35+ years of combined experience.',
};

// app/services/[slug]/page.tsx
export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  return {
    title: `${service?.navLabel} | NWS Custom Homes Richmond TX`,
    description: service?.cardDescription,
  };
}

// app/gallery/page.tsx
export const metadata = {
  title: 'Project Gallery | NWS Custom Homes',
  description: 'Browse our portfolio of custom home builds, kitchen remodels, bathroom transformations, and whole-home renovations across Fort Bend County.',
};

// app/areas/page.tsx
export const metadata = {
  title: 'Service Areas | NWS Custom Homes | Fort Bend County TX',
  description: 'NWS Custom Homes serves Richmond, Sugar Land, Katy, Fulshear, Cinco Ranch, Rosenberg, and surrounding areas. Call (281) 299-2309.',
};

// app/contact/page.tsx
export const metadata = {
  title: 'Contact NWS Custom Homes | Free Consultation',
  description: 'Get a free consultation with NWS Custom Homes. Call (281) 299-2309 or fill out our form. 5% off when you mention the website.',
};

// app/faqs/page.tsx
export const metadata = {
  title: 'FAQs | NWS Custom Homes and Remodeling',
  description: 'Answers to common questions about custom home building, remodeling timelines, pricing, permits, and service areas in Richmond, TX.',
};
```

---

## 6. 404 PAGE

### `app/not-found.tsx`
```tsx
import Link from 'next/link';
import { COLORS, FONTS } from '@/lib/constants';

export default function NotFound() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: COLORS.plaster, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 40px', textAlign: 'center' }}>
      <div style={{ maxWidth: 480 }}>
        <p style={{ fontFamily: FONTS.serif, fontSize: 96, color: 'rgba(43,33,24,0.08)', lineHeight: 1, marginBottom: 0 }}>404</p>
        <p style={{ fontFamily: FONTS.sans, fontSize: 11, color: COLORS.terracotta, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 16 }}>PAGE NOT FOUND</p>
        <h1 style={{ fontFamily: FONTS.serif, fontSize: 'clamp(32px, 4vw, 48px)', color: COLORS.espresso, marginBottom: 20 }}>
          This page doesn't <span style={{ fontStyle: 'italic', color: COLORS.terracotta }}>exist.</span>
        </h1>
        <p style={{ fontFamily: FONTS.sans, fontSize: 16, color: COLORS.sage, marginBottom: 40, lineHeight: 1.6 }}>
          The page you're looking for has moved or never existed. Let's get you back on track.
        </p>
        <Link href="/" style={{ backgroundColor: COLORS.terracotta, color: COLORS.white, fontFamily: FONTS.sans, fontSize: 14, fontWeight: 600, padding: '16px 32px', borderRadius: 9999, textDecoration: 'none', display: 'inline-block' }}>
          Back to Home
        </Link>
      </div>
    </main>
  );
}
```

---

## 7. HOVER STATES (apply to ALL interactive elements)

All anchor tags, buttons, and cards must have hover transitions. Use `onMouseEnter` / `onMouseLeave` on the element:

| Element type | Default | Hover |
|---|---|---|
| Nav links | `color: sage` | `color: espresso` |
| Footer links | `color: white/60%` | `color: white` |
| Terracotta pill button | `brightness: 100%` | `filter: brightness(0.88)` |
| Ghost button | `backgroundColor: transparent` | `backgroundColor: rgba(255,255,255,0.08)` |
| Service card | `boxShadow: 0 8px 32px rgba(...)` | `boxShadow: 0 16px 48px rgba(...), translateY(-4px)` |
| Gallery item | plain | espresso overlay with "View" text |
| "Explore →" links | `color: terracotta` | `color: espresso` |

For cards use transition on the wrapper:
```tsx
style={{ transition: 'box-shadow 0.2s, transform 0.2s' }}
onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 16px 48px rgba(43,33,24,0.16)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 8px 32px rgba(43,33,24,0.08)'; e.currentTarget.style.transform = 'none'; }}
```

---

## 8. IMAGE PLACEHOLDER STRATEGY

No real images exist yet. Every image slot uses this pattern — never a broken `<img>` tag:

```tsx
// Photo placeholder — use everywhere an image is needed
<div style={{
  backgroundColor: COLORS.placeholder,  // '#D8CFC4'
  borderRadius: 24,
  width: '100%',
  height: 400,  // adjust per context
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}}>
  <span style={{ fontFamily: FONTS.sans, fontSize: 12, color: COLORS.sage }}>
    Photo placeholder
  </span>
</div>
```

When real photos arrive, replace the `<div>` with `<Image src="..." fill alt="..." style={{ objectFit: 'cover' }} />` inside a relative container.

---

## 9. BUILD ORDER

```
Phase 1 — Foundation
1. lib/constants.ts
2. lib/types.ts
3. data/services.ts
4. data/testimonials.ts
5. data/areas.ts
6. data/faqs.ts
7. data/gallery.ts
8. hooks/useIsMobile.ts

Phase 2 — Shared components (no pages yet)
9.  components/shared/BackToTop.tsx
10. components/shared/StatsBanner.tsx
11. components/shared/TestimonialStrip.tsx
12. components/shared/CTABanner.tsx
13. components/shared/PageHero.tsx
14. components/shared/Footer.tsx        ← replace existing
15. components/shared/NavBar.tsx        ← replace existing

Phase 3 — Verify shared components
→ Run dev server, visit /. NavBar and Footer should update. Fix any import errors before continuing.

Phase 4 — Simple pages (no dynamic data)
16. app/not-found.tsx
17. app/faqs/page.tsx + components/faqs/FAQAccordion.tsx
18. app/contact/page.tsx + components/contact/ContactLayout.tsx
19. app/areas/page.tsx + components/areas/AreasGrid.tsx
20. app/about/page.tsx + components/about/AboutStory.tsx + AboutValues.tsx + AboutProcess.tsx

Phase 5 — Services pages
21. app/services/page.tsx + components/services/ServicesGrid.tsx
22. app/services/[slug]/page.tsx + components/services/ServiceDetail.tsx

Phase 6 — Gallery
23. app/gallery/page.tsx + components/gallery/GalleryGrid.tsx + GalleryFilter.tsx

Phase 7 — Polish
24. Add BackToTop to app/layout.tsx
25. Mobile responsive pass: test every page at 375px, apply useIsMobile where grids collapse
26. Verify all SEO metadata exports
27. Console errors pass: zero errors on all pages
28. Hover states pass: verify transitions on all cards, buttons, links
```

---

## 10. ACCEPTANCE CHECKLIST (per page)

- [ ] Background is plaster `#F7F4EF`, not white `#FFFFFF`
- [ ] Headings render in Playfair Display (thick-thin serif visible)
- [ ] Body text renders in DM Sans (clean rounded sans)
- [ ] Accent word on PageHero is terracotta italic
- [ ] NavBar: sticky, active page link is terracotta, dropdowns work on hover
- [ ] Footer: 4 columns, all links present, monogram visible
- [ ] BackToTop button appears after scrolling 400px
- [ ] CTABanner present at bottom with 2 buttons
- [ ] Zero Tailwind classes in JSX (all inline styles)
- [ ] All internal links use `<Link>` from next/link
- [ ] All phone numbers are `<a href="tel:...">` 
- [ ] Mobile (375px): single column, hamburger drawer opens/closes
- [ ] No `console.error` or `console.warn` in browser
- [ ] Image slots use placeholder div, not broken img tags
- [ ] Home page (existing) renders without regression after NavBar/Footer replacement
