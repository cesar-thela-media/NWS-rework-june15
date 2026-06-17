export interface Service {
  slug: string;
  navLabel: string;
  title: string;
  titleAccent: string;
  heroSubtitle: string;
  intro: string[];
  includes: string[];
  includeGroups?: { label: string; items: string[] }[];
  processSteps: string[];
  processDescriptions?: string[];
  relatedSlugs: string[];
  iconType: string;
  cardDescription: string;
  heroImage: string;
  heroVariant?: 'dark';
  galleryImages?: string[];
  byTheNumbers: { value: string; label: string }[];
  beforeAfter?: { before: string; after: string };
}

export interface Testimonial {
  id: string;
  name: string;
  initial: string;
  city: string;
  date: string;
  source: 'Google' | 'Angi';
  quote: string;
  service?: string;
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
  aspectRatio: '4/3' | '3/4' | '1/1';
  image: string;
}
