'use client';
import { useState, useRef } from 'react';
import { COLORS, FONTS, CONTACT } from '@/lib/constants';
import type { FAQ } from '@/lib/types';
import { FAQItem } from './FAQAccordion';

const CATEGORY_ORDER = ['General', 'Process', 'Pricing', 'Quality', 'Areas'] as const;

interface FAQBodyProps {
  faqs: FAQ[];
}

export default function FAQBody({ faqs }: FAQBodyProps) {
  const [activeCategory, setActiveCategory] = useState<string>('General');
  const [search, setSearch] = useState('');
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const scrollToCategory = (cat: string) => {
    setActiveCategory(cat);
    setSearch('');
    const el = sectionRefs.current[cat];
    if (el) {
      const offset = 140;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const categoriesWithFAQs = CATEGORY_ORDER.filter((cat) => faqs.some((f) => f.category === cat));

  const normalizedSearch = search.trim().toLowerCase();
  const filteredFaqs = normalizedSearch
    ? faqs.filter(f => f.question.toLowerCase().includes(normalizedSearch) || f.answer.toLowerCase().includes(normalizedSearch))
    : null;

  return (
    <section style={{ backgroundColor: COLORS.plaster, padding: '80px 80px 48px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 64, alignItems: 'start' }}>

        {/* LEFT — sticky category sidebar */}
        <div style={{ position: 'sticky', top: 100 }}>
          {/* Search */}
          <div style={{ marginBottom: 20, position: 'relative' }}>
            <input
              type="text"
              placeholder="Search questions…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{
                width: '100%',
                boxSizing: 'border-box',
                fontFamily: FONTS.sans,
                fontSize: 13,
                color: COLORS.espresso,
                background: 'transparent',
                border: 'none',
                borderBottom: `1.5px solid ${search ? COLORS.terracotta : 'rgba(43,33,24,0.2)'}`,
                padding: '8px 24px 8px 0',
                outline: 'none',
                transition: 'border-color 0.2s',
              }}
            />
            {search ? (
              <button
                onClick={() => setSearch('')}
                aria-label="Clear search"
                style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: COLORS.sage, fontSize: 16, lineHeight: 1 }}
              >
                ×
              </button>
            ) : (
              <svg style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)' }} width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="6" cy="6" r="4.5" stroke={COLORS.sage} strokeWidth="1.5"/>
                <line x1="9.5" y1="9.5" x2="13" y2="13" stroke={COLORS.sage} strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            )}
          </div>

          <p style={{ fontFamily: FONTS.sans, fontSize: 10, color: COLORS.sage, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: 12 }}>
            Categories
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {categoriesWithFAQs.map((cat) => {
              const active = activeCategory === cat && !search;
              const count = faqs.filter(f => f.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => scrollToCategory(cat)}
                  style={{
                    textAlign: 'left',
                    fontFamily: FONTS.sans,
                    fontSize: 14,
                    fontWeight: active ? 700 : 400,
                    color: active ? COLORS.terracotta : COLORS.espresso,
                    backgroundColor: active ? 'rgba(181,85,45,0.08)' : 'transparent',
                    border: 'none',
                    borderLeft: `3px solid ${active ? COLORS.terracotta : 'transparent'}`,
                    padding: '10px 16px',
                    borderRadius: '0 8px 8px 0',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 8,
                  }}
                >
                  <span>{cat}</span>
                  <span style={{ fontFamily: FONTS.sans, fontSize: 11, color: active ? COLORS.terracotta : COLORS.sage, fontWeight: 400 }}>({count})</span>
                </button>
              );
            })}
          </div>

          {/* Contact prompt */}
          <div
            style={{
              marginTop: 48,
              backgroundColor: COLORS.espresso,
              borderRadius: 16,
              padding: '24px 20px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, backgroundColor: COLORS.terracotta }} />
            <p style={{ fontFamily: FONTS.serif, fontSize: 16, color: COLORS.white, marginBottom: 8, lineHeight: 1.3 }}>
              Still have questions?
            </p>
            <p style={{ fontFamily: FONTS.sans, fontSize: 12, color: COLORS.sage, lineHeight: 1.6, marginBottom: 16 }}>
              We&apos;re here to help. Give us a call or shoot us a message.
            </p>
            <a
              href={CONTACT.phoneHref}
              style={{
                display: 'block',
                backgroundColor: COLORS.terracotta,
                color: COLORS.white,
                fontFamily: FONTS.sans,
                fontSize: 12,
                fontWeight: 600,
                padding: '10px 0',
                borderRadius: 9999,
                textDecoration: 'none',
                textAlign: 'center',
              }}
            >
              {CONTACT.phone}
            </a>
          </div>
        </div>

        {/* RIGHT — FAQ accordion */}
        <div>
          {/* Search results mode */}
          {filteredFaqs !== null ? (
            <div>
              <p style={{ fontFamily: FONTS.sans, fontSize: 12, color: COLORS.sage, marginBottom: 24 }}>
                {filteredFaqs.length} result{filteredFaqs.length !== 1 ? 's' : ''} for &ldquo;{search}&rdquo;
              </p>
              {filteredFaqs.length === 0 ? (
                <div style={{ padding: '48px 0', textAlign: 'center' }}>
                  <p style={{ fontFamily: FONTS.serif, fontSize: 20, color: COLORS.espresso, marginBottom: 8 }}>No questions matched.</p>
                  <p style={{ fontFamily: FONTS.sans, fontSize: 14, color: COLORS.sage }}>Try a different keyword or call us directly.</p>
                </div>
              ) : (
                filteredFaqs.map(faq => <FAQItem key={faq.id} faq={faq} />)
              )}
            </div>
          ) : (
            /* Category mode */
            categoriesWithFAQs.map((cat) => (
              <div
                key={cat}
                ref={(el) => { sectionRefs.current[cat] = el; }}
                style={{ marginBottom: 56 }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
                  <p
                    style={{
                      fontFamily: FONTS.sans,
                      fontSize: 11,
                      color: COLORS.terracotta,
                      textTransform: 'uppercase',
                      letterSpacing: '0.18em',
                      margin: 0,
                      fontWeight: 700,
                    }}
                  >
                    {cat}
                  </p>
                  <div style={{ flex: 1, height: 1, backgroundColor: 'rgba(43,33,24,0.1)' }} />
                </div>
                {faqs
                  .filter((f) => f.category === cat)
                  .map((faq) => (
                    <FAQItem key={faq.id} faq={faq} />
                  ))}
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
