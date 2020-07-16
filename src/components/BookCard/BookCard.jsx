import React from "react";
import c from "./BookCard.module.scss";
import coverFallback from "../../assets/book-cover-fallback.png"
import {NavLink} from "react-router-dom";

const BookCard = ({title, authors, categories, image, id}) => {
    return (
        <div className={c.container}>
            <NavLink to={`/books/${id}`}>
            <div className={c.imageWrapper}>
                <img src={image ? image : coverFallback} alt=""/>
            </div>
            </NavLink>
            {categories && <div className={c.categories}>{categories.map(c => <span>{c}</span>)}</div>}
            <NavLink className={c.title} to={`/books/${id}`}>
                {title}
            </NavLink>
            {authors && <div className={c.authors}>{authors.map(author => <span>{author} </span>)}</div>}
        </div>
    );
};

export default BookCard;
