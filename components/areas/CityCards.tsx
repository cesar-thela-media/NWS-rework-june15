'use client';
import { useState } from 'react';
import { COLORS, FONTS } from '@/lib/constants';
import type { Area } from '@/lib/types';

const projectCounts: Record<string, number> = {
  richmond: 140,
  'sugar-land': 95,
  katy: 80,
  fulshear: 55,
  'cinco-ranch': 72,
  rosenberg: 40,
  'weston-lakes': 28,
  'west-houston': 48,
  'park-row': 35,
};

export default function CityCards({ areas }: { areas: Area[] }) {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div
      style={{
        display: 'flex',
        gap: 16,
        padding: '8px 80px 24px',
        overflowX: 'auto',
        scrollbarWidth: 'none',
      }}
    >
      {areas.map((area) => {
        const isHovered = hovered === area.slug;
        const isPrimary = area.isPrimary;
        return (
          <div
            key={area.slug}
            onMouseEnter={() => setHovered(area.slug)}
            onMouseLeave={() => setHovered(null)}
            style={{
              flexShrink: 0,
              width: 260,
              backgroundColor: isPrimary ? COLORS.espresso : COLORS.white,
              backgroundImage: isPrimary ? 'none' : `linear-gradient(135deg, rgba(181,85,45,0.04) 0%, transparent 55%)`,
              borderRadius: 20,
              padding: '36px 28px',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: isPrimary
                ? `0 ${isHovered ? '24px 64px' : '16px 48px'} rgba(43,33,24,${isHovered ? '0.4' : '0.3'})`
                : `0 ${isHovered ? '16px 48px' : '4px 20px'} rgba(43,33,24,${isHovered ? '0.14' : '0.07'})`,
              border: isPrimary
                ? `2px solid ${COLORS.terracotta}`
                : `1px solid ${isHovered ? 'rgba(181,85,45,0.3)' : 'rgba(43,33,24,0.08)'}`,
              borderLeft: isPrimary
                ? `2px solid ${COLORS.terracotta}`
                : `3px solid ${isHovered ? COLORS.terracotta : 'rgba(181,85,45,0.25)'}`,
              transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease, background-image 0.2s ease',
              cursor: 'default',
            }}
          >
            {/* Top accent */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 3,
                backgroundColor: COLORS.terracotta,
                borderRadius: '20px 20px 0 0',
                opacity: isPrimary ? 1 : (isHovered ? 0.8 : 0.4),
                transition: 'opacity 0.2s',
              }}
            />

            {/* City image */}
            {area.image && (
              <div style={{
                width: '100%', height: 140, borderRadius: 12,
                overflow: 'hidden', marginBottom: 20,
                backgroundColor: COLORS.placeholder,
              }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={area.image} alt={area.label}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            )}

            {/* Project count badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                backgroundColor: isPrimary ? 'rgba(181,85,45,0.2)' : 'rgba(43,33,24,0.06)',
                borderRadius: 9999,
                padding: '4px 12px',
                marginBottom: 20,
              }}
            >
              <span
                style={{
                  fontFamily: FONTS.sans,
                  fontSize: 11,
                  color: isPrimary ? COLORS.terracotta : COLORS.sage,
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                }}
              >
                {projectCounts[area.slug] ?? 20}+ projects
              </span>
            </div>

            {/* City name */}
            <h3
              style={{
                fontFamily: FONTS.serif,
                fontSize: 'clamp(24px, 2vw, 32px)',
                color: isPrimary ? COLORS.white : COLORS.espresso,
                lineHeight: 1.1,
                margin: '0 0 6px 0',
              }}
            >
              {area.label}
            </h3>
            <p
              style={{
                fontFamily: FONTS.sans,
                fontSize: 11,
                color: COLORS.terracotta,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                margin: '0 0 16px 0',
                fontWeight: 600,
              }}
            >
              {area.tagline}
            </p>
            <p
              style={{
                fontFamily: FONTS.sans,
                fontSize: 13,
                color: COLORS.sage,
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              {area.description}
            </p>

            {isPrimary && (
              <div
                style={{
                  marginTop: 24,
                  display: 'inline-block',
                  backgroundColor: COLORS.terracotta,
                  color: COLORS.white,
                  fontFamily: FONTS.sans,
                  fontSize: 10,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  padding: '5px 12px',
                  borderRadius: 9999,
                }}
              >
                Our Home Base
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
