import PageHero from '@/components/shared/PageHero';
import StatsBanner from '@/components/shared/StatsBanner';
import CTABanner from '@/components/shared/CTABanner';
import ServicesGrid from '@/components/services/ServicesGrid';
import { COLORS, FONTS } from '@/lib/constants';
import { services } from '@/data/services';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | NWS Custom Homes Richmond TX',
  description: 'Custom home building, kitchen remodeling, bathroom remodeling, whole-home renovations, room additions, and more. One crew, every trade.',
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero eyebrow="WHAT WE DO" titleLine1="Every Service" titleLine2="" titleAccent="You Need." subtitle="From ground-up custom builds to bathroom transformations — one crew, one call." breadcrumb={[{label:'Home',href:'/'},{label:'Services',href:'/services'}]} />

      {/* Services grid — landing page card style */}
      <section style={{ backgroundColor: COLORS.plaster, padding: '80px 80px' }}>
        <ServicesGrid services={services} />
        <div style={{ width: '100%', height: 10, marginTop: 0, background: 'linear-gradient(90deg, #7B5C3A 0%, #5A3E25 50%, #7B5C3A 100%)' }} />
      </section>

      {/* Why NWS — landing page dark section */}
      <section style={{ backgroundColor: COLORS.espresso, padding: '80px 80px', position: 'relative', overflow: 'hidden' }}>
        <svg style={{ position: 'absolute', top: 40, right: 40, width: 200, height: 200, opacity: 0.06, pointerEvents: 'none' }} viewBox="0 0 200 200" fill="none">
          <path d="M100 15L15 85V185H185V85L100 15Z" stroke="white" strokeWidth="1.5"/>
          <rect x="80" y="115" width="40" height="70" stroke="white" strokeWidth="1"/>
        </svg>
        <div style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <h2 style={{ fontFamily: FONTS.serif, fontSize: 'clamp(40px, 3.5vw, 56px)', color: COLORS.white, lineHeight: 1.05 }}>Why Homeowners <span style={{ fontStyle: 'italic', color: COLORS.terracotta }}>Choose NWS</span></h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {['Every trade in-house','Fixed-price before start','Single project manager','No subcontractor roulette'].map((item, i) => (
              <div key={i} style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: 16, padding: '20px 24px', display: 'flex', alignItems: 'center', gap: 12 }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8l3 3 7-7" stroke={COLORS.terracotta} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span style={{ fontFamily: FONTS.sans, fontSize: 14, color: COLORS.sage }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StatsBanner />
      <CTABanner heading="One Call. Every Trade." body="Tell us what you need — we handle everything from first sketch to final walkthrough." primaryLabel="Get a Free Quote" primaryHref="/contact" />
    </main>
  );
}
