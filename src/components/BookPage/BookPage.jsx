import React from "react";
import {useParams, useLocation, NavLink} from "react-router-dom"
import c from "./BookPage.module.scss";
import Tabs from "../common/Tabs/Tabs";
import ButtonLink from "../common/ButtonLink/ButtonLink";
import coverFallback from "../../assets/book-cover-fallback-big.png";

const BookPage = ({book}) => {
    if (!book) return <div>LOADING...</div>;

    const {volumeInfo} = book;

    const separateWithCommas = (list) => {
        const lastIdx = list.length - 1;
        return list.map((item, idx) => {
            return <><span>{item}</span>{idx !== lastIdx ? `, ` : ""}</>
        } )
    };

    const formatDimensions = (data) => {
        let result = "";
        for (let [key, value] of Object.entries(data)){
            result += `${key} - ${value} / `
        }
        return result.slice(0, result.length - 3)
    };

    const description = volumeInfo.description
        ? <div dangerouslySetInnerHTML={{__html: volumeInfo.description}} className={c.description}/>
        : <div className={c.fallback}>Description of the book is not found.</div>;

    const characteristic = <div className={c.characteristic}>
        <div><span>Count of pages:</span> {volumeInfo.pageCount}</div>
        <div><span>Publisher:</span> {volumeInfo.publisher}</div>
        <div><span>Publication date:</span> {volumeInfo.publishedDate}</div>
        <div><span>Language:</span> {volumeInfo.language}</div>
        {volumeInfo.dimensions &&  <div><span>Dimensions:</span> {formatDimensions(volumeInfo.dimensions)}</div>}
    </div>;

    return (
        <div className={c.container}>
            <div className={c.header}><NavLink className={c.backButton} to="/books">Back</NavLink></div>
            <div className={c.content}>
                <div className={c.picture}>
                    <div><img src={volumeInfo.imageLinks ? volumeInfo.imageLinks.small : coverFallback} alt=""/></div>
                </div>
                <div className={c.info}>
                    <div className={c.category}>{volumeInfo.categories && separateWithCommas(volumeInfo.categories)}</div>
                    <h2 className={c.title}>{volumeInfo.title}</h2>
                    <div className={c.authors}>{volumeInfo.authors && separateWithCommas(volumeInfo.authors)}</div>
                    <Tabs items={[
                        {
                            title: "ABOUT",
                            content: description,
                            id: 0
                        },
                        {
                            title: "CHARACTERISTIC",
                            content: characteristic || <div className={c.fallback}>Characteristics of the book is not found.</div>,
                            id: 1
                        }
                    ]}/>
                    <div className={c.buttonWrapper}>
                        <ButtonLink title="Open in Google Books" link={volumeInfo.previewLink}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookPage
