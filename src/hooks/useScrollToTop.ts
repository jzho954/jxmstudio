import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * A hook that scrolls the window to the top when the component mounts
 * or when the location pathname changes
 */
export const useScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // Immediate scroll to ensure the page starts at the top
    window.scrollTo(0, 0);
    
    // Add a small timeout to ensure scroll happens after any layout adjustments
    const timeoutId = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'auto'
      });
    }, 100);
    
    return () => clearTimeout(timeoutId);
  }, [pathname]);
}; 