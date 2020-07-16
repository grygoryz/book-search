import React from "react";
import {useParams, useLocation, NavLink} from "react-router-dom"

const BookPage = ({book}) => {
    return (
        <div>
            <h1>Header</h1>
            <NavLink to="/"><button>back</button></NavLink>
        </div>
    );
};

export default BookPage
