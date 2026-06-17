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

const NWS = 'https://www.nws-homes.com/wp-content/uploads/2023/01';

const DEFAULT_BEFORE = `${NWS}/kitchen-gallery-9.jpeg`;
const DEFAULT_AFTER = `${NWS}/kitchen-gallery-7.jpeg`;

interface BeforeAfterSliderProps {
  beforeSrc?: string;
  afterSrc?: string;
}

export default function BeforeAfterSlider({ beforeSrc = DEFAULT_BEFORE, afterSrc = DEFAULT_AFTER }: BeforeAfterSliderProps) {
  useEffect(() => {
    import("img-comparison-slider");
  }, []);

  return (
    <img-comparison-slider value="50" class="w-full h-full block">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        slot="first"
        src={beforeSrc}
        alt="Before remodel"
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        slot="second"
        src={afterSrc}
        alt="After remodel"
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />
      <div slot="handle" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div
          style={{
            width: 52,
            height: 52,
            borderRadius: "50%",
            backgroundColor: "#B5552D",
            border: "2.5px solid white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 20px rgba(0,0,0,0.35)",
          }}
        >
          <svg width="22" height="14" viewBox="0 0 22 14" fill="none">
            <path d="M8 1L2 7L8 13" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 1L20 7L14 13" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </img-comparison-slider>
  );
}
