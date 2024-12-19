import { useEffect, useState } from 'react';

const MOBILE_MAX = 768;

function useMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateWidth = () => setIsMobile(window.innerWidth <= MOBILE_MAX);

    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return [isMobile] as const;
}

export default useMobile;
