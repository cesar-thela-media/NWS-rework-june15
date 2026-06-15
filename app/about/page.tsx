import PageHero from '@/components/shared/PageHero';
import StatsBanner from '@/components/shared/StatsBanner';
import TestimonialStrip from '@/components/shared/TestimonialStrip';
import CTABanner from '@/components/shared/CTABanner';
import { getTestimonials } from '@/data/testimonials';
import { COLORS, FONTS } from '@/lib/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About NWS Custom Homes | Richmond, TX Since 2007',
  description: 'Learn about NWS Custom Homes and Remodeling — full-service construction and remodeling in Richmond, TX with 35+ years of combined experience.',
};

export default function AboutPage() {
  return (
    <main>
      <PageHero eyebrow="ABOUT US" titleLine1="Your Go-To" titleLine2="" titleAccent="Home Builders." subtitle="Full-service construction and remodeling in Richmond, TX — built on 35+ years of combined experience." breadcrumb={[{label:'Home',href:'/'},{label:'About',href:'/about'}]} />
      <section style={{ backgroundColor: COLORS.plaster, padding: '80px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '55fr 45fr', gap: 64, alignItems: 'center' }}>
          <div>
            <h2 style={{ fontFamily: FONTS.serif, fontSize: 'clamp(32px, 3vw, 48px)', color: COLORS.espresso, marginBottom: 24 }}>Built on Trust. <span style={{ fontStyle: 'italic', color: COLORS.terracotta }}>Proven in Texas.</span></h2>
            <p style={{ fontFamily: FONTS.sans, fontSize: 16, color: COLORS.sage, lineHeight: 1.7, marginBottom: 16 }}>NWS Custom Homes and Remodeling was founded in 2007 with a simple belief: every homeowner deserves a contractor who communicates, shows up on time, and does the job right the first time.</p>
            <p style={{ fontFamily: FONTS.sans, fontSize: 16, color: COLORS.sage, lineHeight: 1.7 }}>Over 19 years later, that belief still drives every project. We&apos;ve completed 500+ projects across Fort Bend County — from custom home builds in Fulshear to kitchen remodels in Sugar Land, bathroom transformations in Katy, and whole-home renovations in Richmond.</p>
          </div>
          <div style={{ backgroundColor: COLORS.placeholder, borderRadius: 24, height: 400, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: FONTS.sans, fontSize: 12, color: COLORS.sage }}>Photo placeholder</span>
          </div>
        </div>
      </section>
      <section style={{ backgroundColor: COLORS.espresso, padding: '80px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {[
            { title: 'Craftsmanship', body: 'Every cut, every joint, every finish is done by someone who takes pride in their work — and it shows.' },
            { title: 'Transparency', body: 'Fixed-price quotes before we begin. No surprise invoices. No change orders without your approval in writing.' },
            { title: 'On Time', body: 'We give you a timeline before we start and we stick to it. If something changes, you hear about it immediately.' },
          ].map(v => (
            <div key={v.title} style={{ backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: 24, padding: 40 }}>
              <h3 style={{ fontFamily: FONTS.serif, fontSize: 24, color: COLORS.white, marginBottom: 16 }}>{v.title}</h3>
              <p style={{ fontFamily: FONTS.sans, fontSize: 15, color: COLORS.sage, lineHeight: 1.7 }}>{v.body}</p>
            </div>
          ))}
        </div>
      </section>
      <section style={{ backgroundColor: COLORS.plaster, padding: '80px 80px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: FONTS.serif, fontSize: 'clamp(32px, 3vw, 48px)', color: COLORS.espresso, marginBottom: 48 }}>How We <span style={{ fontStyle: 'italic', color: COLORS.terracotta }}>Work</span></h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
          {['Consultation','Design','Build','Walkthrough'].map((step, i) => (
            <div key={step} style={{ padding: 32 }}>
              <div style={{ width: 48, height: 48, borderRadius: '50%', backgroundColor: COLORS.espresso, color: COLORS.white, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FONTS.serif, fontSize: 20, margin: '0 auto 20' }}>{i + 1}</div>
              <p style={{ fontFamily: FONTS.serif, fontSize: 20, color: COLORS.espresso }}>{step}</p>
            </div>
          ))}
        </div>
      </section>
      <StatsBanner />
      <TestimonialStrip testimonials={getTestimonials(undefined, 3)} />
      <CTABanner heading="Ready to Start Your Project?" body="Free on-site consultation — and 5% off when you mention the website." primaryLabel="Book a Consultation" primaryHref="/contact" />
    </main>
  );
}
