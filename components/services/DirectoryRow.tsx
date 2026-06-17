'use client';
import Link from 'next/link';
import { useState } from 'react';
import { COLORS, FONTS } from '@/lib/constants';

interface Props {
  svc: { slug: string; navLabel: string; cardDescription: string; iconType: string };
  icon: React.ReactNode;
}

export default function DirectoryRow({ svc, icon }: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/services/${svc.slug}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 20,
        padding: '18px 12px',
        margin: '0 -12px',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        textDecoration: 'none',
        background: hovered ? 'rgba(255,255,255,0.03)' : 'transparent',
        borderRadius: hovered ? 10 : 0,
        transition: 'background 0.15s, border-radius 0.1s',
      }}
    >
      {/* Icon circle */}
      <div style={{
        width: 38, height: 38, borderRadius: '50%', flexShrink: 0,
        backgroundColor: hovered ? 'rgba(181,85,45,0.18)' : 'rgba(255,255,255,0.07)',
        border: `1px solid ${hovered ? 'rgba(181,85,45,0.4)' : 'rgba(255,255,255,0.1)'}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'background 0.15s, border-color 0.15s',
      }}>
        {icon}
      </div>

      {/* Name + description stacked */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontFamily: FONTS.serif, fontSize: 18, color: COLORS.white, lineHeight: 1.2, marginBottom: 3 }}>
          {svc.navLabel}
        </div>
        <div style={{ fontFamily: FONTS.sans, fontSize: 13, color: COLORS.sage, lineHeight: 1.45, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {svc.cardDescription}
        </div>
      </div>

      {/* Arrow */}
      <span style={{
        fontFamily: FONTS.sans, fontSize: 16, color: COLORS.terracotta, flexShrink: 0,
        transform: hovered ? 'translateX(5px)' : 'translateX(0)',
        transition: 'transform 0.15s',
        display: 'inline-block',
        opacity: hovered ? 1 : 0.6,
      }}>→</span>
    </Link>
  );
}
