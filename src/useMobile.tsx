import { useEffect, useState } from 'react';

const useMobile = (): boolean => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 640);
        };

        // Check on initial render
        checkIsMobile();

        // Add resize event listener
        window.addEventListener('resize', checkIsMobile);

        // Clean up event listener on unmount
        return () => window.removeEventListener('resize', checkIsMobile);
    }, []);

    return isMobile;
};

export default useMobile;
