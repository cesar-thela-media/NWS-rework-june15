'use client';
import { useState } from 'react';
import { COLORS, FONTS } from '@/lib/constants';
import type { Testimonial } from '@/lib/types';

interface TestimonialStripProps {
  testimonials: Testimonial[];
  eyebrow?: string;
  heading?: string;
}

function StarIcon() {
  return <svg width="14" height="14" viewBox="0 0 14 14" fill={COLORS.terracotta}><path d="M7 1l1.5 4H13l-3.5 2.5 1.5 4L7 9 3 11.5l1.5-4L1 5h4.5z"/></svg>;
}

function GoogleIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14">
      <path d="M13.6 7.2c0-.5 0-1-.1-1.4H7v2.7h3.7c-.2.9-.7 1.6-1.4 2.1v1.7h2.3c1.3-1.2 2-3 2-5.1z" fill={COLORS.sage}/>
      <path d="M7 14c1.9 0 3.4-.6 4.6-1.7l-2.2-1.7c-.6.4-1.4.7-2.4.7-1.8 0-3.4-1.2-3.9-2.9H.8v1.8C2 12.4 4.3 14 7 14z" fill={COLORS.sage}/>
      <path d="M3.1 8.4c-.1-.4-.2-.8-.2-1.4s.1-1 .2-1.4V3.8H.8C.3 4.8 0 5.9 0 7s.3 2.2.8 3.2l2.3-1.8z" fill={COLORS.sage}/>
      <path d="M7 2.8c1 0 1.9.4 2.6 1L11.4 2C10.2.7 8.7 0 7 0 4.3 0 2 1.6.8 3.8l2.3 1.8C3.6 4 5.2 2.8 7 2.8z" fill={COLORS.sage}/>
    </svg>
  );
}

export default function TestimonialStrip({ testimonials, eyebrow = 'WORD TRAVELS', heading = 'Our Clients Do the Talking.' }: TestimonialStripProps) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section style={{ backgroundColor: COLORS.plaster, padding: '80px 80px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '58fr 42fr', gap: 48, alignItems: 'start' }}>
        {/* LEFT — Testimonial cards (matching landing page) */}
        <div>
          <p style={{ fontFamily: FONTS.sans, fontSize: 11, color: COLORS.terracotta, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 12 }}>{eyebrow}</p>
          <h2 style={{ fontFamily: FONTS.serif, fontSize: 'clamp(32px, 3vw, 48px)', color: COLORS.espresso, marginBottom: 48 }}>{heading}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {testimonials.map((t, i) => (
              <div key={t.id} style={{ backgroundColor: COLORS.white, borderRadius: 24, padding: 32, display: 'flex', flexDirection: 'column', transform: i === 1 ? 'translateY(-20px)' : 'none', boxShadow: i === 1 ? '0 24px 64px rgba(43,33,24,0.18)' : '0 8px 32px rgba(43,33,24,0.08)', outline: i === 1 ? '1px solid rgba(181,85,45,0.2)' : 'none', position: 'relative', zIndex: i === 1 ? 10 : 1 }}>
                <div style={{ display: 'flex', gap: 4, marginBottom: 16 }}>{[...Array(5)].map((_, j) => <StarIcon key={j} />)}</div>
                <p style={{ fontFamily: FONTS.serif, fontSize: 16, color: COLORS.espresso, fontStyle: 'italic', lineHeight: 1.6, flex: 1, marginBottom: 24 }}>&ldquo;{t.quote}&rdquo;</p>
                <div style={{ borderTop: `1px solid rgba(154,154,140,0.2)`, paddingTop: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', backgroundColor: COLORS.espresso, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FONTS.serif, fontSize: 16, color: COLORS.white, flexShrink: 0 }}>{t.initial}</div>
                  <div>
                    <p style={{ fontFamily: FONTS.sans, fontSize: 13, fontWeight: 600, color: COLORS.espresso }}>{t.name}</p>
                    <p style={{ fontFamily: FONTS.sans, fontSize: 12, color: COLORS.sage }}>{t.city}</p>
                  </div>
                  <div style={{ marginLeft: 'auto' }}>{t.source === 'Google' && <GoogleIcon />}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — CTA panel with form (matching landing page TestimonialsSection) */}
        <div style={{ backgroundColor: COLORS.espresso, borderRadius: 24, padding: 40, position: 'relative', overflow: 'hidden' }}>
          <svg style={{ position: 'absolute', inset: 0, width: '60%', height: 'auto', margin: 'auto', opacity: 0.04, pointerEvents: 'none' }} viewBox="0 0 200 200" fill="none">
            <path d="M100 20L20 80V180H180V80L100 20Z" stroke="white" strokeWidth="2"/>
            <rect x="80" y="110" width="40" height="70" stroke="white" strokeWidth="2"/>
          </svg>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <p style={{ fontFamily: FONTS.sans, fontSize: 11, color: COLORS.terracotta, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 20 }}>FREE CONSULTATION</p>
            <h3 style={{ fontFamily: FONTS.serif, fontSize: 'clamp(28px, 3vw, 40px)', color: COLORS.white, lineHeight: 1.1, marginBottom: 12 }}>Let&apos;s Walk Your<br />Floor Plan.</h3>
            <p style={{ fontFamily: FONTS.sans, fontSize: 14, color: COLORS.sage, marginBottom: 28, lineHeight: 1.6 }}>Free on-site consultation — and 5% off when you mention the website.</p>
            {submitted ? (
              <p style={{ fontFamily: FONTS.sans, fontSize: 14, color: COLORS.terracotta, textAlign: 'center', padding: 24 }}>Thank you! We&apos;ll be in touch within 1 business day.</p>
            ) : (
              <div>
                <div style={{ borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: 12, marginBottom: 24 }}>
                  <input type="text" placeholder="Your Name" style={{ width: '100%', background: 'transparent', border: 'none', outline: 'none', fontFamily: FONTS.sans, fontSize: 15, color: COLORS.white }} />
                </div>
                <div style={{ borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: 12, marginBottom: 24 }}>
                  <input type="tel" placeholder="Your Phone" style={{ width: '100%', background: 'transparent', border: 'none', outline: 'none', fontFamily: FONTS.sans, fontSize: 15, color: COLORS.white }} />
                </div>
                <div style={{ border: '1px solid rgba(255,255,255,0.15)', borderRadius: 16, padding: '14px 20px', marginBottom: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: FONTS.sans, fontSize: 14, color: COLORS.sage }}>Service Needed</span>
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" stroke={COLORS.sage} strokeWidth="1.5"><path d="M1 1.5L6 6.5L11 1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <button onClick={() => setSubmitted(true)} style={{ width: '100%', backgroundColor: COLORS.terracotta, color: COLORS.white, fontFamily: FONTS.sans, fontSize: 15, fontWeight: 600, padding: 18, borderRadius: 9999, border: 'none', cursor: 'pointer' }}>Book My Consultation</button>
                <p style={{ fontFamily: FONTS.sans, fontSize: 11, color: COLORS.sage, textAlign: 'center', marginTop: 20 }}>Mon–Fri 8–6 &nbsp;· &nbsp;Sat 8–12 &nbsp;· &nbsp;Richmond, TX</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
