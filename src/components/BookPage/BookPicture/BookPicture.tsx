import React, {useState} from "react";
import c from "./BookPicture.module.scss";
import coverFallback from "../../../assets/pictures/book-cover-fallback-big.png";
import {animated, useSpring, config} from "react-spring"

//todo: откуда null взялся? (BookPage)
type Props = {
    imageLink?: string | null
}

const BookPicture: React.FC<Props> = ({imageLink}) => {
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    const [props, set] = useSpring(() => ({ transform: "scale(1)",  config: config.wobbly}));

    const placeholder = <svg width="300" height="420" viewBox="0 0 300 420">
        <rect width="300" height="420" rx="10" ry="10" fill="#CCC"/>
    </svg>;

    return (
        <div className={c.container}>
            <div className={c.mainWrapper}>
                {!isImageLoaded ? placeholder : null}
                <animated.div onMouseEnter={() => set({transform: "scale(1.1)"})}
                              onMouseLeave={() => set({transform: "scale(1)"})}
                              className={c.pictureWrapper}
                              style={props}>
                    <img style={!isImageLoaded ? {visibility: "hidden"} : {}}
                         src={imageLink ? imageLink : coverFallback}
                         onLoad={() => setIsImageLoaded(true)} alt=""/>
                </animated.div>
            </div>
        </div>
    );
};

export default BookPicture
