export function Logo() {
  return (
    <svg
      viewBox="0 0 120 120"
      className="w-10 h-10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Modern geometric design */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4F46E5" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
      </defs>

      {/* Outer hexagon */}
      <path
        d="M 60 10 L 100 35 L 100 85 L 60 110 L 20 85 L 20 35 Z"
        stroke="url(#logoGradient)"
        strokeWidth="2"
        fill="none"
      />

      {/* Inner geometric shapes - represents interconnected systems */}
      <circle cx="60" cy="60" r="15" fill="url(#logoGradient)" opacity="0.8" />

      {/* Three connecting nodes */}
      <circle cx="40" cy="45" r="6" fill="url(#logoGradient)" opacity="0.6" />
      <circle cx="80" cy="45" r="6" fill="url(#logoGradient)" opacity="0.6" />
      <circle cx="60" cy="85" r="6" fill="url(#logoGradient)" opacity="0.6" />

      {/* Connecting lines */}
      <line x1="48" y1="51" x2="52" y2="56" stroke="url(#logoGradient)" strokeWidth="1.5" opacity="0.4" />
      <line x1="72" y1="51" x2="68" y2="56" stroke="url(#logoGradient)" strokeWidth="1.5" opacity="0.4" />
      <line x1="60" y1="75" x2="60" y2="70" stroke="url(#logoGradient)" strokeWidth="1.5" opacity="0.4" />
    </svg>
  );
}
