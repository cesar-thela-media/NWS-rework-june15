'use client';
import Link from 'next/link';
import { COLORS, FONTS } from '@/lib/constants';
import type { Service } from '@/lib/types';

const iconMap: Record<string, React.ReactNode> = {
  house: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="1.5" strokeLinejoin="round"><path d="M8 1L1 7H3V14H13V7H15L8 1Z"/><rect x="6" y="10" width="4" height="4" rx="0.5"/></svg>,
  kitchen: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="1.5"><path d="M2 4H4L6 2H10L12 4H14V13H2V4Z" strokeLinejoin="round"/><line x1="8" y1="6" x2="8" y2="11"/><line x1="5" y1="8.5" x2="11" y2="8.5"/></svg>,
  bath: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="1.5"><rect x="2" y="3" width="12" height="9" rx="2"/><path d="M4 3V2C4 1.4 4.4 1 5 1H11C11.6 1 12 1.4 12 2V3"/><circle cx="8" cy="7.5" r="1.5"/></svg>,
  home: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="1.5" strokeLinejoin="round"><path d="M8 1L1 7H3V14H13V7H15L8 1Z"/><rect x="6" y="10" width="4" height="4" rx="0.5"/></svg>,
  shower: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="1.5"><rect x="3" y="6" width="10" height="8" rx="1.5"/><path d="M5 6V4c0-1 .7-2 3-2s3 1 3 2v2"/><line x1="5" y1="11" x2="5" y2="11.5"/><line x1="8" y1="11" x2="8" y2="11.5"/><line x1="11" y1="11" x2="11" y2="11.5"/></svg>,
  tub: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9h10v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z"/><path d="M12 9V5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1"/></svg>,
  addition: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="1.5" strokeLinejoin="round"><rect x="1" y="4" width="14" height="10" rx="1"/><path d="M3 4V2H7V4"/><rect x="9" y="1" width="4" height="3" rx="0.5"/><line x1="11" y1="1" x2="11" y2="4"/></svg>,
  basement: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="1.5" strokeLinejoin="round"><rect x="1" y="3" width="14" height="11" rx="1"/><line x1="1" y1="8" x2="15" y2="8"/><line x1="4.5" y1="8" x2="4.5" y2="14"/><line x1="8" y1="8" x2="8" y2="14"/><line x1="11.5" y1="8" x2="11.5" y2="14"/></svg>,
  garage: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="1.5" strokeLinejoin="round"><rect x="1" y="3" width="14" height="12" rx="1"/><rect x="4" y="9" width="3" height="6"/><line x1="8" y1="3" x2="8" y2="5"/><polyline points="1,3 8,1 15,3"/></svg>,
  openplan: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="1.5" strokeLinejoin="round"><line x1="8" y1="1" x2="8" y2="15"/><line x1="1" y1="6" x2="15" y2="6"/><line x1="1" y1="10" x2="15" y2="10"/></svg>,
};

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
                {iconMap[service.iconType] || <span style={{ color: COLORS.white, fontSize: 16, fontWeight: 600, fontFamily: FONTS.sans }}>{service.navLabel.charAt(0)}</span>}
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
