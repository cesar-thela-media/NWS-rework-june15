'use client';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useCallback, useState, useEffect } from 'react';
import { COLORS, FONTS } from '@/lib/constants';

const NWS = 'https://www.nws-homes.com/wp-content/uploads/2023/01';

const collagePhotos = [
  { src: `${NWS}/kitchen-gallery-7.jpeg`, alt: 'Kitchen remodel' },
  { src: `${NWS}/bathroom-gallery-7.jpeg`, alt: 'Bathroom remodel' },
  { src: `${NWS}/custom-homes-7.jpeg`, alt: 'Custom home' },
  { src: `${NWS}/bathroom-gallery-5.jpeg`, alt: 'Bathroom remodel' },
];

const categories = [
  { key: 'all', label: 'All Projects' },
  { key: 'kitchen', label: 'Kitchen' },
  { key: 'bathroom', label: 'Bathroom' },
  { key: 'custom-homes', label: 'Custom Homes' },
  { key: 'remodeling', label: 'Remodeling' },
];

export default function GalleryHero() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const activeCat = searchParams.get('cat') || 'all';
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 900);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const setCategory = useCallback(
    (cat: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (cat === 'all') {
        params.delete('cat');
      } else {
        params.set('cat', cat);
      }
      const qs = params.toString();
      router.replace(pathname + (qs ? '?' + qs : ''), { scroll: false });
    },
    [searchParams, pathname, router]
  );

  return (
    <section
      style={{
        backgroundColor: COLORS.espresso,
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        minHeight: isMobile ? 'auto' : '62vh',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Blueprint grid watermark */}
      <svg
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.025, pointerEvents: 'none' }}
        viewBox="0 0 1440 600"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 130} y1="0" x2={i * 130} y2="600" stroke="white" strokeWidth="0.5" strokeDasharray="4 8" />
        ))}
        {Array.from({ length: 8 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 80} x2="1440" y2={i * 80} stroke="white" strokeWidth="0.5" strokeDasharray="4 8" />
        ))}
      </svg>

      {/* LEFT — editorial heading + filter pills */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: isMobile ? '64px 24px 40px' : '80px 56px 80px 80px',
        }}
      >
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
          Home / Gallery
        </p>
        <h1
          style={{
            fontFamily: FONTS.serif,
            fontSize: 'clamp(44px, 4.5vw, 72px)',
            color: COLORS.white,
            lineHeight: 1.0,
            margin: '0 0 12px 0',
          }}
        >
          Our Work
          <br />
          <span style={{ fontStyle: 'italic', color: COLORS.terracotta }}>Speaks.</span>
        </h1>
        <p
          style={{
            fontFamily: FONTS.sans,
            fontSize: 15,
            color: 'rgba(255,255,255,0.5)',
            lineHeight: 1.6,
            maxWidth: 380,
            margin: '0 0 48px 0',
          }}
        >
          500+ projects across Fort Bend County: kitchens, bathrooms, custom homes, and full remodels.
        </p>

        {/* Filter pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {categories.map((cat) => {
            const active = activeCat === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setCategory(cat.key)}
                style={{
                  fontFamily: FONTS.sans,
                  fontSize: 13,
                  fontWeight: 600,
                  padding: '10px 22px',
                  borderRadius: 9999,
                  border: `1.5px solid ${active ? COLORS.terracotta : 'rgba(255,255,255,0.18)'}`,
                  cursor: 'pointer',
                  backgroundColor: active ? COLORS.terracotta : 'transparent',
                  color: active ? COLORS.white : 'rgba(255,255,255,0.7)',
                  transition: 'all 0.15s ease',
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* RIGHT — 2×2 photo collage */}
      {!isMobile && <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: '1fr 1fr',
          gap: 12,
          overflow: 'hidden',
        }}
      >
        {collagePhotos.map((photo, i) => (
          <div
            key={i}
            style={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: 12,
              backgroundColor: COLORS.placeholder,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photo.src}
              alt={photo.alt}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
            {/* Subtle vignette on each cell */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(43,33,24,0.12)',
              }}
            />
          </div>
        ))}
      </div>}
    </section>
  );
}
