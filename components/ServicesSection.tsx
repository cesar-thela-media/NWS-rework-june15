'use client';
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ServiceCardProps {
  image: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  featured?: boolean;
  isMobile?: boolean;
}

function ServiceCard({ image, icon, title, description, href, featured, isMobile }: ServiceCardProps) {
  return (
    <Link
      href={href}
      style={{
        height: isMobile ? "280px" : featured ? "480px" : "420px",
        position: "relative",
        borderRadius: "20px",
        overflow: "hidden",
        display: "block",
        textDecoration: "none",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        ...(featured && !isMobile
          ? {
              transform: "scale(1.04)",
              zIndex: 10,
              outline: "2px solid #B5552D",
              boxShadow: "0 0 0 6px rgba(181,85,45,0.18), 0 24px 64px rgba(0,0,0,0.4)",
            }
          : {
              boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
            }),
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = featured && !isMobile ? "scale(1.07)" : "scale(1.03) translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 16px 48px rgba(0,0,0,0.5)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = featured && !isMobile ? "scale(1.04)" : "scale(1)";
        e.currentTarget.style.boxShadow = featured && !isMobile ? "0 0 0 6px rgba(181,85,45,0.18), 0 24px 64px rgba(0,0,0,0.4)" : "0 8px 32px rgba(0,0,0,0.3)";
      }}
    >
      {featured && (
        <div
          style={{
            position: "absolute", top: 0, left: 0, right: 0, zIndex: 20,
            backgroundColor: "#B5552D", color: "white",
            fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
            fontSize: "10px", fontWeight: 700, textTransform: "uppercase",
            letterSpacing: "0.18em", textAlign: "center", padding: "7px 0",
          }}
        >
          MOST REQUESTED
        </div>
      )}

      <Image
        src={image}
        alt={title}
        fill
        style={{ objectFit: 'cover' }}
        sizes="(max-width: 900px) 100vw, 25vw"
      />

      <div
        style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, rgba(43,33,24,0.95) 0%, rgba(43,33,24,0.75) 28%, rgba(43,33,24,0.25) 55%, rgba(43,33,24,0.0) 80%)",
        }}
      />

      <div
        style={{
          position: "absolute", inset: 0, display: "flex",
          flexDirection: "column", justifyContent: "flex-end",
          padding: isMobile ? "20px" : "28px",
        }}
      >
        <div
          style={{
            width: 36, height: 36, borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.12)", backdropFilter: "blur(4px)",
            display: "flex", alignItems: "center", justifyContent: "center",
            marginBottom: "10px", flexShrink: 0,
          }}
        >
          {icon}
        </div>
        <h3
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: isMobile ? "18px" : "22px",
            color: "white", lineHeight: 1.2, margin: "0 0 6px 0",
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
            fontSize: "13px", color: "#9A9B8C", lineHeight: 1.55,
            margin: isMobile ? "0" : "0 0 14px 0",
            display: isMobile ? "none" : "block",
          }}
        >
          {description}
        </p>
        <span
          style={{
            display: 'inline-block',
            fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
            fontSize: "12px", color: "white", fontWeight: 600,
            backgroundColor: "#B5552D", padding: "8px 16px",
            borderRadius: 9999,
            marginTop: isMobile ? "6px" : "0",
            textDecoration: 'none',
            alignSelf: 'flex-start',
          }}
        >
          Explore
        </span>
      </div>
    </Link>
  );
}

const NWS = 'https://www.nws-homes.com/wp-content/uploads/2023/01';

const services = [
  {
    title: "Custom Home Building",
    description: "Architectural homes built around the way you live.",
    image: `${NWS}/custom-homes-4.jpeg`,
    href: "/services/custom-home-building",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 2L2 8H4V15H14V8H16L9 2Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
        <rect x="7" y="11" width="4" height="4" rx="0.5" stroke="white" strokeWidth="1.5" />
      </svg>
    ),
    featured: false,
  },
  {
    title: "Kitchen Remodeling",
    description: "Beautiful kitchens designed for real life and real Texas families.",
    image: `${NWS}/kitchen-gallery-7.jpeg`,
    href: "/services/kitchen-remodeling",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="4" width="14" height="10" rx="1.5" stroke="white" strokeWidth="1.5" />
        <path d="M2 8H16" stroke="white" strokeWidth="1.5" />
        <circle cx="6" cy="11" r="1" fill="white" />
        <circle cx="9" cy="11" r="1" fill="white" />
        <circle cx="12" cy="11" r="1" fill="white" />
        <path d="M6 4V2M9 4V2M12 4V2" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    featured: true,
  },
  {
    title: "Bathroom & Shower",
    description: "Spa-worthy bathrooms that feel like a retreat.",
    image: `${NWS}/bathroom-gallery-7.jpeg`,
    href: "/services/bathroom-remodeling",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M4 9H14C14 12.3 11.3 15 8 15H10C6.7 15 4 12.3 4 9Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M4 9V5C4 3.9 4.9 3 6 3V3C7.1 3 8 3.9 8 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2 9H16" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7 16H11" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    featured: false,
  },
  {
    title: "Room Additions",
    description: "Seamless additions that add space and value.",
    image: `${NWS}/remodeling-3.jpeg`,
    href: "/services/room-additions",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 3L3 7V15H15V7L9 3Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
        <rect x="7" y="11" width="4" height="4" stroke="white" strokeWidth="1.5" />
        <path d="M15 7H17V15H15" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    featured: false,
  },
];

const stats = [
  { value: "500+", label: "Projects" },
  { value: "19", label: "Years" },
  { value: "9", label: "Cities Served" },
  { value: "4.9★", label: "Average" },
];

export default function ServicesSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 900);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <>
      <section style={{ backgroundColor: "#2B2118", overflow: "hidden" }}>
        <div style={{ padding: isMobile ? "56px 24px 64px" : "80px 80px 96px" }}>

          {/* Header */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "3fr 2fr",
              gap: isMobile ? "16px" : "64px",
              alignItems: "start",
              marginBottom: isMobile ? "36px" : "56px",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                  fontSize: "11px", color: "#B5552D", textTransform: "uppercase",
                  letterSpacing: "0.15em", marginBottom: "16px",
                }}
              >
                WHAT WE BUILD
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: isMobile ? "36px" : "clamp(40px, 3.1vw, 52px)",
                  color: "white", lineHeight: 1.05, margin: 0,
                }}
              >
                One Team. Every Trade.
                <br />
                Zero Chaos.
              </h2>
            </div>
            <div style={{ paddingTop: isMobile ? 0 : "64px", paddingLeft: isMobile ? 0 : "24px" }}>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                  fontSize: "15px", color: "#9A9B8C", lineHeight: 1.7,
                  maxWidth: "400px", margin: 0,
                }}
              >
                From first sketch to final walkthrough, one accountable crew handles
                design, permits, and construction.
              </p>
            </div>
          </div>

          {/* Cards grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
              gap: isMobile ? "12px" : "20px",
              alignItems: "end",
            }}
          >
            {services.map((service, i) => (
              <ServiceCard key={i} {...service} isMobile={isMobile} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section
        style={{
          background: "linear-gradient(180deg, #7B5C3A 0%, #6B4A28 25%, #8B6840 50%, #5A3C22 75%, #6B4A28 100%)",
          position: "relative", overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute", inset: 0,
            backgroundImage: "repeating-linear-gradient(90deg, transparent 0px, transparent 60px, rgba(0,0,0,0.04) 60px, rgba(0,0,0,0.04) 62px), repeating-linear-gradient(180deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 8px)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
            padding: isMobile ? "40px 24px" : "48px 80px",
            position: "relative", zIndex: 1,
            rowGap: isMobile ? "32px" : 0,
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              style={{
                display: "flex", flexDirection: "column", alignItems: "center",
                borderLeft: isMobile ? (i % 2 === 1 ? "1px solid rgba(255,255,255,0.2)" : "none") : (i > 0 ? "1px solid rgba(255,255,255,0.2)" : "none"),
                padding: "0 16px",
              }}
            >
              <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: isMobile ? "44px" : "clamp(48px, 4vw, 64px)", color: "white", lineHeight: 1 }}>
                {stat.value}
              </span>
              <span style={{ fontFamily: "var(--font-dm-sans), system-ui, sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "0.14em", marginTop: "10px" }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
