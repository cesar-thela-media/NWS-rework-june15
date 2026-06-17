'use client';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useCallback, useState, useEffect } from 'react';
import { COLORS, FONTS } from '@/lib/constants';
import { galleryItems } from '@/data/gallery';

const categories = [
  { key: 'all', label: 'All' },
  { key: 'custom-homes', label: 'Custom Homes' },
  { key: 'kitchen', label: 'Kitchen' },
  { key: 'bathroom', label: 'Bathroom' },
  { key: 'remodeling', label: 'Remodeling' },
];

export default function GalleryContent() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const activeCat = searchParams.get('cat') || 'all';
  const filtered = activeCat === 'all' ? galleryItems : galleryItems.filter(g => g.category === activeCat);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
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
    <>
      {/* Sticky filter bar — visible once hero scrolls away */}
      <div
        style={{
          position: 'sticky',
          top: 72,
          zIndex: 40,
          backgroundColor: COLORS.espresso,
          padding: isMobile ? '12px 24px' : '14px 80px',
          display: 'flex',
          gap: 8,
          flexWrap: 'wrap',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
        }}
      >
        {categories.map((cat) => {
          const active = activeCat === cat.key;
          return (
            <button
              key={cat.key}
              onClick={() => setCategory(cat.key)}
              style={{
                fontFamily: FONTS.sans,
                fontSize: 12,
                fontWeight: 600,
                padding: '7px 18px',
                borderRadius: 9999,
                border: `1px solid ${active ? COLORS.terracotta : 'rgba(255,255,255,0.18)'}`,
                cursor: 'pointer',
                backgroundColor: active ? COLORS.terracotta : 'transparent',
                color: active ? COLORS.white : 'rgba(255,255,255,0.6)',
                transition: 'background-color 0.15s, border-color 0.15s, color 0.15s',
                letterSpacing: '0.04em',
              }}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Masonry grid */}
      <section
        style={{
          backgroundColor: COLORS.plaster,
          padding: isMobile ? '24px 24px' : '56px 80px',
          columns: isMobile ? 1 : 3,
          columnGap: 16,
        }}
      >
        {filtered.map((item) => (
          <div
            key={item.id}
            style={{
              borderRadius: 16,
              width: '100%',
              aspectRatio: item.aspectRatio,
              display: 'block',
              marginBottom: 16,
              breakInside: 'avoid',
              position: 'relative',
              overflow: 'hidden',
              backgroundColor: COLORS.placeholder,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.image}
              alt={item.title}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                transition: 'transform 0.35s ease',
              }}
            />
            {/* Hover overlay — always present but subtle; gradient slides up on hover via CSS would need client trick, keep simple */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(to top, rgba(43,33,24,0.88), rgba(43,33,24,0.2) 55%, transparent)',
                padding: '32px 18px 18px',
              }}
            >
              <p style={{ fontFamily: FONTS.serif, fontSize: 14, color: COLORS.white, margin: '0 0 3px' }}>{item.title}</p>
              <p style={{ fontFamily: FONTS.sans, fontSize: 12, color: 'rgba(255,255,255,0.6)', margin: 0 }}>{item.area}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
