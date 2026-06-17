'use client';
import { useState } from 'react';
import { COLORS, FONTS } from '@/lib/constants';

const values = [
  { num: '01', word: 'Craft', body: 'Every cut, every joint, every finish is done by someone who takes pride in their work — and it shows.' },
  { num: '02', word: 'Clarity', body: 'Fixed-price quotes before we begin. No surprise invoices. No change orders without your approval in writing.' },
  { num: '03', word: 'Commitment', body: 'We give you a timeline before we start and we stick to it. If something changes, you hear about it immediately.' },
];

export default function ValueCards() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
      {values.map((v) => {
        const isHovered = hovered === v.num;
        return (
          <div
            key={v.num}
            onMouseEnter={() => setHovered(v.num)}
            onMouseLeave={() => setHovered(null)}
            style={{
              backgroundColor: isHovered ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.05)',
              borderRadius: 24,
              padding: '40px 36px 40px',
              position: 'relative',
              overflow: 'hidden',
              border: `1px solid ${isHovered ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.07)'}`,
              transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
              transition: 'transform 0.22s ease, background-color 0.2s, border-color 0.2s, box-shadow 0.22s',
              boxShadow: isHovered ? '0 20px 48px rgba(43,33,24,0.4)' : 'none',
              cursor: 'default',
            }}
          >
            {/* Top accent line */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 36,
                right: 36,
                height: 2,
                backgroundColor: COLORS.terracotta,
                opacity: isHovered ? 1 : 0.7,
                transition: 'opacity 0.2s',
              }}
            />
            {/* Small number */}
            <p style={{ fontFamily: FONTS.sans, fontSize: 11, color: COLORS.terracotta, letterSpacing: '0.2em', margin: '0 0 16px 0' }}>
              {v.num}
            </p>
            {/* Large italic word */}
            <p
              style={{
                fontFamily: FONTS.serif,
                fontSize: 'clamp(44px, 4vw, 64px)',
                color: isHovered ? COLORS.white : 'rgba(255,255,255,0.9)',
                fontStyle: 'italic',
                lineHeight: 1,
                margin: '0 0 28px 0',
                transition: 'color 0.2s',
              }}
            >
              {v.word}
            </p>
            <p style={{ fontFamily: FONTS.sans, fontSize: 14, color: COLORS.sage, lineHeight: 1.7, margin: 0 }}>
              {v.body}
            </p>
          </div>
        );
      })}
    </div>
  );
}
