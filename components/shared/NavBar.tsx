'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { COLORS, FONTS, CONTACT } from '@/lib/constants';
import { services } from '@/data/services';

const remodelingLinks = services.filter(s => s.slug !== 'custom-home-building').map(s => ({ label: s.navLabel, href: `/services/${s.slug}` }));
const galleryLinks = [
  { label: 'Custom Homes Gallery', href: '/gallery?cat=custom-homes' },
  { label: 'Kitchen Gallery', href: '/gallery?cat=kitchen' },
  { label: 'Bathroom Gallery', href: '/gallery?cat=bathroom' },
  { label: 'Remodeling Gallery', href: '/gallery?cat=remodeling' },
];

function Dropdown({ items, isOpen }: { items: { label: string; href: string }[]; isOpen: boolean }) {
  if (!isOpen) return null;
  return (
    <div style={{ position: 'absolute', top: 'calc(100% + 8px)', left: '50%', transform: 'translateX(-50%)', backgroundColor: COLORS.white, borderRadius: 16, boxShadow: '0 8px 32px rgba(43,33,24,0.14)', padding: '8px 0', minWidth: 220, zIndex: 100 }}>
      {items.map(item => (
        <Link key={item.href} href={item.href} style={{ display: 'block', padding: '10px 20px', fontFamily: FONTS.sans, fontSize: 13, color: COLORS.espresso, textDecoration: 'none' }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = COLORS.plaster)}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}>
          {item.label}
        </Link>
      ))}
    </div>
  );
}

export default function NavBar() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/');
  const linkStyle = (href: string): React.CSSProperties => ({
    fontFamily: FONTS.sans, fontSize: 13, textTransform: 'uppercase' as const, letterSpacing: '0.08em',
    color: isActive(href) ? COLORS.terracotta : COLORS.sage, textDecoration: 'none', cursor: 'pointer', position: 'relative' as const,
    paddingBottom: 4, borderBottom: isActive(href) ? `2px solid ${COLORS.terracotta}` : '2px solid transparent', transition: 'color 0.15s',
  });

  return (
    <>
      <nav style={{ position: 'sticky', top: 0, zIndex: 50, backgroundColor: 'rgba(247,244,239,0.92)', backdropFilter: 'blur(8px)', borderBottom: '1px solid rgba(154,154,140,0.15)', height: 72, display: 'flex', alignItems: 'center', padding: '0 80px' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', flexShrink: 0 }}>
          <svg width="28" height="24" viewBox="0 0 28 24" fill="none">
            <path d="M3 16 L10 4 L17 16" stroke={COLORS.terracotta} strokeWidth="2" fill="none" strokeLinejoin="round"/>
            <path d="M11 16 L18 4 L25 16" stroke={COLORS.terracotta} strokeWidth="2" fill="none" strokeLinejoin="round"/>
          </svg>
          <span style={{ fontFamily: FONTS.sans, fontSize: 13, fontWeight: 600, color: COLORS.espresso, textTransform: 'uppercase', letterSpacing: '0.1em' }}>NWS Custom Homes</span>
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: 40, margin: '0 auto', position: 'relative' }}>
          <Link href="/services/custom-home-building" style={linkStyle('/services/custom-home-building')}>Custom Homes</Link>
          <div style={{ position: 'relative' }} onMouseEnter={() => setOpenMenu('remodeling')} onMouseLeave={() => setOpenMenu(null)}>
            <span style={linkStyle('/services')} onClick={() => setOpenMenu(openMenu === 'remodeling' ? null : 'remodeling')}>Remodeling ▾</span>
            <Dropdown items={remodelingLinks} isOpen={openMenu === 'remodeling'} />
          </div>
          <div style={{ position: 'relative' }} onMouseEnter={() => setOpenMenu('gallery')} onMouseLeave={() => setOpenMenu(null)}>
            <span style={linkStyle('/gallery')} onClick={() => setOpenMenu(openMenu === 'gallery' ? null : 'gallery')}>Gallery ▾</span>
            <Dropdown items={galleryLinks} isOpen={openMenu === 'gallery'} />
          </div>
          <Link href="/areas" style={linkStyle('/areas')}>Areas</Link>
          <Link href="/about" style={linkStyle('/about')}>About</Link>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexShrink: 0 }}>
          <a href={CONTACT.phoneHref} style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: FONTS.sans, fontSize: 13, color: COLORS.espresso, textDecoration: 'none' }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke={COLORS.sage} strokeWidth="1.5"><path d="M2 2C2 2 3.5.5 5 .5S7 2 7.5 3.5 6.5 5 6.5 5s.5 1.5 2 3 3 2 3 2 1.5-1 2-1S15 10.5 15 12s-1.5 2-1.5 2C8 18-4 4 2 2z" strokeLinecap="round"/></svg>
            {CONTACT.phone}
          </a>
          <Link href="/contact" style={{ backgroundColor: COLORS.terracotta, color: COLORS.white, fontFamily: FONTS.sans, fontSize: 13, fontWeight: 600, padding: '10px 22px', borderRadius: 9999, textDecoration: 'none' }}>Free Consultation</Link>
          <button onClick={() => setMobileOpen(!mobileOpen)} style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 4 }} aria-label="Menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={COLORS.espresso} strokeWidth="1.8"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>
        </div>
      </nav>
      {mobileOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 200, backgroundColor: COLORS.white, padding: '24px 24px', overflowY: 'auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 40 }}>
            <span style={{ fontFamily: FONTS.sans, fontSize: 13, fontWeight: 600, color: COLORS.espresso, textTransform: 'uppercase', letterSpacing: '0.1em' }}>NWS Custom Homes</span>
            <button onClick={() => setMobileOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={COLORS.espresso} strokeWidth="1.8"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>
          {[{ label: 'Home', href: '/' },{ label: 'Custom Home Building', href: '/services/custom-home-building' },{ label: 'Kitchen Remodeling', href: '/services/kitchen-remodeling' },{ label: 'Bathroom Remodeling', href: '/services/bathroom-remodeling' },{ label: 'Whole Home Remodeling', href: '/services/whole-home-remodeling' },{ label: 'Room Additions', href: '/services/room-additions' },{ label: 'All Services', href: '/services' },{ label: 'Gallery', href: '/gallery' },{ label: 'Areas We Serve', href: '/areas' },{ label: 'About', href: '/about' },{ label: 'FAQs', href: '/faqs' },{ label: 'Contact', href: '/contact' }].map(link => (
            <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} style={{ display: 'block', padding: '16px 0', fontFamily: FONTS.sans, fontSize: 16, color: COLORS.espresso, textDecoration: 'none', borderBottom: '1px solid rgba(154,154,140,0.15)' }}>{link.label}</Link>
          ))}
          <a href={CONTACT.phoneHref} style={{ display: 'block', marginTop: 32, textAlign: 'center', backgroundColor: COLORS.terracotta, color: COLORS.white, fontFamily: FONTS.sans, fontSize: 15, fontWeight: 600, padding: '18px', borderRadius: 9999, textDecoration: 'none' }}>Call {CONTACT.phone}</a>
        </div>
      )}
    </>
  );
}
