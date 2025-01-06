import { useEffect } from 'react';

export function useA11y() {
  useEffect(() => {
    // Add skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white p-4 z-50';
    skipLink.textContent = 'Skip to main content';
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Add proper ARIA labels
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.setAttribute('role', 'main');
      mainContent.setAttribute('aria-label', 'Main content');
    }
  }, []);
}