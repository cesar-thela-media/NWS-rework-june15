import { Suspense } from 'react';
import GalleryHero from '@/components/gallery/GalleryHero';
import GalleryContent from '@/components/gallery/GalleryContent';
import FeaturedProject from '@/components/gallery/FeaturedProject';
import CTABanner from '@/components/shared/CTABanner';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery | NWS Custom Homes | Before & After',
  description: 'Browse our custom homes, kitchen remodels, bathroom renovations, and whole-home remodels in Greater Houston.',
};

export default function GalleryPage() {
  return (
    <main>
      <Suspense fallback={<div style={{ height: '62vh', backgroundColor: '#2B2118' }} />}>
        <GalleryHero />
      </Suspense>
      <FeaturedProject />
      <Suspense fallback={<div style={{ height: 200 }} />}>
        <GalleryContent />
      </Suspense>
      <CTABanner
        heading="Like What You See?"
        body="Schedule a free consultation and let's talk about your project."
        primaryLabel="Start Your Project"
        primaryHref="/contact"
      />
    </main>
  );
}
