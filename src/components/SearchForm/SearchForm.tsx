import React from "react";
import c from "./SearchForm.module.scss";
import Input from "../common/Input/Input";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import SearchButton from "../common/SearchButton/SearchButton";
import Select from "../common/Select/Select";
import {SearchingOptions} from "../../types/types";

const SearchForm: React.FC<InjectedFormProps<SearchingOptions>> = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit} className={c.container}>
            <div className={c.searchWrapper}>
                <Field name="searchTerms" component={Input} placeholder={"Search..."}/>
                <SearchButton/>
            </div>
            <div className={c.selectorsWrapper}>
                <Field name="categories" component={Select} title="Categories">
                    <option value="all">all</option>
                    <option value="art">ART</option>
                    <option value="biography">BIOGRAPHY</option>
                    <option value="business">BUSINESS</option>
                    <option value="comics">COMICS</option>
                    <option value="computers">COMPUTERS</option>
                    <option value="cooking">COOKING</option>
                    <option value="fiction">FICTION</option>
                    <option value="gardening">GARDENING</option>
                    <option value="health">HEALTH & FITNESS</option>
                    <option value="history">HISTORY</option>
                    <option value="medical">MEDICAL</option>
                    <option value="nature">NATURE</option>
                    <option value="poetry">POETRY</option>
                    <option value="science">SCIENCE</option>
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

export default reduxForm<SearchingOptions>({form: "searchForm"})(SearchForm);
