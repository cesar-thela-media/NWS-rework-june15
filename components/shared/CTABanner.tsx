'use client';
import Link from 'next/link';
import { COLORS, FONTS, CONTACT } from '@/lib/constants';

interface CTABannerProps {
  eyebrow?: string;
  heading: string;
  body: string;
  primaryLabel: string;
  primaryHref: string;
}

export default function CTABanner({ eyebrow = 'START YOUR PROJECT', heading, body, primaryLabel, primaryHref }: CTABannerProps) {
  return (
    <section style={{ backgroundColor: COLORS.plaster, padding: '80px 80px' }}>
      <div style={{ backgroundColor: COLORS.espresso, borderRadius: 32, padding: '80px 64px', position: 'relative', overflow: 'hidden', maxWidth: 900, margin: '0 auto' }}>
        {/* Blueprint house watermark — landing page scale */}
        <svg style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 340, height: 340, opacity: 0.04, pointerEvents: 'none' }} viewBox="0 0 300 300" fill="none">
          <polygon points="150,30 270,120 30,120" fill="none" stroke="white" strokeWidth="2"/>
          <rect x="50" y="120" width="200" height="150" fill="none" stroke="white" strokeWidth="2"/>
          <rect x="120" y="185" width="60" height="85" fill="none" stroke="white" strokeWidth="1.5"/>
          <rect x="70" y="140" width="45" height="45" fill="none" stroke="white" strokeWidth="1"/>
          <rect x="185" y="140" width="45" height="45" fill="none" stroke="white" strokeWidth="1"/>
        </svg>

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 560, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontFamily: FONTS.sans, fontSize: 11, color: COLORS.terracotta, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 24 }}>{eyebrow}</p>
          <h2 style={{ fontFamily: FONTS.serif, fontSize: 'clamp(40px, 4vw, 64px)', color: COLORS.white, lineHeight: 1.05, marginBottom: 20 }}>{heading}</h2>
          <p style={{ fontFamily: FONTS.sans, fontSize: 16, color: COLORS.sage, lineHeight: 1.6, marginBottom: 44 }}>{body}</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href={primaryHref} style={{ backgroundColor: COLORS.terracotta, color: COLORS.white, fontFamily: FONTS.sans, fontSize: 14, fontWeight: 600, padding: '18px 36px', borderRadius: 9999, textDecoration: 'none', display: 'inline-block', transition: 'filter 0.15s' }}
              onMouseEnter={e => (e.currentTarget.style.filter = 'brightness(0.9)')}
              onMouseLeave={e => (e.currentTarget.style.filter = 'none')}>
              {primaryLabel}
            </Link>
            <a href={CONTACT.phoneHref} style={{ backgroundColor: 'transparent', color: COLORS.white, fontFamily: FONTS.sans, fontSize: 14, padding: '18px 36px', borderRadius: 9999, border: '1px solid rgba(255,255,255,0.25)', textDecoration: 'none', display: 'inline-block', transition: 'background 0.15s' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}>
              Call {CONTACT.phone}
            </a>
          </div>
          <p style={{ fontFamily: FONTS.sans, fontSize: 12, color: 'rgba(255,255,255,0.35)', marginTop: 28 }}>Mon–Fri 8–6 &nbsp;· &nbsp;Sat 8–12 &nbsp;· &nbsp;Richmond, TX</p>
        </div>
      </div>
    </section>
  );
}
