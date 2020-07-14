import React from "react";
import c from "./BookCard.module.scss";

const BookCard = ({title, authors, categories, image}) => {
    return (
        <div className={c.container}>
            <div>{title}</div>
            {authors && <div>{authors.map(author => <b>{author}</b>)}</div>}
            <img src={image} alt=""/>
        </div>
    );
};

export default BookCard;
