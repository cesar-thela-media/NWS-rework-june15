'use client';
import { useState } from 'react';
import { COLORS, FONTS } from '@/lib/constants';

const SERVICES = ['Kitchen Remodeling', 'Bathroom Remodeling', 'Custom Home Build', 'Room Addition', 'Whole Home Reno', 'Other'];

const NEXT_STEPS = [
  { num: '1', label: 'We read your message', sub: 'Same business day' },
  { num: '2', label: 'We call within 24 hrs', sub: 'No automated systems' },
  { num: '3', label: 'Free home visit', sub: 'Firm quote at the visit' },
];

function Field({ type = 'text', placeholder, ...rest }: React.InputHTMLAttributes<HTMLInputElement> & { placeholder: string }) {
  const [focused, setFocused] = useState(false);
  return (
    <input
      type={type}
      placeholder={placeholder}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{
        width: '100%',
        border: 'none',
        borderBottom: `1.5px solid ${focused ? COLORS.terracotta : 'rgba(43,33,24,0.15)'}`,
        padding: '12px 0',
        fontFamily: FONTS.sans,
        fontSize: 15,
        color: COLORS.espresso,
        outline: 'none',
        background: focused ? 'rgba(181,85,45,0.03)' : 'transparent',
        transition: 'border-color 0.2s, background 0.2s',
        borderRadius: 0,
        boxSizing: 'border-box',
      }}
      {...rest}
    />
  );
}

function TextArea({ placeholder }: { placeholder: string }) {
  const [focused, setFocused] = useState(false);
  return (
    <textarea
      placeholder={placeholder}
      rows={4}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{
        width: '100%',
        border: 'none',
        borderBottom: `1.5px solid ${focused ? COLORS.terracotta : 'rgba(43,33,24,0.15)'}`,
        padding: '12px 0',
        fontFamily: FONTS.sans,
        fontSize: 15,
        color: COLORS.espresso,
        outline: 'none',
        background: focused ? 'rgba(181,85,45,0.03)' : 'transparent',
        resize: 'vertical',
        transition: 'border-color 0.2s, background 0.2s',
        boxSizing: 'border-box',
      }}
    />
  );
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  if (submitted) {
    return (
      <div style={{ padding: '48px 0', textAlign: 'center' }}>
        <div style={{ width: 56, height: 56, borderRadius: '50%', backgroundColor: 'rgba(181,85,45,0.12)', border: `2px solid ${COLORS.terracotta}`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
          <svg width="22" height="18" viewBox="0 0 22 18" fill="none"><path d="M1 9l7 7L21 1" stroke={COLORS.terracotta} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <p style={{ fontFamily: FONTS.serif, fontSize: 20, color: COLORS.espresso, margin: '0 0 8px 0' }}>Message Sent!</p>
        <p style={{ fontFamily: FONTS.sans, fontSize: 14, color: COLORS.sage }}>We&apos;ll be in touch within 1 business day.</p>
      </div>
    );
  }

  return (
    <>
      {/* Service type pills */}
      <div style={{ marginBottom: 24 }}>
        <p style={{ fontFamily: FONTS.sans, fontSize: 10, color: COLORS.sage, textTransform: 'uppercase', letterSpacing: '0.16em', marginBottom: 10 }}>What are you interested in?</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {SERVICES.map(s => (
            <button
              key={s}
              onClick={() => setSelected(selected === s ? null : s)}
              style={{
                fontFamily: FONTS.sans,
                fontSize: 12,
                padding: '6px 14px',
                borderRadius: 9999,
                border: `1.5px solid ${selected === s ? COLORS.terracotta : 'rgba(43,33,24,0.15)'}`,
                backgroundColor: selected === s ? 'rgba(181,85,45,0.08)' : 'transparent',
                color: selected === s ? COLORS.terracotta : COLORS.sage,
                cursor: 'pointer',
                fontWeight: selected === s ? 600 : 400,
                transition: 'all 0.15s',
              }}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: 20 }}>
        <Field placeholder="Your Name" type="text" />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 20 }}>
        <Field placeholder="Your Phone" type="tel" />
        <Field placeholder="Your Email" type="email" />
      </div>
      <div style={{ marginBottom: 28 }}>
        <TextArea placeholder="Tell us about your project" />
      </div>

      <button
        onClick={() => setSubmitted(true)}
        style={{ width: '100%', backgroundColor: COLORS.terracotta, color: COLORS.white, fontFamily: FONTS.sans, fontSize: 15, fontWeight: 600, padding: '18px', borderRadius: 9999, border: 'none', cursor: 'pointer' }}
      >
        Send Message →
      </button>

      {/* What happens next */}
      <div style={{ marginTop: 28, paddingTop: 24, borderTop: '1px solid rgba(43,33,24,0.08)' }}>
        <p style={{ fontFamily: FONTS.sans, fontSize: 10, color: COLORS.sage, textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: 16 }}>What happens next?</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {NEXT_STEPS.map(step => (
            <div key={step.num} style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
              <div style={{ width: 28, height: 28, borderRadius: '50%', backgroundColor: 'rgba(181,85,45,0.1)', border: `1.5px solid rgba(181,85,45,0.3)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ fontFamily: FONTS.sans, fontSize: 11, color: COLORS.terracotta, fontWeight: 700 }}>{step.num}</span>
              </div>
              <div>
                <p style={{ fontFamily: FONTS.sans, fontSize: 13, color: COLORS.espresso, fontWeight: 600, margin: '2px 0 2px 0' }}>{step.label}</p>
                <p style={{ fontFamily: FONTS.sans, fontSize: 11, color: COLORS.sage, margin: 0 }}>{step.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
