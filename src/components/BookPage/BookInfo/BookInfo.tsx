import React from "react";
import c from "./BookInfo.module.scss"
import Tabs from "../../common/Tabs/Tabs";
import ButtonLink from "../../common/ButtonLink/ButtonLink";
import {formatDimensions} from "../../../utils/formatters";
import {VolumeInfo} from "../../../types/types";
import CommaSeparatedList from "../../common/CommaSeparatedList/CommaSeparatedList";

type Props = {
    volumeInfo: VolumeInfo
}

const BookInfo: React.FC<Props> = ({volumeInfo}) => {

    const description = volumeInfo.description
        ? <div dangerouslySetInnerHTML={{__html: volumeInfo.description}} className={c.description}/>
        : <div className={c.fallback}>Description of the book is not found.</div>;

    const characteristic = <div className={c.characteristic}>
        <div><span>Count of pages:</span> {volumeInfo.pageCount}</div>
        <div><span>Publisher:</span> {volumeInfo.publisher}</div>
        <div><span>Publication date:</span> {volumeInfo.publishedDate}</div>
        <div><span>Language:</span> {volumeInfo.language}</div>
        {volumeInfo.dimensions && <div><span>Dimensions:</span> {formatDimensions(volumeInfo.dimensions)}</div>}
    </div>;

    return (
        <div className={c.container}>
            <div className={c.category}>
                {volumeInfo.categories && <CommaSeparatedList list={volumeInfo.categories}/>}
            </div>
            <h2 className={c.title}>{volumeInfo.title}</h2>
            <div className={c.authors}>
                {volumeInfo.authors && <CommaSeparatedList list={volumeInfo.authors}/>}
            </div>
            <Tabs items={[{title: "ABOUT", content: description}, {title: "CHARACTERISTIC", content: characteristic}]}/>
            <div className={c.buttonWrapper}>
                <ButtonLink title="Open in Google Books" link={volumeInfo.previewLink}/>
            </div>
        </div>
    );
};


export default BookInfo
