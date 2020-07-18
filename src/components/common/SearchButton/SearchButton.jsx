import React from "react";
import c from "./SearchButton.module.scss";
import {ReactComponent as SearchButtonIcon} from "../../../assets/icons/icons8-search.svg";


const SearchButton = (props) => {

    return (
        <div className={c.container}>
            <button><SearchButtonIcon/></button>
        </div>
    );
};

export default SearchButton;
