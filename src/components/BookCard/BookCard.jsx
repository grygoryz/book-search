import React from "react";
import c from "./BookCard.module.scss";
import coverFallback from "../../assets/book-cover-fallback.png"

const BookCard = ({title, authors, categories, image}) => {
    return (
        <div className={c.container}>
            <div className={c.imageWrapper}>
                <img src={image ? image : coverFallback} alt=""/>
            </div>
            {categories && <div className={c.categories}>{categories.map(c => <span>{c}</span>)}</div>}
            <div className={c.title}>{title}</div>
            {authors && <div>{authors.map(author => <span>{author} </span>)}</div>}
        </div>
    );
};

export default BookCard;
