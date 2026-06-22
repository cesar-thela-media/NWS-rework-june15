'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { COLORS, FONTS } from '@/lib/constants';

const BeforeAfterSlider = dynamic(() => import('./BeforeAfterSlider'), {
  ssr: false,
  loading: () => <div style={{ width: '100%', height: '100%', backgroundColor: COLORS.espresso }} />,
});

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 900);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <section
      style={{
        minHeight: isMobile ? 'auto' : '100vh',
        backgroundColor: COLORS.plaster,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Blueprint lines — desktop only */}
      {!isMobile && (
        <svg
          style={{ position: 'absolute', top: '80px', left: '64px', width: '300px', height: '300px', opacity: 0.12, zIndex: 0, pointerEvents: 'none' }}
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
      )}

      {/* Main layout */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'stretch' : 'center',
          gap: isMobile ? 0 : 32,
          width: '100%',
          padding: isMobile ? '32px 24px 24px' : '72px 80px 64px',
        }}
      >
        {/* Text content — first on mobile, left on desktop */}
        <div style={{ flex: isMobile ? 'none' : '42', order: isMobile ? 1 : 1 }}>
          <h1
            style={{
              fontFamily: FONTS.serif,
              fontSize: isMobile ? '52px' : 'clamp(64px, 5.5vw, 96px)',
              lineHeight: 1.02,
              letterSpacing: '-0.02em',
              color: COLORS.espresso,
              margin: 0,
              textAlign: isMobile ? 'center' : 'left',
            }}
          >
            <span style={{ display: 'block' }}>Built for the Way</span>
            <span style={{ display: 'block' }}>
              <span style={{ fontStyle: 'italic', color: COLORS.terracotta }}>You</span>
              {' '}Live.
            </span>
          </h1>

          <p
            style={{
              fontFamily: FONTS.sans,
              fontSize: '16px',
              color: COLORS.sage,
              lineHeight: 1.6,
              marginTop: '20px',
              maxWidth: isMobile ? '100%' : '400px',
              textAlign: isMobile ? 'center' : 'left',
            }}
          >
            Custom homes and whole-home remodels across Richmond, Katy &amp; Sugar Land,
            crafted since 2007.
          </p>

          <div style={{ display: 'flex', gap: '12px', marginTop: '32px', flexWrap: 'wrap', justifyContent: isMobile ? 'center' : 'flex-start' }}>
            <Link
              href="/contact"
              style={{
                display: 'inline-block',
                backgroundColor: COLORS.terracotta,
                color: COLORS.white,
                fontFamily: FONTS.sans,
                fontSize: '14px',
                fontWeight: 600,
                padding: isMobile ? '14px 28px' : '16px 32px',
                borderRadius: '9999px',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              Start Your Project
            </Link>
            <Link
              href="/gallery"
              style={{
                display: 'inline-block',
                backgroundColor: 'transparent',
                color: COLORS.espresso,
                fontFamily: FONTS.sans,
                fontSize: '14px',
                padding: isMobile ? '14px 24px' : '16px 32px',
                borderRadius: '9999px',
                border: '1px solid rgba(43,33,24,0.3)',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              View Our Work →
            </Link>
          </div>

          {/* Trust badges */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 0, marginTop: '32px', flexWrap: 'wrap', rowGap: 12, justifyContent: isMobile ? 'center' : 'flex-start' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingRight: '20px', marginRight: '20px', borderRight: '1px solid rgba(154,154,140,0.25)' }}>
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <div>
                <div style={{ fontFamily: FONTS.sans, fontSize: '13px', fontWeight: 600, color: COLORS.espresso, lineHeight: 1.2 }}>4.9★</div>
                <div style={{ fontFamily: FONTS.sans, fontSize: '10px', color: COLORS.sage, lineHeight: 1.2, marginTop: '1px' }}>120+ Reviews</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingRight: '20px', marginRight: '20px', borderRight: '1px solid rgba(154,154,140,0.25)' }}>
              <svg width="16" height="18" viewBox="0 0 14 16">
                <path d="M0 16V5.5L7 0l7 5.5V16h-5v-5H5v5H0z" fill={COLORS.sage} />
              </svg>
              <div>
                <div style={{ fontFamily: FONTS.sans, fontSize: '13px', fontWeight: 600, color: COLORS.espresso, lineHeight: 1.2 }}>houzz</div>
                <div style={{ fontFamily: FONTS.sans, fontSize: '10px', color: COLORS.sage, lineHeight: 1.2, marginTop: '1px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>PRO</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <svg width="16" height="18" viewBox="0 0 14 16">
                <path d="M7 0L0 3v5c0 4.418 2.985 8.146 7 9 4.015-.854 7-4.582 7-9V3L7 0z" fill="none" stroke={COLORS.sage} strokeWidth="1.2" />
                <path d="M4 8l2 2 4-4" stroke={COLORS.sage} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div>
                <div style={{ fontFamily: FONTS.sans, fontSize: '13px', fontWeight: 600, color: COLORS.espresso, lineHeight: 1.2 }}>35+</div>
                <div style={{ fontFamily: FONTS.sans, fontSize: '10px', color: COLORS.sage, lineHeight: 1.2, marginTop: '1px' }}>Years Experience</div>
              </div>
            </div>
          </div>
        </div>

        {/* Before/After slider — below text on mobile, right on desktop */}
        <div style={{ flex: isMobile ? 'none' : '58', order: isMobile ? 2 : 2, position: 'relative', marginTop: isMobile ? 24 : 0 }}>
          {/* Espresso backing panel — desktop only */}
          {!isMobile && (
            <div
              style={{
                position: 'absolute', top: '12px', left: '12px', right: '-12px', bottom: '-12px',
                backgroundColor: COLORS.espresso, borderRadius: '24px', zIndex: 0,
              }}
            />
          )}

          <div
            style={{
              position: 'relative',
              borderRadius: isMobile ? '16px' : '24px',
              overflow: 'hidden',
              height: isMobile ? '260px' : '520px',
              boxShadow: '0 24px 80px rgba(43,33,24,0.22)',
              zIndex: 1,
            }}
          >
            <BeforeAfterSlider />

            <div
              style={{
                position: 'absolute', top: '12px', left: '12px', zIndex: 20,
                backgroundColor: 'rgba(43,33,24,0.85)', color: COLORS.white,
                fontFamily: FONTS.sans, fontSize: '10px', textTransform: 'uppercase',
                letterSpacing: '0.12em', padding: '5px 12px', borderRadius: '9999px',
                backdropFilter: 'blur(4px)',
              }}
            >
              BEFORE
            </div>

            <div
              style={{
                position: 'absolute', top: '12px', right: '12px', zIndex: 20,
                backgroundColor: COLORS.terracotta, color: COLORS.white,
                fontFamily: FONTS.sans, fontSize: '10px', textTransform: 'uppercase',
                letterSpacing: '0.12em', padding: '5px 12px', borderRadius: '9999px',
              }}
            >
              AFTER
            </div>

            {!isMobile && (
              <div
                style={{
                  position: 'absolute', bottom: '16px', left: '16px', zIndex: 20,
                  backgroundColor: COLORS.white, borderRadius: '16px', padding: '16px 20px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.18)', maxWidth: '260px',
                }}
              >
                <p style={{ fontFamily: FONTS.serif, fontSize: '13px', fontWeight: 700, color: COLORS.espresso, lineHeight: 1.4, margin: 0 }}>
                  Whole-Home Remodel
                </p>
                <p style={{ fontFamily: FONTS.sans, fontSize: '13px', color: COLORS.sage, margin: '4px 0 0 0' }}>
                  Cinco Ranch, TX · Completed in 14 weeks
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
