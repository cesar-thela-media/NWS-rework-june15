import PageHero from '@/components/shared/PageHero';
import CTABanner from '@/components/shared/CTABanner';
import { COLORS, FONTS, CONTACT } from '@/lib/constants';
import { faqs } from '@/data/faqs';
import { FAQItem } from '@/components/faqs/FAQAccordion';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQs | NWS Custom Homes and Remodeling',
  description: 'Answers to common questions about custom home building, remodeling timelines, pricing, permits, and service areas in Richmond, TX.',
};

export default function FAQsPage() {
  const categories = Array.from(new Set(faqs.map(f => f.category)));
  return (
    <main>
      <PageHero eyebrow="FAQ" titleLine1="Got" titleLine2="" titleAccent="Questions?" subtitle="Everything you need to know before starting your project." breadcrumb={[{label:'Home',href:'/'},{label:'FAQs',href:'/faqs'}]} />
      <section style={{ backgroundColor: COLORS.plaster, padding: '80px 80px', maxWidth: 860, margin: '0 auto' }}>
        {categories.map(cat => (
          <div key={cat} style={{ marginBottom: 48 }}>
            <p style={{ fontFamily: FONTS.sans, fontSize: 11, color: COLORS.terracotta, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 16 }}>{cat}</p>
            {faqs.filter(f => f.category === cat).map(faq => <FAQItem key={faq.id} faq={faq} />)}
          </div>
        ))}
      </section>
      <section style={{ backgroundColor: COLORS.espresso, padding: '80px 80px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <svg style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 260, height: 260, opacity: 0.04, pointerEvents: 'none' }} viewBox="0 0 260 260" fill="none">
          <path d="M130 20L20 90V240H240V90L130 20Z" stroke="white" strokeWidth="2"/>
          <rect x="105" y="145" width="50" height="95" stroke="white" strokeWidth="1.5"/>
        </svg>
        <h2 style={{ position: 'relative', zIndex: 1, fontFamily: FONTS.serif, fontSize: 'clamp(32px, 3vw, 40px)', color: COLORS.white, marginBottom: 16 }}>Still Have <span style={{ fontStyle: 'italic', color: COLORS.terracotta }}>Questions?</span></h2>
        <p style={{ fontFamily: FONTS.sans, fontSize: 16, color: COLORS.sage, maxWidth: 520, margin: '0 auto 32px', lineHeight: 1.6 }}>Give us a call or send a message — we&apos;ll answer anything you need to know before starting your project.</p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href={CONTACT.phoneHref} style={{ backgroundColor: COLORS.terracotta, color: COLORS.white, fontFamily: FONTS.sans, fontSize: 14, fontWeight: 600, padding: '16px 32px', borderRadius: 9999, textDecoration: 'none', display: 'inline-block' }}>Call {CONTACT.phone}</a>
          <a href={`mailto:${CONTACT.email}`} style={{ backgroundColor: 'transparent', color: COLORS.white, fontFamily: FONTS.sans, fontSize: 14, padding: '16px 32px', borderRadius: 9999, border: '1px solid rgba(255,255,255,0.3)', textDecoration: 'none', display: 'inline-block' }}>Send an Email</a>
        </div>
      </section>
      <CTABanner heading="Ready to Get Started?" body="Free consultation — we'll talk through your project and give you a firm quote." primaryLabel="Contact Us" primaryHref="/contact" />
    </main>
  );
}
