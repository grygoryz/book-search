import {useEffect, useRef} from "react";

const useScrollToRefOnMount = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        sectionRef.current && window.scrollTo(0, sectionRef.current.offsetTop)
    }, []);

    return sectionRef;
};

export default useScrollToRefOnMount;