'use client';
import Link from 'next/link';
import { COLORS, FONTS, CONTACT } from '@/lib/constants';
import { services } from '@/data/services';

const col1Services = services.slice(0, 5);
const col2Services = services.slice(5);

export default function Footer() {
  return (
    <footer style={{ backgroundColor: COLORS.espresso, borderTop: '1px solid rgba(255,255,255,0.07)' }}>
      {/* 3-col main body */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr',
          gap: 64,
          padding: '72px 80px 56px',
        }}
      >
        {/* ── Col 1: Brand ── */}
        <div>
          {/* Logo */}
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none', marginBottom: 16 }}>
            <svg width="28" height="24" viewBox="0 0 28 24" fill="none">
              <path d="M3 16 L10 4 L17 16" stroke={COLORS.terracotta} strokeWidth="2" fill="none" strokeLinejoin="round" />
              <path d="M11 16 L18 4 L25 16" stroke={COLORS.terracotta} strokeWidth="2" fill="none" strokeLinejoin="round" />
            </svg>
            <span style={{ fontFamily: FONTS.sans, fontSize: 13, fontWeight: 700, color: COLORS.white, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              NWS Custom Homes
            </span>
          </Link>

          <p style={{ fontFamily: FONTS.sans, fontSize: 14, color: COLORS.sage, lineHeight: 1.65, maxWidth: 300, margin: '0 0 28px 0' }}>
            Building Fort Bend County since 2007. Full-service custom home construction and remodeling — one crew, every trade, zero chaos.
          </p>

          {/* Google rating badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              backgroundColor: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 12,
              padding: '10px 16px',
              marginBottom: 28,
            }}
          >
            <div style={{ display: 'flex', gap: 2 }}>
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="13" height="13" viewBox="0 0 13 13" fill={COLORS.terracotta}><path d="M6.5 1l1.3 3.7H11L8.3 6.8l1.1 3.7L6.5 8.3 3.6 10.5l1.1-3.7L2 4.7h3.2z"/></svg>
              ))}
            </div>
            <span style={{ fontFamily: FONTS.sans, fontSize: 13, color: COLORS.white, fontWeight: 600 }}>4.9</span>
            <span style={{ fontFamily: FONTS.sans, fontSize: 12, color: COLORS.sage }}>Google Reviews</span>
            <a
              href="https://g.page/r/CRyZ8e5jvBiVEBM/review"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: FONTS.sans, fontSize: 12, color: COLORS.terracotta, textDecoration: 'none', fontWeight: 600 }}
            >
              See Reviews →
            </a>
          </div>

          {/* Social links */}
          <div style={{ display: 'flex', gap: 12 }}>
            {[
              { label: 'Facebook', href: 'https://www.facebook.com/NWSCustomHomesAndRemodeling', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
              { label: 'Google', href: 'https://g.page/r/CRyZ8e5jvBiVEBM', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"/></svg> },
            ].map(social => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                style={{ width: 36, height: 36, borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'all 0.15s' }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = COLORS.white; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* ── Col 2: Services ── */}
        <div>
          <p style={{ fontFamily: FONTS.sans, fontSize: 10, color: COLORS.terracotta, textTransform: 'uppercase', letterSpacing: '0.22em', marginBottom: 20, fontWeight: 700 }}>
            Services
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 16px' }}>
            {[...col1Services, ...col2Services].map(svc => (
              <Link
                key={svc.slug}
                href={`/services/${svc.slug}`}
                style={{ fontFamily: FONTS.sans, fontSize: 13, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', padding: '6px 0', lineHeight: 1.3, transition: 'color 0.15s' }}
                onMouseEnter={e => { e.currentTarget.style.color = COLORS.white; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; }}
              >
                {svc.navLabel}
              </Link>
            ))}
          </div>
          <div style={{ marginTop: 20, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.07)' }}>
            <Link
              href="/services"
              style={{ fontFamily: FONTS.sans, fontSize: 13, color: COLORS.terracotta, textDecoration: 'none', fontWeight: 600 }}
            >
              View All Services →
            </Link>
          </div>
        </div>

        {/* ── Col 3: Contact ── */}
        <div>
          <p style={{ fontFamily: FONTS.sans, fontSize: 10, color: COLORS.terracotta, textTransform: 'uppercase', letterSpacing: '0.22em', marginBottom: 20, fontWeight: 700 }}>
            Get In Touch
          </p>

          {/* Phone */}
          <div style={{ marginBottom: 20 }}>
            <p style={{ fontFamily: FONTS.sans, fontSize: 11, color: COLORS.sage, textTransform: 'uppercase', letterSpacing: '0.12em', margin: '0 0 6px 0' }}>Office</p>
            <a href={CONTACT.phoneHref} style={{ fontFamily: FONTS.serif, fontSize: 22, color: COLORS.white, textDecoration: 'none', display: 'block', lineHeight: 1 }}>
              {CONTACT.phone}
            </a>
          </div>

          {/* Mobile */}
          <div style={{ marginBottom: 20 }}>
            <p style={{ fontFamily: FONTS.sans, fontSize: 11, color: COLORS.sage, textTransform: 'uppercase', letterSpacing: '0.12em', margin: '0 0 6px 0' }}>Mobile</p>
            <a href={CONTACT.phoneMobileHref} style={{ fontFamily: FONTS.sans, fontSize: 14, color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>
              {CONTACT.phoneMobile}
            </a>
          </div>

          {/* Email */}
          <div style={{ marginBottom: 20 }}>
            <p style={{ fontFamily: FONTS.sans, fontSize: 11, color: COLORS.sage, textTransform: 'uppercase', letterSpacing: '0.12em', margin: '0 0 6px 0' }}>Email</p>
            <a href={`mailto:${CONTACT.email}`} style={{ fontFamily: FONTS.sans, fontSize: 14, color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>
              {CONTACT.email}
            </a>
          </div>

          {/* Hours */}
          <div style={{ marginBottom: 28 }}>
            <p style={{ fontFamily: FONTS.sans, fontSize: 11, color: COLORS.sage, textTransform: 'uppercase', letterSpacing: '0.12em', margin: '0 0 6px 0' }}>Hours</p>
            <p style={{ fontFamily: FONTS.sans, fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: '0 0 2px 0' }}>{CONTACT.hours.weekday}</p>
            <p style={{ fontFamily: FONTS.sans, fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: 0 }}>{CONTACT.hours.saturday}</p>
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            style={{ display: 'block', textAlign: 'center', backgroundColor: COLORS.terracotta, color: COLORS.white, fontFamily: FONTS.sans, fontSize: 13, fontWeight: 600, padding: '13px 0', borderRadius: 9999, textDecoration: 'none' }}
          >
            Free Consultation →
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: '1px solid rgba(255,255,255,0.07)',
          padding: '20px 80px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <p style={{ fontFamily: FONTS.sans, fontSize: 12, color: 'rgba(255,255,255,0.3)', margin: 0 }}>
          ©2026 NWS Custom Homes and Remodeling. All Rights Reserved. · Richmond, TX
        </p>
        <nav style={{ display: 'flex', gap: 24 }}>
          {[{ label: 'Gallery', href: '/gallery' }, { label: 'Areas We Serve', href: '/areas' }, { label: 'FAQs', href: '/faqs' }, { label: 'About', href: '/about' }].map(link => (
            <Link key={link.href} href={link.href} style={{ fontFamily: FONTS.sans, fontSize: 12, color: 'rgba(255,255,255,0.35)', textDecoration: 'none', transition: 'color 0.15s' }}
              onMouseEnter={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.35)'; }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
