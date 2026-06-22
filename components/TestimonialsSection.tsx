'use client';
import Link from "next/link";
import { useEffect, useState } from "react";

const testimonials = [
  {
    quote: "They handled every hiccup calmly and finished ahead of schedule. The kitchen is beyond what we imagined.",
    name: "Allison C.", city: "Richmond, TX", initial: "A", featured: false,
  },
  {
    quote: "From first meeting to final walkthrough, total transparency. Our home is exactly what we dreamed.",
    name: "Michael R.", city: "Katy, TX", initial: "M", featured: true,
  },
  {
    quote: "Months after closing they still answered every call. That's not customer service. That's integrity.",
    name: "Sarah T.", city: "Sugar Land, TX", initial: "S", featured: false,
  },
];

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14">
      <path d="M7 0L8.6 4.8H13.7L9.6 7.8L11.1 12.7L7 9.7L2.9 12.7L4.4 7.8L0.3 4.8H5.4L7 0Z" fill="#B5552D" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

function TestimonialCard({ quote, name, city, initial, featured, isMobile }: {
  quote: string; name: string; city: string; initial: string; featured?: boolean; isMobile?: boolean;
}) {
  return (
    <div
      style={{
        backgroundColor: "white", borderRadius: "20px", padding: "32px 28px",
        display: "flex", flexDirection: "column",
        transform: (featured && !isMobile) ? "translateY(-16px)" : "none",
        boxShadow: featured ? "0 24px 64px rgba(43,33,24,0.16)" : "0 4px 24px rgba(43,33,24,0.07)",
        outline: featured ? "1px solid rgba(181,85,45,0.2)" : "none",
        position: "relative", zIndex: featured ? 10 : 1,
      }}
    >
      <div style={{ display: "flex", gap: "3px", marginBottom: "14px" }}>
        {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
      </div>
      <p
        style={{
          fontFamily: "var(--font-playfair), Georgia, serif",
          fontSize: "14px", color: "#2B2118", fontStyle: "italic",
          lineHeight: 1.65, marginBottom: "18px", flex: 1,
        }}
      >
        &ldquo;{quote}&rdquo;
      </p>
      <div style={{ width: "100%", height: 1, backgroundColor: "rgba(154,154,140,0.2)", marginBottom: "16px" }} />
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div
          style={{
            width: 36, height: 36, borderRadius: "50%", backgroundColor: "#E8E2D9",
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0, overflow: 'hidden',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="7" r="4" stroke="#2B2118" strokeWidth="1.5"/>
            <path d="M3 18c0-3.3 3.1-6 7-6s7 2.7 7 6" stroke="#2B2118" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
        <div style={{ flex: 1 }}>
          <p style={{ fontFamily: "var(--font-dm-sans), system-ui, sans-serif", fontSize: "13px", color: "#2B2118", fontWeight: 600, lineHeight: 1.3, margin: 0 }}>{name}</p>
          <p style={{ fontFamily: "var(--font-dm-sans), system-ui, sans-serif", fontSize: "12px", color: "#9A9B8C", lineHeight: 1.3, margin: 0 }}>{city}</p>
        </div>
        <a href="https://g.page/r/CRyZ8e5jvBiVEBM/review" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex' }}>
          <GoogleIcon />
        </a>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 900);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <section style={{ backgroundColor: "#F7F4EF" }}>
      <div style={{ padding: isMobile ? "56px 24px" : "96px 80px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "58fr 42fr",
            gap: isMobile ? "48px" : "64px",
            alignItems: "start",
          }}
        >
          {/* LEFT — Testimonials */}
          <div>
            <p style={{ fontFamily: "var(--font-dm-sans), system-ui, sans-serif", fontSize: "11px", color: "#B5552D", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "16px" }}>
              WORD TRAVELS
            </p>
            <h2
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: isMobile ? "36px" : "clamp(40px, 3.5vw, 56px)",
                color: "#2B2118", lineHeight: 1.1,
                marginBottom: isMobile ? "32px" : "48px",
              }}
            >
              Our Clients Do
              <br />
              the Talking.
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
                gap: "16px",
              }}
            >
              {testimonials.map((t, i) => (
                <TestimonialCard key={i} {...t} isMobile={isMobile} />
              ))}
            </div>
          </div>

          {/* RIGHT — CTA Panel */}
          <div
            style={{
              backgroundColor: "#2B2118", borderRadius: "24px",
              padding: isMobile ? "32px 24px" : "48px 40px",
              position: "relative", overflow: "hidden",
            }}
          >

            <h2
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: isMobile ? "30px" : "clamp(32px, 3vw, 44px)",
                color: "white", lineHeight: 1.15, marginBottom: "16px",
                position: "relative", zIndex: 1,
              }}
            >
              Let&apos;s Walk Your
              <br />
              Floor Plan.
            </h2>
            <p
              style={{
                fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                fontSize: "14px", color: "#9A9B8C", lineHeight: 1.6,
                marginBottom: "32px", position: "relative", zIndex: 1,
              }}
            >
              Free on-site consultation, and 5% off when you mention the website.
            </p>

            <form action="/contact" method="GET" style={{ position: "relative", zIndex: 1 }}>
              <div style={{ borderBottom: "1px solid rgba(255,255,255,0.2)", paddingBottom: "12px", marginBottom: "24px" }}>
                <input
                  type="text" name="name" placeholder="Name"
                  style={{ background: "transparent", width: "100%", fontFamily: "var(--font-dm-sans), system-ui, sans-serif", fontSize: "14px", color: "white", border: "none", outline: "none" }}
                />
              </div>
              <div style={{ borderBottom: "1px solid rgba(255,255,255,0.2)", paddingBottom: "12px", marginBottom: "24px" }}>
                <input
                  type="tel" name="phone" placeholder="Phone"
                  style={{ background: "transparent", width: "100%", fontFamily: "var(--font-dm-sans), system-ui, sans-serif", fontSize: "14px", color: "white", border: "none", outline: "none" }}
                />
              </div>
              <div style={{ position: "relative", marginBottom: "24px" }}>
                <select
                  name="service" defaultValue=""
                  style={{ width: "100%", background: "transparent", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "14px 18px", fontFamily: "var(--font-dm-sans), system-ui, sans-serif", fontSize: "14px", color: "#9A9B8C", cursor: "pointer", appearance: "none", outline: "none" }}
                >
                  <option value="" disabled>Service Needed</option>
                  <option value="custom-home-building">Custom Home Building</option>
                  <option value="kitchen-remodeling">Kitchen Remodeling</option>
                  <option value="bathroom-remodeling">Bathroom Remodeling</option>
                  <option value="whole-home-remodeling">Whole Home Remodeling</option>
                  <option value="room-additions">Room Additions</option>
                  <option value="shower-remodel">Shower Remodel</option>
                  <option value="bathtub-remodel">Bathtub Remodel</option>
                  <option value="basement-remodeling">Basement Finishing</option>
                  <option value="garage-conversions">Garage Conversions</option>
                  <option value="open-concept">Open Concept</option>
                </select>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" style={{ position: "absolute", right: 18, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}>
                  <path d="M1 1.5L6 6.5L11 1.5" stroke="#9A9B8C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <Link
                href="/contact"
                style={{
                  display: "block", width: "100%", backgroundColor: "#B5552D", color: "white",
                  borderRadius: "9999px", padding: "18px 0",
                  fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                  fontSize: "15px", fontWeight: 600, textAlign: "center",
                  cursor: "pointer", textDecoration: "none", marginBottom: "20px",
                }}
              >
                Book My Consultation
              </Link>
              <p style={{ textAlign: "center", fontFamily: "var(--font-dm-sans), system-ui, sans-serif", fontSize: "12px", color: "#9A9B8C" }}>
                Mon–Fri 8–6 &nbsp;·&nbsp; Sat 8–12 &nbsp;·&nbsp; Richmond, TX
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
