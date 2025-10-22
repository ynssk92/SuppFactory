
import React from 'react';

const GooglePlusIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className || "h-6 w-6"}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M21 8.29h-2.2v-2.2h-1.6v2.2h-2.2v1.6h2.2v2.2h1.6v-2.2h2.2v-1.6zm-7.6 1.81c0-2.6-1.7-4.6-4.4-4.6s-4.4 2-4.4 4.6 1.7 4.6 4.4 4.6c1.1 0 2.1-.4 2.9-1l-1.3-1.3c-.4.4-.9.6-1.6.6-1.6 0-2.8-1.2-2.8-2.9s1.2-2.9 2.8-2.9c1.7 0 2.4 1.2 2.5 1.8h-2.5v1.7h4.3c0-.2.1-1.3.1-1.3zm-10.4-3.5v10.8h7.2c-1.3-1.6-2-3.6-2-5.8 0-.3 0-.6.1-.8h-5.3z" />
  </svg>
);

export default GooglePlusIcon;
