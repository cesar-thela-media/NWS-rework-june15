import CTABanner from '@/components/shared/CTABanner';
import FAQBody from '@/components/faqs/FAQBody';
import { COLORS, FONTS } from '@/lib/constants';
import { faqs } from '@/data/faqs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQs | NWS Custom Homes and Remodeling',
  description: 'Answers to common questions about custom home building, remodeling timelines, pricing, permits, and service areas in Richmond, TX.',
};

export default function FAQsPage() {
  return (
    <main>

      {/* ── Hero: 2-col editorial — decorative "?" + content ── */}
      <section
        style={{
          backgroundColor: COLORS.espresso,
          padding: '100px 80px 80px',
          position: 'relative',
          overflow: 'hidden',
          minHeight: '54vh',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 64,
          alignItems: 'center',
        }}
      >
        {/* Blueprint grid watermark */}
        <svg
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.025, pointerEvents: 'none' }}
          viewBox="0 0 1440 500"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          {Array.from({ length: 14 }).map((_, i) => (
            <line key={`v${i}`} x1={i * 110} y1="0" x2={i * 110} y2="500" stroke="white" strokeWidth="0.5" strokeDasharray="4 8" />
          ))}
          {Array.from({ length: 7 }).map((_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 85} x2="1440" y2={i * 85} stroke="white" strokeWidth="0.5" strokeDasharray="4 8" />
          ))}
        </svg>

        {/* LEFT — decorative large "?" */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ fontFamily: FONTS.sans, fontSize: 11, color: COLORS.terracotta, textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: 24 }}>
            Home / FAQs
          </p>
          <div
            style={{
              fontFamily: FONTS.serif,
              fontSize: 'clamp(140px, 16vw, 220px)',
              lineHeight: 0.85,
              WebkitTextStroke: `2px ${COLORS.terracotta}`,
              color: 'transparent',
              userSelect: 'none',
              letterSpacing: '-0.02em',
            }}
          >
            ?
          </div>
          <p style={{ fontFamily: FONTS.sans, fontSize: 13, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: 16 }}>
            {faqs.length} answers ready
          </p>
        </div>

        {/* RIGHT — heading + description + quick stats */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h1
            style={{
              fontFamily: FONTS.serif,
              fontSize: 'clamp(44px, 4.5vw, 72px)',
              color: COLORS.white,
              lineHeight: 1.05,
              margin: '0 0 20px 0',
            }}
          >
            Got{' '}
            <span style={{ fontStyle: 'italic', color: COLORS.terracotta }}>Questions?</span>
          </h1>
          <p
            style={{
              fontFamily: FONTS.sans,
              fontSize: 16,
              color: 'rgba(255,255,255,0.5)',
              maxWidth: 440,
              lineHeight: 1.7,
              margin: '0 0 40px 0',
            }}
          >
            Everything you need to know before starting your project — from pricing and timelines to permits and warranties.
          </p>

          {/* Quick stats */}
          <div style={{ display: 'flex', gap: 40 }}>
            {[
              { value: String(faqs.length), label: 'Questions' },
              { value: '5', label: 'Categories' },
              { value: '100%', label: 'Free to Ask' },
            ].map(s => (
              <div key={s.label}>
                <p style={{ fontFamily: FONTS.serif, fontSize: 28, color: COLORS.white, margin: 0, lineHeight: 1 }}>{s.value}</p>
                <p style={{ fontFamily: FONTS.sans, fontSize: 11, color: COLORS.sage, textTransform: 'uppercase', letterSpacing: '0.12em', marginTop: 6 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2-col FAQ body: sticky sidebar + accordion ── */}
      <FAQBody faqs={faqs} />

      <CTABanner
        heading="Ready to Get Started?"
        body="Free consultation — we'll talk through your project and give you a firm quote."
        primaryLabel="Contact Us"
        primaryHref="/contact"
      />
    </main>
  );
}
