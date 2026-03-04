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

export default function Countdown() {
  const [diff, setDiff] = useState(calculateDiff);

  useEffect(() => {
    const tick = () => {
      setDiff(calculateDiff());
    };
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex gap-3 sm:gap-6 justify-center flex-wrap">
      {[
        [diff.days, 'Days'],
        [diff.hours, 'Hours'],
        [diff.minutes, 'Mins'],
        [diff.seconds, 'Secs'],
      ].map(([value, label]) => (
        <div
          key={label}
          className="bg-[#1CB1E3]/20 rounded-xl px-4 py-3 min-w-[70px] text-center card-lift"
        >
          <div className="text-2xl sm:text-4xl font-heading font-bold text-[#3DDFF5] tabular-nums">
            {pad(Number(value))}
          </div>
          <div className="text-xs sm:text-sm text-[#A7C2C3] uppercase tracking-wider">{label}</div>
        </div>
      ))}
    </div>
  );
}
