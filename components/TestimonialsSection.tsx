const testimonials = [
  {
    quote:
      "They handled every hiccup calmly and finished ahead of schedule. The kitchen is beyond what we imagined.",
    name: "Allison C.",
    city: "Richmond, TX",
    initial: "A",
    featured: false,
  },
  {
    quote:
      "From first meeting to final walkthrough, total transparency. Our home is exactly what we dreamed.",
    name: "Michael R.",
    city: "Katy, TX",
    initial: "M",
    featured: true,
  },
  {
    quote:
      "Months after closing they still answered every call. That's not customer service — that's integrity.",
    name: "Sarah T.",
    city: "Sugar Land, TX",
    initial: "S",
    featured: false,
  },
];

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" className="text-terracotta">
      <path d="M8 0L9.8 5.5H15.6L10.9 8.9L12.7 14.5L8 11.1L3.3 14.5L5.1 8.9L0.4 5.5H6.2L8 0Z" fill="currentColor" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-sage">
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1" />
      <text x="8" y="12" textAnchor="middle" fontSize="9" fontWeight="700" fill="currentColor">G</text>
    </svg>
  );
}

function TestimonialCard({
  quote,
  name,
  city,
  initial,
  featured,
}: {
  quote: string;
  name: string;
  city: string;
  initial: string;
  featured?: boolean;
}) {
  return (
    <div
      style={{
        backgroundColor: 'white',
        borderRadius: '24px',
        padding: '32px',
        display: 'flex',
        flexDirection: 'column',
        transform: featured ? 'translateY(-20px)' : 'none',
        boxShadow: featured
          ? '0 24px 64px rgba(43,33,24,0.18)'
          : '0 8px 32px rgba(43,33,24,0.08)',
        outline: featured ? '1px solid rgba(181,85,45,0.25)' : 'none',
        position: 'relative',
        zIndex: featured ? 10 : 1,
      }}
    >
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} />
        ))}
      </div>

      {/* Quote */}
      <p className="font-serif text-base text-espresso italic leading-relaxed mb-6">
        &ldquo;{quote}&rdquo;
      </p>

      {/* Divider */}
      <div className="w-full h-px bg-sage/20 mb-6" />

      {/* Avatar row */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-espresso flex items-center justify-center font-serif text-base text-warm-white">
          {initial}
        </div>
        <div>
          <p className="font-sans text-[13px] text-espresso font-semibold leading-tight">{name}</p>
          <p className="font-sans text-xs text-sage leading-tight">{city}</p>
        </div>
        <div className="ml-auto">
          <GoogleIcon />
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="bg-plaster">
      <div className="px-6 md:px-20 py-16 md:py-24">
        <div className="grid grid-cols-1 xl:grid-cols-[58fr_42fr] gap-8 md:gap-16 items-start">
          {/* LEFT — Testimonials */}
          <div>
            <p className="font-sans text-[11px] text-terracotta uppercase tracking-[0.15em] mb-4">
              WORD TRAVELS
            </p>
            <h2 className="font-serif text-[56px] text-espresso leading-tight mb-12">
              Our Clients Do
              <br />
              the Talking.
            </h2>

            {/* Three testimonial cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <TestimonialCard key={i} {...t} />
              ))}
            </div>
          </div>

          {/* RIGHT — CTA Panel */}
          <div className="bg-espresso rounded-3xl p-8 md:p-12 relative overflow-hidden mt-12 xl:mt-0 xl:sticky xl:top-24">
            {/* Blueprint watermark: simplified house outline */}
            <svg
              className="absolute inset-0 w-[280px] h-auto mx-auto my-auto text-warm-white/5 pointer-events-none"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 20L20 80V180H180V80L100 20Z"
                stroke="currentColor"
                strokeWidth="2"
              />
              <rect
                x="80"
                y="110"
                width="40"
                height="70"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>

            {/* Content */}
            <p className="font-sans text-[11px] text-terracotta uppercase tracking-[0.15em] mb-6 relative z-10">
              FREE CONSULTATION
            </p>
            <h2 className="font-serif text-5xl text-warm-white leading-tight mb-4 relative z-10">
              Let&apos;s Walk Your
              <br />
              Floor Plan.
            </h2>
            <p className="font-sans text-[15px] text-sage mb-10 relative z-10">
              Free on-site consultation — and 5% off when you mention the
              website.
            </p>

            {/* Form (divs, no form tag) */}
            <div className="relative z-10">
              {/* Name input */}
              <div className="border-0 border-b border-white/20 pb-3 mb-8">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="bg-transparent w-full font-sans text-[15px] text-white placeholder:text-[#9A9B8C]/60 outline-none"
                />
              </div>

              {/* Phone input */}
              <div className="border-0 border-b border-white/20 pb-3 mb-8">
                <input
                  type="tel"
                  placeholder="Your Phone"
                  className="bg-transparent w-full font-sans text-[15px] text-white placeholder:text-[#9A9B8C]/60 outline-none"
                />
              </div>

              {/* Service dropdown (static visual) */}
              <div className="border border-warm-white/20 rounded-2xl px-5 py-4 w-full flex justify-between items-center cursor-pointer">
                <span className="font-sans text-sm text-sage">
                  Service Needed
                </span>
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-sage"
                >
                  <path
                    d="M1 1.5L6 6.5L11 1.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Submit button */}
              <div
                className="mt-8 w-full bg-[#B5552D] text-white rounded-full py-5 font-sans text-[15px] font-semibold text-center cursor-pointer hover:brightness-90 transition-all"
              >
                Book My Consultation
              </div>

              {/* Hours line */}
              <p className="mt-6 text-center font-sans text-xs text-sage">
                Mon–Fri 8–6 &nbsp;· &nbsp;Sat 8–12 &nbsp;· &nbsp;Richmond, TX
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
