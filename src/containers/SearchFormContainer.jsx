import {connect} from "react-redux";
import SearchForm from "../components/SearchForm/SearchForm";
import {requestBooks} from "../actions/booksActions";
import {useHistory} from "react-router-dom"
import React from "react";


const SearchFormContainer = ({requestBooks}) => {
    const history = useHistory();

    const onSubmit = (formData) => {
        if (formData.searchTerms){
            requestBooks(formData);
            history.push("/books")
        }
    };

    return <SearchForm onSubmit={onSubmit}/>
};

const dispatchProps = {requestBooks};

export default connect(null, dispatchProps)(SearchFormContainer)