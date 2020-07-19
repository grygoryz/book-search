import {useEffect, useState} from "react";

const getWidth = () => window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

const useWindowWidth = () => {
    const [width, setWidth] = useState(getWidth());

    useEffect(() => {
        let timeoutId = null;

        const resizeListener = () => {
            clearTimeout(timeoutId);
            setTimeout(() => setWidth(getWidth()), 100)
        };

        window.addEventListener('resize', resizeListener);

        return () => {
            window.removeEventListener('resize', resizeListener);
        }
    }, []);

    return width;
};

export default useWindowWidth;