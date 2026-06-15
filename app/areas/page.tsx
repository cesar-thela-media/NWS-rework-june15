import PageHero from '@/components/shared/PageHero';
import CTABanner from '@/components/shared/CTABanner';
import AreasGrid from '@/components/areas/AreasGrid';
import { COLORS, FONTS, CONTACT } from '@/lib/constants';
import { areas } from '@/data/areas';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Service Areas | NWS Custom Homes | Fort Bend County TX',
  description: 'NWS Custom Homes serves Richmond, Sugar Land, Katy, Fulshear, Cinco Ranch, Rosenberg, and surrounding areas. Call (281) 299-2309.',
};

export default function AreasPage() {
  return (
    <main>
      <PageHero eyebrow="WHERE WE BUILD" titleLine1="Serving Greater" titleLine2="" titleAccent="Houston." subtitle="9 cities across Fort Bend County — same crew, same quality, wherever you are." breadcrumb={[{label:'Home',href:'/'},{label:'Areas We Serve',href:'/areas'}]} />
      <section style={{ backgroundColor: COLORS.plaster, padding: '80px 80px' }}>
        <AreasGrid areas={areas} />
      </section>
      <section style={{ backgroundColor: COLORS.plaster, padding: '0 80px 80px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: FONTS.serif, fontSize: 'clamp(28px, 3vw, 40px)', color: COLORS.espresso, marginBottom: 16 }}>Don&apos;t See Your <span style={{ fontStyle: 'italic', color: COLORS.terracotta }}>City?</span></h2>
        <p style={{ fontFamily: FONTS.sans, fontSize: 16, color: COLORS.sage, maxWidth: 520, margin: '0 auto 32px', lineHeight: 1.6 }}>We serve the entire Greater Houston metro area. If you&apos;re in Fort Bend County or surrounding areas, give us a call — we likely serve you.</p>
        <a href={CONTACT.phoneHref} style={{ backgroundColor: COLORS.terracotta, color: COLORS.white, fontFamily: FONTS.sans, fontSize: 14, fontWeight: 600, padding: '16px 32px', borderRadius: 9999, textDecoration: 'none', display: 'inline-block' }}>
          Call {CONTACT.phone}
        </a>
      </section>
      <CTABanner heading="Ready to Build?" body="Free consultation anywhere in Greater Houston." primaryLabel="Contact Us" primaryHref="/contact" />
    </main>
  );
}
