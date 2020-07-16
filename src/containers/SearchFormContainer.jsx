import {connect} from "react-redux";
import SearchForm from "../components/SearchForm/SearchForm";
import {requestBooks} from "../actions/booksActions";
import React from "react";


const SearchFormContainer = ({requestBooks}) => {

    const onSubmit = (formData) => {
        if (formData.searchTerms){
            requestBooks(formData);
        }
    };

    return <SearchForm onSubmit={onSubmit}/>
};

const dispatchProps = {requestBooks};

export default connect(null, dispatchProps)(SearchFormContainer)