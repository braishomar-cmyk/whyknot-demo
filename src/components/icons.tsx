type IconProps = {
  className?: string;
};

export function SearchIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.8-3.8" />
    </svg>
  );
}

export function StarIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2l2.9 6.2 6.6.8-4.9 4.6 1.3 6.6L12 17l-5.9 3.2 1.3-6.6L2.5 9l6.6-.8L12 2z" />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M4 12h16m0 0-6-6m6 6-6 6" />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function LeafIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path d="M5 19C5 9 11 4 20 4c0 9-5 15-15 15z" />
      <path d="M5 19c3-5 7-9 11-11" />
    </svg>
  );
}

export function TruckIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path d="M3 7h11v10H3zM14 10h4l3 3v4h-7z" />
      <circle cx="7.5" cy="18.5" r="1.8" />
      <circle cx="17.5" cy="18.5" r="1.8" />
    </svg>
  );
}

export function GlobeIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M3.5 12h17M12 3.5c2.5 2.3 3.8 5.2 3.8 8.5s-1.3 6.2-3.8 8.5c-2.5-2.3-3.8-5.2-3.8-8.5S9.5 5.8 12 3.5z" />
    </svg>
  );
}

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm5.7 14.1c-.2.7-1.3 1.3-1.9 1.4-.5.1-1.1.1-1.8-.1-.4-.1-1-.3-1.7-.6-2.9-1.3-4.8-4.2-4.9-4.4-.1-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4c.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .7.5.2.6.8 2 .9 2.1.1.1.1.3 0 .5s-.2.3-.3.5c-.2.2-.4.4-.5.5-.2.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1.1 2.2 1.4 2.5 1.5.3.1.5.1.7-.1.2-.2.8-.9 1-1.2.2-.3.4-.3.7-.2.3.1 1.7.8 2 1 .3.2.5.2.6.4.1.2.1.7-.1 1.3Z" />
    </svg>
  );
}

type BottleLabel = {
  title: string;
  subtitle: string;
};

type PumpBottleProps = {
  width: number;
  height: number;
  capColor: string;
  neckColor: string;
  bodyColor: string;
  bodyOpacity?: number;
  label: BottleLabel;
  labelBg?: string;
};

/* Tall pump bottle used for oils, musks and the trio bundle */
export function PumpBottle({
  width,
  height,
  capColor,
  neckColor,
  bodyColor,
  bodyOpacity = 1,
  label,
  labelBg = "#faf6ef",
}: PumpBottleProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 70 150" aria-hidden>
      <rect x="27" y="8" width="16" height="18" rx="3" fill={capColor} />
      <rect x="24" y="24" width="22" height="8" rx="2" fill={neckColor} />
      <path
        d="M20 34 h30 q8 10 8 28 v66 a12 12 0 0 1 -12 12 h-22 a12 12 0 0 1 -12 -12 v-66 q0 -18 8 -28z"
        fill={bodyColor}
        opacity={bodyOpacity}
      />
      <rect x="18" y="72" width="34" height="40" rx="4" fill={labelBg} />
      <text
        x="35"
        y="89"
        textAnchor="middle"
        fontFamily="var(--font-cormorant), serif"
        fontSize="9"
        fill="#36452b"
        fontWeight="700"
      >
        {label.title}
      </text>
      <text
        x="35"
        y="101"
        textAnchor="middle"
        fontFamily="var(--font-jost), sans-serif"
        fontSize="6"
        fill="#6b6b5a"
      >
        {label.subtitle}
      </text>
    </svg>
  );
}

type MuskBottleProps = {
  width: number;
  height: number;
  label: BottleLabel;
};

/* Wider green apothecary bottle used for Musk El Tahara */
export function MuskBottle({ width, height, label }: MuskBottleProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 84 170" aria-hidden>
      <rect x="34" y="6" width="16" height="20" rx="3" fill="#3c4a30" />
      <rect x="30" y="24" width="24" height="9" rx="2" fill="#4a5d3a" />
      <path
        d="M24 36 h36 q10 12 10 32 v72 a14 14 0 0 1 -14 14 h-28 a14 14 0 0 1 -14 -14 v-72 q0 -20 10 -32z"
        fill="#5c7247"
        opacity={0.92}
      />
      <rect x="22" y="82" width="40" height="46" rx="4" fill="#faf6ef" />
      <text
        x="42"
        y="101"
        textAnchor="middle"
        fontFamily="var(--font-cormorant), serif"
        fontSize="10"
        fill="#36452b"
        fontWeight="700"
      >
        {label.title}
      </text>
      <text
        x="42"
        y="113"
        textAnchor="middle"
        fontFamily="var(--font-jost), sans-serif"
        fontSize="6.5"
        fill="#6b6b5a"
      >
        {label.subtitle}
      </text>
    </svg>
  );
}

type JarProps = {
  width: number;
  height: number;
  lidColor: string;
  bodyColor: string;
  label: BottleLabel;
};

/* Open jar used for shea butter and coconut oil */
export function Jar({ width, height, lidColor, bodyColor, label }: JarProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 70 140" aria-hidden>
      <ellipse cx="35" cy="26" rx="20" ry="9" fill={lidColor} />
      <path d="M13 26 h44 v78 a22 22 0 0 1 -22 22 a22 22 0 0 1 -22 -22z" fill={bodyColor} />
      <rect x="17" y="58" width="36" height="38" rx="4" fill="#faf6ef" />
      <text
        x="35"
        y="74"
        textAnchor="middle"
        fontFamily="var(--font-cormorant), serif"
        fontSize="8.5"
        fill="#36452b"
        fontWeight="700"
      >
        {label.title}
      </text>
      <text
        x="35"
        y="86"
        textAnchor="middle"
        fontFamily="var(--font-jost), sans-serif"
        fontSize="6"
        fill="#6b6b5a"
      >
        {label.subtitle}
      </text>
    </svg>
  );
}
