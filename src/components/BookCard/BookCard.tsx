import React from "react";
import c from "./BookCard.module.scss";
import coverFallback from "../../assets/pictures/book-cover-fallback.png"
import {NavLink} from "react-router-dom";
import CommaSeparatedList from "../common/CommaSeparatedList/CommaSeparatedList";

type Props = {
    title: string
    authors?: Array<string>
    categories?: Array<string>
    image?: string | null
    id: string
}

const BookCard: React.FC<Props> = ({title, authors, categories, image, id}) => {
    return (
        <div className={c.container}>
            <NavLink to={`/books/${id}`}>
            <div className={c.imageWrapper}>
                <img src={image ? image : coverFallback} alt=""/>
            </div>
            </NavLink>
            {categories && <div className={c.categories}><CommaSeparatedList list={categories}/></div>}
            <NavLink className={c.title} to={`/books/${id}`}>
                {title}
            </NavLink>
            {authors && <div className={c.authors}><CommaSeparatedList list={authors}/></div>}
        </div>
    );
};

export default BookCard;
