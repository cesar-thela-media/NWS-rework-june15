import CTABanner from '@/components/shared/CTABanner';
import CityCards from '@/components/areas/CityCards';
import { COLORS, FONTS, CONTACT } from '@/lib/constants';
import { areas } from '@/data/areas';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Service Areas | NWS Custom Homes | Fort Bend County TX',
  description: 'NWS Custom Homes serves Richmond, Sugar Land, Katy, Fulshear, Cinco Ranch, Rosenberg, and surrounding areas. Call (281) 299-2309.',
};

// Approximate relative positions for Fort Bend County city dots (x%, y% of SVG viewport)
const cityDots: { slug: string; label: string; cx: number; cy: number; primary?: boolean }[] = [
  { slug: 'richmond',    label: 'Richmond',         cx: 42, cy: 55, primary: true },
  { slug: 'sugar-land',  label: 'Sugar Land',        cx: 58, cy: 38 },
  { slug: 'katy',        label: 'Katy',              cx: 22, cy: 30 },
  { slug: 'fulshear',    label: 'Fulshear',          cx: 18, cy: 52 },
  { slug: 'cinco-ranch', label: 'Cinco Ranch',       cx: 26, cy: 44 },
  { slug: 'rosenberg',   label: 'Rosenberg',         cx: 40, cy: 70 },
  { slug: 'weston-lakes',label: 'Weston Lakes',      cx: 28, cy: 62 },
  { slug: 'west-houston',label: 'West Houston',      cx: 62, cy: 26 },
  { slug: 'park-row',    label: 'Park Row',          cx: 50, cy: 42 },
];


export default function AreasPage() {
  return (
    <main>

      {/* ── Hero: espresso full-width with SVG map ── */}
      <section
        style={{
          backgroundColor: COLORS.espresso,
          padding: '100px 80px 56px',
          position: 'relative',
          overflow: 'hidden',
          minHeight: '56vh',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 80,
          alignItems: 'center',
        }}
      >
        {/* Blueprint grid watermark */}
        <svg
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.025, pointerEvents: 'none' }}
          viewBox="0 0 1440 700"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          {Array.from({ length: 14 }).map((_, i) => (
            <line key={`v${i}`} x1={i * 120} y1="0" x2={i * 120} y2="700" stroke="white" strokeWidth="0.5" strokeDasharray="4 8" />
          ))}
          {Array.from({ length: 9 }).map((_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 90} x2="1440" y2={i * 90} stroke="white" strokeWidth="0.5" strokeDasharray="4 8" />
          ))}
        </svg>

        {/* LEFT — editorial heading */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <p
            style={{
              fontFamily: FONTS.sans,
              fontSize: 11,
              color: COLORS.terracotta,
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
              marginBottom: 20,
            }}
          >
            Home / Areas We Serve
          </p>
          <h1
            style={{
              fontFamily: FONTS.serif,
              fontSize: 'clamp(44px, 4.5vw, 70px)',
              color: COLORS.white,
              lineHeight: 1.0,
              margin: '0 0 24px 0',
            }}
          >
            Serving Greater{' '}
            <span style={{ fontStyle: 'italic', color: COLORS.terracotta }}>Houston.</span>
          </h1>
          <p
            style={{
              fontFamily: FONTS.sans,
              fontSize: 16,
              color: 'rgba(255,255,255,0.5)',
              lineHeight: 1.7,
              maxWidth: 440,
              margin: '0 0 48px 0',
            }}
          >
            9 cities across Fort Bend County — same crew, same quality, wherever you are in Greater Houston.
          </p>
          <div style={{ display: 'flex', gap: 40 }}>
            {[{ v: '9', l: 'Cities' }, { v: '500+', l: 'Projects' }, { v: '19 yrs', l: 'Experience' }].map((s) => (
              <div key={s.l}>
                <p style={{ fontFamily: FONTS.serif, fontSize: 32, color: COLORS.white, margin: 0, lineHeight: 1 }}>{s.v}</p>
                <p style={{ fontFamily: FONTS.sans, fontSize: 11, color: COLORS.sage, textTransform: 'uppercase', letterSpacing: '0.12em', marginTop: 6 }}>{s.l}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — stylized dot map */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <svg
            viewBox="0 0 400 380"
            fill="none"
            style={{ width: '100%', maxWidth: 460 }}
          >
            {/* Fort Bend County rough outline (simplified polygon) */}
            <path
              d="M320 60 L380 90 L370 200 L340 280 L280 340 L200 360 L120 340 L60 270 L40 180 L60 100 L120 55 L200 40 Z"
              fill="rgba(181,85,45,0.06)"
              stroke="rgba(181,85,45,0.25)"
              strokeWidth="1.5"
              strokeDasharray="6 4"
            />
            {/* Surrounding region hint */}
            <path
              d="M340 40 L400 70 L400 180 L380 250 L360 310 L300 360 L200 380 L100 360 L40 300 L20 200 L30 100 L80 40 L160 20 L260 25 Z"
              fill="none"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="1"
              strokeDasharray="3 8"
            />

            {/* Connection lines between cities */}
            {cityDots.map((dot, i) =>
              i > 0 ? (
                <line
                  key={`line-${dot.slug}`}
                  x1={cityDots[0].cx * 4}
                  y1={cityDots[0].cy * 3.8}
                  x2={dot.cx * 4}
                  y2={dot.cy * 3.8}
                  stroke="rgba(181,85,45,0.15)"
                  strokeWidth="1"
                />
              ) : null
            )}

            {/* City dots + labels */}
            {cityDots.map((dot) => (
              <g key={dot.slug}>
                {/* Pulse ring for primary */}
                {dot.primary && (
                  <circle
                    cx={dot.cx * 4}
                    cy={dot.cy * 3.8}
                    r="14"
                    fill="rgba(181,85,45,0.12)"
                    stroke={COLORS.terracotta}
                    strokeWidth="1"
                    strokeOpacity="0.4"
                  />
                )}
                {/* Dot */}
                <circle
                  cx={dot.cx * 4}
                  cy={dot.cy * 3.8}
                  r={dot.primary ? 7 : 5}
                  fill={dot.primary ? COLORS.terracotta : 'rgba(181,85,45,0.6)'}
                />
                {/* Label */}
                <text
                  x={dot.cx * 4}
                  y={dot.cy * 3.8 + (dot.primary ? 20 : 16)}
                  textAnchor="middle"
                  fill="rgba(255,255,255,0.75)"
                  fontSize={dot.primary ? 11 : 9}
                  fontFamily="system-ui, sans-serif"
                  fontWeight={dot.primary ? '600' : '400'}
                >
                  {dot.label}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </section>

      {/* ── City profiles: horizontal scrollable cards ── */}
      <section style={{ backgroundColor: COLORS.plaster, padding: '56px 0 64px' }}>
        <div style={{ padding: '0 80px', marginBottom: 40 }}>
          <p
            style={{
              fontFamily: FONTS.sans,
              fontSize: 11,
              color: COLORS.terracotta,
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
              marginBottom: 12,
            }}
          >
            WHERE WE BUILD
          </p>
          <h2
            style={{
              fontFamily: FONTS.serif,
              fontSize: 'clamp(28px, 3vw, 44px)',
              color: COLORS.espresso,
            }}
          >
            Every City, Same{' '}
            <span style={{ fontStyle: 'italic', color: COLORS.terracotta }}>Standard.</span>
          </h2>
        </div>

        <CityCards areas={areas} />
      </section>

      {/* ── Don't see your city? ── */}
      <section
        style={{
          backgroundColor: COLORS.espresso,
          padding: '80px 80px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 80,
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <svg style={{ position: 'absolute', top: 40, right: 40, width: 160, height: 160, opacity: 0.05, pointerEvents: 'none' }} viewBox="0 0 160 160" fill="none">
          <path d="M80 10L10 65V150H150V65L80 10Z" stroke="white" strokeWidth="1.5" />
          <rect x="65" y="90" width="30" height="60" stroke="white" strokeWidth="1" />
        </svg>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2
            style={{
              fontFamily: FONTS.serif,
              fontSize: 'clamp(28px, 3vw, 44px)',
              color: COLORS.white,
              marginBottom: 16,
            }}
          >
            Don&apos;t See Your{' '}
            <span style={{ fontStyle: 'italic', color: COLORS.terracotta }}>City?</span>
          </h2>
          <p
            style={{
              fontFamily: FONTS.sans,
              fontSize: 16,
              color: COLORS.sage,
              maxWidth: 440,
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            We serve the entire Greater Houston metro area. If you&apos;re in Fort Bend County or surrounding areas, give us a call — we likely serve you.
          </p>
        </div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 360 }}>
            {[
              'Harris County',
              'Fort Bend County',
              'Brazoria County',
              'Waller County',
            ].map((county) => (
              <div key={county} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: COLORS.terracotta, flexShrink: 0 }} />
                <span style={{ fontFamily: FONTS.sans, fontSize: 15, color: 'rgba(255,255,255,0.7)' }}>{county}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 40, display: 'flex', gap: 16 }}>
            <a
              href={CONTACT.phoneHref}
              style={{
                backgroundColor: COLORS.terracotta,
                color: COLORS.white,
                fontFamily: FONTS.sans,
                fontSize: 14,
                fontWeight: 600,
                padding: '16px 32px',
                borderRadius: 9999,
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              Call {CONTACT.phone}
            </a>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Ready to Build?"
        body="Free consultation anywhere in Greater Houston."
        primaryLabel="Contact Us"
        primaryHref="/contact"
      />
    </main>
  );
}
