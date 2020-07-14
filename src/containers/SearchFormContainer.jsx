import {connect} from "react-redux";
import SearchForm from "../components/SearchForm/SearchForm";
import {getBooksList} from "../actions/booksActions";
import React from "react";


const SearchFormContainer = ({getBooksList}) => {

    const onSubmit = (formData) => {
        getBooksList(formData["search"]);
    };

    return <SearchForm onSubmit={onSubmit}/>
};

const dispatchProps = {getBooksList};

export default connect(null, dispatchProps)(SearchFormContainer)