'use client';
import Link from 'next/link';
import { COLORS, FONTS } from '@/lib/constants';
import type { Area } from '@/lib/types';

export default function AreasGrid({ areas }: { areas: Area[] }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
      {areas.map(area => (
        <Link key={area.slug} href={`/areas/${area.slug}`}
          style={{
            textDecoration: 'none', borderRadius: 24, position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
            height: 280, overflow: 'hidden',
            backgroundColor: COLORS.placeholder,
            outline: area.isPrimary ? `2px solid ${COLORS.terracotta}` : 'none',
            transform: area.isPrimary ? 'scale(1.03)' : 'none',
            zIndex: area.isPrimary ? 10 : 1,
            boxShadow: area.isPrimary ? `0 0 0 6px rgba(181,85,45,0.18)` : '0 8px 32px rgba(43,33,24,0.1)',
            transition: 'box-shadow 0.2s, transform 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.boxShadow = area.isPrimary ? '0 0 0 6px rgba(181,85,45,0.25), 0 24px 64px rgba(43,33,24,0.22)' : '0 16px 48px rgba(43,33,24,0.18)'; e.currentTarget.style.transform = area.isPrimary ? 'scale(1.05)' : 'translateY(-4px)'; }}
          onMouseLeave={e => { e.currentTarget.style.boxShadow = area.isPrimary ? '0 0 0 6px rgba(181,85,45,0.18)' : '0 8px 32px rgba(43,33,24,0.1)'; e.currentTarget.style.transform = area.isPrimary ? 'scale(1.03)' : 'none'; }}
        >
          <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, ${COLORS.espresso} 0%, rgba(43,33,24,0.7) 50%, transparent 75%)`, zIndex: 1 }} />
          <svg style={{ position: 'absolute', top: 20, right: 20, width: 60, height: 60, opacity: 0.15, zIndex: 0 }} viewBox="0 0 60 60" fill="none">
            <rect x="5" y="5" width="50" height="50" rx="4" stroke={COLORS.sage} strokeWidth="1" strokeDasharray="3 5"/>
          </svg>
          {area.isPrimary && (
            <span style={{ position: 'absolute', top: 16, right: 16, backgroundColor: COLORS.terracotta, color: COLORS.white, fontFamily: FONTS.sans, fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', padding: '4px 10px', borderRadius: 9999, zIndex: 10 }}>
              Our Home Base
            </span>
          )}
          <div style={{ position: 'relative', zIndex: 2, padding: 28 }}>
            <h3 style={{ fontFamily: FONTS.serif, fontSize: 22, color: COLORS.white, marginBottom: 6 }}>{area.label}, {area.state}</h3>
            <p style={{ fontFamily: FONTS.sans, fontSize: 12, color: COLORS.terracotta, fontWeight: 600, marginBottom: 8 }}>{area.tagline}</p>
            <p style={{ fontFamily: FONTS.sans, fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>{area.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
