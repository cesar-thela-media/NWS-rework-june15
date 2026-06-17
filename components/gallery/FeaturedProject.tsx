'use client';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { COLORS, FONTS } from '@/lib/constants';

const BeforeAfterSlider = dynamic(() => import('@/components/BeforeAfterSlider'), { ssr: false });

const NWS = 'https://www.nws-homes.com/wp-content/uploads/2023/01';
const BEFORE = `${NWS}/kitchen-gallery-9.jpeg`;
const AFTER  = `${NWS}/kitchen-gallery-7.jpeg`;

const DETAILS = [
  { label: 'Project Type', value: 'Kitchen Remodeling' },
  { label: 'Location',     value: 'Katy, TX' },
  { label: 'Size',         value: '~320 sq ft' },
  { label: 'Timeline',     value: '3 weeks' },
];

export default function FeaturedProject() {
  return (
    <section
      style={{
        backgroundColor: COLORS.plaster,
        padding: '80px 80px 0',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 32 }}>
        <div>
          <p style={{ fontFamily: FONTS.sans, fontSize: 11, color: COLORS.terracotta, textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: 8 }}>
            FEATURED PROJECT
          </p>
          <h2 style={{ fontFamily: FONTS.serif, fontSize: 'clamp(24px, 2.5vw, 36px)', color: COLORS.espresso, margin: 0 }}>
            A Kitchen That Changed <span style={{ fontStyle: 'italic', color: COLORS.terracotta }}>Everything.</span>
          </h2>
        </div>
        <p style={{ fontFamily: FONTS.sans, fontSize: 14, color: COLORS.sage, maxWidth: 340, textAlign: 'right', lineHeight: 1.6, margin: 0 }}>
          Drag the slider to see the transformation. Dark cabinets, waterfall island, and full reconfiguration — 3 weeks start to finish.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 320px',
          gap: 0,
          borderRadius: 24,
          overflow: 'hidden',
          boxShadow: '0 24px 72px rgba(43,33,24,0.14)',
        }}
      >
        {/* Before/After Slider */}
        <div style={{ height: 480, position: 'relative', backgroundColor: COLORS.placeholder }}>
          <Suspense fallback={<div style={{ height: 480, backgroundColor: COLORS.placeholder, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ fontFamily: FONTS.sans, fontSize: 13, color: COLORS.sage }}>Loading…</span></div>}>
            <BeforeAfterSlider beforeSrc={BEFORE} afterSrc={AFTER} />
          </Suspense>
          {/* Labels */}
          <div style={{ position: 'absolute', bottom: 16, left: 16, right: 16, display: 'flex', justifyContent: 'space-between', pointerEvents: 'none', zIndex: 10 }}>
            <span style={{ fontFamily: FONTS.sans, fontSize: 11, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.14em', backgroundColor: 'rgba(43,33,24,0.55)', padding: '4px 10px', borderRadius: 9999 }}>Before</span>
            <span style={{ fontFamily: FONTS.sans, fontSize: 11, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.14em', backgroundColor: 'rgba(43,33,24,0.55)', padding: '4px 10px', borderRadius: 9999 }}>After</span>
          </div>
        </div>

        {/* Project detail panel */}
        <div
          style={{
            backgroundColor: COLORS.espresso,
            padding: '48px 36px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* terracotta top accent */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, backgroundColor: COLORS.terracotta }} />

          <p style={{ fontFamily: FONTS.sans, fontSize: 10, color: COLORS.terracotta, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: 20, fontWeight: 700 }}>
            Project Details
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {DETAILS.map(d => (
              <div key={d.label} style={{ paddingBottom: 20, borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                <p style={{ fontFamily: FONTS.sans, fontSize: 11, color: COLORS.sage, textTransform: 'uppercase', letterSpacing: '0.14em', margin: '0 0 4px 0' }}>{d.label}</p>
                <p style={{ fontFamily: FONTS.serif, fontSize: 17, color: COLORS.white, margin: 0 }}>{d.value}</p>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: FONTS.sans, fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.65, marginTop: 28 }}>
            "NWS took our old 1990s kitchen and turned it into the best room in the house. On time and under budget."
          </p>
          <p style={{ fontFamily: FONTS.sans, fontSize: 11, color: COLORS.terracotta, marginTop: 10, fontWeight: 600 }}>
            — Michelle R., Katy TX
          </p>
        </div>
      </div>
    </section>
  );
}
