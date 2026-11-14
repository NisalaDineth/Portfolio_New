const paths = {
  arrow: <><path d="M7 17 17 7M7 7h10v10" /></>,
  next: <><path d="M5 12h14m-6-6 6 6-6 6" /></>,
  previous: <><path d="M19 12H5m6-6-6 6 6 6" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m4 7 8 6 8-6" /></>,
  design: <><path d="m12 3 8 8-5 9-7-1-4-7 8-8Z" /><circle cx="12" cy="11" r="2" /><path d="m5 19 5.5-6.5M8 22l-6-6" /></>,
  photography: <><rect x="3" y="3" width="18" height="18" rx="4" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="m3 16 5-5 5 5 3-3 5 5" /></>,
  motion: <><rect x="3" y="4" width="18" height="16" rx="4" /><path d="m10 8 6 4-6 4V8Z" /></>,
  grid: <><rect x="3" y="3" width="7" height="7" rx="2" /><rect x="14" y="3" width="7" height="7" rx="2" /><rect x="3" y="14" width="7" height="7" rx="2" /><rect x="14" y="14" width="7" height="7" rx="2" /></>,
};

export default function Icon({ name, className = '' }) {
  return <svg className={`icon ${className}`} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">{paths[name] || paths.grid}</svg>;
}
