import React from "react";
import c from "./SearchButton.module.scss";
import {ReactComponent as SearchButtonIcon} from "../../../assets/icons/search-icon.svg";

const SearchButton = () => {
    return <div className={c.container}>
        <button><SearchButtonIcon/></button>
    </div>;
};

export default SearchButton;
