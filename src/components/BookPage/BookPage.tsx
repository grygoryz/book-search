import React from "react";
import {NavLink} from "react-router-dom"
import c from "./BookPage.module.scss";
import useScrollToRefOnMount from "../../hooks/useScrollToRefOnMount";
import BookPicture from "./BookPicture/BookPicture";
import BookInfo from "./BookInfo/BookInfo";
import {VolumeInfo} from "../../types/types";
// передать только нужное в book info
type Props = {
    volumeInfo: VolumeInfo
}

const BookPage: React.FC<Props> = ({volumeInfo}) => {
    const sectionRef = useScrollToRefOnMount();

    return (
        <div ref={sectionRef} className={c.container}>
            <div className={c.header}><NavLink className={c.backButton} to="/books">Back</NavLink></div>
            <div className={c.content}>
                <BookPicture imageLink={volumeInfo.imageLinks ? volumeInfo.imageLinks.small : null}/>
                <BookInfo volumeInfo={volumeInfo}/>
            </div>
        </div>
    );
};

export default BookPage
