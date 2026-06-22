import { COLORS, FONTS } from '@/lib/constants';

const stats = [
  { value: '500+', label: 'Projects Completed' },
  { value: '19',   label: 'Years in Business' },
  { value: '9',    label: 'Cities Served' },
  { value: '4.9★', label: 'Google Average' },
];

export default function StatsBanner() {
  return (
    <div style={{ backgroundColor: COLORS.espresso, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      {stats.map((stat, i) => (
        <div key={stat.label} style={{ padding: '56px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
          <span style={{ fontFamily: FONTS.serif, fontSize: 'clamp(40px, 4vw, 64px)', color: COLORS.white, lineHeight: 1 }}>
            {stat.value}
          </span>
          <span style={{ fontFamily: FONTS.sans, fontSize: 11, color: COLORS.sage, textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 12 }}>
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}
