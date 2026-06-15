'use client';
import Link from 'next/link';
import { COLORS, FONTS } from '@/lib/constants';
import type { Service } from '@/lib/types';

export default function ServicesGrid({ services }: { services: Service[] }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, alignItems: 'end' }}>
      {services.map((service, i) => {
        const featured = i === 1;
        return (
          <Link key={service.slug} href={`/services/${service.slug}`}
            style={{
              textDecoration: 'none', borderRadius: 24, overflow: 'hidden', position: 'relative',
              height: featured ? 440 : 380,
              display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
              backgroundColor: COLORS.placeholder,
              transform: featured ? 'scale(1.03)' : 'none',
              zIndex: featured ? 10 : 1,
              outline: featured ? `2px solid ${COLORS.terracotta}` : 'none',
              boxShadow: featured ? `0 0 0 6px rgba(181,85,45,0.18)` : '0 8px 32px rgba(43,33,24,0.1)',
              transition: 'box-shadow 0.2s, transform 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = featured ? '0 0 0 6px rgba(181,85,45,0.25), 0 24px 64px rgba(43,33,24,0.22)' : '0 16px 48px rgba(43,33,24,0.18)'; e.currentTarget.style.transform = featured ? 'scale(1.05)' : 'translateY(-4px)'; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = featured ? '0 0 0 6px rgba(181,85,45,0.18)' : '0 8px 32px rgba(43,33,24,0.1)'; e.currentTarget.style.transform = featured ? 'scale(1.03)' : 'none'; }}
          >
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, backgroundColor: COLORS.terracotta, zIndex: 10 }} />
            {featured && (
              <span style={{ position: 'absolute', top: 12, right: 12, backgroundColor: COLORS.terracotta, color: COLORS.white, fontFamily: FONTS.sans, fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', padding: '4px 12px', borderRadius: 9999, zIndex: 10 }}>
                MOST REQUESTED
              </span>
            )}
            <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, ${COLORS.espresso} 0%, rgba(43,33,24,0.75) 40%, transparent 65%)`, zIndex: 1 }} />
            <div style={{ position: 'relative', zIndex: 2, padding: 32 }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                <span style={{ color: COLORS.white, fontSize: 16, fontWeight: 600, fontFamily: FONTS.sans }}>{service.navLabel.charAt(0)}</span>
              </div>
              <h3 style={{ fontFamily: FONTS.serif, fontSize: 22, color: COLORS.white, marginBottom: 8 }}>{service.navLabel}</h3>
              <p style={{ fontFamily: FONTS.sans, fontSize: 14, color: COLORS.sage, lineHeight: 1.6 }}>{service.cardDescription}</p>
              <span style={{ display: 'inline-block', fontFamily: FONTS.sans, fontSize: 13, color: COLORS.terracotta, fontWeight: 600, marginTop: 12 }}>Explore →</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
