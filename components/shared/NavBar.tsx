'use client';
import { useState } from 'react';
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
      style={{ transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)', display: 'inline-block', verticalAlign: 'middle', marginLeft: 4 }}
    >
      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ServicesDropdown({ isOpen }: { isOpen: boolean }) {
  if (!isOpen) return null;
  return (
    <div style={{
      position: 'absolute', top: 'calc(100% + 2px)', left: '50%', transform: 'translateX(-50%)',
      backgroundColor: COLORS.white, borderRadius: 16,
      boxShadow: '0 16px 48px rgba(43,33,24,0.15), 0 2px 8px rgba(43,33,24,0.06)',
      padding: '16px 0 12px', minWidth: 480, zIndex: 100,
      border: '1px solid rgba(154,154,140,0.12)',
    }}>
      {/* View All Services */}
      <div style={{ padding: '0 20px 12px' }}>
        <Link
          href="/services"
          style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: FONTS.sans, fontSize: 13, color: COLORS.terracotta, fontWeight: 600, textDecoration: 'none', letterSpacing: '0.02em' }}
          onMouseEnter={e => { e.currentTarget.style.opacity = '0.75'; }}
          onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
        >
          View All Services
          <span style={{ fontSize: 14, lineHeight: 1 }}>→</span>
        </Link>
      </div>
      <div style={{ height: 1, backgroundColor: 'rgba(154,154,140,0.14)', margin: '0 0 12px' }} />

      {/* 2-column layout */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '0 20px', gap: '0 24px' }}>
        {/* LEFT: New Construction */}
        <div>
          <p style={{ fontFamily: FONTS.sans, fontSize: 10, color: COLORS.sage, textTransform: 'uppercase', letterSpacing: '0.16em', fontWeight: 700, padding: '0 0 8px 0', margin: 0 }}>
            New Construction
          </p>
          <Link
            href={customHome.href}
            style={{ display: 'block', padding: '10px 12px', fontFamily: FONTS.sans, fontSize: 13, color: INK, textDecoration: 'none', borderRadius: 8 }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = COLORS.plaster; e.currentTarget.style.color = COLORS.terracotta; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = INK; }}
          >
            {customHome.label}
          </Link>
        </div>

        {/* RIGHT: Remodeling */}
        <div>
          <p style={{ fontFamily: FONTS.sans, fontSize: 10, color: COLORS.sage, textTransform: 'uppercase', letterSpacing: '0.16em', fontWeight: 700, padding: '0 0 8px 0', margin: 0 }}>
            Remodeling & Renovation
          </p>
          {remodelingLinks.map(item => (
            <Link
              key={item.href}
              href={item.href}
              style={{ display: 'block', padding: '8px 12px', fontFamily: FONTS.sans, fontSize: 13, color: INK, textDecoration: 'none', borderRadius: 8 }}
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
      position: 'absolute', top: 'calc(100% + 2px)', left: '50%', transform: 'translateX(-50%)',
      backgroundColor: COLORS.white, borderRadius: 14,
      boxShadow: '0 12px 40px rgba(43,33,24,0.13), 0 2px 8px rgba(43,33,24,0.06)',
      padding: '6px 0', minWidth: 230, zIndex: 100,
      border: '1px solid rgba(154,154,140,0.12)',
    }}>
      {galleryLinks.map(item => (
        <Link
          key={item.href}
          href={item.href}
          style={{ display: 'block', padding: '11px 20px', fontFamily: FONTS.sans, fontSize: 13, color: INK, textDecoration: 'none', transition: 'background 0.1s' }}
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

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/');
  const servicesActive = pathname.startsWith('/services');
  const galleryActive = pathname.startsWith('/gallery');

  const linkBase: React.CSSProperties = {
    fontFamily: FONTS.sans, fontSize: 13, textTransform: 'uppercase',
    letterSpacing: '0.08em', textDecoration: 'none', cursor: 'pointer',
    position: 'relative', paddingBottom: 4, transition: 'color 0.15s',
    display: 'inline-flex', alignItems: 'center',
  };

  const linkStyle = (active: boolean): React.CSSProperties => ({
    ...linkBase,
    color: active ? COLORS.terracotta : INK,
    borderBottom: active ? `2px solid ${COLORS.terracotta}` : '2px solid transparent',
  });

  return (
    <>
      <nav style={{
        position: 'sticky', top: 0, zIndex: 50,
        backgroundColor: 'rgba(247,244,239,0.95)', backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(154,154,140,0.15)',
        height: 72, display: 'flex', alignItems: 'center', padding: '0 80px',
      }}>

        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', flexShrink: 0 }}>
          <svg width="28" height="24" viewBox="0 0 28 24" fill="none">
            <path d="M3 16 L10 4 L17 16" stroke={COLORS.terracotta} strokeWidth="2" fill="none" strokeLinejoin="round" />
            <path d="M11 16 L18 4 L25 16" stroke={COLORS.terracotta} strokeWidth="2" fill="none" strokeLinejoin="round" />
          </svg>
          <span style={{ fontFamily: FONTS.sans, fontSize: 13, fontWeight: 600, color: COLORS.espresso, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            NWS Custom Homes
          </span>
        </Link>

        {/* Desktop nav links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 36, margin: '0 auto', position: 'relative' }}>

          {/* Services dropdown */}
          <div
            style={{ position: 'relative', paddingBottom: 16 }}
            onMouseEnter={() => setOpenMenu('services')}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <span
              style={linkStyle(servicesActive)}
              onMouseEnter={e => { if (!servicesActive) (e.currentTarget as HTMLElement).style.color = INK_HOVER; }}
              onMouseLeave={e => { if (!servicesActive) (e.currentTarget as HTMLElement).style.color = INK; }}
            >
              Services
              <Chevron open={openMenu === 'services'} />
            </span>
            <ServicesDropdown isOpen={openMenu === 'services'} />
          </div>

          {/* Gallery dropdown */}
          <div
            style={{ position: 'relative', paddingBottom: 16 }}
            onMouseEnter={() => setOpenMenu('gallery')}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <span
              style={linkStyle(galleryActive)}
              onMouseEnter={e => { if (!galleryActive) (e.currentTarget as HTMLElement).style.color = INK_HOVER; }}
              onMouseLeave={e => { if (!galleryActive) (e.currentTarget as HTMLElement).style.color = INK; }}
            >
              Gallery
              <Chevron open={openMenu === 'gallery'} />
            </span>
            <GalleryDropdown isOpen={openMenu === 'gallery'} />
          </div>

          <Link
            href="/areas"
            style={linkStyle(isActive('/areas'))}
            onMouseEnter={e => { if (!isActive('/areas')) e.currentTarget.style.color = INK_HOVER; }}
            onMouseLeave={e => { if (!isActive('/areas')) e.currentTarget.style.color = INK; }}
          >
            Areas
          </Link>

          <Link
            href="/faqs"
            style={linkStyle(isActive('/faqs'))}
            onMouseEnter={e => { if (!isActive('/faqs')) e.currentTarget.style.color = INK_HOVER; }}
            onMouseLeave={e => { if (!isActive('/faqs')) e.currentTarget.style.color = INK; }}
          >
            FAQs
          </Link>

          <Link
            href="/about"
            style={linkStyle(isActive('/about'))}
            onMouseEnter={e => { if (!isActive('/about')) e.currentTarget.style.color = INK_HOVER; }}
            onMouseLeave={e => { if (!isActive('/about')) e.currentTarget.style.color = INK; }}
          >
            About
          </Link>
        </div>

        {/* Right CTA + phone */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexShrink: 0 }}>
          <Link
            href="/contact"
            style={{ backgroundColor: COLORS.terracotta, color: COLORS.white, fontFamily: FONTS.sans, fontSize: 13, fontWeight: 600, padding: '10px 22px', borderRadius: 9999, textDecoration: 'none' }}
          >
            Free Consultation
          </Link>
          <a
            href={CONTACT.phoneHref}
            style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: FONTS.sans, fontSize: 13, color: COLORS.espresso, textDecoration: 'none' }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke={COLORS.sage} strokeWidth="1.5">
              <path d="M2 2C2 2 3.5.5 5 .5S7 2 7.5 3.5 6.5 5 6.5 5s.5 1.5 2 3 3 2 3 2 1.5-1 2-1S15 10.5 15 12s-1.5 2-1.5 2C8 18-4 4 2 2z" strokeLinecap="round" />
            </svg>
            {CONTACT.phone}
          </a>
          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}
            aria-label="Menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={COLORS.espresso} strokeWidth="1.8">
              <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 200, backgroundColor: COLORS.white, padding: '24px', overflowY: 'auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 40 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <svg width="24" height="20" viewBox="0 0 28 24" fill="none">
                <path d="M3 16 L10 4 L17 16" stroke={COLORS.terracotta} strokeWidth="2" fill="none" strokeLinejoin="round" />
                <path d="M11 16 L18 4 L25 16" stroke={COLORS.terracotta} strokeWidth="2" fill="none" strokeLinejoin="round" />
              </svg>
              <span style={{ fontFamily: FONTS.sans, fontSize: 13, fontWeight: 600, color: COLORS.espresso, textTransform: 'uppercase', letterSpacing: '0.1em' }}>NWS Custom Homes</span>
            </div>
            <button onClick={() => setMobileOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={COLORS.espresso} strokeWidth="1.8">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

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
                display: 'block', padding: '16px 0',
                fontFamily: FONTS.sans, fontSize: 16,
                color: pathname === link.href ? COLORS.terracotta : COLORS.espresso,
                fontWeight: pathname === link.href ? 600 : 400,
                textDecoration: 'none', borderBottom: '1px solid rgba(154,154,140,0.15)',
              }}
            >
              {link.label}
            </Link>
          ))}

          <a
            href={CONTACT.phoneHref}
            style={{ display: 'block', marginTop: 32, textAlign: 'center', backgroundColor: COLORS.terracotta, color: COLORS.white, fontFamily: FONTS.sans, fontSize: 15, fontWeight: 600, padding: '18px', borderRadius: 9999, textDecoration: 'none' }}
          >
            Call {CONTACT.phone}
          </a>
        </div>
      )}
    </>
  );
}
