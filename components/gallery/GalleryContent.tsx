'use client';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useCallback, useState, useEffect } from 'react';
import { COLORS, FONTS } from '@/lib/constants';
import { galleryItems } from '@/data/gallery';

const categories = [
  { key: 'all', label: 'All Projects' },
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

  const setCategory = useCallback((cat: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (cat === 'all') {
      params.delete('cat');
    } else {
      params.set('cat', cat);
    }
    const qs = params.toString();
    router.replace(pathname + (qs ? '?' + qs : ''), { scroll: false });
  }, [searchParams, pathname, router]);

  return (
    <>
      <div style={{ position: 'sticky', top: 72, zIndex: 40, backgroundColor: COLORS.plaster, borderBottom: '1px solid rgba(154,154,140,0.15)', padding: isMobile ? '12px 24px' : '16px 80px', display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        {categories.map(cat => (
          <button key={cat.key} onClick={() => setCategory(cat.key)}
            style={{ fontFamily: FONTS.sans, fontSize: isMobile ? 12 : 13, fontWeight: 600, padding: isMobile ? '6px 16px' : '8px 20px', borderRadius: 9999, border: 'none', cursor: 'pointer', backgroundColor: activeCat === cat.key ? COLORS.terracotta : 'transparent', color: activeCat === cat.key ? COLORS.white : COLORS.sage }}>
            {cat.label}
          </button>
        ))}
      </div>
      <section style={{ backgroundColor: COLORS.plaster, padding: isMobile ? '24px 24px' : '48px 80px', columns: isMobile ? 1 : 3, columnGap: 16 }}>
        {filtered.map(item => (
          <div key={item.id} style={{ backgroundColor: COLORS.placeholder, borderRadius: 16, width: '100%', aspectRatio: item.aspectRatio, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', padding: 16, marginBottom: 16, breakInside: 'avoid', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(43,33,24,0.8), transparent)', padding: '24px 16px 16px' }}>
              <p style={{ fontFamily: FONTS.serif, fontSize: 14, color: COLORS.white }}>{item.title}</p>
              <p style={{ fontFamily: FONTS.sans, fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>{item.area}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
