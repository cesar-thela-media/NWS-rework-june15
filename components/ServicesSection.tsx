import Image from "next/image";

interface ServiceCardProps {
  image: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  featured?: boolean;
}

function ServiceCard({ image, icon, title, description, featured }: ServiceCardProps) {
  return (
    <div
      style={{
        height: featured ? '460px' : '420px',
        position: 'relative',
        borderRadius: '24px',
        overflow: 'hidden',
        ...(featured ? {
          transform: 'scale(1.03)',
          zIndex: 10,
          outline: '2px solid #B5552D',
          boxShadow: '0 0 0 6px rgba(181,85,45,0.18)',
        } : {}),
      }}
    >
      {/* Terracotta top border */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-terracotta z-10" />

      {/* MOST REQUESTED tag */}
      {featured && (
        <div className="absolute top-3 right-3 bg-[#B5552D] text-white font-sans text-[10px] font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full z-10">
          MOST REQUESTED
        </div>
      )}

      {/* Photo */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 33vw"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-espresso from-10% via-[#2B2118]/70 via-50% to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-8">
        {/* Icon chip */}
        <div className="w-10 h-10 rounded-full bg-warm-white/10 backdrop-blur flex items-center justify-center">
          {icon}
        </div>

        <h3 className="font-serif text-2xl text-warm-white mt-4">{title}</h3>
        <p className="font-sans text-sm text-sage mt-2 leading-relaxed">
          {description}
        </p>
        <a
          href="#"
          className="font-sans text-[13px] text-terracotta font-semibold mt-4 inline-block"
        >
          Explore →
        </a>
      </div>
    </div>
  );
}

const services = [
  {
    title: "Custom Home Building",
    description:
      "Architectural homes built around the way you live.",
    image: "/images/service-homes.jpg",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-warm-white">
        <path d="M8 1L1 7H3V14H13V7H15L8 1Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <rect x="6" y="10" width="4" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    featured: false,
  },
  {
    title: "Kitchen Remodeling",
    description:
      "Beautiful kitchens designed for real life and real Texas families.",
    image: "/images/service-kitchen.jpg",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-warm-white">
        <path d="M2 4H4L6 2H10L12 4H14V13H2V4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <line x1="8" y1="6" x2="8" y2="11" stroke="currentColor" strokeWidth="1.5" />
        <line x1="5" y1="8.5" x2="11" y2="8.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    featured: true,
  },
  {
    title: "Bathroom & Shower",
    description:
      "Spa-worthy bathrooms that feel like a retreat.",
    image: "/images/service-bath.jpg",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-warm-white">
        <rect x="2" y="3" width="12" height="9" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 3V2C4 1.4 4.4 1 5 1H11C11.6 1 12 1.4 12 2V3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="8" cy="7.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    featured: false,
  },
  {
    title: "Room Additions",
    description:
      "Seamless additions that add space and value.",
    image: "/images/service-additions.jpg",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-warm-white">
        <rect x="1" y="4" width="14" height="10" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 4V2H7V4" stroke="currentColor" strokeWidth="1.5" />
        <rect x="9" y="1" width="4" height="3" rx="0.5" stroke="currentColor" strokeWidth="1.5" />
        <line x1="11" y1="1" x2="11" y2="4" stroke="currentColor" strokeWidth="1.5" />
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
  return (
    <section className="bg-espresso overflow-hidden">
      <div className="px-6 md:px-20 py-16 md:py-24">
        {/* Header row */}
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_1fr] gap-8 md:gap-16 items-start mb-12 md:mb-16">
          {/* LEFT */}
          <div>
            <p className="font-sans text-[11px] text-terracotta uppercase tracking-[0.15em] mb-4">
              WHAT WE BUILD
            </p>
            <h2 style={{
              fontFamily: 'var(--font-playfair), Georgia, serif',
              fontSize: 'clamp(48px, 4vw, 72px)',
              color: 'white',
              lineHeight: '1.05'
            }}>
              One Team. Every Trade.<br />Zero Chaos.
            </h2>
          </div>
          {/* RIGHT */}
          <div className="pt-4 md:pt-16">
            <p className="font-sans text-base text-sage max-w-[400px] leading-relaxed">
              From first sketch to final walkthrough, one accountable crew
              handles design, permits, and construction.
            </p>
          </div>
        </div>

        {/* Cards grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', alignItems: 'end' }}>
          {services.map((service, i) => (
            <ServiceCard key={i} {...service} />
          ))}
        </div>

        {/* Wood texture strip */}
        <div
          className="w-full h-[10px] mt-0"
          style={{
            background:
              "linear-gradient(90deg, #7B5C3A 0%, #5A3E25 50%, #7B5C3A 100%)",
          }}
        />

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 py-8 md:py-12 border-t border-white/10">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`flex flex-col items-center ${
                i > 0 ? "border-l border-white/10" : ""
              }`}
            >
              <span className="font-serif text-[48px] md:text-[64px] text-white leading-none">
                {stat.value}
              </span>
              <span className="font-sans text-[11px] text-[#9A9B8C] uppercase tracking-widest mt-2">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
