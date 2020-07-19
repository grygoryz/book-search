import React, {useState} from "react";
import c from "./BookPicture.module.scss";
import coverFallback from "../../../assets/book-cover-fallback-big.png";

const BookPicture = ({imageLink}) => {
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    const placeholder = <svg width="300" height="420" viewBox="0 0 300 420">
        <rect width="300" height="420" rx="10" ry="10" fill="#CCC"/>
    </svg>;

    return (
        <div className={c.container}>
            <div>
                {!isImageLoaded ? placeholder : null}
                <img style={!isImageLoaded ? {visibility: "hidden"} : {}}
                     src={imageLink ? imageLink : coverFallback}
                     onLoad={() => setIsImageLoaded(true)} alt=""/>
            </div>
        </div>
    );
};

export default BookPicture
