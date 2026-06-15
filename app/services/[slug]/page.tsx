import { getServiceBySlug, getRelatedServices } from '@/data/services';
import { getTestimonials } from '@/data/testimonials';
import { notFound } from 'next/navigation';
import PageHero from '@/components/shared/PageHero';
import TestimonialStrip from '@/components/shared/TestimonialStrip';
import CTABanner from '@/components/shared/CTABanner';
import RelatedServicesGrid from '@/components/services/RelatedServicesGrid';
import { COLORS, FONTS } from '@/lib/constants';
import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return { title: 'Service Not Found | NWS Custom Homes' };
  return {
    title: `${service.navLabel} | NWS Custom Homes Richmond TX`,
    description: service.cardDescription,
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();
  const related = getRelatedServices(service.relatedSlugs);
  const testimonials = getTestimonials(service.slug, 3);

  return (
    <main>
      <PageHero eyebrow={service.navLabel.toUpperCase()} titleLine1={service.title} titleLine2="" titleAccent={service.titleAccent} subtitle={service.heroSubtitle} breadcrumb={[{label:'Home',href:'/'},{label:'Services',href:'/services'},{label:service.navLabel,href:`/services/${service.slug}`}]} />
      <section style={{ backgroundColor: COLORS.plaster, padding: '80px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '55fr 45fr', gap: 64, alignItems: 'center' }}>
          <div>
            {service.intro.map((p, i) => <p key={i} style={{ fontFamily: FONTS.sans, fontSize: 16, color: COLORS.sage, lineHeight: 1.7, marginBottom: 16 }}>{p}</p>)}
          </div>
          <div style={{ backgroundColor: COLORS.placeholder, borderRadius: 24, height: 400, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: FONTS.sans, fontSize: 12, color: COLORS.sage }}>Photo placeholder</span>
          </div>
        </div>
      </section>
      <section style={{ backgroundColor: COLORS.espresso, padding: '80px 80px', position: 'relative', overflow: 'hidden' }}>
        <svg style={{ position: 'absolute', top: 40, right: 40, width: 160, height: 160, opacity: 0.06, pointerEvents: 'none' }} viewBox="0 0 160 160" fill="none">
          <path d="M80 10L10 65V150H150V65L80 10Z" stroke="white" strokeWidth="1.5"/>
          <rect x="65" y="90" width="30" height="60" stroke="white" strokeWidth="1"/>
        </svg>
        <div style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64 }}>
          <h2 style={{ fontFamily: FONTS.serif, fontSize: 'clamp(28px, 3vw, 40px)', color: COLORS.white }}>What&apos;s <span style={{ fontStyle: 'italic', color: COLORS.terracotta }}>Included</span></h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {service.includes.map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7l3 3 7-7" stroke={COLORS.terracotta} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span style={{ fontFamily: FONTS.sans, fontSize: 14, color: COLORS.sage }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ backgroundColor: COLORS.plaster, padding: '80px 80px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: FONTS.serif, fontSize: 'clamp(28px, 3vw, 40px)', color: COLORS.espresso, marginBottom: 48 }}>Our <span style={{ fontStyle: 'italic', color: COLORS.terracotta }}>Process</span></h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
          {service.processSteps.map((step, i) => (
            <div key={step} style={{ padding: 24 }}>
              <div style={{ width: 48, height: 48, borderRadius: '50%', backgroundColor: COLORS.espresso, color: COLORS.white, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FONTS.serif, fontSize: 20, margin: '0 auto 16' }}>{i + 1}</div>
              <p style={{ fontFamily: FONTS.serif, fontSize: 18, color: COLORS.espresso }}>{step}</p>
            </div>
          ))}
        </div>
      </section>
      {related.length > 0 && (
        <section style={{ backgroundColor: COLORS.plaster, padding: '0 80px 80px' }}>
          <h2 style={{ fontFamily: FONTS.serif, fontSize: 'clamp(24px, 2.5vw, 36px)', color: COLORS.espresso, marginBottom: 32 }}>Related <span style={{ fontStyle: 'italic', color: COLORS.terracotta }}>Services</span></h2>
          <RelatedServicesGrid services={related} />
        </section>
      )}
      <TestimonialStrip testimonials={testimonials} eyebrow="WHAT CLIENTS SAY" />
      <CTABanner heading={`Start Your ${service.title} Project`} body="Free on-site consultation — fixed price before we begin." primaryLabel="Get a Free Quote" primaryHref="/contact" />
    </main>
  );
}
