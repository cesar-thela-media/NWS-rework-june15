'use client';
import { useState } from 'react';
import { COLORS, FONTS } from '@/lib/constants';
import type { FAQ } from '@/lib/types';

export function FAQItem({ faq }: { faq: FAQ }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ backgroundColor: COLORS.white, borderRadius: 16, marginBottom: 12, overflow: 'hidden' }}>
      <button onClick={() => setOpen(!open)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 32px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
        <span style={{ fontFamily: FONTS.serif, fontSize: 18, color: COLORS.espresso, flex: 1, paddingRight: 24 }}>{faq.question}</span>
        <span style={{ fontFamily: FONTS.sans, fontSize: 20, color: COLORS.terracotta, flexShrink: 0, transition: 'transform 0.2s', transform: open ? 'rotate(45deg)' : 'none' }}>+</span>
      </button>
      <div style={{ maxHeight: open ? 400 : 0, overflow: 'hidden', transition: 'max-height 0.3s ease' }}>
        <p style={{ fontFamily: FONTS.sans, fontSize: 15, color: COLORS.sage, lineHeight: 1.7, padding: '0 32px 24px' }}>{faq.answer}</p>
      </div>
    </div>
  );
}
