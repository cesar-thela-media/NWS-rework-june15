import ValueCards from '@/components/about/ValueCards';
import { COLORS, FONTS } from '@/lib/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About NWS Custom Homes | Richmond, TX Since 2007',
  description: 'Learn about NWS Custom Homes and Remodeling: full-service construction and remodeling in Richmond, TX with 35+ years of combined experience.',
};

const NWS = 'https://www.nws-homes.com/wp-content/uploads/2023/01';

const milestones = [
  { year: '2007', label: 'Founded', body: 'Started as a two-man operation in Richmond, TX. One crew, one promise.' },
  { year: '2012', label: 'First Custom Home', body: 'Completed our first ground-up custom build in Fulshear. The client still calls us for every renovation.' },
  { year: '2018', label: 'Regional Expansion', body: 'Grew to serve 9 cities across Fort Bend County with dedicated project managers per territory.' },
  { year: '2024', label: '500+ Projects', body: 'Over 500 completed projects. Same crew, same standards, same Richmond, TX roots.' },
];

const processSteps = [
  { step: '01', title: 'Consultation', body: 'We visit your home, listen to your goals, and assess the scope, at no charge.' },
  { step: '02', title: 'Design & Quote', body: 'You receive a detailed fixed-price quote and design plan within 5 business days.' },
  { step: '03', title: 'Build', body: 'Our crew handles every trade. You get a dedicated project manager and weekly updates.' },
  { step: '04', title: 'Walkthrough', body: 'We don\'t close until you\'re satisfied. A final walkthrough with a 1-year labor warranty.' },
];

export default function AboutPage() {
  return (
    <main>

      {/* ── Milestone Timeline ── */}
      <section className="rsp-pad" style={{ backgroundColor: COLORS.plaster, overflow: 'hidden' }}>
        <p style={{ fontFamily: FONTS.sans, fontSize: 11, color: COLORS.terracotta, textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: 16 }}>
          OUR STORY
        </p>
        <h2
          style={{
            fontFamily: FONTS.serif,
            fontSize: 'clamp(32px, 3vw, 48px)',
            color: COLORS.espresso,
            marginBottom: 72,
          }}
        >
          How We Got Here.
        </h2>

        {/* Timeline track */}
        <div style={{ position: 'relative' }}>
          {/* Horizontal spine */}
          <div
            style={{
              position: 'absolute',
              top: 10,
              left: 0,
              right: 0,
              height: 2,
              background: `linear-gradient(90deg, ${COLORS.terracotta} 0%, rgba(181,85,45,0.2) 100%)`,
            }}
          />
          <div className="timeline-grid">
            {milestones.map((m, i) => {
              // Era-based dot states: outline (2007) → outline+dot (2012) → partial (2018) → filled+ring (2024)
              const dotStyles = [
                { bg: 'transparent', border: `2px solid ${COLORS.terracotta}`, shadow: 'none', inner: false },
                { bg: 'transparent', border: `2px solid ${COLORS.terracotta}`, shadow: 'none', inner: true },
                { bg: 'rgba(181,85,45,0.45)', border: `2px solid ${COLORS.terracotta}`, shadow: 'none', inner: false },
                { bg: COLORS.terracotta, border: `2px solid ${COLORS.terracotta}`, shadow: `0 0 0 5px rgba(181,85,45,0.2)`, inner: false },
              ][i];
              return (
              <div key={m.year} style={{ position: 'relative', paddingTop: 40 }}>
                {/* Dot on spine */}
                <div
                  style={{
                    position: 'absolute',
                    top: 2,
                    left: 0,
                    transform: 'translateY(-50%)',
                    width: 18,
                    height: 18,
                    borderRadius: '50%',
                    backgroundColor: dotStyles.bg,
                    border: dotStyles.border,
                    boxShadow: dotStyles.shadow,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {dotStyles.inner && <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: COLORS.terracotta }} />}
                </div>
                {/* Timeline image */}
                <div style={{ width: '100%', height: 120, borderRadius: 12, overflow: 'hidden', marginBottom: 16, backgroundColor: COLORS.placeholder }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${NWS}/${['custom-homes-7.jpeg','kitchen-gallery-7.jpeg','bathroom-gallery-7.jpeg','remodeling-2.jpeg'][i]}`}
                    alt={m.label}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
                <p style={{ fontFamily: FONTS.serif, fontSize: 'clamp(28px, 2.5vw, 40px)', color: COLORS.terracotta, margin: '0 0 4px 0', lineHeight: 1 }}>
                  {m.year}
                </p>
                <p style={{ fontFamily: FONTS.sans, fontSize: 11, color: COLORS.espresso, textTransform: 'uppercase', letterSpacing: '0.14em', margin: '0 0 12px 0', fontWeight: 600 }}>
                  {m.label}
                </p>
                <p style={{ fontFamily: FONTS.sans, fontSize: 14, color: COLORS.sage, lineHeight: 1.65, margin: 0, maxWidth: 260 }}>
                  {m.body}
                </p>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Values: large italic word + photo mosaic ── */}
      <section className="rsp-pad" style={{ backgroundColor: COLORS.espresso, position: 'relative', overflow: 'hidden' }}>
        {/* Subtle blueprint corner */}
        <svg style={{ position: 'absolute', bottom: 40, right: 40, width: 240, height: 240, opacity: 0.04, pointerEvents: 'none' }} viewBox="0 0 240 240" fill="none">
          <path d="M120 20L20 90V220H220V90L120 20Z" stroke="white" strokeWidth="1.5" />
          <rect x="96" y="145" width="48" height="75" stroke="white" strokeWidth="1" />
        </svg>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ fontFamily: FONTS.sans, fontSize: 11, color: COLORS.terracotta, textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: 16 }}>
            WHAT WE STAND FOR
          </p>
          <h2 style={{ fontFamily: FONTS.serif, fontSize: 'clamp(32px, 3vw, 48px)', color: COLORS.white, marginBottom: 64 }}>
            Three Words We Never Compromise.
          </h2>
          <ValueCards />
        </div>
      </section>

      {/* ── Photo Mosaic ── */}
      <section className="rsp-pad" style={{ backgroundColor: COLORS.plaster }}>
        <p style={{ fontFamily: FONTS.sans, fontSize: 11, color: COLORS.terracotta, textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: 16 }}>
          OUR WORK
        </p>
        <h2 style={{ fontFamily: FONTS.serif, fontSize: 'clamp(32px, 3vw, 48px)', color: COLORS.espresso, marginBottom: 40 }}>
          Built Across Fort Bend County.
        </h2>
        <div className="mosaic-grid">
          {/* Large feature photo spans 2 rows */}
          <div style={{ gridRow: '1 / 3', borderRadius: 20, overflow: 'hidden', position: 'relative', backgroundColor: COLORS.placeholder }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${NWS}/kitchen-gallery-7.jpeg`} alt="Luxury kitchen remodel" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(43,33,24,0.85), transparent)', padding: '32px 24px 24px' }}>
              <p style={{ fontFamily: FONTS.serif, fontSize: 18, color: COLORS.white, margin: '0 0 4px 0' }}>Kitchen Remodeling</p>
              <p style={{ fontFamily: FONTS.sans, fontSize: 13, color: 'rgba(255,255,255,0.6)', margin: 0 }}>Katy, TX</p>
            </div>
          </div>
          {/* Top middle */}
          <div style={{ borderRadius: 20, overflow: 'hidden', position: 'relative', backgroundColor: COLORS.placeholder }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${NWS}/bathroom-gallery-7.jpeg`} alt="Bathroom remodel" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          {/* Top right */}
          <div style={{ borderRadius: 20, overflow: 'hidden', position: 'relative', backgroundColor: COLORS.placeholder }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${NWS}/custom-homes-7.jpeg`} alt="Custom home" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          {/* Bottom middle */}
          <div style={{ borderRadius: 20, overflow: 'hidden', position: 'relative', backgroundColor: COLORS.placeholder }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${NWS}/remodeling-2.jpeg`} alt="Home remodel" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          {/* Bottom right */}
          <div style={{ borderRadius: 20, overflow: 'hidden', position: 'relative', backgroundColor: COLORS.placeholder }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${NWS}/bathroom-gallery-1.jpeg`} alt="Bathroom remodel" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* ── How We Work: vertical step track ── */}
      <section className="rsp-pad" style={{ backgroundColor: COLORS.espresso, position: 'relative', overflow: 'hidden' }}>
        <div className="how-we-work" style={{ position: 'relative', zIndex: 1 }}>
          {/* Left: heading */}
          <div style={{ position: 'sticky', top: 120 }}>
            <p style={{ fontFamily: FONTS.sans, fontSize: 11, color: COLORS.terracotta, textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: 16 }}>
              HOW WE WORK
            </p>
            <h2 style={{ fontFamily: FONTS.serif, fontSize: 'clamp(36px, 3.5vw, 56px)', color: COLORS.white, lineHeight: 1.05, marginBottom: 24 }}>
              Four Steps to Your Finished Home.
            </h2>
            <p style={{ fontFamily: FONTS.sans, fontSize: 15, color: COLORS.sage, lineHeight: 1.7, maxWidth: 400 }}>
              No hidden fees, no surprise change orders, no strangers in your home. Our process is built for homeowners who value certainty.
            </p>
          </div>

          {/* Right: vertical step track */}
          <div style={{ position: 'relative' }}>
            {/* Vertical spine */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 18,
                width: 2,
                background: `linear-gradient(to bottom, ${COLORS.terracotta}, rgba(181,85,45,0.15))`,
              }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {processSteps.map((s, i) => (
                <div
                  key={s.step}
                  style={{
                    display: 'flex',
                    gap: 32,
                    paddingBottom: i < processSteps.length - 1 ? 56 : 0,
                    position: 'relative',
                  }}
                >
                  {/* Node dot */}
                  <div
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: '50%',
                      backgroundColor: i === 0 ? COLORS.terracotta : COLORS.espresso,
                      border: `2px solid ${i === 0 ? COLORS.terracotta : 'rgba(181,85,45,0.5)'}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      position: 'relative',
                      zIndex: 1,
                    }}
                  >
                    <span style={{ fontFamily: FONTS.sans, fontSize: 11, color: COLORS.white, fontWeight: 700, letterSpacing: '0.05em' }}>
                      {s.step}
                    </span>
                  </div>
                  <div style={{ paddingTop: 6 }}>
                    <h3 style={{ fontFamily: FONTS.serif, fontSize: 22, color: COLORS.white, margin: '0 0 10px 0' }}>
                      {s.title}
                    </h3>
                    <p style={{ fontFamily: FONTS.sans, fontSize: 14, color: COLORS.sage, lineHeight: 1.65, margin: 0 }}>
                      {s.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


    </main>
  );
}
