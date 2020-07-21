import React from "react";
import c from "./Header.module.scss";
import SearchFormContainer from "../../containers/SearchFormContainer";

const Header = () => {
    return (
        <div className={c.container}>
            <h1 className={c.title}>Search for books</h1>
            <SearchFormContainer/>
        </div>
    );
};

export default Header;
