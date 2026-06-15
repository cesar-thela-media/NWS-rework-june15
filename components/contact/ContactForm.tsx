'use client';
import { useState } from 'react';
import { COLORS, FONTS } from '@/lib/constants';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <p style={{ fontFamily: FONTS.sans, fontSize: 14, color: COLORS.terracotta, padding: '48px 0', textAlign: 'center' }}>
        Thank you! We&apos;ll be in touch within 1 business day.
      </p>
    );
  }

  return (
    <>
      <div style={{ marginBottom: 24 }}>
        <input type="text" placeholder="Your Name" style={{ width: '100%', border: 'none', borderBottom: '1px solid rgba(43,33,24,0.15)', padding: '12px 0', fontFamily: FONTS.sans, fontSize: 15, color: COLORS.espresso, outline: 'none', background: 'transparent' }} />
      </div>
      <div style={{ marginBottom: 24 }}>
        <input type="tel" placeholder="Your Phone" style={{ width: '100%', border: 'none', borderBottom: '1px solid rgba(43,33,24,0.15)', padding: '12px 0', fontFamily: FONTS.sans, fontSize: 15, color: COLORS.espresso, outline: 'none', background: 'transparent' }} />
      </div>
      <div style={{ marginBottom: 24 }}>
        <input type="email" placeholder="Your Email" style={{ width: '100%', border: 'none', borderBottom: '1px solid rgba(43,33,24,0.15)', padding: '12px 0', fontFamily: FONTS.sans, fontSize: 15, color: COLORS.espresso, outline: 'none', background: 'transparent' }} />
      </div>
      <div style={{ marginBottom: 32 }}>
        <textarea placeholder="Tell us about your project" rows={4} style={{ width: '100%', border: 'none', borderBottom: '1px solid rgba(43,33,24,0.15)', padding: '12px 0', fontFamily: FONTS.sans, fontSize: 15, color: COLORS.espresso, outline: 'none', background: 'transparent', resize: 'vertical' }} />
      </div>
      <button onClick={() => setSubmitted(true)} style={{ width: '100%', backgroundColor: COLORS.terracotta, color: COLORS.white, fontFamily: FONTS.sans, fontSize: 15, fontWeight: 600, padding: '18px', borderRadius: 9999, border: 'none', cursor: 'pointer' }}>
        Send Message
      </button>
    </>
  );
}
