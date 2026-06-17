'use client';
import Link from 'next/link';
import { useState } from 'react';
import { COLORS, FONTS } from '@/lib/constants';
import type { Service } from '@/lib/types';

function RelatedCard({ r }: { r: Service }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={`/services/${r.slug}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        textDecoration: 'none',
        borderRadius: 20,
        overflow: 'hidden',
        position: 'relative',
        height: 300,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        backgroundColor: COLORS.placeholder,
        boxShadow: hovered ? '0 20px 52px rgba(43,33,24,0.22)' : '0 6px 24px rgba(43,33,24,0.1)',
        transform: hovered ? 'translateY(-4px)' : 'none',
        transition: 'box-shadow 0.2s ease, transform 0.2s ease',
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={r.heroImage}
        alt={r.navLabel}
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', display: 'block',
          transform: hovered ? 'scale(1.03)' : 'scale(1)',
          transition: 'transform 0.4s ease',
        }}
      />
      {/* Gradient: only covers bottom 55%, lighter than before */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(43,33,24,0.92) 0%, rgba(43,33,24,0.55) 35%, rgba(43,33,24,0.1) 60%, transparent 100%)',
        zIndex: 1,
      }} />
      <div style={{ position: 'relative', zIndex: 2, padding: '24px 24px 22px' }}>
        <p style={{ fontFamily: FONTS.sans, fontSize: 10, color: COLORS.terracotta, textTransform: 'uppercase', letterSpacing: '0.16em', margin: '0 0 6px 0', fontWeight: 700 }}>
          {r.navLabel.split(' ')[0].toUpperCase()}
        </p>
        <h3 style={{ fontFamily: FONTS.serif, fontSize: 21, color: COLORS.white, margin: '0 0 10px 0', lineHeight: 1.15 }}>
          {r.navLabel}
        </h3>
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 4,
          fontFamily: FONTS.sans, fontSize: 12, color: COLORS.terracotta, fontWeight: 600,
          transform: hovered ? 'translateX(4px)' : 'none',
          transition: 'transform 0.2s',
        }}>
          Explore →
        </span>
      </div>
    </Link>
  );
}

export default function RelatedServicesGrid({ services }: { services: Service[] }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
      {services.map(r => <RelatedCard key={r.slug} r={r} />)}
    </div>
  );
}
