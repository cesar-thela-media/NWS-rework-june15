'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { COLORS, FONTS, CONTACT } from '@/lib/constants';
import { services } from '@/data/services';

const customHome = { label: 'Custom Home Building', href: '/services/custom-home-building' };
const remodelingLinks = services
  .filter(s => s.slug !== 'custom-home-building')
  .map(s => ({ label: s.navLabel, href: `/services/${s.slug}` }));

const galleryLinks = [
  { label: 'Custom Homes Gallery', href: '/gallery?cat=custom-homes' },
  { label: 'Kitchen Gallery', href: '/gallery?cat=kitchen' },
  { label: 'Bathroom Gallery', href: '/gallery?cat=bathroom' },
  { label: 'Remodeling Gallery', href: '/gallery?cat=remodeling' },
];

const INK = 'rgba(43,33,24,0.72)';
const INK_HOVER = COLORS.espresso;

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="10" height="6" viewBox="0 0 10 6" fill="none"
      style={{
        transition: 'transform 0.2s',
        transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
        display: 'inline-block',
        verticalAlign: 'middle',
        marginLeft: 4,
        flexShrink: 0,
      }}
    >
      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ServicesDropdown({ isOpen }: { isOpen: boolean }) {
  if (!isOpen) return null;
  return (
    <div style={{
      position: 'absolute', top: 'calc(100% + 8px)', left: '50%', transform: 'translateX(-50%)',
      backgroundColor: COLORS.white, borderRadius: 16,
      boxShadow: '0 16px 48px rgba(43,33,24,0.15), 0 2px 8px rgba(43,33,24,0.06)',
      padding: '16px 0 12px', minWidth: 500, zIndex: 100,
      border: '1px solid rgba(154,154,140,0.12)',
    }}>
      <div style={{ padding: '0 20px 12px' }}>
        <Link
          href="/services"
          style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: FONTS.sans, fontSize: 13, color: COLORS.terracotta, fontWeight: 600, textDecoration: 'none', letterSpacing: '0.02em' }}
          onMouseEnter={e => { e.currentTarget.style.opacity = '0.75'; }}
          onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
        >
          View All Services →
        </Link>
      </div>
      <div style={{ height: 1, backgroundColor: 'rgba(154,154,140,0.14)', margin: '0 0 12px' }} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '0 20px', gap: '0 24px' }}>
        <div>
          <p style={{ fontFamily: FONTS.sans, fontSize: 10, color: COLORS.sage, textTransform: 'uppercase', letterSpacing: '0.16em', fontWeight: 700, margin: '0 0 8px 0' }}>
            New Construction
          </p>
          <Link
            href={customHome.href}
            style={{ display: 'block', padding: '9px 10px', fontFamily: FONTS.sans, fontSize: 13, color: INK, textDecoration: 'none', borderRadius: 8, transition: 'background 0.1s, color 0.1s' }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = COLORS.plaster; e.currentTarget.style.color = COLORS.terracotta; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = INK; }}
          >
            {customHome.label}
          </Link>
        </div>
        <div>
          <p style={{ fontFamily: FONTS.sans, fontSize: 10, color: COLORS.sage, textTransform: 'uppercase', letterSpacing: '0.16em', fontWeight: 700, margin: '0 0 8px 0' }}>
            Remodeling & Renovation
          </p>
          {remodelingLinks.map(item => (
            <Link
              key={item.href}
              href={item.href}
              style={{ display: 'block', padding: '7px 10px', fontFamily: FONTS.sans, fontSize: 13, color: INK, textDecoration: 'none', borderRadius: 8, transition: 'background 0.1s, color 0.1s' }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = COLORS.plaster; e.currentTarget.style.color = COLORS.terracotta; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = INK; }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function GalleryDropdown({ isOpen }: { isOpen: boolean }) {
  if (!isOpen) return null;
  return (
    <div style={{
      position: 'absolute', top: 'calc(100% + 8px)', left: '50%', transform: 'translateX(-50%)',
      backgroundColor: COLORS.white, borderRadius: 14,
      boxShadow: '0 12px 40px rgba(43,33,24,0.13), 0 2px 8px rgba(43,33,24,0.06)',
      padding: '6px 0', minWidth: 230, zIndex: 100,
      border: '1px solid rgba(154,154,140,0.12)',
    }}>
      {galleryLinks.map(item => (
        <Link
          key={item.href}
          href={item.href}
          style={{ display: 'block', padding: '11px 20px', fontFamily: FONTS.sans, fontSize: 13, color: INK, textDecoration: 'none', transition: 'background 0.1s, color 0.1s' }}
          onMouseEnter={e => { e.currentTarget.style.backgroundColor = COLORS.plaster; e.currentTarget.style.color = COLORS.terracotta; }}
          onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = INK; }}
        >
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 900);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/');
  const servicesActive = pathname.startsWith('/services');
  const galleryActive = pathname.startsWith('/gallery');

  const linkStyle = (active: boolean): React.CSSProperties => ({
    fontFamily: FONTS.sans,
    fontSize: 13,
    fontWeight: 500,
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    textDecoration: 'none',
    cursor: 'pointer',
    color: active ? COLORS.terracotta : INK,
    borderBottom: active ? `2px solid ${COLORS.terracotta}` : '2px solid transparent',
    paddingBottom: 2,
    transition: 'color 0.15s',
    display: 'inline-flex',
    alignItems: 'center',
    lineHeight: 1,
  });

  return (
    <>
      <nav style={{
        position: 'sticky', top: 0, zIndex: 50,
        backgroundColor: 'rgba(247,244,239,0.96)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(154,154,140,0.15)',
        height: 72,
        display: 'flex',
        alignItems: 'center',
        padding: isMobile ? '0 20px' : '0 80px',
      }}>

        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0, gap: 8 }}>
          {/* NWS diamond mark */}
          <svg width={isMobile ? 28 : 34} height={isMobile ? 28 : 34} viewBox="0 0 34 34" fill="none">
            <rect x="17" y="1" width="22" height="22" rx="2" transform="rotate(45 17 1)" fill={COLORS.terracotta} />
            <text x="17" y="21" textAnchor="middle" fontFamily="var(--font-playfair), Georgia, serif" fontSize="11" fontWeight="700" fill={COLORS.white} letterSpacing="0.5">NWS</text>
          </svg>
          {/* Wordmark */}
          <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
            <span style={{ fontFamily: FONTS.serif, fontSize: isMobile ? 14 : 17, fontWeight: 700, color: COLORS.espresso, letterSpacing: '0.04em' }}>NWS</span>
            <span style={{ fontFamily: FONTS.sans, fontSize: isMobile ? 8 : 9, fontWeight: 500, color: COLORS.sage, textTransform: 'uppercase', letterSpacing: '0.18em' }}>Custom Homes</span>
          </span>
        </Link>

        {/* Desktop nav — absolutely centered so it's immune to logo/CTA width asymmetry */}
        {!isMobile && (
          <div style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            alignItems: 'center',
            gap: 32,
          }}>

            {/* Services */}
            <div
              style={{ position: 'relative', display: 'flex', alignItems: 'center' }}
              onMouseEnter={() => setOpenMenu('services')}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <span
                style={linkStyle(servicesActive)}
                onMouseEnter={e => { if (!servicesActive) (e.currentTarget as HTMLElement).style.color = INK_HOVER; }}
                onMouseLeave={e => { if (!servicesActive) (e.currentTarget as HTMLElement).style.color = INK; }}
              >
                Services <Chevron open={openMenu === 'services'} />
              </span>
              {/* Invisible bridge — extends hover zone down without inflating height */}
              <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, height: 16 }} />
              <ServicesDropdown isOpen={openMenu === 'services'} />
            </div>

            {/* Gallery */}
            <div
              style={{ position: 'relative', display: 'flex', alignItems: 'center' }}
              onMouseEnter={() => setOpenMenu('gallery')}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <span
                style={linkStyle(galleryActive)}
                onMouseEnter={e => { if (!galleryActive) (e.currentTarget as HTMLElement).style.color = INK_HOVER; }}
                onMouseLeave={e => { if (!galleryActive) (e.currentTarget as HTMLElement).style.color = INK; }}
              >
                Gallery <Chevron open={openMenu === 'gallery'} />
              </span>
              <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, height: 16 }} />
              <GalleryDropdown isOpen={openMenu === 'gallery'} />
            </div>

            <Link href="/areas" style={linkStyle(isActive('/areas'))}
              onMouseEnter={e => { if (!isActive('/areas')) e.currentTarget.style.color = INK_HOVER; }}
              onMouseLeave={e => { if (!isActive('/areas')) e.currentTarget.style.color = INK; }}>
              Areas
            </Link>
            <Link href="/faqs" style={linkStyle(isActive('/faqs'))}
              onMouseEnter={e => { if (!isActive('/faqs')) e.currentTarget.style.color = INK_HOVER; }}
              onMouseLeave={e => { if (!isActive('/faqs')) e.currentTarget.style.color = INK; }}>
              FAQs
            </Link>
            <Link href="/about" style={linkStyle(isActive('/about'))}
              onMouseEnter={e => { if (!isActive('/about')) e.currentTarget.style.color = INK_HOVER; }}
              onMouseLeave={e => { if (!isActive('/about')) e.currentTarget.style.color = INK; }}>
              About
            </Link>
          </div>
        )}

        {/* Right side — pushed to far right */}
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: isMobile ? 10 : 20, flexShrink: 0 }}>
          {!isMobile && (
            <>
              <Link
                href="/contact"
                style={{
                  backgroundColor: COLORS.terracotta, color: COLORS.white,
                  fontFamily: FONTS.sans, fontSize: 13, fontWeight: 600,
                  padding: '10px 22px', borderRadius: 9999, textDecoration: 'none',
                  whiteSpace: 'nowrap',
                }}
              >
                Free Consultation
              </Link>
              <a
                href={CONTACT.phoneHref}
                style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: FONTS.sans, fontSize: 13, color: COLORS.espresso, textDecoration: 'none', whiteSpace: 'nowrap' }}
              >
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke={COLORS.sage} strokeWidth="1.5">
                  <path d="M2 2C2 2 3.5.5 5 .5S7 2 7.5 3.5 6.5 5 6.5 5s.5 1.5 2 3 3 2 3 2 1.5-1 2-1S15 10.5 15 12s-1.5 2-1.5 2C8 18-4 4 2 2z" strokeLinecap="round" />
                </svg>
                {CONTACT.phone}
              </a>
            </>
          )}

          {/* Mobile: call icon */}
          {isMobile && (
            <a
              href={CONTACT.phoneHref}
              aria-label="Call us"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 38, height: 38, borderRadius: 9999, backgroundColor: COLORS.plaster, border: '1px solid rgba(154,154,140,0.25)', textDecoration: 'none' }}
            >
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke={COLORS.terracotta} strokeWidth="1.5">
                <path d="M2.5 2.5C2.5 2.5 4 1 5.5 1S7.5 2.5 8 4 7 5.5 7 5.5s.5 1.5 2 3 3 2 3 2 1.5-1 2-1S15.5 11 15.5 12.5s-2 2-2 2C8 19-3 5 2.5 2.5z" strokeLinecap="round" />
              </svg>
            </a>
          )}

          {/* Hamburger */}
          {isMobile && (
            <button
              onClick={() => setMobileOpen(v => !v)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, display: 'flex', alignItems: 'center' }}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={COLORS.espresso} strokeWidth="1.8">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={COLORS.espresso} strokeWidth="1.8">
                  <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          )}
        </div>
      </nav>

      {/* Mobile full-screen menu */}
      {mobileOpen && isMobile && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 200, backgroundColor: COLORS.white, overflowY: 'auto' }}>
          {/* Mobile menu header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 20px 0' }}>
            <Link href="/" onClick={() => setMobileOpen(false)} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', gap: 8 }}>
              <svg width="28" height="28" viewBox="0 0 34 34" fill="none">
                <rect x="17" y="1" width="22" height="22" rx="2" transform="rotate(45 17 1)" fill={COLORS.terracotta} />
                <text x="17" y="21" textAnchor="middle" fontFamily="var(--font-playfair), Georgia, serif" fontSize="11" fontWeight="700" fill={COLORS.white} letterSpacing="0.5">NWS</text>
              </svg>
              <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
                <span style={{ fontFamily: FONTS.serif, fontSize: 14, fontWeight: 700, color: COLORS.espresso, letterSpacing: '0.04em' }}>NWS</span>
                <span style={{ fontFamily: FONTS.sans, fontSize: 8, fontWeight: 500, color: COLORS.sage, textTransform: 'uppercase', letterSpacing: '0.18em' }}>Custom Homes</span>
              </span>
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, display: 'flex', alignItems: 'center' }}
              aria-label="Close menu"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={COLORS.espresso} strokeWidth="1.8">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Mobile links */}
          <div style={{ padding: '24px 20px 0' }}>
            {[
              { label: 'Home', href: '/' },
              { label: 'All Services', href: '/services' },
              { label: 'Custom Home Building', href: '/services/custom-home-building' },
              ...remodelingLinks,
              { label: 'Gallery', href: '/gallery' },
              { label: 'Areas We Serve', href: '/areas' },
              { label: 'FAQs', href: '/faqs' },
              { label: 'About', href: '/about' },
              { label: 'Contact', href: '/contact' },
            ].map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: 'block',
                  padding: '14px 0',
                  fontFamily: FONTS.sans,
                  fontSize: 16,
                  color: pathname === link.href ? COLORS.terracotta : COLORS.espresso,
                  fontWeight: pathname === link.href ? 600 : 400,
                  textDecoration: 'none',
                  borderBottom: '1px solid rgba(154,154,140,0.12)',
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile CTA */}
          <div style={{ padding: '28px 20px 40px', display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              style={{ display: 'block', textAlign: 'center', backgroundColor: COLORS.terracotta, color: COLORS.white, fontFamily: FONTS.sans, fontSize: 15, fontWeight: 600, padding: '17px', borderRadius: 9999, textDecoration: 'none' }}
            >
              Free Consultation
            </Link>
            <a
              href={CONTACT.phoneHref}
              style={{ display: 'block', textAlign: 'center', border: `1.5px solid ${COLORS.terracotta}`, color: COLORS.terracotta, fontFamily: FONTS.sans, fontSize: 15, fontWeight: 600, padding: '15px', borderRadius: 9999, textDecoration: 'none' }}
            >
              Call {CONTACT.phone}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
