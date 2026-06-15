'use client';

import dynamic from 'next/dynamic';
import { COLORS, FONTS } from '@/lib/constants';

const BeforeAfterSlider = dynamic(() => import('./BeforeAfterSlider'), {
  ssr: false,
  loading: () => <div style={{ width: '100%', height: '100%', backgroundColor: COLORS.espresso }} />,
});

export default function HeroSection() {
  return (
    <section
      style={{
        minHeight: '100vh',
        backgroundColor: COLORS.plaster,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Blueprint lines */}
      <svg
        style={{
          position: 'absolute',
          top: '80px',
          left: '64px',
          width: '300px',
          height: '300px',
          opacity: 0.12,
          zIndex: 0,
          pointerEvents: 'none',
          display: 'block',
        }}
        viewBox="0 0 300 300"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M 60 0 L 0 0 L 0 60" fill="none" stroke={COLORS.sage} strokeWidth="1.5" />
        <path d="M 240 300 L 300 300 L 300 240" fill="none" stroke={COLORS.sage} strokeWidth="1.5" />
        <line x1="0" y1="32" x2="280" y2="32" stroke={COLORS.sage} strokeWidth="0.7" strokeDasharray="4 10" />
        <line x1="0" y1="80" x2="280" y2="80" stroke={COLORS.sage} strokeWidth="0.7" strokeDasharray="4 10" />
        <line x1="0" y1="128" x2="280" y2="128" stroke={COLORS.sage} strokeWidth="0.7" strokeDasharray="4 10" />
        <line x1="32" y1="0" x2="32" y2="280" stroke={COLORS.sage} strokeWidth="0.7" strokeDasharray="4 10" />
        <line x1="80" y1="0" x2="80" y2="280" stroke={COLORS.sage} strokeWidth="0.7" strokeDasharray="4 10" />
        <line x1="128" y1="0" x2="128" y2="280" stroke={COLORS.sage} strokeWidth="0.7" strokeDasharray="4 10" />
      </svg>

      {/* Main grid */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'grid',
          gridTemplateColumns: '42fr 58fr',
          gap: '32px',
          alignItems: 'center',
          width: '100%',
          padding: '96px 80px',
        }}
      >
        {/* LEFT COLUMN */}
        <div>
          {/* Headline */}
          <h1
            style={{
              fontFamily: FONTS.serif,
              fontSize: 'clamp(64px, 5.5vw, 96px)',
              lineHeight: 1.02,
              letterSpacing: '-0.02em',
              color: COLORS.espresso,
              margin: 0,
            }}
          >
            <span style={{ display: 'block', whiteSpace: 'nowrap' }}>
              Built for the Way
            </span>
            <span style={{ display: 'block' }}>
              <span style={{ fontStyle: 'italic', color: COLORS.terracotta }}>You</span>
              {' '}Live.
            </span>
          </h1>

          {/* Subtext */}
          <p
            style={{
              fontFamily: FONTS.sans,
              fontSize: '16px',
              color: COLORS.sage,
              lineHeight: 1.6,
              marginTop: '24px',
              maxWidth: '400px',
            }}
          >
            Custom homes and whole-home remodels across Richmond, Katy &amp; Sugar Land
            — crafted since 2007.
          </p>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '16px', marginTop: '40px' }}>
            <button
              style={{
                backgroundColor: COLORS.terracotta,
                color: COLORS.white,
                fontFamily: FONTS.sans,
                fontSize: '14px',
                fontWeight: 600,
                padding: '16px 32px',
                borderRadius: '9999px',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Start Your Project
            </button>
            <button
              style={{
                backgroundColor: 'transparent',
                color: COLORS.espresso,
                fontFamily: FONTS.sans,
                fontSize: '14px',
                padding: '16px 32px',
                borderRadius: '9999px',
                border: '1px solid rgba(43,33,24,0.3)',
                cursor: 'pointer',
              }}
            >
              View Our Work →
            </button>
          </div>

          {/* Trust badges */}
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '40px' }}>
            {[
              {
                icon: (
                  <svg width="16" height="16" viewBox="0 0 16 16">
                    <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" fill={COLORS.sage} />
                  </svg>
                ),
                text: '4.9★  120+ Reviews',
              },
              {
                icon: (
                  <svg width="14" height="16" viewBox="0 0 14 16">
                    <path d="M0 16V5.5L7 0l7 5.5V16h-5v-5H5v5H0z" fill={COLORS.sage} />
                  </svg>
                ),
                text: 'Houzz Pro',
              },
              {
                icon: (
                  <svg width="14" height="16" viewBox="0 0 14 16">
                    <path d="M7 0L0 3v5c0 4.418 2.985 8.146 7 9 4.015-.854 7-4.582 7-9V3L7 0z" fill="none" stroke={COLORS.sage} strokeWidth="1.2" />
                    <path d="M4 8l2 2 4-4" stroke={COLORS.sage} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
                text: '35+ Years Experience',
              },
            ].map((badge, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  paddingRight: i < 2 ? '32px' : 0,
                  marginRight: i < 2 ? '32px' : 0,
                  borderRight: i < 2 ? '1px solid rgba(154,154,140,0.3)' : 'none',
                }}
              >
                {badge.icon}
                <span
                  style={{
                    fontFamily: FONTS.sans,
                    fontSize: '11px',
                    color: COLORS.sage,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {badge.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN — Slider */}
        <div style={{ position: 'relative' }}>

          {/* Espresso backing panel */}
          <div
            style={{
              position: 'absolute',
              top: '12px',
              left: '12px',
              right: '-12px',
              bottom: '-12px',
              backgroundColor: COLORS.espresso,
              borderRadius: '24px',
              zIndex: 0,
            }}
          />

          {/* Slider card */}
          <div
            style={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              height: '520px',
              boxShadow: '0 24px 80px rgba(43,33,24,0.22)',
              zIndex: 1,
            }}
          >
            <BeforeAfterSlider />

            {/* BEFORE chip */}
            <div
              style={{
                position: 'absolute',
                top: '16px',
                left: '16px',
                zIndex: 20,
                backgroundColor: 'rgba(43,33,24,0.85)',
                color: COLORS.white,
                fontFamily: FONTS.sans,
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                padding: '6px 14px',
                borderRadius: '9999px',
                backdropFilter: 'blur(4px)',
              }}
            >
              BEFORE
            </div>

            {/* AFTER chip */}
            <div
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                zIndex: 20,
                backgroundColor: COLORS.terracotta,
                color: COLORS.white,
                fontFamily: FONTS.sans,
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                padding: '6px 14px',
                borderRadius: '9999px',
              }}
            >
              AFTER
            </div>

            {/* Caption card */}
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '16px',
                zIndex: 20,
                backgroundColor: COLORS.white,
                borderRadius: '16px',
                padding: '16px 20px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
                maxWidth: '260px',
              }}
            >
              <p
                style={{
                  fontFamily: FONTS.serif,
                  fontSize: '13px',
                  fontWeight: 700,
                  color: COLORS.espresso,
                  lineHeight: 1.4,
                  margin: 0,
                }}
              >
                Whole-Home Remodel —
              </p>
              <p
                style={{
                  fontFamily: FONTS.sans,
                  fontSize: '13px',
                  color: COLORS.sage,
                  marginTop: '4px',
                  margin: '4px 0 0 0',
                }}
              >
                Cinco Ranch, TX · Completed in 14 weeks
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
