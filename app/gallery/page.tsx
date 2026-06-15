import { Suspense } from 'react';
import PageHero from '@/components/shared/PageHero';
import CTABanner from '@/components/shared/CTABanner';
import GalleryContent from '@/components/gallery/GalleryContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery | NWS Custom Homes | Before & After',
  description: 'Browse our custom homes, kitchen remodels, bathroom renovations, and whole-home remodels in Greater Houston.',
};

export default function GalleryPage() {
  return (
    <main>
      <PageHero eyebrow="OUR WORK" titleLine1="Our Work" titleLine2="" titleAccent="Speaks." breadcrumb={[{label:'Home',href:'/'},{label:'Gallery',href:'/gallery'}]} />
      <Suspense fallback={<div style={{ height: 200 }} />}>
        <GalleryContent />
      </Suspense>
      <CTABanner heading="Like What You See?" body="Schedule a free consultation and let's talk about your project." primaryLabel="Start Your Project" primaryHref="/contact" />
    </main>
  );
}
