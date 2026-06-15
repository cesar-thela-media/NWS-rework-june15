'use client';
import Link from 'next/link';
import { COLORS, FONTS, CONTACT } from '@/lib/constants';

const serviceLinks = [
  { label: 'Custom Home Building', href: '/services/custom-home-building' },
  { label: 'Kitchen Remodeling', href: '/services/kitchen-remodeling' },
  { label: 'Bathroom Remodeling', href: '/services/bathroom-remodeling' },
  { label: 'Whole Home Remodeling', href: '/services/whole-home-remodeling' },
  { label: 'Shower Remodel', href: '/services/shower-remodel' },
  { label: 'Bathtub Remodel', href: '/services/bathtub-remodel' },
  { label: 'Room Additions', href: '/services/room-additions' },
  { label: 'View All Services →', href: '/services' },
];

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Areas We Serve', href: '/areas' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'Contact', href: '/contact' },
];

const colHead: React.CSSProperties = { fontFamily: FONTS.sans, fontSize: 11, color: COLORS.terracotta, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 20 };
const footLink: React.CSSProperties = { display: 'block', fontFamily: FONTS.sans, fontSize: 13, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', marginBottom: 10, transition: 'color 0.15s' };

export default function Footer() {
  return (
    <footer style={{ backgroundColor: COLORS.espresso, borderTop: `2px solid ${COLORS.terracotta}`, padding: '64px 80px 0', position: 'relative', overflow: 'hidden' }}>
      <span style={{ position: 'absolute', bottom: -40, right: -20, fontFamily: FONTS.serif, fontSize: 220, color: 'rgba(255,255,255,0.04)', lineHeight: 1, pointerEvents: 'none', userSelect: 'none' }}>N</span>
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 0.8fr 1fr', gap: 48, marginBottom: 48 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <svg width="28" height="24" viewBox="0 0 28 24" fill="none"><path d="M3 16 L10 4 L17 16" stroke={COLORS.terracotta} strokeWidth="2" fill="none" strokeLinejoin="round"/><path d="M11 16 L18 4 L25 16" stroke={COLORS.terracotta} strokeWidth="2" fill="none" strokeLinejoin="round"/></svg>
            <span style={{ fontFamily: FONTS.sans, fontSize: 12, fontWeight: 600, color: COLORS.white, textTransform: 'uppercase', letterSpacing: '0.1em' }}>NWS Custom Homes</span>
          </div>
          <p style={{ fontFamily: FONTS.sans, fontSize: 14, color: COLORS.sage, lineHeight: 1.6, maxWidth: 240 }}>Building and remodeling homes across Richmond, Katy & Sugar Land since 2007.</p>
          <div style={{ display: 'flex', gap: 16, marginTop: 24 }}>
            {[
              { href: 'https://www.facebook.com/NWSHomes/', label: 'Facebook', path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
              { href: 'https://www.instagram.com/nwshomes/', label: 'Instagram', path: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01 M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2z' },
            ].map(social => (
              <a key={social.href} href={social.href} target="_blank" rel="noopener" aria-label={social.label}
                style={{ color: 'rgba(255,255,255,0.4)', transition: 'color 0.15s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.9)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={social.path}/></svg>
              </a>
            ))}
          </div>
        </div>
        <div>
          <p style={colHead}>Services</p>
          {serviceLinks.map(link => <Link key={link.href} href={link.href} style={footLink}
            onMouseEnter={e => (e.currentTarget.style.color = COLORS.white)}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}>{link.label}</Link>)}
        </div>
        <div>
          <p style={colHead}>Quick Links</p>
          {quickLinks.map(link => <Link key={link.href} href={link.href} style={footLink}
            onMouseEnter={e => (e.currentTarget.style.color = COLORS.white)}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}>{link.label}</Link>)}
        </div>
        <div>
          <p style={colHead}>Get in Touch</p>
          <a href={CONTACT.phoneHref} style={{ ...footLink, marginBottom: 8 }}>Office: {CONTACT.phone}</a>
          <a href={CONTACT.phoneMobileHref} style={{ ...footLink, marginBottom: 8 }}>Mobile: {CONTACT.phoneMobile}</a>
          <a href={`mailto:${CONTACT.email}`} style={{ ...footLink, marginBottom: 24 }}>{CONTACT.email}</a>
          <p style={{ fontFamily: FONTS.sans, fontSize: 11, color: COLORS.terracotta, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>Hours</p>
          <p style={{ fontFamily: FONTS.sans, fontSize: 13, color: COLORS.sage, lineHeight: 1.8 }}>{CONTACT.hours.weekday}<br/>{CONTACT.hours.saturday}<br/>{CONTACT.hours.sunday}</p>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: '24px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p style={{ fontFamily: FONTS.sans, fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>© 2026 NWS Custom Homes and Remodeling. All Rights Reserved.</p>
        <div style={{ display: 'flex', gap: 24 }}>
          <Link href="/privacy" style={{ fontFamily: FONTS.sans, fontSize: 12, color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Privacy Policy</Link>
          <Link href="/sitemap.xml" style={{ fontFamily: FONTS.sans, fontSize: 12, color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Sitemap</Link>
        </div>
      </div>
    </footer>
  );
}
