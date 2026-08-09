// Íconos en línea, sin librerías externas: menos peso, cero requests extra.
const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 1.4 };

export const ProductIcon = ({ name, className = "w-1/2 h-1/2 text-accent" }) => {
  const icons = {
    laptop: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <path d="M2 20h20" />
      </svg>
    ),
    headphones: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <rect x="1" y="16" width="6" height="7" rx="2" />
        <rect x="17" y="16" width="6" height="7" rx="2" />
      </svg>
    ),
    phone: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <rect x="6" y="2" width="12" height="20" rx="2.5" />
        <path d="M11 18h2" />
      </svg>
    ),
    mouse: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <rect x="6" y="3" width="12" height="18" rx="6" />
        <path d="M12 3v7" />
      </svg>
    ),
    monitor: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <rect x="2" y="4" width="20" height="13" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    keyboard: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M8 14h8" />
      </svg>
    ),
    speaker: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <circle cx="12" cy="14" r="4" />
        <path d="M12 6h.01" />
      </svg>
    ),
    watch: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <rect x="7" y="7" width="10" height="10" rx="2" />
        <path d="M9 7V4h6v3M9 17v3h6v-3" />
      </svg>
    ),
  };
  return <div className={className}>{icons[name] || icons.laptop}</div>;
};

export const SearchIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" {...stroke} {...props}>
    <circle cx="11" cy="11" r="7" />
    <path d="M21 21l-4.3-4.3" />
  </svg>
);

export const CartIcon = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" {...stroke} strokeWidth="1.8" {...props}>
    <circle cx="9" cy="21" r="1" />
    <circle cx="19" cy="21" r="1" />
    <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
  </svg>
);

export const WhatsappIcon = (props) => (
  <svg viewBox="0 0 24 24" width="17" height="17" fill="white" {...props}>
    <path d="M20.5 3.5A11 11 0 0 0 3 17.4L2 22l4.7-1.2A11 11 0 1 0 20.5 3.5zM12 20a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 20z" />
  </svg>
);

export const TruckIcon = (props) => (
  <svg viewBox="0 0 24 24" width="15" height="15" {...stroke} strokeWidth="2" {...props}>
    <rect x="1" y="3" width="15" height="13" />
    <path d="M16 8h4l3 3v5h-7V8z" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
);
