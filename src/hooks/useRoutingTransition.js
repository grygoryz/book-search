import {useLocation} from "react-router-dom";
import {useTransition} from "react-spring";

const useRoutingTransition = () => {
    const location = useLocation();

    return useTransition(location, location => location.pathname, {
        from: {opacity: 0},
        enter: {opacity: 1},
        leave: {opacity: 0},
    });
};

export default useRoutingTransition;