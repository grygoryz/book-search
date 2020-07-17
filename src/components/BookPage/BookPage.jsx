import React from "react";
import {useParams, useLocation, NavLink} from "react-router-dom"
import c from "./BookPage.module.scss";
import Tabs from "../common/Tabs/Tabs";

const BookPage = ({book}) => {
    if (!book) return <div>LOADING...</div>;

    const separateWithCommas = (list) => {
        const lastIdx = list.length - 1;
        return list.map((item, idx) => {
            return <><span>{item}</span>{idx !== lastIdx ? `, ` : ""}</>
        } )
    };

    return (
        <div className={c.container}>
            <div className={c.header}><NavLink className={c.backButton} to="/books">Back</NavLink></div>
            <div className={c.content}>
                <div className={c.pictureWrapper}>
                    <img src={book.volumeInfo.imageLinks.small} alt=""/>
                </div>
                <div className={c.info}>
                    <div className={c.category}>{separateWithCommas(book.volumeInfo.categories)}</div>
                    <h2 className={c.title}>{book.volumeInfo.title}</h2>
                    <div className={c.authors}>{separateWithCommas(book.volumeInfo.authors)}</div>
                    <Tabs items={[
                        {title: "ABOUT", content: "Description. About this book"},
                        {title: "CHARACTERISTICS", content: "This is characteristics"}
                    ]}/>
                </div>
            </div>

        </div>
    );
};

export default BookPage
