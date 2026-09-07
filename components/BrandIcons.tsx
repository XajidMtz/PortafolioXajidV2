export function Github({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path
        d="M9 19c-4.3 1.3-4.3-2.5-6-3m12 6v-3.9a3.4 3.4 0 0 0-.9-2.7c3-.3 6.2-1.5 6.2-7a5.4 5.4 0 0 0-1.5-3.7 5 5 0 0 0-.1-3.7s-1.1-.3-3.7 1.4a13 13 0 0 0-6.8 0C5.6.7 4.5 1 4.5 1a5 5 0 0 0-.1 3.7A5.4 5.4 0 0 0 2.9 8.4c0 5.5 3.2 6.7 6.2 7a3.4 3.4 0 0 0-.9 2.7V22"
        transform="translate(1 0) scale(.95)"
      />
    </svg>
  );
}
export function Linkedin({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="9" width="4" height="12" />
      <circle cx="5" cy="4" r="2" />
      <path d="M11 21V9h4v2a4 4 0 0 1 7 3v7h-4v-7a1.5 1.5 0 0 0-3 0v7z" />
    </svg>
  );
}
