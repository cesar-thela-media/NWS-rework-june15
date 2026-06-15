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
          <div style={{ backgroundColor: COLORS.white, borderRadius: 24, padding: 48 }}>
            <h2 style={{ fontFamily: FONTS.serif, fontSize: 28, color: COLORS.espresso, marginBottom: 32 }}>Send Us a <span style={{ fontStyle: 'italic', color: COLORS.terracotta }}>Message</span></h2>
            <ContactForm />
          </div>
          <div>
            <div style={{ marginBottom: 40 }}>
              <p style={{ fontFamily: FONTS.sans, fontSize: 11, color: COLORS.terracotta, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 12 }}>Call Us</p>
              <a href={CONTACT.phoneHref} style={{ fontFamily: FONTS.sans, fontSize: 18, color: COLORS.espresso, textDecoration: 'none', fontWeight: 600 }}>{CONTACT.phone}</a>
              <p style={{ fontFamily: FONTS.sans, fontSize: 14, color: COLORS.sage, marginTop: 4 }}>{CONTACT.hours.weekday}</p>
            </div>
            <div style={{ borderTop: '1px solid rgba(43,33,24,0.1)', paddingTop: 40, marginBottom: 40 }}>
              <p style={{ fontFamily: FONTS.sans, fontSize: 11, color: COLORS.terracotta, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 12 }}>Email</p>
              <a href={`mailto:${CONTACT.email}`} style={{ fontFamily: FONTS.sans, fontSize: 16, color: COLORS.espresso, textDecoration: 'none' }}>{CONTACT.email}</a>
            </div>
            <div style={{ borderTop: '1px solid rgba(43,33,24,0.1)', paddingTop: 40 }}>
              <p style={{ fontFamily: FONTS.sans, fontSize: 11, color: COLORS.terracotta, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 12 }}>Location</p>
              <p style={{ fontFamily: FONTS.sans, fontSize: 16, color: COLORS.espresso }}>{CONTACT.address}</p>
            </div>
            <div style={{ backgroundColor: COLORS.placeholder, borderRadius: 16, height: 200, marginTop: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontFamily: FONTS.sans, fontSize: 12, color: COLORS.sage }}>Map placeholder</span>
            </div>
          </div>
        </div>
      </section>
      <CTABanner heading="Prefer to Talk?" body={`Call us directly at ${CONTACT.phone} — free consultation, no commitment.`} primaryLabel={`Call ${CONTACT.phone}`} primaryHref={CONTACT.phoneHref} />
    </main>
  );
}
