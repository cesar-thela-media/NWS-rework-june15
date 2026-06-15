'use client';
import Link from 'next/link';
import { COLORS, FONTS } from '@/lib/constants';
import type { Service } from '@/lib/types';

export default function RelatedServicesGrid({ services }: { services: Service[] }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
      {services.map(r => (
        <Link key={r.slug} href={`/services/${r.slug}`}
          style={{
            textDecoration: 'none', borderRadius: 24, overflow: 'hidden', position: 'relative',
            height: 260, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
            backgroundColor: COLORS.placeholder,
            boxShadow: '0 8px 32px rgba(43,33,24,0.1)',
            transition: 'box-shadow 0.2s, transform 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 16px 48px rgba(43,33,24,0.18)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
          onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 8px 32px rgba(43,33,24,0.1)'; e.currentTarget.style.transform = 'none'; }}
        >
          <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, ${COLORS.espresso} 0%, rgba(43,33,24,0.7) 50%, transparent 75%)`, zIndex: 1 }} />
          <div style={{ position: 'relative', zIndex: 2, padding: 28 }}>
            <h3 style={{ fontFamily: FONTS.serif, fontSize: 20, color: COLORS.white, marginBottom: 8 }}>{r.navLabel}</h3>
            <p style={{ fontFamily: FONTS.sans, fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>{r.cardDescription}</p>
            <span style={{ display: 'inline-block', fontFamily: FONTS.sans, fontSize: 12, color: COLORS.terracotta, fontWeight: 600, marginTop: 10 }}>Learn more →</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
