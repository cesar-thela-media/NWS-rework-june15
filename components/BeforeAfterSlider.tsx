"use client";

import { useEffect } from "react";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "img-comparison-slider": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          value?: string | number;
          class?: string;
        },
        HTMLElement
      >;
    }
  }
}

export default function BeforeAfterSlider() {
  useEffect(() => {
    import("img-comparison-slider");
  }, []);

  return (
    <div className="relative rounded-3xl overflow-hidden h-[520px]">
      <img-comparison-slider class="w-full h-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          slot="first"
          src="/images/kitchen-before.jpg"
          alt="Before remodel"
          className="w-full h-full object-cover"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          slot="second"
          src="/images/kitchen-after.jpg"
          alt="After remodel"
          className="w-full h-full object-cover"
        />
        <div slot="handle" className="flex items-center justify-center">
          <div className="w-[52px] h-[52px] rounded-full bg-[#B5552D] border-2 border-white flex items-center justify-center shadow-xl">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              className="text-white"
            >
              <path
                d="M14 9H4M4 9L7 6M4 9L7 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </img-comparison-slider>

      {/* BEFORE chip */}
      <div className="absolute top-4 left-4 bg-[#2B2118]/80 backdrop-blur-sm text-white font-sans text-[11px] uppercase tracking-widest px-3 py-1.5 rounded-full">
        BEFORE
      </div>

      {/* AFTER chip */}
      <div className="absolute top-4 right-4 bg-[#B5552D] text-white font-sans text-[11px] uppercase tracking-widest px-3 py-1.5 rounded-full">
        AFTER
      </div>

      {/* Caption card */}
      <div className="absolute bottom-4 left-4 bg-white rounded-2xl px-5 py-4 shadow-xl max-w-[260px]">
        <p className="font-serif text-[13px] font-semibold text-[#2B2118]">
          Whole-Home Remodel —
        </p>
        <p className="font-sans text-[13px] text-[#9A9B8C]">
          Cinco Ranch, TX · Completed in 14 weeks
        </p>
      </div>
    </div>
  );
}
