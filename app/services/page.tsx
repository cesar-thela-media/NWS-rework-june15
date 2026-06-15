import PageHero from '@/components/shared/PageHero';
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

      {/* Services section — landing page dark pattern */}
      <section style={{ backgroundColor: COLORS.espresso, padding: '80px 80px', position: 'relative', overflow: 'hidden' }}>
        {/* Blueprint watermark */}
        <svg style={{ position: 'absolute', top: 40, right: 40, width: 220, height: 220, opacity: 0.05, pointerEvents: 'none' }} viewBox="0 0 220 220" fill="none">
          <path d="M110 20L20 85V200H200V85L110 20Z" stroke="white" strokeWidth="1.5"/>
          <rect x="88" y="125" width="44" height="75" stroke="white" strokeWidth="1"/>
        </svg>
        <div style={{ position: 'relative', zIndex: 1 }}>
          {/* Section header — matching landing page ServicesSection */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start', marginBottom: 48 }}>
            <div>
              <p style={{ fontFamily: FONTS.sans, fontSize: 11, color: COLORS.terracotta, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 16 }}>
                WHAT WE BUILD
              </p>
              <h2 style={{ fontFamily: FONTS.serif, fontSize: 'clamp(40px, 3.5vw, 64px)', color: COLORS.white, lineHeight: 1.05 }}>
                One Team. Every Trade.<br />Zero Chaos.
              </h2>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end', paddingBottom: 8 }}>
              <p style={{ fontFamily: FONTS.sans, fontSize: 16, color: COLORS.sage, maxWidth: 400, lineHeight: 1.7 }}>
                From first sketch to final walkthrough, one accountable crew handles design, permits, and construction.
              </p>
            </div>
          </div>

          {/* Cards grid */}
          <ServicesGrid services={services} />

          {/* Wood texture strip — landing page pattern */}
          <div style={{ width: '100%', height: 10, marginTop: 0, background: 'linear-gradient(90deg, #7B5C3A 0%, #5A3E25 50%, #7B5C3A 100%)' }} />

          {/* Stats bar — matching landing page pattern */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: 0 }}>
            {[
              { value: '500+', label: 'Projects Completed' },
              { value: '19', label: 'Years in Business' },
              { value: '9', label: 'Cities Served' },
              { value: '4.9★', label: 'Google Average' },
            ].map((stat, i) => (
              <div key={stat.label} style={{ padding: '48px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
                <span style={{ fontFamily: FONTS.serif, fontSize: 'clamp(40px, 4vw, 64px)', color: COLORS.white, lineHeight: 1 }}>{stat.value}</span>
                <span style={{ fontFamily: FONTS.sans, fontSize: 11, color: COLORS.sage, textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 12 }}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner heading="One Call. Every Trade." body="Tell us what you need — we handle everything from first sketch to final walkthrough." primaryLabel="Get a Free Quote" primaryHref="/contact" />
    </main>
  );
}
