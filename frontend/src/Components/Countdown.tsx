import { useState, useEffect } from 'react';

const MACHACKS_DATE = new Date('2026-03-21T09:00:00');

function pad(n: number) {
  return n < 10 ? `0${n}` : String(n);
}

function calculateDiff() {
  const now = new Date();
  const d = Math.max(0, MACHACKS_DATE.getTime() - now.getTime());
  return {
    days: Math.floor(d / (1000 * 60 * 60 * 24)),
    hours: Math.floor((d % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((d % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((d % (1000 * 60)) / 1000),
  };
}

interface CountdownProps {
  variant?: 'light' | 'dark';
}

export default function Countdown({ variant = 'light' }: CountdownProps) {
  const [diff, setDiff] = useState(calculateDiff);

  useEffect(() => {
    const tick = () => {
      setDiff(calculateDiff());
    };
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const isDark = variant === 'dark';

  return (
    <div className="flex gap-2 sm:gap-6 justify-center">
      {[
        [diff.days, 'Days'],
        [diff.hours, 'Hours'],
        [diff.minutes, 'Mins'],
        [diff.seconds, 'Secs'],
      ].map(([value, label]) => (
        <div
          key={label}
          className={`${
            isDark
              ? 'bg-[#3DDFF5]/10 border-[#3DDFF5]/25'
              : 'bg-[#1800AD]/10 border-[#1800AD]/5'
          } rounded-xl px-2 sm:px-4 py-3 min-w-[60px] sm:min-w-[70px] text-center border shadow-sm`}
        >
          <div className={`text-2xl sm:text-4xl font-heading font-bold tabular-nums ${
            isDark ? 'text-[#3DDFF5] drop-shadow-[0_0_8px_rgba(61,223,245,0.6)]' : 'text-[#1800AD]'
          }`}>
            {pad(Number(value))}
          </div>
          <div className={`text-xs sm:text-sm uppercase tracking-wider font-semibold ${
            isDark ? 'text-[#1CB1E3]/80' : 'text-[#4A5568]'
          }`}>{label}</div>
        </div>
      ))}
    </div>
  );
}
