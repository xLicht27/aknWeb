import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useReveal = () => {
    const location = useLocation();

    useEffect(() => {
        const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-stagger');

        const obs = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    e.target.classList.add('visible');
                    obs.unobserve(e.target);
                }
            });
        }, { threshold: 0.12 });

        revealEls.forEach(el => obs.observe(el));

        return () => obs.disconnect();
    }, [location]);
};
