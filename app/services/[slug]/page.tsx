import { getServiceBySlug, getRelatedServices } from '@/data/services';
import { notFound } from 'next/navigation';
import PageHero from '@/components/shared/PageHero';
import CTABanner from '@/components/shared/CTABanner';
import RelatedServicesGrid from '@/components/services/RelatedServicesGrid';
import dynamicNext from 'next/dynamic';
import { COLORS, FONTS } from '@/lib/constants';
import type { Metadata } from 'next';

const BeforeAfterSlider = dynamicNext(() => import('@/components/BeforeAfterSlider'), { ssr: false });

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
  const groups = service.includeGroups ?? [];

  return (
    <main>
      {/* ── PageHero with real service photo ── */}
      <PageHero
        eyebrow={service.navLabel.toUpperCase()}
        titleLine1={service.title}
        titleLine2=""
        titleAccent={service.titleAccent}
        subtitle={service.heroSubtitle}
        image={service.heroImage}
        variant={service.heroVariant}
        layout="centered"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: service.navLabel, href: `/services/${service.slug}` },
        ]}
      />

      {/* ── By the Numbers strip ── */}
      <section
        style={{
          backgroundColor: COLORS.plaster,
          padding: '0',
          borderTop: `3px solid ${COLORS.terracotta}`,
        }}
      >
        <div
          className="nums-bar"
          style={{
            gridTemplateColumns: `repeat(${service.byTheNumbers.length}, 1fr)`,
          }}
        >
          {service.byTheNumbers.map((stat, i) => (
            <div
              key={stat.label}
              style={{
                padding: '40px 0',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                borderRight: i < service.byTheNumbers.length - 1 ? '1px solid rgba(154,155,140,0.15)' : 'none',
              }}
            >
              <span
                style={{
                  fontFamily: FONTS.serif,
                  fontSize: 'clamp(36px, 3.5vw, 52px)',
                  color: COLORS.terracotta,
                  lineHeight: 1,
                  marginBottom: 8,
                }}
              >
                {stat.value}
              </span>
              <span
                style={{
                  fontFamily: FONTS.sans,
                  fontSize: 11,
                  color: COLORS.sage,
                  textTransform: 'uppercase',
                  letterSpacing: '0.14em',
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Editorial intro — 2-col when service has gallery images ── */}
      <section className="rsp-pad" style={{ backgroundColor: COLORS.plaster }}>
        {service.galleryImages && service.galleryImages.length >= 3 ? (
          <div className="rsp-2col" style={{ gap: 72, alignItems: 'center' }}>
            {/* Left: text */}
            <div>
              <p style={{ fontFamily: FONTS.sans, fontSize: 11, color: COLORS.terracotta, textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: 16 }}>
                ABOUT THIS SERVICE
              </p>
              <h2 style={{ fontFamily: FONTS.serif, fontSize: 'clamp(28px, 3vw, 44px)', color: COLORS.espresso, lineHeight: 1.12, marginBottom: 28 }}>
                {service.title}{' '}
                <span style={{ fontStyle: 'italic', color: COLORS.terracotta }}>{service.titleAccent}</span>
              </h2>
              {service.intro.map((p, i) => (
                <p key={i} style={{ fontFamily: FONTS.sans, fontSize: 16, color: COLORS.sage, lineHeight: 1.75, marginBottom: i < service.intro.length - 1 ? 18 : 0 }}>
                  {p}
                </p>
              ))}
            </div>
            {/* Right: 1-wide + 2-below photo mosaic */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '220px 160px', gap: 10 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={service.galleryImages[0]} alt={service.navLabel} style={{ gridColumn: '1 / 3', width: '100%', height: '100%', objectFit: 'cover', borderRadius: 16, display: 'block' }} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={service.galleryImages[1]} alt={service.navLabel} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 16, display: 'block' }} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={service.galleryImages[2]} alt={service.navLabel} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 16, display: 'block' }} />
            </div>
          </div>
        ) : (
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontFamily: FONTS.sans, fontSize: 11, color: COLORS.terracotta, textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: 16 }}>
              ABOUT THIS SERVICE
            </p>
            <h2 style={{ fontFamily: FONTS.serif, fontSize: 'clamp(28px, 3vw, 42px)', color: COLORS.espresso, lineHeight: 1.15, marginBottom: 32 }}>
              {service.title}{' '}
              <span style={{ fontStyle: 'italic', color: COLORS.terracotta }}>{service.titleAccent}</span>
            </h2>
            {service.intro.map((p, i) => (
              <p key={i} style={{ fontFamily: FONTS.sans, fontSize: 16, color: COLORS.sage, lineHeight: 1.75, marginBottom: i < service.intro.length - 1 ? 20 : 0, textAlign: 'left' }}>
                {p}
              </p>
            ))}
          </div>
        )}
      </section>

      {/* ── Before / After slider (only if service has before/after images) ── */}
      {service.beforeAfter && (
        <section className="rsp-pad" style={{ backgroundColor: COLORS.plaster }}>
          <p style={{ fontFamily: FONTS.sans, fontSize: 11, color: COLORS.terracotta, textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: 12, textAlign: 'center' }}>
            SEE THE DIFFERENCE
          </p>
          <h2
            style={{
              fontFamily: FONTS.serif,
              fontSize: 'clamp(28px, 3vw, 42px)',
              color: COLORS.espresso,
              marginBottom: 40,
              textAlign: 'center',
            }}
          >
            Before &amp; <span style={{ fontStyle: 'italic', color: COLORS.terracotta }}>After.</span>
          </h2>
          <div
            className="before-after-wrap"
            style={{
              borderRadius: 24,
              overflow: 'hidden',
              height: 520,
              boxShadow: '0 24px 64px rgba(43,33,24,0.2)',
            }}
          >
            <BeforeAfterSlider
              beforeSrc={service.beforeAfter.before}
              afterSrc={service.beforeAfter.after}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 16, padding: '0 4px' }}>
            <span style={{ fontFamily: FONTS.sans, fontSize: 12, color: COLORS.sage, textTransform: 'uppercase', letterSpacing: '0.12em' }}>Before</span>
            <span style={{ fontFamily: FONTS.sans, fontSize: 12, color: COLORS.sage, textTransform: 'uppercase', letterSpacing: '0.12em' }}>After</span>
          </div>
        </section>
      )}

      {/* ── Process: vertical step track ── */}
      <section
        className="rsp-pad"
        style={{
          backgroundColor: service.beforeAfter ? COLORS.espresso : COLORS.plaster,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          className="how-we-work"
          style={{
            alignItems: 'start',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Left: sticky heading */}
          <div style={{ position: 'sticky', top: 120 }}>
            <p
              style={{
                fontFamily: FONTS.sans,
                fontSize: 11,
                color: COLORS.terracotta,
                textTransform: 'uppercase',
                letterSpacing: '0.18em',
                marginBottom: 16,
              }}
            >
              HOW IT WORKS
            </p>
            <h2
              style={{
                fontFamily: FONTS.serif,
                fontSize: 'clamp(32px, 3.5vw, 50px)',
                color: service.beforeAfter ? COLORS.white : COLORS.espresso,
                lineHeight: 1.05,
                marginBottom: 24,
              }}
            >
              Our <span style={{ fontStyle: 'italic', color: COLORS.terracotta }}>Process.</span>
            </h2>
            <p
              style={{
                fontFamily: FONTS.sans,
                fontSize: 15,
                color: COLORS.sage,
                lineHeight: 1.7,
                maxWidth: 380,
              }}
            >
              Every project follows the same four-step system, so you always know exactly where you stand.
            </p>
          </div>

          {/* Right: step track */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 18,
                width: 2,
                background: `linear-gradient(to bottom, ${COLORS.terracotta}, rgba(181,85,45,0.1))`,
              }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {service.processSteps.map((step, i) => (
                <div
                  key={step}
                  style={{
                    display: 'flex',
                    gap: 32,
                    paddingBottom: i < service.processSteps.length - 1 ? 40 : 0,
                    position: 'relative',
                  }}
                >
                  <div
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: '50%',
                      backgroundColor: i === 0 ? COLORS.terracotta : (service.beforeAfter ? COLORS.espresso : COLORS.plaster),
                      border: `2px solid ${i === 0 ? COLORS.terracotta : 'rgba(181,85,45,0.45)'}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      position: 'relative',
                      zIndex: 1,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: FONTS.sans,
                        fontSize: 13,
                        color: COLORS.white,
                        fontWeight: 700,
                      }}
                    >
                      {i + 1}
                    </span>
                  </div>
                  <div style={{ paddingTop: 7 }}>
                    <h3
                      style={{
                        fontFamily: FONTS.serif,
                        fontSize: 20,
                        color: service.beforeAfter ? COLORS.white : COLORS.espresso,
                        margin: '0 0 8px 0',
                      }}
                    >
                      {step}
                    </h3>
                    {service.processDescriptions?.[i] && (
                      <p style={{ fontFamily: FONTS.sans, fontSize: 14, color: COLORS.sage, lineHeight: 1.6, margin: 0, maxWidth: 380 }}>
                        {service.processDescriptions[i]}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── What's Included: grouped checklist on dark ── */}
      <section
        className="rsp-pad"
        style={{
          backgroundColor: COLORS.espresso,
          position: 'relative',
          overflow: 'hidden',
        }}
      >

        <div style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ fontFamily: FONTS.sans, fontSize: 11, color: COLORS.terracotta, textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: 12 }}>
            SCOPE OF WORK
          </p>
          <h2
            style={{
              fontFamily: FONTS.serif,
              fontSize: 'clamp(28px, 3vw, 42px)',
              color: COLORS.white,
              marginBottom: 56,
            }}
          >
            What&apos;s <span style={{ fontStyle: 'italic', color: COLORS.terracotta }}>Included.</span>
          </h2>

          {groups.length > 0 ? (
            <div className="included-grid">
              {groups.map((group) => (
                <div
                  key={group.label}
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    borderRadius: 20,
                    padding: '32px 28px',
                    border: '1px solid rgba(255,255,255,0.07)',
                  }}
                >
                  <p
                    style={{
                      fontFamily: FONTS.sans,
                      fontSize: 10,
                      color: COLORS.terracotta,
                      textTransform: 'uppercase',
                      letterSpacing: '0.2em',
                      marginBottom: 20,
                      fontWeight: 700,
                    }}
                  >
                    {group.label}
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                    {group.items.map((item) => (
                      <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                        <div
                          style={{
                            width: 20,
                            height: 20,
                            borderRadius: '50%',
                            backgroundColor: 'rgba(181,85,45,0.15)',
                            border: `1px solid ${COLORS.terracotta}`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            marginTop: 1,
                          }}
                        >
                          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                            <path d="M1 4l2.5 2.5L9 1" stroke={COLORS.terracotta} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <span style={{ fontFamily: FONTS.sans, fontSize: 14, color: COLORS.sage, lineHeight: 1.45 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {service.includes.map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7l3 3 7-7" stroke={COLORS.terracotta} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span style={{ fontFamily: FONTS.sans, fontSize: 14, color: COLORS.sage }}>{item}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Related Services ── */}
      {related.length > 0 && (
        <section className="rsp-pad" style={{ backgroundColor: COLORS.plaster, paddingTop: 0 }}>
          <p style={{ fontFamily: FONTS.sans, fontSize: 11, color: COLORS.terracotta, textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: 12 }}>
            EXPLORE MORE
          </p>
          <h2
            style={{
              fontFamily: FONTS.serif,
              fontSize: 'clamp(24px, 2.5vw, 36px)',
              color: COLORS.espresso,
              marginBottom: 32,
            }}
          >
            Related <span style={{ fontStyle: 'italic', color: COLORS.terracotta }}>Services</span>
          </h2>
          <RelatedServicesGrid services={related} />
        </section>
      )}

      <CTABanner
        heading={`Start Your ${service.title} Project`}
        body="Free on-site consultation, with fixed price before we begin."
        primaryLabel="Get a Free Quote"
        primaryHref="/contact"
        fullWidth
      />
    </main>
  );
}
