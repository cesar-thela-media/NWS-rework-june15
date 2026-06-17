'use client';
import Link from 'next/link';
import { COLORS, FONTS } from '@/lib/constants';

interface BreadcrumbItem { label: string; href: string; }

interface PageHeroProps {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  titleAccent: string;
  subtitle?: string;
  breadcrumb: BreadcrumbItem[];
  image?: string;
  variant?: 'dark';
}

export default function PageHero({ eyebrow, titleLine1, titleLine2, titleAccent, subtitle, breadcrumb, image, variant }: PageHeroProps) {
  const dark = variant === 'dark';
  const bg = dark ? COLORS.espresso : COLORS.plaster;
  const headingColor = dark ? COLORS.white : COLORS.espresso;
  const subtitleColor = dark ? 'rgba(255,255,255,0.6)' : COLORS.sage;
  const crumbColor = dark ? 'rgba(255,255,255,0.4)' : COLORS.sage;
  const lineColor = dark ? 'rgba(255,255,255,0.15)' : COLORS.sage;

  return (
    <section style={{ backgroundColor: bg, padding: '120px 80px 80px', position: 'relative', overflow: 'hidden' }}>
      {/* Blueprint lines */}
      <svg style={{ position: 'absolute', top: 80, left: 64, width: 300, height: 300, opacity: dark ? 0.05 : 0.12, pointerEvents: 'none', zIndex: 0 }} viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
        <path d="M 60 0 L 0 0 L 0 60" fill="none" stroke={lineColor} strokeWidth="1.5"/>
        <path d="M 240 300 L 300 300 L 300 240" fill="none" stroke={lineColor} strokeWidth="1.5"/>
        <line x1="0" y1="32" x2="280" y2="32" stroke={lineColor} strokeWidth="0.7" strokeDasharray="4 10"/>
        <line x1="0" y1="80" x2="280" y2="80" stroke={lineColor} strokeWidth="0.7" strokeDasharray="4 10"/>
        <line x1="0" y1="128" x2="280" y2="128" stroke={lineColor} strokeWidth="0.7" strokeDasharray="4 10"/>
        <line x1="32" y1="0" x2="32" y2="280" stroke={lineColor} strokeWidth="0.7" strokeDasharray="4 10"/>
        <line x1="80" y1="0" x2="80" y2="280" stroke={lineColor} strokeWidth="0.7" strokeDasharray="4 10"/>
        <line x1="128" y1="0" x2="128" y2="280" stroke={lineColor} strokeWidth="0.7" strokeDasharray="4 10"/>
      </svg>

      <div style={{ position: 'relative', zIndex: 10, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
        {/* LEFT — Text content */}
        <div>
          <nav style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 32 }}>
            {breadcrumb.map((crumb, i) => (
              <span key={crumb.href} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                {i > 0 && <span style={{ color: crumbColor, fontFamily: FONTS.sans, fontSize: 12 }}>›</span>}
                <Link href={crumb.href} style={{ fontFamily: FONTS.sans, fontSize: 12, color: i === breadcrumb.length - 1 ? COLORS.terracotta : crumbColor, textDecoration: 'none' }}>{crumb.label}</Link>
              </span>
            ))}
          </nav>

          <p style={{ fontFamily: FONTS.sans, fontSize: 11, color: COLORS.terracotta, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 16 }}>{eyebrow}</p>

          <h1 style={{ fontFamily: FONTS.serif, fontSize: 'clamp(48px, 4.5vw, 80px)', lineHeight: 1.02, letterSpacing: '-0.02em', color: headingColor, margin: 0 }}>
            <span style={{ display: 'block', whiteSpace: 'nowrap' }}>{titleLine1}</span>
            <span style={{ display: 'block' }}>
              {titleLine2 && <span>{titleLine2} </span>}
              <span style={{ fontStyle: 'italic', color: COLORS.terracotta }}>{titleAccent}</span>
            </span>
          </h1>

          {subtitle && <p style={{ fontFamily: FONTS.sans, fontSize: 16, color: subtitleColor, lineHeight: 1.6, marginTop: 24, maxWidth: 440 }}>{subtitle}</p>}

          <div style={{ width: 48, height: 2, backgroundColor: COLORS.terracotta, marginTop: 32 }} />
        </div>

        {/* RIGHT — Real photo or placeholder */}
        <div style={{ position: 'relative', borderRadius: 24, overflow: 'hidden', height: 420, backgroundColor: COLORS.placeholder }}>
          {image ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img src={image} alt={titleLine1} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          ) : (
            <svg style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 120, height: 120, opacity: 0.2, zIndex: 0 }} viewBox="0 0 120 120" fill="none">
              <path d="M60 10L10 50V110H110V50L60 10Z" stroke={COLORS.sage} strokeWidth="1.5"/>
              <rect x="48" y="70" width="24" height="40" stroke={COLORS.sage} strokeWidth="1.5"/>
            </svg>
          )}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(43,33,24,0.82) 0%, rgba(43,33,24,0.35) 45%, rgba(43,33,24,0.05) 75%, transparent 100%)', zIndex: 1 }} />
          <div style={{ position: 'absolute', bottom: 32, left: 32, zIndex: 2 }}>
            <span style={{ display: 'inline-block', fontFamily: FONTS.sans, fontSize: 10, color: COLORS.white, textTransform: 'uppercase', letterSpacing: '0.15em', backgroundColor: COLORS.terracotta, padding: '4px 12px', borderRadius: 9999 }}>{eyebrow}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
