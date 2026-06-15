import Link from 'next/link';
import { COLORS, FONTS } from '@/lib/constants';

export default function NotFound() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: COLORS.plaster, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 40px', textAlign: 'center' }}>
      <div style={{ maxWidth: 480 }}>
        <p style={{ fontFamily: FONTS.serif, fontSize: 96, color: 'rgba(43,33,24,0.08)', lineHeight: 1, marginBottom: 0 }}>404</p>
        <p style={{ fontFamily: FONTS.sans, fontSize: 11, color: COLORS.terracotta, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 16 }}>PAGE NOT FOUND</p>
        <h1 style={{ fontFamily: FONTS.serif, fontSize: 'clamp(32px, 4vw, 48px)', color: COLORS.espresso, marginBottom: 20 }}>
          This page doesn&apos;t <span style={{ fontStyle: 'italic', color: COLORS.terracotta }}>exist.</span>
        </h1>
        <p style={{ fontFamily: FONTS.sans, fontSize: 16, color: COLORS.sage, marginBottom: 40, lineHeight: 1.6 }}>The page you&apos;re looking for has moved or never existed. Let&apos;s get you back on track.</p>
        <Link href="/" style={{ backgroundColor: COLORS.terracotta, color: COLORS.white, fontFamily: FONTS.sans, fontSize: 14, fontWeight: 600, padding: '16px 32px', borderRadius: 9999, textDecoration: 'none', display: 'inline-block' }}>Back to Home</Link>
      </div>
    </main>
  );
}
