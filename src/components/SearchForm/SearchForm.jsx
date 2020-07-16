import React from "react";
import c from "./SearchForm.module.scss";
import Input from "../common/Input/Input";
import {Field, reduxForm} from "redux-form";
import SearchButton from "../common/SearchButton/SearchButton";
import Select from "../common/Select/Select";

const SearchForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit} className={c.container}>
            <div className={c.searchWrapper}>
                <Field name="searchTerms" component={Input} placeholder={"Search..."}/>
                <SearchButton/>
            </div>
            <div className={c.selectorsWrapper}>
                <Field name="categories" component={Select} title="Categories">
                    <option value="all">all</option>
                    <option value="ART">ART</option>
                    <option value="BIOGRAPHY">BIOGRAPHY</option>
                    <option value="BUSINESS">BUSINESS</option>
                    <option value="COMICS">COMICS</option>
                    <option value="COMPUTERS">COMPUTERS</option>
                    <option value="COOKING">COOKING</option>
                    <option value="FICTION">FICTION</option>
                    <option value="GARDENING">GARDENING</option>
                    <option value="HEALTH">HEALTH & FITNESS</option>
                    <option value="HISTORY">HISTORY</option>
                    <option value="MEDICAL">MEDICAL</option>
                    <option value="NATURE">NATURE</option>
                    <option value="POETRY">POETRY</option>
                    <option value="SCIENCE">SCIENCE</option>
                </Field>
                <Field name="pageSize" component={Select} title="Page size">
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="40">40</option>
                </Field>
                <Field name="sortingMethod" component={Select} title="Sorting by">
                    <option value="relevance">relevance</option>
                    <option value="newest">newest</option>
                </Field>
            </div>

        </form>
    );
};

export default reduxForm({form: "searchForm"})(SearchForm);
