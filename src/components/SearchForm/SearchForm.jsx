import React from "react";
import c from "./SearchForm.module.scss";
import Input from "../common/Input/Input";
import {Field, reduxForm} from "redux-form";
import SearchButton from "../common/SearchButton/SearchButton";


const SearchForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit} className={c.container}>
            <div className={c.searchWrapper}>
                <Field name="search" component={Input} placeholder={"Search for books..."}/>
                <SearchButton/>
            </div>
        </form>
    );
};

export default reduxForm({form: "search"})(SearchForm);
