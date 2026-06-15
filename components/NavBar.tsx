export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 bg-plaster/90 backdrop-blur-sm border-b border-sage/20">
      <div className="flex items-center justify-between h-[72px] px-6 md:px-20">
        {/* Left: Logo + Wordmark */}
        <div className="flex items-center gap-3">
          {/* House logo SVG — two overlapping triangle/roofline shapes */}
          <svg
            width="28"
            height="24"
            viewBox="0 0 28 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-terracotta"
          >
            <path
              d="M14 2L2 12H6V22H22V12H26L14 2Z"
              fill="currentColor"
            />
            <path
              d="M14 6L8 11V18H14V14H16V18H20V11L14 6Z"
              fill="currentColor"
            />
          </svg>
          <span className="font-sans text-[13px] font-semibold text-espresso tracking-[0.12em] uppercase">
            NWS CUSTOM HOMES
          </span>
        </div>

        {/* Center: Nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {["Custom Homes", "Remodeling", "Gallery", "Areas", "About"].map(
            (link) => (
              <a
                key={link}
                href="#"
                className="font-sans text-[13px] text-sage tracking-[0.08em] uppercase hover:text-espresso transition-colors duration-200"
              >
                {link}
              </a>
            )
          )}
        </nav>

        {/* Right: Phone + CTA */}
        <div className="hidden md:flex items-center gap-6">
          {/* Phone link */}
          <a
            href="tel:+12812992309"
            className="flex items-center gap-2 font-sans text-[13px] text-espresso"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-terracotta"
            >
              <path
                d="M2.5 1C2.5 0.723858 2.72386 0.5 3 0.5H4.5C4.77614 0.5 5 0.723858 5 1V2.5C5 2.77614 4.77614 3 4.5 3H3.5L3 3.5V5C3 7.20914 4.79086 9 7 9H8.5L9 8.5V7.5C9 7.22386 9.22386 7 9.5 7H11C11.2761 7 11.5 7.22386 11.5 7.5V9C11.5 9.27614 11.2761 9.5 11 9.5H7C3.41015 9.5 0.5 6.58985 0.5 3V1C0.5 0.723858 0.723858 0.5 1 0.5H2.5V1Z"
                fill="currentColor"
              />
            </svg>
            (281) 299-2309
          </a>

          {/* Free Consultation CTA */}
          <a
            href="#"
            className="font-sans text-[13px] font-semibold text-warm-white bg-terracotta rounded-full px-6 py-3 hover:brightness-90 transition-all"
          >
            Free Consultation
          </a>
        </div>

        {/* Mobile hamburger (static visual) */}
        <button className="md:hidden flex flex-col gap-1 p-2" aria-label="Menu">
          <span className="block w-5 h-[2px] bg-espresso rounded-full" />
          <span className="block w-5 h-[2px] bg-espresso rounded-full" />
          <span className="block w-4 h-[2px] bg-espresso rounded-full" />
        </button>
      </div>
    </header>
  );
}
