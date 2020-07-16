import React from "react";
import {useParams, useLocation, NavLink} from "react-router-dom"

const BookPage = ({book}) => {
    if (!book) return <div>LOADING...</div>
    return (
        <div>
            <NavLink to="/books">BACK</NavLink>
            <h1>{book.volumeInfo.title}</h1>
            <img src={book.volumeInfo.imageLinks.small} alt=""/>
        </div>
    );
};

export default BookPage
