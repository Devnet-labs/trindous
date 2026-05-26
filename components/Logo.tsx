export default function Logo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-label="Trinodus Technologies">
      <defs>
        <linearGradient id="tn-g1" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#0f1f36" />
          <stop offset="100%" stopColor="#2b507c" />
        </linearGradient>
        <linearGradient id="tn-g2" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#17b8c4" />
          <stop offset="100%" stopColor="#3dd0d9" />
        </linearGradient>
        <linearGradient id="tn-g3" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#1a73a8" />
          <stop offset="100%" stopColor="#3a6797" />
        </linearGradient>
      </defs>
      <g fill="none" strokeWidth="7" strokeLinecap="round">
        <path d="M50 18 C25 32, 25 60, 50 78" stroke="url(#tn-g1)" />
        <path d="M50 78 C75 60, 75 32, 50 18" stroke="url(#tn-g3)" />
        <path d="M25 60 C45 50, 65 50, 75 60" stroke="url(#tn-g2)" />
      </g>
      <g>
        <circle cx="50" cy="18" r="6" fill="#0f1f36" />
        <circle cx="25" cy="62" r="6" fill="#17b8c4" />
        <circle cx="75" cy="62" r="6" fill="#1a73a8" />
      </g>
    </svg>
  );
}
