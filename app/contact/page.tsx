import ContactForm from '@/components/contact/ContactForm';
import { COLORS, FONTS, CONTACT } from '@/lib/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact NWS Custom Homes | Free Consultation',
  description: 'Get a free consultation with NWS Custom Homes. Call (281) 299-2309 or fill out our form. 5% off when you mention the website.',
};

const NWS = 'https://www.nws-homes.com/wp-content/uploads/2023/01';

export default function ContactPage() {
  return (
    <main>
      {/* ── Hero: full-bleed espresso with floating form card + ambient photo ── */}
      <section
        style={{
          backgroundColor: COLORS.espresso,
          minHeight: '100vh',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Blueprint watermark */}
        <svg
          style={{ position: 'absolute', top: 60, left: 60, width: 220, height: 220, opacity: 0.04, pointerEvents: 'none', zIndex: 0 }}
          viewBox="0 0 220 220" fill="none"
        >
          <path d="M110 18L18 85V202H202V85L110 18Z" stroke="white" strokeWidth="1.5" />
          <rect x="88" y="130" width="44" height="72" stroke="white" strokeWidth="1" />
          <line x1="18" y1="130" x2="88" y2="130" stroke="white" strokeWidth="0.5" strokeDasharray="4 6" />
          <line x1="202" y1="130" x2="132" y2="130" stroke="white" strokeWidth="0.5" strokeDasharray="4 6" />
        </svg>

        {/* LEFT — form panel */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '80px 64px 80px 80px',
          }}
        >
          {/* Breadcrumb */}
          <p style={{ fontFamily: FONTS.sans, fontSize: 11, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 40 }}>
            Home / Contact
          </p>

          {/* Heading */}
          <h1
            style={{
              fontFamily: FONTS.serif,
              fontSize: 'clamp(40px, 3.5vw, 58px)',
              color: COLORS.white,
              lineHeight: 1.05,
              margin: '0 0 12px 0',
            }}
          >
            Let&apos;s Build{' '}
            <span style={{ fontStyle: 'italic', color: COLORS.terracotta }}>Together.</span>
          </h1>
          <p style={{ fontFamily: FONTS.sans, fontSize: 15, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, maxWidth: 400, margin: '0 0 48px 0' }}>
            Free consultation. No commitment. Just a conversation about your home.
          </p>

          {/* Floating form card */}
          <div
            style={{
              backgroundColor: COLORS.plaster,
              borderRadius: 24,
              padding: '44px 48px',
              boxShadow: '0 32px 80px rgba(0,0,0,0.45)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Subtle corner accent */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 3,
                background: `linear-gradient(90deg, ${COLORS.terracotta} 0%, rgba(181,85,45,0.3) 100%)`,
                borderRadius: '24px 24px 0 0',
              }}
            />
            <h2
              style={{
                fontFamily: FONTS.serif,
                fontSize: 24,
                color: COLORS.espresso,
                margin: '0 0 32px 0',
              }}
            >
              Send Us a Message
            </h2>
            <ContactForm />
            <p style={{ fontFamily: FONTS.sans, fontSize: 12, color: COLORS.sage, marginTop: 20, lineHeight: 1.5 }}>
              Mention this website and get <strong style={{ color: COLORS.terracotta }}>5% off</strong> your project.
            </p>
          </div>
        </div>

        {/* RIGHT — ambient photo + contact details */}
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${NWS}/kitchen-gallery-7.jpeg`}
            alt="NWS remodeled kitchen"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          {/* Gradient so contact details are readable */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(43,33,24,0.97) 0%, rgba(43,33,24,0.7) 40%, rgba(43,33,24,0.2) 70%, transparent 100%)',
            }}
          />

          {/* Contact detail cards anchored to bottom */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '0 48px 56px',
              zIndex: 1,
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {/* Phone */}
              <div style={{ padding: '28px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <p style={{ fontFamily: FONTS.sans, fontSize: 10, color: COLORS.terracotta, textTransform: 'uppercase', letterSpacing: '0.18em', margin: '0 0 8px 0' }}>
                  Call Us
                </p>
                <a href={CONTACT.phoneHref} style={{ fontFamily: FONTS.serif, fontSize: 28, color: COLORS.white, textDecoration: 'none', display: 'block', marginBottom: 4 }}>
                  {CONTACT.phone}
                </a>
                <p style={{ fontFamily: FONTS.sans, fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: 0 }}>
                  {CONTACT.hours.weekday} &nbsp;·&nbsp; {CONTACT.hours.saturday}
                </p>
              </div>
              {/* Email */}
              <div style={{ padding: '28px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <p style={{ fontFamily: FONTS.sans, fontSize: 10, color: COLORS.terracotta, textTransform: 'uppercase', letterSpacing: '0.18em', margin: '0 0 8px 0' }}>
                  Email
                </p>
                <a href={`mailto:${CONTACT.email}`} style={{ fontFamily: FONTS.sans, fontSize: 16, color: COLORS.white, textDecoration: 'none' }}>
                  {CONTACT.email}
                </a>
              </div>
              {/* Location */}
              <div style={{ paddingTop: 28 }}>
                <p style={{ fontFamily: FONTS.sans, fontSize: 10, color: COLORS.terracotta, textTransform: 'uppercase', letterSpacing: '0.18em', margin: '0 0 8px 0' }}>
                  Location
                </p>
                <p style={{ fontFamily: FONTS.sans, fontSize: 16, color: COLORS.white, margin: 0 }}>
                  {CONTACT.address} — serving all of Fort Bend County
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
