'use client';
import { useState, useEffect } from 'react';
import { COLORS } from '@/lib/constants';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      style={{
        position: 'fixed', bottom: 32, right: 32, zIndex: 99,
        width: 44, height: 44, borderRadius: '50%',
        backgroundColor: COLORS.terracotta, border: 'none', cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 4px 16px rgba(43,33,24,0.2)',
        transition: 'opacity 0.2s, transform 0.2s',
      }}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="2">
        <path d="M8 12V4M4 8l4-4 4 4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
}
