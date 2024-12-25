import { useState, useEffect, RefObject } from 'react';

const useContentScroll = (contentRef: RefObject<HTMLElement>): boolean => {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            if (contentRef.current) {
                const contentHeight = contentRef.current.scrollHeight;
                const viewportHeight = window.innerHeight - 70; // Subtract header height
                setIsScrolled(contentHeight > viewportHeight);
            }
        };

        handleResize(); // Check initially

        // Add event listener for window resize to adjust scrollability
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [contentRef]);

    return isScrolled;
};

export default useContentScroll;
