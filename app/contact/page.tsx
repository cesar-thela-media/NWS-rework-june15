import PageHero from '@/components/shared/PageHero';
import CTABanner from '@/components/shared/CTABanner';
import ContactForm from '@/components/contact/ContactForm';
import { COLORS, FONTS, CONTACT } from '@/lib/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact NWS Custom Homes | Free Consultation',
  description: 'Get a free consultation with NWS Custom Homes. Call (281) 299-2309 or fill out our form. 5% off when you mention the website.',
};

export default function ContactPage() {
  return (
    <main>
      <PageHero eyebrow="GET IN TOUCH" titleLine1="Let&apos;s Build" titleLine2="" titleAccent="Together." subtitle="Free consultation. No commitment. Just a conversation about your home." breadcrumb={[{label:'Home',href:'/'},{label:'Contact',href:'/contact'}]} />
      <section style={{ backgroundColor: COLORS.plaster, padding: '80px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '58fr 42fr', gap: 48 }}>
          <div style={{ backgroundColor: COLORS.white, borderRadius: 24, padding: 48, position: 'relative', overflow: 'hidden' }}>
            <svg style={{ position: 'absolute', top: 20, right: 20, width: 80, height: 80, opacity: 0.04, pointerEvents: 'none' }} viewBox="0 0 80 80" fill="none">
              <rect x="10" y="10" width="60" height="60" rx="8" stroke={COLORS.sage} strokeWidth="1" strokeDasharray="3 5"/>
            </svg>
            <h2 style={{ position: 'relative', zIndex: 1, fontFamily: FONTS.serif, fontSize: 28, color: COLORS.espresso, marginBottom: 32 }}>Send Us a <span style={{ fontStyle: 'italic', color: COLORS.terracotta }}>Message</span></h2>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <ContactForm />
            </div>
          </div>
          <div>
            <div style={{ marginBottom: 40, display: 'flex', gap: 16 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={COLORS.terracotta} strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <div>
                <p style={{ fontFamily: FONTS.sans, fontSize: 11, color: COLORS.terracotta, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 12 }}>Call Us</p>
                <a href={CONTACT.phoneHref} style={{ fontFamily: FONTS.sans, fontSize: 18, color: COLORS.espresso, textDecoration: 'none', fontWeight: 600 }}>{CONTACT.phone}</a>
                <p style={{ fontFamily: FONTS.sans, fontSize: 14, color: COLORS.sage, marginTop: 4 }}>{CONTACT.hours.weekday}</p>
              </div>
            </div>
            <div style={{ borderTop: '1px solid rgba(43,33,24,0.1)', paddingTop: 40, marginBottom: 40, display: 'flex', gap: 16 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={COLORS.terracotta} strokeWidth="1.8"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round"/><polyline points="22,6 12,13 2,6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <div>
                <p style={{ fontFamily: FONTS.sans, fontSize: 11, color: COLORS.terracotta, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 12 }}>Email</p>
                <a href={`mailto:${CONTACT.email}`} style={{ fontFamily: FONTS.sans, fontSize: 16, color: COLORS.espresso, textDecoration: 'none' }}>{CONTACT.email}</a>
              </div>
            </div>
            <div style={{ borderTop: '1px solid rgba(43,33,24,0.1)', paddingTop: 40, display: 'flex', gap: 16 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={COLORS.terracotta} strokeWidth="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="10" r="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <div>
                <p style={{ fontFamily: FONTS.sans, fontSize: 11, color: COLORS.terracotta, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 12 }}>Location</p>
                <p style={{ fontFamily: FONTS.sans, fontSize: 16, color: COLORS.espresso }}>{CONTACT.address}</p>
              </div>
            </div>
            <div style={{ position: 'relative', backgroundColor: COLORS.placeholder, borderRadius: 16, height: 200, marginTop: 40, overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, ${COLORS.espresso} 0%, rgba(43,33,24,0.6) 40%, transparent 70%)`, zIndex: 1 }} />
              <div style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                <span style={{ fontFamily: FONTS.sans, fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>Map placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CTABanner heading="Prefer to Talk?" body={`Call us directly at ${CONTACT.phone} — free consultation, no commitment.`} primaryLabel={`Call ${CONTACT.phone}`} primaryHref={CONTACT.phoneHref} />
    </main>
  );
}
