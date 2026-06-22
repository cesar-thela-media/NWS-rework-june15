import Link from 'next/link';
import CTABanner from '@/components/shared/CTABanner';
import DirectoryRow from '@/components/services/DirectoryRow';
import { COLORS, FONTS } from '@/lib/constants';
import { services } from '@/data/services';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | NWS Custom Homes Richmond TX',
  description: 'Custom home building, kitchen remodeling, bathroom remodeling, whole-home renovations, room additions, and more. One crew, every trade.',
};

const NWS = 'https://www.nws-homes.com/wp-content/uploads/2023/01';

const previewReel = [
  { src: `${NWS}/kitchen-gallery-7.jpeg`,  label: 'Kitchen Remodeling' },
  { src: `${NWS}/custom-homes-7.jpeg`,     label: 'Custom Homes' },
  { src: `${NWS}/bathroom-gallery-7.jpeg`, label: 'Bathroom & Shower' },
  { src: `${NWS}/remodeling-2.jpeg`,        label: 'Room Additions' },
];

const spotlightServices = [
  { slug: 'kitchen-remodeling',   label: 'Kitchen Remodeling',   src: `${NWS}/kitchen-gallery-7.jpeg`,  desc: 'The heart of your home, rebuilt for how you actually live.', tall: true },
  { slug: 'custom-home-building', label: 'Custom Home Building',  src: `${NWS}/custom-homes-7.jpeg`,    desc: 'Architecture and construction under one roof, built around your life.', tall: false },
  { slug: 'bathroom-remodeling',  label: 'Bathroom & Shower',     src: `${NWS}/bathroom-gallery-7.jpeg`,desc: 'Spa-worthy bathrooms that blend comfort, style, and function.', tall: false },
];

const iconMap: Record<string, React.ReactNode> = {
  house:    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="1.5" strokeLinejoin="round"><path d="M8 1L1 7H3V14H13V7H15L8 1Z"/><rect x="6" y="10" width="4" height="4" rx="0.5"/></svg>,
  kitchen:  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="1.5"><path d="M2 4H4L6 2H10L12 4H14V13H2V4Z" strokeLinejoin="round"/><line x1="8" y1="6" x2="8" y2="11"/><line x1="5" y1="8.5" x2="11" y2="8.5"/></svg>,
  bath:     <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="1.5"><rect x="2" y="3" width="12" height="9" rx="2"/><path d="M4 3V2C4 1.4 4.4 1 5 1H11C11.6 1 12 1.4 12 2V3"/><circle cx="8" cy="7.5" r="1.5"/></svg>,
  home:     <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="1.5" strokeLinejoin="round"><path d="M8 1L1 7H3V14H13V7H15L8 1Z"/><rect x="6" y="10" width="4" height="4" rx="0.5"/></svg>,
  shower:   <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="1.5"><rect x="3" y="6" width="10" height="8" rx="1.5"/><path d="M5 6V4c0-1 .7-2 3-2s3 1 3 2v2"/><line x1="5" y1="11" x2="5" y2="11.5"/><line x1="8" y1="11" x2="8" y2="11.5"/><line x1="11" y1="11" x2="11" y2="11.5"/></svg>,
  tub:      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9h10v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z"/><path d="M12 9V5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1"/></svg>,
  addition: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="1.5" strokeLinejoin="round"><rect x="1" y="4" width="14" height="10" rx="1"/><path d="M3 4V2H7V4"/><rect x="9" y="1" width="4" height="3" rx="0.5"/><line x1="11" y1="1" x2="11" y2="4"/></svg>,
  basement: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="1.5" strokeLinejoin="round"><rect x="1" y="3" width="14" height="11" rx="1"/><line x1="1" y1="8" x2="15" y2="8"/><line x1="4.5" y1="8" x2="4.5" y2="14"/><line x1="8" y1="8" x2="8" y2="14"/><line x1="11.5" y1="8" x2="11.5" y2="14"/></svg>,
  garage:   <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="1.5" strokeLinejoin="round"><rect x="1" y="3" width="14" height="12" rx="1"/><rect x="4" y="9" width="3" height="6"/><line x1="8" y1="3" x2="8" y2="5"/><polyline points="1,3 8,1 15,3"/></svg>,
  openplan: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="1.5" strokeLinejoin="round"><line x1="8" y1="1" x2="8" y2="15"/><line x1="1" y1="6" x2="15" y2="6"/><line x1="1" y1="10" x2="15" y2="10"/></svg>,
};

const newConstruction = services.filter(s => s.slug === 'custom-home-building');
const remodeling = services.filter(s => s.slug !== 'custom-home-building');

export default function ServicesPage() {
  return (
    <main>

      {/* ── A: Catalog split hero ── */}
      <section
        className="services-hero-split"
        style={{
          backgroundColor: COLORS.espresso,
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {/* Blueprint grid watermark */}
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.025, pointerEvents: 'none' }} viewBox="0 0 1440 650" fill="none" preserveAspectRatio="xMidYMid slice">
          {Array.from({ length: 12 }).map((_, i) => <line key={`v${i}`} x1={i * 130} y1="0" x2={i * 130} y2="650" stroke="white" strokeWidth="0.5" strokeDasharray="4 8" />)}
          {Array.from({ length: 8 }).map((_, i) => <line key={`h${i}`} x1="0" y1={i * 90} x2="1440" y2={i * 90} stroke="white" strokeWidth="0.5" strokeDasharray="4 8" />)}
        </svg>

        {/* LEFT — editorial */}
        <div className="rsp-pad-t" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingRight: 56 }}>
          <p style={{ fontFamily: FONTS.sans, fontSize: 11, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 20 }}>
            Home / Services
          </p>
          <p style={{ fontFamily: FONTS.sans, fontSize: 11, color: COLORS.terracotta, textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: 16 }}>
            WHAT WE BUILD
          </p>
          <h1 style={{ fontFamily: FONTS.serif, fontSize: 'clamp(44px, 4.5vw, 72px)', color: COLORS.white, lineHeight: 1.0, margin: '0 0 20px 0' }}>
            Every Service{' '}
            <span style={{ fontStyle: 'italic', color: COLORS.terracotta }}>You Need.</span>
          </h1>
          <p style={{ fontFamily: FONTS.sans, fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, maxWidth: 400, margin: '0 0 36px 0' }}>
            From ground-up custom builds to bathroom transformations. One accountable crew handles every trade.
          </p>

          {/* Service count badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, backgroundColor: 'rgba(181,85,45,0.15)', border: `1px solid rgba(181,85,45,0.35)`, borderRadius: 9999, padding: '8px 20px', marginBottom: 40, alignSelf: 'flex-start' }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: COLORS.terracotta }} />
            <span style={{ fontFamily: FONTS.sans, fontSize: 13, color: COLORS.terracotta, fontWeight: 600 }}>10 services available</span>
          </div>

          {/* Inline stats */}
          <div className="inline-stats">
            {[{ v: '500+', l: 'Projects' }, { v: '19', l: 'Years' }, { v: '4.9★', l: 'Avg Rating' }].map(s => (
              <div key={s.l}>
                <p style={{ fontFamily: FONTS.serif, fontSize: 30, color: COLORS.white, margin: 0, lineHeight: 1 }}>{s.v}</p>
                <p style={{ fontFamily: FONTS.sans, fontSize: 11, color: COLORS.sage, textTransform: 'uppercase', letterSpacing: '0.12em', marginTop: 6 }}>{s.l}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — 2×2 photo preview reel, edge to edge, no border-radius */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', overflow: 'hidden' }}>
          {previewReel.map((cell, i) => (
            <div key={i} style={{ position: 'relative', overflow: 'hidden', backgroundColor: COLORS.placeholder }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={cell.src} alt={cell.label} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(43,33,24,0.3)' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(43,33,24,0.85), transparent)', padding: '20px 16px 14px' }}>
                <span style={{ fontFamily: FONTS.sans, fontSize: 11, color: 'rgba(255,255,255,0.8)', textTransform: 'uppercase', letterSpacing: '0.14em' }}>{cell.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── B: Featured Spotlight — asymmetric 3-up grid ── */}
      <section className="rsp-pad" style={{ backgroundColor: COLORS.plaster }}>
        <p style={{ fontFamily: FONTS.sans, fontSize: 11, color: COLORS.terracotta, textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: 12 }}>
          MOST REQUESTED
        </p>
        <h2 style={{ fontFamily: FONTS.serif, fontSize: 'clamp(32px, 3vw, 48px)', color: COLORS.espresso, marginBottom: 40 }}>
          Where Most Clients <span style={{ fontStyle: 'italic', color: COLORS.terracotta }}>Start.</span>
        </h2>

        <div className="spotlight-grid">
          {spotlightServices.map((svc, i) => (
            <Link
              key={svc.slug}
              href={`/services/${svc.slug}`}
              style={{
                gridRow: svc.tall ? '1 / 3' : 'auto',
                position: 'relative',
                borderRadius: 20,
                overflow: 'hidden',
                backgroundColor: COLORS.placeholder,
                display: 'block',
                textDecoration: 'none',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={svc.src} alt={svc.label} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(43,33,24,0.92) 0%, rgba(43,33,24,0.4) 50%, rgba(43,33,24,0.1) 80%, transparent 100%)' }} />
              {i === 0 && (
                <div style={{ position: 'absolute', top: 16, left: 16, backgroundColor: COLORS.terracotta, color: COLORS.white, fontFamily: FONTS.sans, fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', padding: '5px 12px', borderRadius: 9999 }}>
                  Most Requested
                </div>
              )}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '28px 24px 24px', zIndex: 2 }}>
                <h3 style={{ fontFamily: FONTS.serif, fontSize: svc.tall ? 28 : 22, color: COLORS.white, margin: '0 0 8px 0' }}>{svc.label}</h3>
                {svc.tall && <p style={{ fontFamily: FONTS.sans, fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.55, margin: '0 0 16px 0' }}>{svc.desc}</p>}
                <span style={{ fontFamily: FONTS.sans, fontSize: 13, color: COLORS.terracotta, fontWeight: 600 }}>Explore →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── C: Service Directory — horizontal list rows by category ── */}
      <section className="rsp-pad" style={{ backgroundColor: COLORS.espresso, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ fontFamily: FONTS.sans, fontSize: 11, color: COLORS.terracotta, textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: 12 }}>
            ALL SERVICES
          </p>
          <h2 style={{ fontFamily: FONTS.serif, fontSize: 'clamp(32px, 3vw, 48px)', color: COLORS.white, marginBottom: 48 }}>
            The Full <span style={{ fontStyle: 'italic', color: COLORS.terracotta }}>Catalog.</span>
          </h2>

          {/* Group: New Construction */}
          <div style={{ marginBottom: 32 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 8 }}>
              <p style={{ fontFamily: FONTS.sans, fontSize: 10, color: COLORS.sage, textTransform: 'uppercase', letterSpacing: '0.22em', margin: 0, fontWeight: 700 }}>
                New Construction
              </p>
              <div style={{ flex: 1, height: 1, backgroundColor: 'rgba(255,255,255,0.07)' }} />
            </div>
            {newConstruction.map(svc => (
              <DirectoryRow key={svc.slug} svc={svc} icon={iconMap[svc.iconType]} />
            ))}
          </div>

          {/* Group: Remodeling */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 8 }}>
              <p style={{ fontFamily: FONTS.sans, fontSize: 10, color: COLORS.sage, textTransform: 'uppercase', letterSpacing: '0.22em', margin: 0, fontWeight: 700 }}>
                Remodeling &amp; Renovation
              </p>
              <div style={{ flex: 1, height: 1, backgroundColor: 'rgba(255,255,255,0.07)' }} />
            </div>
            {remodeling.map(svc => (
              <DirectoryRow key={svc.slug} svc={svc} icon={iconMap[svc.iconType]} />
            ))}
          </div>
        </div>
      </section>

      {/* ── D: Stats bar ── */}
      <section style={{ backgroundColor: COLORS.espresso, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="stats-bar">
          {[
            { value: '500+', label: 'Projects Completed' },
            { value: '19',   label: 'Years in Business' },
            { value: '9',    label: 'Cities Served' },
            { value: '4.9★', label: 'Google Average' },
          ].map((stat, i) => (
            <div key={stat.label} style={{ padding: '48px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}>
              <span style={{ fontFamily: FONTS.serif, fontSize: 'clamp(40px, 4vw, 60px)', color: COLORS.white, lineHeight: 1 }}>{stat.value}</span>
              <span style={{ fontFamily: FONTS.sans, fontSize: 11, color: COLORS.sage, textTransform: 'uppercase', letterSpacing: '0.12em', marginTop: 10 }}>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <CTABanner heading="One Call. Every Trade." body="Tell us what you need. We handle everything from first sketch to final walkthrough." primaryLabel="Get a Free Quote" primaryHref="/contact" />
    </main>
  );
}

